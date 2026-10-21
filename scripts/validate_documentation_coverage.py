# -*- coding: utf-8 -*-
"""Compare the source inventory with generated documentation.

Python 3.1 compatible. Exit 0 only when no validation failures remain.
Unresolved dependencies that are listed in missing-dependencies.csv are
reported and do not, by themselves, fail the run.
"""

import csv
import io
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SKIP_DIRS = set([".git", "node_modules"])
REQUIRED = [
    "Identity",
    "Purpose",
    "Entry and calls",
    "Files and interfaces",
    "Processing logic",
    "Business rules and branches",
    "Validations and calculations",
    "Data operations",
    "Error handling",
    "Dependencies",
    "Side effects",
    "Build assumptions",
    "Traceability",
    "Evidence status",
]
TRACKER_STATUS = set([
    "Not Started",
    "In Progress",
    "Completed",
    "Partially Completed",
    "Blocked",
    "Not Applicable",
])
FAILURES = []
NOTES = []


def add_failure(check, detail):
    FAILURES.append({"check": check, "detail": detail})


def add_note(check, detail):
    NOTES.append({"check": check, "detail": detail})


def rel(path):
    text = os.path.relpath(path, ROOT)
    return text.replace("\\", "/")


def read_text(path):
    try:
        handle = io.open(path, "r", encoding="utf-8")
    except IOError as exc:
        add_failure("read", path + ": " + str(exc))
        return ""
    try:
        return handle.read()
    except Exception as exc:
        add_failure("parse", path + ": " + str(exc))
        return ""
    finally:
        handle.close()


def read_csv(path):
    rows = []
    if not os.path.isfile(path):
        add_failure("missing-file", rel(path))
        return rows
    try:
        handle = io.open(path, "r", encoding="utf-8")
    except IOError as exc:
        add_failure("read", rel(path) + ": " + str(exc))
        return rows
    try:
        reader = csv.DictReader(handle)
        for row in reader:
            rows.append(row)
    except Exception as exc:
        add_failure("parse", rel(path) + ": " + str(exc))
    finally:
        handle.close()
    return rows


def walk_files():
    found = []
    for dirpath, dirnames, filenames in os.walk(ROOT):
        kept = []
        for name in dirnames:
            if name not in SKIP_DIRS:
                kept.append(name)
        dirnames[:] = kept
        for name in filenames:
            found.append(rel(os.path.join(dirpath, name)))
    return found


def walk_md():
    found = []
    docs = os.path.join(ROOT, "docs")
    if not os.path.isdir(docs):
        add_failure("missing-dir", "docs")
        return found
    for dirpath, dirnames, filenames in os.walk(docs):
        for name in filenames:
            if name.lower().endswith(".md"):
                found.append(os.path.join(dirpath, name))
    return found


def main():
    inventory_path = os.path.join(ROOT, "docs", "inventory", "source-file-inventory.csv")
    tracker_path = os.path.join(ROOT, "docs", "tracking", "documentation-execution-tracker.csv")
    missing_path = os.path.join(ROOT, "docs", "dependencies", "missing-dependencies.csv")
    inventory = read_csv(inventory_path)
    tracker = read_csv(tracker_path)
    missing = read_csv(missing_path)

    inventoried = {}
    for row in inventory:
        inventoried[row.get("relative_path", "")] = row

    on_disk = walk_files()
    disk_set = set(on_disk)
    for path in on_disk:
        if path not in inventoried:
            add_failure("no-disposition", path)
    if ".git" not in inventoried:
        add_failure("no-disposition", ".git")

    specs = 0
    for row in inventory:
        requirement = row.get("documentation_requirement", "")
        doc = row.get("generated_documentation_path", "")
        source = row.get("relative_path", "")
        if requirement == "program-spec":
            specs += 1
            target = os.path.join(ROOT, doc.replace("/", os.sep))
            if not doc or not os.path.isfile(target):
                add_failure("missing-spec", source + " -> " + doc)
                continue
            text = read_text(target)
            if len(text.strip()) < 80:
                add_failure("empty-doc", doc)
            for heading in REQUIRED:
                if "## " + heading not in text:
                    add_failure("missing-section", doc + " missing " + heading)
        elif doc and requirement != "not-applicable":
            target = doc.split("#")[0]
            if target and not os.path.isfile(os.path.join(ROOT, target.replace("/", os.sep))):
                add_failure("missing-doc", source + " -> " + target)

    link_re = re.compile(r"\[[^\]]+\]\(([^)]+)\)")
    for md in walk_md():
        text = read_text(md)
        if len(text.strip()) < 20:
            add_failure("empty-doc", rel(md))
        for match in link_re.finditer(text):
            target = match.group(1).strip()
            if re.match(r"(?i)^(https?:|mailto:)", target):
                continue
            path_only = target.split("#")[0].strip()
            if not path_only:
                continue
            resolved = os.path.normpath(os.path.join(os.path.dirname(md), path_only))
            if not os.path.isfile(resolved):
                add_failure("broken-link", rel(md) + " -> " + target)

    ref_re = re.compile(r"`([^`]+?\.(?:rpgle|sqlrpgle|rpg|clle|clp|pf|lf|dspf|prtf|cblle|cbl|sqlcblle|c|cpp|sqlcpp|sqlc|bnd|bnddir|menusrc|sqlprc|sqludf|cmd|ilepgm))(?::(\d+))?`", re.I)
    for md in walk_md():
        text = read_text(md)
        for match in ref_re.finditer(text):
            source = match.group(1).replace("\\", "/")
            line_no = match.group(2)
            if source.startswith("docs/"):
                continue
            candidates = []
            if "/" in source:
                full = os.path.join(ROOT, source.replace("/", os.sep))
                if os.path.isfile(full):
                    candidates.append(full)
            else:
                base = os.path.basename(source).lower()
                for path in disk_set:
                    if os.path.basename(path).lower() == base:
                        candidates.append(os.path.join(ROOT, path.replace("/", os.sep)))
            if not candidates:
                add_failure("bad-source-path", rel(md) + " cites " + source)
                continue
            if line_no:
                count = len(read_text(candidates[0]).splitlines())
                if int(line_no) > count:
                    add_failure("bad-line", source + ":" + line_no + " in " + rel(md))

    tracked = {}
    for row in tracker:
        path = row.get("path", "")
        tracked[path] = row
        status = row.get("status", "")
        if status not in TRACKER_STATUS:
            add_failure("tracker-status", path + " status " + status)
        if not row.get("documentation_path") or not row.get("traceability_status") or not row.get("dependency_status") or not row.get("validation_status"):
            add_failure("tracker-incomplete", path)
        doc = (row.get("documentation_path") or "").split("#")[0]
        if doc and not os.path.isfile(os.path.join(ROOT, doc.replace("/", os.sep))):
            add_failure("tracker-doc-missing", path + " -> " + doc)
        if path != ".git" and path not in disk_set and path not in inventoried:
            add_failure("tracker-unknown", path)
    for path in inventoried:
        if path not in tracked:
            add_failure("tracker-missing", path)

    for row in missing:
        add_note("unresolved-dependency", (row.get("name") or "") + " from " + (row.get("referring_file") or "") + " (" + (row.get("status") or "") + ")")

    counts = {
        "inventoried": len(inventory),
        "on_disk_excluding_git_objects": len(on_disk),
        "program_specs_required": specs,
        "tracker_rows": len(tracker),
        "unresolved_dependency_rows": len(missing),
    }
    by_status = {}
    for row in tracker:
        key = row.get("status", "")
        by_status[key] = by_status.get(key, 0) + 1

    report = []
    report.append("# Coverage validation report")
    report.append("")
    report.append("Command: `python scripts/validate_documentation_coverage.py`")
    report.append("")
    report.append("Counting method for on-disk files: `os.walk` from the repository root, skipping `.git` and `node_modules`.")
    report.append("")
    report.append("## Counts")
    report.append("")
    report.append("| Item | Count |")
    report.append("| --- | --- |")
    for key in sorted(counts.keys()):
        report.append("| " + key + " | " + str(counts[key]) + " |")
    report.append("")
    report.append("## Tracker status")
    report.append("")
    report.append("| Status | Files |")
    report.append("| --- | --- |")
    for key in sorted(by_status.keys()):
        report.append("| " + key + " | " + str(by_status[key]) + " |")
    report.append("")
    report.append("## Failures")
    report.append("")
    if not FAILURES:
        report.append("No validation failures.")
    else:
        report.append("| Check | Detail |")
        report.append("| --- | --- |")
        for item in FAILURES:
            detail = item["detail"].replace("|", "\\|")
            report.append("| " + item["check"] + " | " + detail + " |")
    report.append("")
    report.append("## Unresolved dependencies")
    report.append("")
    report.append(str(len(missing)) + " rows are listed in `docs/dependencies/missing-dependencies.csv`. They are recorded gaps, not silent omissions.")
    report.append("")
    if FAILURES:
        report.append("Overall result: **failed** (" + str(len(FAILURES)) + " failures).")
    else:
        report.append("Overall result: **passed**, with unresolved dependencies still listed.")
    report.append("")

    out_dir = os.path.join(ROOT, "docs", "audit")
    if not os.path.isdir(out_dir):
        os.makedirs(out_dir)
    report_path = os.path.join(out_dir, "coverage-validation-report.md")
    handle = io.open(report_path, "w", encoding="utf-8")
    handle.write("\n".join(report))
    handle.close()

    csv_path = os.path.join(out_dir, "coverage-validation-results.csv")
    handle = io.open(csv_path, "w", encoding="utf-8")
    handle.write("kind,check,detail\n")
    for item in FAILURES:
        handle.write("failure," + item["check"] + ",\"" + item["detail"].replace("\"", "\"\"") + "\"\n")
    for item in NOTES:
        handle.write("note," + item["check"] + ",\"" + item["detail"].replace("\"", "\"\"") + "\"\n")
    handle.write("summary,failures," + str(len(FAILURES)) + "\n")
    handle.write("summary,inventoried," + str(len(inventory)) + "\n")
    handle.close()

    print("failures: " + str(len(FAILURES)))
    print("unresolved dependency rows: " + str(len(missing)))
    print("wrote: " + rel(report_path))
    if FAILURES:
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
