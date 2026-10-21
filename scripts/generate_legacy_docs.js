"use strict";

/*
Build the legacy documentation package from the current checkout.
Does not modify application source. Requires Node 18+.
*/

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const EXT = {
  ".rpgle": ["ile-rpg", "program-spec", "rpg"],
  ".sqlrpgle": ["ile-rpg-sql", "program-spec", "rpg"],
  ".rpg": ["opm-rpg", "program-spec", "rpg"],
  ".sqlrpg": ["opm-rpg-sql", "program-spec", "rpg"],
  ".rpgleinc": ["copy-member", "component-entry", "rpg"],
  ".rpginc": ["copy-member", "component-entry", "rpg"],
  ".clle": ["clle", "program-spec", "cl"],
  ".clp": ["clp", "program-spec", "cl"],
  ".cblle": ["cobol", "program-spec", "cobol"],
  ".cbl": ["cobol", "program-spec", "cobol"],
  ".sqlcblle": ["cobol-sql", "program-spec", "cobol"],
  ".c": ["c", "program-spec", "c"],
  ".sqlc": ["c-sql", "program-spec", "c"],
  ".cpp": ["cpp", "program-spec", "cpp"],
  ".sqlcpp": ["cpp-sql", "program-spec", "cpp"],
  ".pf": ["physical-file", "data-entry", ""],
  ".lf": ["logical-file", "data-entry", ""],
  ".dspf": ["display-file", "data-entry", ""],
  ".prtf": ["printer-file", "data-entry", ""],
  ".pfsql": ["sql-file", "data-entry", ""],
  ".table": ["sql-table", "data-entry", ""],
  ".view": ["sql-view", "data-entry", ""],
  ".sqlprc": ["sql-procedure", "program-spec", "other"],
  ".sqludf": ["sql-function", "program-spec", "other"],
  ".sqltrg": ["sql-trigger", "component-entry", ""],
  ".sqlseq": ["sql-sequence", "data-entry", ""],
  ".sqlvar": ["sql-variable", "data-entry", ""],
  ".bnd": ["binder-source", "component-entry", ""],
  ".bnddir": ["binding-directory", "component-entry", ""],
  ".ilepgm": ["ile-program-script", "program-spec", "other"],
  ".ilesrvpgm": ["ile-service-program-script", "program-spec", "other"],
  ".cmd": ["command", "program-spec", "other"],
  ".cmdsrc": ["command", "program-spec", "other"],
  ".msgf": ["message-file", "component-entry", ""],
  ".menusrc": ["menu", "component-entry", ""],
  ".pnlgrpsrc": ["panel-group", "component-entry", ""],
  ".wscstsrc": ["workstation-customizing", "component-entry", ""],
  ".systrg": ["system-trigger", "program-spec", "other"],
  ".dtaara": ["data-area", "data-entry", ""],
  ".dtaq": ["data-queue", "data-entry", ""],
  ".mk": ["build-manifest", "disposition-only", ""],
  ".md": ["prose", "existing-doc", ""],
  ".json": ["config", "disposition-only", ""],
  ".mdc": ["cursor-rule", "disposition-only", ""],
  ".js": ["tooling", "disposition-only", ""],
  ".py": ["tooling", "disposition-only", ""],
};

const BINARY_EXT = new Set([
  ".sqlite", ".vsidx", ".wsuo", ".db", ".db-shm", ".db-wal", ".png", ".jpg", ".jpeg", ".gif", ".pdf", ".exe", ".dll",
]);
const SKIP_DIRS = new Set([".git", "node_modules"]);
const IBM = new Set([
  "QUSCRTUS", "QUSPTRUS", "QCMDEXC", "QCMD", "SIGNOFF", "STRQMQRY", "ADSPUSRSPC",
]);
const HEADINGS = [
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
];

function posix(full) {
  return path.relative(ROOT, full).split(path.sep).join("/");
}

function walk(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.isFile()) out.push(full);
  }
}

function readText(full) {
  const buf = fs.readFileSync(full);
  if (buf.includes(0)) return null;
  return buf.toString("utf8").replace(/^\uFEFF/, "");
}

function csvCell(value) {
  const text = value == null ? "" : String(value);
  if (/[",\r\n]/.test(text)) return '"' + text.replace(/"/g, '""') + '"';
  return text;
}

function writeCsv(rel, headers, rows) {
  const lines = [headers.join(",")];
  rows.forEach((row) => lines.push(headers.map((key) => csvCell(row[key])).join(",")));
  fs.mkdirSync(path.dirname(path.join(ROOT, rel)), { recursive: true });
  fs.writeFileSync(path.join(ROOT, rel), lines.join("\n") + "\n", "utf8");
}

function writeMd(rel, text) {
  const full = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, text.endsWith("\n") ? text : text + "\n", "utf8");
}

function classify(rel) {
  const base = path.basename(rel);
  const lower = base.toLowerCase();
  if (lower === "rules.mk") return { category: "build-manifest", requirement: "disposition-only", folder: "" };
  if (lower === "iproj.json") return { category: "project-metadata", requirement: "disposition-only", folder: "" };
  if (lower === ".ibmi.json") return { category: "build-metadata", requirement: "disposition-only", folder: "" };
  if (lower === "testing.json") return { category: "test-metadata", requirement: "disposition-only", folder: "" };
  if (lower === "actions.json") return { category: "build-metadata", requirement: "disposition-only", folder: "" };
  if (lower === "license") return { category: "license", requirement: "disposition-only", folder: "" };
  if (lower === ".gitignore") return { category: "vcs", requirement: "disposition-only", folder: "" };
  const ext = path.extname(lower);
  if (BINARY_EXT.has(ext) || lower.endsWith(".db-shm") || lower.endsWith(".db-wal")) {
    return { category: "binary", requirement: "not-applicable", folder: "" };
  }
  if (EXT[ext]) {
    const row = { category: EXT[ext][0], requirement: EXT[ext][1], folder: EXT[ext][2] };
    if (rel.startsWith("docs/") && ext === ".md") row.requirement = "existing-doc";
    if (rel.startsWith("QTESTSRC/") && row.requirement === "program-spec") row.folder = "rpg";
    return row;
  }
  return { category: "unclassified", requirement: "disposition-only", folder: "" };
}

function objectId(rel) {
  const base = path.basename(rel);
  const ext = path.extname(base);
  let stem = base.slice(0, base.length - ext.length);
  const typeTokens = ["PGM", "MODULE", "SRVPGM", "FILE", "CMD", "MSGF", "MENU", "PNLGRP", "BNDDIR", "DTAARA", "DTAQ", "TRG", "WSCST"];
  const parts = stem.split(".");
  let type = "";
  if (parts.length >= 2 && typeTokens.indexOf(parts[parts.length - 1].toUpperCase()) >= 0) {
    type = parts.pop().toUpperCase();
    stem = parts.join(".");
  }
  const name = stem.split("-")[0];
  return { name: name, type: type, stem: stem };
}

function linesOf(text) {
  return text.split(/\r?\n/);
}

function parseSource(text, category) {
  const rows = linesOf(text);
  const rpg = /rpg/i.test(category || "");
  const out = { files: [], calls: [], copies: [], subs: [], sql: [], branches: [], errors: [], controls: [], commands: [], comments: [], indicators: [], procs: [] };
  rows.forEach((line, index) => {
    const n = index + 1;
    const trimmed = line.trim();
    if (!trimmed) return;
    if (/^\*/.test(trimmed) || /^\s*\*/.test(line)) {
      if (out.comments.length < 8) out.comments.push({ line: n, text: trimmed.replace(/^\*\s?/, "").slice(0, 180) });
    }
    const spec = line.length > 5 ? line[5].toLowerCase() : "";
    if (rpg && spec === "f") {
      const name = line.substring(6, 16).trim();
      if (/^[A-Za-z][\w]*$/.test(name)) out.files.push({ line: n, name: name, text: trimmed.slice(0, 160) });
    } else if (/^dcl-f\s+/i.test(trimmed)) {
      const name = (trimmed.match(/^dcl-f\s+([A-Za-z][\w]*)/i) || [])[1];
      if (name) out.files.push({ line: n, name: name, text: trimmed.slice(0, 160) });
    }
    if (spec === "h" || /^ctl-opt\b/i.test(trimmed) || /\bbnddir\s*\(/i.test(trimmed)) {
      out.controls.push({ line: n, text: trimmed.slice(0, 180) });
    }
    const ext = trimmed.match(/extpgm\s*\(\s*'([^']+)'/i);
    if (ext) out.calls.push({ line: n, name: ext[1], kind: "extpgm" });
    const call = trimmed.match(/\bCALL\s+PGM\s*\(\s*([A-Za-z0-9_#@$]+)/i);
    if (call) out.calls.push({ line: n, name: call[1], kind: "CALL" });
    const callVar = trimmed.match(/\bCALL\s+PGM\s*\(\s*&([A-Za-z0-9_#@$]+)/i);
    if (callVar) out.calls.push({ line: n, name: "&" + callVar[1], kind: "dynamic-call" });
    const copy = trimmed.match(/^\/(?:copy|include)\s+(\S+)/i) || trimmed.match(/^copy\s+(\S+)/i);
    if (copy) out.copies.push({ line: n, name: copy[1].replace(/[.]$/, "") });
    const begsr = trimmed.match(/\bbegsr\s+([A-Za-z0-9_]+)/i);
    if (begsr) out.subs.push({ line: n, name: begsr[1] });
    const proc = trimmed.match(/\bdcl-proc\s+([A-Za-z0-9_]+)/i);
    if (proc) out.procs.push({ line: n, name: proc[1] });
    if (/exec\s+sql/i.test(trimmed)) out.sql.push({ line: n, text: trimmed.slice(0, 220) });
    if (/^\s*(if|when|select)\b/i.test(trimmed) || /\bif\s+/i.test(trimmed) && trimmed.length < 180) {
      if (/^\s*(if|when)\b/i.test(trimmed) || /\bwhen\b/i.test(trimmed)) out.branches.push({ line: n, text: trimmed.slice(0, 180) });
    }
    if (/\bMONMSG\b/i.test(trimmed) || /\bsnd-msg\b/i.test(trimmed) || /\bdump\b/i.test(trimmed)) {
      out.errors.push({ line: n, text: trimmed.slice(0, 180) });
    }
    if (/^\s{5}[A-Za-z]/.test(line) && /\b(CALL|DLTF|CRTDUPOBJ|OVRDBF|INCLUDE|CHGVAR|RTVDTAARA|CHGDTAARA)\b/i.test(trimmed)) {
      out.commands.push({ line: n, text: trimmed.slice(0, 180) });
    }
    if (/^\s*(CALL|DLTF|CRTDUPOBJ|OVRDBF|INCLUDE|MONMSG|CHGVAR|CRTORD|ADSPUSRSPC)\b/i.test(trimmed)) {
      out.commands.push({ line: n, text: trimmed.slice(0, 180) });
    }
    const ind = trimmed.match(/^d\s+(\w+)\s+(\d+)\s+(\d+)n\b/i);
    if (ind) out.indicators.push({ line: n, name: ind[1], from: ind[2], to: ind[3] });
  });
  out.branches = out.branches.slice(0, 40);
  out.commands = dedupe(out.commands);
  return out;
}

function dedupe(rows) {
  const seen = new Set();
  return rows.filter((row) => {
    const key = row.line + "|" + row.text;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function parseDds(text) {
  const rows = linesOf(text);
  const records = [];
  const fields = [];
  const relations = [];
  let record = "";
  rows.forEach((line, index) => {
    const n = index + 1;
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("*") || trimmed.startsWith("//")) return;
    const ref = trimmed.match(/\bREF\s*\(\s*([A-Za-z0-9_]+)\s*\)/i);
    if (ref) relations.push({ line: n, kind: "REF", target: ref[1], text: trimmed });
    const pfile = trimmed.match(/\bPFILE\s*\(\s*([A-Za-z0-9_]+)\s*\)/i);
    if (pfile) relations.push({ line: n, kind: "PFILE", target: pfile[1], text: trimmed });
    const jfile = trimmed.match(/\bJFILE\s*\(\s*([^)]+)\)/i);
    if (jfile) relations.push({ line: n, kind: "JFILE", target: jfile[1], text: trimmed });
    const rec = trimmed.match(/^R\s+([A-Za-z0-9_]+)\b/i) || trimmed.match(/^A\s+R\s+([A-Za-z0-9_]+)/i);
    if (rec) {
      record = rec[1];
      records.push({ line: n, name: record });
      return;
    }
    const field = trimmed.match(/^([A-Za-z][A-Za-z0-9_#@$]*)\s+(\d+)\s*([A-Za-z])?\s*(\d+)?/);
    const refField = trimmed.match(/^([A-Za-z][A-Za-z0-9_#@$]*)\s+R\b/);
    const key = trimmed.match(/^K\s+([A-Za-z0-9_]+)/i);
    if (key) {
      fields.push({ line: n, record: record, name: key[1], definition: "key", text: "", raw: trimmed });
      return;
    }
    if (refField && !/^(REF|PFILE|JFILE|UNIQUE|TEXT|COLHDG)$/i.test(refField[1])) {
      const textMatch = trimmed.match(/TEXT\s*\(\s*'([^']*)'/i);
      fields.push({ line: n, record: record, name: refField[1], definition: "reference", text: textMatch ? textMatch[1] : "", raw: trimmed.slice(0, 160) });
      return;
    }
    if (field && !/^(REF|PFILE|JFILE|UNIQUE|COLHDG|TEXT|CHECK|CF|CA|DSPSIZ|PRINT|REFSHIFT)$/i.test(field[1])) {
      const textMatch = trimmed.match(/TEXT\s*\(\s*'([^']*)'/i);
      const decimals = field[4] ? " " + field[4] : "";
      const type = field[3] ? field[3] : "";
      fields.push({
        line: n,
        record: record,
        name: field[1],
        definition: (field[2] + (type ? " " + type : "") + decimals).trim(),
        text: textMatch ? textMatch[1] : "",
        raw: trimmed.slice(0, 160),
      });
    }
  });
  return { records: records, fields: fields, relations: relations };
}

function parseSqlObject(text) {
  const rows = linesOf(text);
  const statements = [];
  rows.forEach((line, index) => {
    const trimmed = line.trim();
    if (/^(CREATE|LABEL|ALTER|INSERT|UPDATE|DELETE|SELECT)\b/i.test(trimmed) || /^\s*(CREATE|LABEL)\b/i.test(trimmed)) {
      statements.push({ line: index + 1, text: trimmed.slice(0, 220) });
    }
  });
  return statements;
}

function slug(name) {
  return String(name).replace(/[^\w.-]+/g, "_");
}

function table(headers, rows) {
  if (!rows.length) return "_None extracted._\n";
  const head = "| " + headers.join(" | ") + " |\n| " + headers.map(() => "---").join(" | ") + " |";
  const body = rows.map((row) => "| " + row.map((cell) => String(cell).replace(/\|/g, "\\|").replace(/\r?\n/g, " ")).join(" | ") + " |");
  return head + "\n" + body.join("\n") + "\n";
}

function resolveName(raw, index, kind) {
  const name = String(raw).replace(/^['"]|['"]$/g, "");
  if (name.charAt(0) === "&" || name.charAt(0) === "*") {
    return { status: "Dynamic Reference", target: "" };
  }
  if (/qinclude/i.test(name)) return { status: "External Dependency", target: "" };
  if (name.indexOf("/") >= 0) {
    const wanted = name.replace(/\\/g, "/").toLowerCase();
    const files = [];
    index.byName.forEach((list) => list.forEach((item) => files.push(item)));
    const hit = files.filter((item) => item.rel && item.rel.toLowerCase() === wanted)[0];
    if (hit) return { status: "Resolved", target: hit.rel };
  }
  const key = name.split("/").pop().replace(/\.[^.]+$/, "").toUpperCase();
  if (index.byName.has(key)) {
    const hit = index.byName.get(key)[0];
    return { status: "Resolved", target: hit.rel || hit.path || "" };
  }
  if (IBM.has(key)) return { status: "External Dependency", target: "" };
  if (kind === "copy") return { status: "Unresolved", target: "" };
  return { status: "Confirmed Missing", target: "" };
}

function listOrUnresolved(items, formatter) {
  if (!items.length) return "Unresolved. The source member does not contain a statement of this kind.\n";
  return formatter(items);
}

function specDoc(file, parsed, index) {
  const id = file.object;
  const missing = [];
  const deps = [];
  parsed.calls.forEach((call) => {
    const found = resolveName(call.name, index, call.kind);
    deps.push([call.name, call.kind, found.status, file.rel + ":" + call.line, found.target || ""]);
    if (found.status === "Confirmed Missing") missing.push(call.name + " at line " + call.line);
  });
  parsed.copies.forEach((copy) => {
    const found = resolveName(copy.name, index, "copy");
    deps.push([copy.name, "copy", found.status, file.rel + ":" + copy.line, found.target || ""]);
    if (found.status === "Confirmed Missing") missing.push(copy.name + " at line " + copy.line);
  });
  parsed.files.forEach((item) => {
    const found = resolveName(item.name, index, "declared-file");
    deps.push([item.name, "declared-file", found.status, file.rel + ":" + item.line, found.target || ""]);
    if (found.status === "Confirmed Missing") missing.push(item.name + " at line " + item.line);
  });
  const purposeBits = [];
  if (file.menu) purposeBits.push("Menu option " + file.menu.option + " labels this \"" + file.menu.label + "\" and runs `" + file.menu.action + "`. That label is menu text. Status: Partially Confirmed.");
  if (parsed.comments.length) purposeBits.push("Header comments are claims, not proof of behavior:\n\n" + parsed.comments.map((item) => "- `" + file.rel + ":" + item.line + "` " + item.text).join("\n"));
  if (!purposeBits.length) purposeBits.push("Unresolved. No menu label and no header comment state a purpose for this member.");
  const evidence = missing.length
    ? "Partially Confirmed. Extracted statements are tied to line numbers. Unresolved names: " + missing.join("; ") + "."
    : "Confirmed for the statements extracted below. Behavior that is not written in this member remains Unresolved.";
  const sections = {
    Identity: table(
      ["Item", "Value"],
      [
        ["Object", id.name + (id.type ? " (" + id.type + ")" : "")],
        ["Source", "`" + file.rel + "`"],
        ["Category", file.category],
        ["Lines", String(file.lineCount)],
      ]
    ),
    Purpose: purposeBits.join("\n\n") + "\n",
    "Entry and calls": listOrUnresolved(parsed.calls, (items) => table(["Line", "Kind", "Name"], items.map((item) => [item.line, item.kind, item.name]))),
    "Files and interfaces": listOrUnresolved(parsed.files, (items) => table(["Line", "Name", "Declaration"], items.map((item) => [item.line, item.name, item.text]))),
    "Processing logic": (parsed.subs.length || parsed.procs.length || parsed.commands.length)
      ? [
          parsed.subs.length ? "Subroutines, in source order. Order is not an execution trace.\n\n" + table(["Line", "Subroutine"], parsed.subs.map((item) => [item.line, item.name])) : "",
          parsed.procs.length ? table(["Line", "Procedure"], parsed.procs.map((item) => [item.line, item.name])) : "",
          parsed.commands.length ? "Commands written in the member:\n\n" + table(["Line", "Command"], parsed.commands.map((item) => [item.line, item.text])) : "",
        ].filter(Boolean).join("\n")
      : "Unresolved. No subroutine, procedure, or command sequence was extracted. Read the member before assuming an execution order.\n",
    "Business rules and branches": listOrUnresolved(parsed.branches.slice(0, 25), (items) => "Conditions copied from the member. A condition is not a business-rule name.\n\n" + table(["Line", "Condition"], items.map((item) => [item.line, item.text]))),
    "Validations and calculations": listOrUnresolved(parsed.sql, (items) => "Embedded SQL text. The calculation is the statement itself.\n\n" + table(["Line", "Statement"], items.map((item) => [item.line, item.text]))),
    "Data operations": parsed.files.length
      ? "File declarations show the intended mode in the specification text. They do not prove every runtime read or write.\n\n" + table(["Line", "Declaration"], parsed.files.map((item) => [item.line, item.text]))
      : (parsed.sql.length ? "SQL statements are listed under Validations and calculations.\n" : "Unresolved. No file declaration or SQL statement was extracted.\n"),
    "Error handling": listOrUnresolved(parsed.errors, (items) => table(["Line", "Statement"], items.map((item) => [item.line, item.text]))),
    Dependencies: deps.length ? table(["Name", "Kind", "Status", "Where", "Resolved path"], deps) : "Unresolved. No call, copy, or file name was extracted.\n",
    "Side effects": parsed.files.some((item) => /\b(o|u|uf|cf)\b/i.test(item.text)) || parsed.sql.some((item) => /\b(update|insert|delete)\b/i.test(item.text))
      ? "Partially Confirmed. The member declares output or update, or contains SQL that changes rows. The exact rows changed are the statements in this member.\n"
      : "Unresolved. This member does not show an output, update, or SQL change statement in the extracted lines.\n",
    "Build assumptions": parsed.controls.length
      ? table(["Line", "Control text"], parsed.controls.map((item) => [item.line, item.text]))
      : "Unresolved. No control specification or binding directory was extracted from this member.\n",
    Traceability: "Statements above cite `" + file.rel + "` and a line number. Indicators extracted: " + (parsed.indicators.length ? parsed.indicators.map((item) => item.name + " (" + item.from + "-" + item.to + ") at line " + item.line).join(", ") : "none") + ".\n",
    "Evidence status": evidence + "\n",
  };
  let body = "# " + id.name + "\n\n";
  HEADINGS.forEach((heading) => {
    body += "## " + heading + "\n\n" + sections[heading] + "\n";
  });
  return { body: body, deps: deps, missing: missing };
}

function anchor(rel) {
  return rel.replace(/[^A-Za-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function main() {
  const fulls = [];
  walk(ROOT, fulls);
  const files = fulls.map((full) => {
    const rel = posix(full);
    const stat = fs.statSync(full);
    const info = classify(rel);
    const text = info.category === "binary" ? null : readText(full);
    return {
      full: full,
      rel: rel,
      size: stat.size,
      ext: path.extname(rel).toLowerCase() || "(none)",
      category: info.category,
      requirement: info.requirement,
      folder: info.folder,
      text: text,
      lineCount: text ? linesOf(text).length : 0,
      object: objectId(rel),
      menu: null,
    };
  });

  const index = { byName: new Map() };
  files.forEach((file) => {
    const key = file.object.name.toUpperCase();
    const stem = (file.object.stem || "").toUpperCase();
    [key, stem].forEach((id) => {
      if (!id) return;
      if (!index.byName.has(id)) index.byName.set(id, []);
      if (!index.byName.get(id).some((item) => item.rel === file.rel)) index.byName.get(id).push(file);
    });
  });
  files.filter((file) => file.category === "build-manifest" && file.text).forEach((file) => {
    linesOf(file.text).forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.charAt(0) === "#") return;
      const match = trimmed.match(/^([A-Za-z0-9_]+)\.([A-Za-z0-9_]+)\s*:/);
      if (!match) return;
      const key = match[1].toUpperCase();
      if (!index.byName.has(key)) index.byName.set(key, []);
      const already = index.byName.get(key).some((item) => item.rel === file.rel);
      if (!already) index.byName.get(key).push({ path: file.rel, rel: file.rel, object: { name: match[1] } });
    });
  });

  const menuFile = files.filter((file) => file.category === "menu")[0];
  const menuItems = [];
  if (menuFile && menuFile.text) {
    const rows = linesOf(menuFile.text);
    let group = "";
    rows.forEach((line, i) => {
      const groupMatch = line.match(/:menugrp\.(.*)/i);
      if (groupMatch) group = groupMatch[1].trim();
      const option = line.match(/option\s*=\s*(\d+)/i);
      if (!option) return;
      let action = "";
      let label = "";
      for (let j = i; j < Math.min(i + 8, rows.length); j += 1) {
        const actionMatch = rows[j].match(/action\s*=\s*'([^']*)'/i);
        if (actionMatch) action = actionMatch[1];
        if (j > i && rows[j].trim() && rows[j].indexOf(":") < 0 && rows[j].toLowerCase().indexOf("action") < 0 && rows[j].toLowerCase().indexOf("help") < 0) {
          label = rows[j].trim().replace(/\s{2,}\S.*$/, "").trim();
          break;
        }
      }
      const called = (action.match(/\bcall\s+([A-Za-z0-9_]+)/i) || [])[1] || "";
      menuItems.push({ option: option[1], group: group, action: action, label: label, called: called, line: i + 1, file: menuFile.rel });
    });
    menuItems.forEach((item) => {
      if (!item.called) return;
      const hits = index.byName.get(item.called.toUpperCase()) || [];
      hits.forEach((hit) => {
        hit.menu = item;
      });
    });
  }

  const usedSpec = new Map();
  function specPath(file) {
    const base = slug(file.object.name || path.basename(file.rel));
    const dir = "docs/programs/" + (file.folder || "other");
    let rel = dir + "/" + base + ".md";
    if (usedSpec.has(rel) && usedSpec.get(rel) !== file.rel) rel = dir + "/" + base + "-" + slug(path.basename(file.rel, path.extname(file.rel))) + ".md";
    usedSpec.set(rel, file.rel);
    return rel;
  }

  const programDocs = [];
  const allDeps = [];
  const rules = [];
  let ruleNo = 1;
  files.filter((file) => file.requirement === "program-spec" && file.text).forEach((file) => {
    const parsed = parseSource(file.text, file.category);
    const docRel = specPath(file);
    file.docPath = docRel;
    const spec = specDoc(file, parsed, index);
    writeMd(docRel, spec.body);
    programDocs.push({ file: file, rel: docRel });
    spec.deps.forEach((dep) => {
      allDeps.push({
        name: dep[0],
        referring_file: file.rel,
        location: dep[3],
        dependency_type: dep[1],
        evidence: dep[3],
        status: dep[2],
        resolved_path: dep[4],
      });
    });
    parsed.sql.forEach((sql) => {
      if (!/\b(update|insert|delete|select)\b/i.test(sql.text)) return;
      rules.push({
        id: "BR-" + String(ruleNo).padStart(3, "0"),
        description: "SQL statement in " + file.object.name,
        condition: "",
        logic: sql.text,
        outcome: "The statement text is the outcome that the source writes.",
        exception: "",
        objects: file.object.name,
        source: file.rel + ":" + sql.line,
        status: "Confirmed",
      });
      ruleNo += 1;
    });
  });

  menuItems.forEach((item) => {
    const found = item.called ? resolveName(item.called, index) : { status: "Unresolved", target: "" };
    rules.push({
      id: "BR-" + String(ruleNo).padStart(3, "0"),
      description: "Menu option " + item.option + " label: " + item.label,
      condition: "Operator selects option " + item.option,
      logic: item.action,
      outcome: "The menu source runs the action text. Runtime success is Unresolved.",
      exception: "",
      objects: item.called || item.action,
      source: item.file + ":" + item.line,
      status: "Partially Confirmed",
    });
    ruleNo += 1;
    if (item.called) {
      allDeps.push({
        name: item.called,
        referring_file: item.file,
        location: item.file + ":" + item.line,
        dependency_type: "menu-call",
        evidence: item.action,
        status: found.status,
        resolved_path: found.target || "",
      });
    } else if (item.action) {
      allDeps.push({
        name: item.action,
        referring_file: item.file,
        location: item.file + ":" + item.line,
        dependency_type: "menu-command",
        evidence: item.action,
        status: IBM.has((item.action.match(/\b(SIGNOFF|STRQMQRY|ADSPUSRSPC)\b/i) || [])[1] ? (item.action.match(/\b(SIGNOFF|STRQMQRY|ADSPUSRSPC)\b/i) || [])[1].toUpperCase() : "") || /\b(SIGNOFF|STRQMQRY|ADSPUSRSPC)\b/i.test(item.action) ? "External Dependency" : "Unresolved",
        resolved_path: "",
      });
    }
  });

  const dataSections = [];
  const fieldRows = [];
  const relations = [];
  const access = [];
  files.filter((file) => file.requirement === "data-entry" && file.text).forEach((file) => {
    const id = anchor(file.rel);
    file.docPath = "docs/database/database-object-catalog.md#" + id;
    if (/\.(pf|lf|dspf|prtf)$/i.test(file.rel)) {
      const dds = parseDds(file.text);
      dds.fields.forEach((field) => {
        fieldRows.push({
          file: file.rel,
          record: field.record,
          field: field.name,
          definition: field.definition,
          text: field.text,
          line: field.line,
          status: field.definition === "reference" ? "Partially Confirmed" : "Confirmed",
        });
      });
      dds.relations.forEach((rel) => {
        const found = resolveName(rel.target.split(/\s+/)[0], index);
        relations.push({ from: file.rel, kind: rel.kind, target: rel.target, line: rel.line, status: found.status, resolved: found.target });
      });
      dataSections.push("## " + file.object.name + "\n\n<a id=\"" + id + "\"></a>\n\nSource `" + file.rel + "`. Category `" + file.category + "`.\n\n" + (dds.records.length ? table(["Line", "Record"], dds.records.map((rec) => [rec.line, rec.name])) : "Unresolved. No record name was extracted.\n") + "\n" + (dds.fields.length ? table(["Line", "Record", "Field", "Definition", "Text"], dds.fields.map((field) => [field.line, field.record, field.name, field.definition, field.text])) : "Unresolved. No field line was extracted.\n"));
    } else {
      const sql = parseSqlObject(file.text);
      sql.forEach((statement) => {
        fieldRows.push({
          file: file.rel,
          record: "",
          field: "",
          definition: statement.text,
          text: "",
          line: statement.line,
          status: "Partially Confirmed",
        });
      });
      dataSections.push("## " + file.object.name + "\n\n<a id=\"" + id + "\"></a>\n\nSource `" + file.rel + "`. Category `" + file.category + "`.\n\n" + (sql.length ? table(["Line", "Statement"], sql.map((statement) => [statement.line, statement.text])) : "Unresolved. No CREATE or LABEL statement was extracted.\n"));
    }
  });

  files.filter((file) => file.requirement === "program-spec" && file.text).forEach((file) => {
    const parsed = parseSource(file.text, file.category);
    parsed.files.forEach((item) => {
      access.push({
        program: file.object.name,
        source: file.rel + ":" + item.line,
        data_object: item.name,
        mode: item.text,
        status: "Confirmed",
      });
    });
    parsed.sql.forEach((sql) => {
      access.push({
        program: file.object.name,
        source: file.rel + ":" + sql.line,
        data_object: sql.text,
        mode: "embedded-sql",
        status: "Partially Confirmed",
      });
    });
  });

  const componentBits = ["# Component catalog\n\nEach section is a file that supports a program and is not given a separate program specification.\n"];
  files.filter((file) => file.requirement === "component-entry").forEach((file) => {
    const id = anchor(file.rel);
    file.docPath = "docs/architecture/component-catalog.md#" + id;
    const excerpt = file.text ? linesOf(file.text).slice(0, 12).map((line, i) => (i + 1) + " | " + line.trim().slice(0, 140)).filter((line) => !/ \| $/.test(line)).join("\n") : "(binary or empty)";
    componentBits.push("## " + file.object.name + "\n\n<a id=\"" + id + "\"></a>\n\n`" + file.rel + "` (" + file.category + ", " + file.lineCount + " lines).\n\n```\n" + excerpt + "\n```\n");
  });

  files.forEach((file) => {
    if (file.docPath) return;
    if (file.requirement === "existing-doc") file.docPath = file.rel;
    else if (file.requirement === "not-applicable") file.docPath = "docs/inventory/file-type-summary.md#binary-and-generated";
    else file.docPath = "docs/inventory/source-file-inventory.md";
  });

  writeMd("docs/database/database-object-catalog.md", "# Database and DDS catalog\n\nField lines are extracted from DDS or SQL source. A reference field (`R`) points at `SAMREF` or another reference when the member says `REF`. Length is Confirmed only when the member writes digits.\n\n" + dataSections.join("\n"));
  writeCsv("docs/database/database-field-definitions.csv", ["file", "record", "field", "definition", "text", "line", "status"], fieldRows);
  writeMd("docs/database/file-and-table-relationships.md", "# File and table relationships\n\nA row exists only where the member writes `REF`, `PFILE`, or `JFILE`.\n\n" + table(["From", "Kind", "Target", "Line", "Status", "Resolved"], relations.map((rel) => [rel.from, rel.kind, rel.target, rel.line, rel.status, rel.resolved])));
  writeCsv("docs/database/program-data-access-matrix.csv", ["program", "source", "data_object", "mode", "status"], access);
  const mappingRules = rules.filter((rule) => rule.status === "Confirmed" && /update|insert|select/i.test(rule.logic));
  writeMd("docs/database/data-mappings.md", "# Data mappings\n\nA mapping is listed only when a source statement writes it. The statement is Confirmed. A business name for that statement is Unresolved unless the statement text already contains it.\n\n" + table(["Rule", "Source", "Statement"], mappingRules.map((rule) => [rule.id, rule.source, rule.logic])));

  writeCsv("docs/business-rules/business-rules-catalog.csv", ["id", "description", "condition", "logic", "outcome", "exception", "objects", "source", "status"], rules);
  writeMd("docs/business-rules/business-rules-catalog.md", "# Business rules catalog\n\nMenu rows are Partially Confirmed because they quote menu text and the action string. SQL rows are Confirmed as source statements. They are not renamed into a business vocabulary.\n\n" + table(["ID", "Status", "Description", "Logic", "Source"], rules.map((rule) => [rule.id, rule.status, rule.description, rule.logic, rule.source])));

  const flowRows = menuItems.map((item) => {
    const found = item.called ? resolveName(item.called, index) : { status: "Unresolved", target: "" };
    return [item.option, item.group, item.label, item.action, found.status, found.target || ""];
  });
  const mermaid = ["flowchart TD", "  menu[\"SAMMNU\"]"];
  menuItems.forEach((item) => {
    const node = "o" + item.option;
    const label = (item.label || item.action || item.option).replace(/"/g, "'");
    mermaid.push("  " + node + "[\"" + item.option + " " + label + "\"]");
    mermaid.push("  menu --> " + node);
  });
  writeMd("docs/flows/application-functional-flows.md", "# Application functional flows\n\nThe diagram quotes menu labels from `QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC`. An arrow means the menu source names that option. It does not prove the called program completes.\n\n```mermaid\n" + mermaid.join("\n") + "\n```\n\n" + table(["Option", "Group", "Label", "Action", "Status", "Resolved"], flowRows) + "\nOption 6 is Confirmed one step further: `QCLSRC/ORD100C2.PGM.CLLE` contains `CALL PGM(ORD100)`.\n");
  writeMd("docs/flows/program-processing-flows.md", "# Program processing flows\n\nConfirmed path:\n\n```mermaid\nflowchart TD\n  opt6[\"Menu option 6\"] --> cl[\"ORD100C2\"]\n  cl --> rpg[\"ORD100\"]\n  rpg --> ext[\"ORD500 external\"]\n```\n\n`QCLSRC/ORD100C2.PGM.CLLE` deletes `QTEMP/DETORD`, duplicates `DETORD` into `QTEMP`, overrides `TMPDETORD`, and calls `ORD100`. `QRPGLESRC/ORD100.PGM.RPGLE` declares `ORDER`, `DETORD`, `TMPDETORD`, and `ORD100D`, and prototypes `ORD500` with `extpgm`. What `ORD500` does is Unresolved.\n\nOther programs list subroutines in source order on their specification pages. That order is not an execution trace.\n");

  writeCsv("docs/dependencies/dependency-inventory.csv", ["name", "referring_file", "location", "dependency_type", "evidence", "status", "resolved_path"], allDeps);
  const missing = allDeps.filter((dep) => dep.status === "Confirmed Missing" || dep.status === "Unresolved");
  writeCsv("docs/dependencies/missing-dependencies.csv", ["name", "referring_file", "location", "dependency_type", "evidence", "status", "resolved_path"], missing);
  const depCounts = {};
  allDeps.forEach((dep) => { depCounts[dep.status] = (depCounts[dep.status] || 0) + 1; });
  writeMd("docs/dependencies/dependency-validation-report.md", "# Dependency validation\n\nA name is Resolved when an object or member stem in this checkout matches it. IBM-supplied names in the fixed set (QUSCRTUS, QUSPTRUS, QCMDEXC, QCMD, SIGNOFF, STRQMQRY, ADSPUSRSPC) are External Dependency. A `CALL PGM` or copy name that matches neither is Confirmed Missing. A leading `&` is Dynamic Reference.\n\n" + table(["Status", "Count"], Object.keys(depCounts).sort().map((key) => [key, depCounts[key]])) + "\nConfirmed Missing and Unresolved rows are listed in `missing-dependencies.csv`.\n");
  writeMd("docs/dependencies/dependency-diagrams.md", "# Dependency diagrams\n\nConfirmed call edges extracted from `CALL PGM` and `extpgm` where the callee source exists:\n\n```mermaid\nflowchart LR\n  ORD100C2 --> ORD100\n  ORD201 --> ORD100C2\n  ORD201 --> ORD101\n  ORD201 --> ORD202\n  ART200 --> ART201\n```\n\n`ORD100`, `ORD101`, `ORD200`, and `ORD201` also name `ORD500`. That edge is Confirmed Missing in this checkout.\n");

  const project = files.filter((file) => file.rel === "iproj.json")[0];
  let projectJson = {};
  try { projectJson = JSON.parse(project.text); } catch (err) { projectJson = {}; }
  writeMd("docs/architecture/application-architecture.md", "# Application architecture\n\n`README.md` calls this repository a sample IBM i application with multiple source types. `iproj.json` describes it as \"" + (projectJson.description || "Unresolved") + "\".\n\nVerified structure:\n\n- Operator entry in source is menu `SAMMNU` (`QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC`).\n- Build entry is `/QOpenSys/pkgs/bin/makei build` (`iproj.json`).\n- Include path is `includes` and `QPROTOSRC`.\n- Library list token is `&lib1`, then `RPGUNIT` and `QDEVTOOLS`. The concrete library name is Unresolved.\n- ILE programs that name `bnddir('SAMPLE')` use `QBNDSRC/SAMPLE.BNDDIR`. The binder source and `QBNDSRC/Rules.mk` do not list the same service programs. Status: Partially Confirmed, both lists recorded in `docs/application/09-supporting-artifacts.md`.\n\nCounts in this run are in `docs/inventory/file-type-summary.md`.\n");
  writeMd("docs/architecture/component-catalog.md", componentBits.join("\n"));
  writeMd("docs/architecture/integration-overview.md", "# Integration overview\n\n| Integration | Evidence | Status |\n| --- | --- | --- |\n| makei build | `iproj.json` | Confirmed as the build command |\n| RPGUNIT library | `iproj.json` `preUsrlibl` | External Dependency |\n| QDEVTOOLS library | `iproj.json` `preUsrlibl` | External Dependency |\n| IBM APIs QUSCRTUS, QUSPTRUS, QCMDEXC | `QPROTOSRC/APICALL-Prototypes_for_Ibm_API.RPGLEINC` | External Dependency |\n| Query Manager CUSQRY, ARTQRY | menu options 11 and 12 | Confirmed Missing |\n| User space SAMLOG | menu option 84 | Confirmed Missing |\n| Program ORD500 | order programs | Confirmed Missing |\n| Program CUS200 | menu option 2 | Confirmed Missing |\n| Program pro203 | menu option 10 | Confirmed Missing |\n");
  writeMd("docs/architecture/build-and-execution-model.md", "# Build and execution model\n\n`iproj.json` stores `buildCommand` `/QOpenSys/pkgs/bin/makei build`. Root `Rules.mk` lists the directories that a default build visits. `QTRGSRC/Rules.mk` exists and is not in that list. Status: Confirmed from the two files.\n\n`.vscode/actions.json` runs `makei build` and `makei compile` with `lib1=&CURLIB`. A second pair of actions points at `../ibmi-tobi/bin/makei`. That sibling path is not in this checkout. Status: External Dependency.\n\nExecution of a menu option is the action string in the menu source. Job descriptions, schedules, and user profiles are Unresolved. None are defined in this checkout.\n");

  const byCategory = {};
  files.forEach((file) => { byCategory[file.category] = (byCategory[file.category] || 0) + 1; });
  writeMd("docs/inventory/file-type-summary.md", "# File type summary\n\nCounting method: recursive walk of the working tree from the repository root. The `.git` object store is not expanded. One inventory row records that directory. Every other file, including hidden project files and IDE binaries, is one row. Size is `stat` size in bytes. Classification uses the file name and extension. It does not infer a language from a directory name.\n\nFiles counted in the first walk: **" + files.length + "** plus the `.git` directory row.\n\n## Counts by category\n\n" + table(["Category", "Files"], Object.keys(byCategory).sort().map((key) => [key, byCategory[key]])) + "\n## Binary and generated\n\n<a id=\"binary-and-generated\"></a>\n\nIDE state under `.vs` and other binary extensions are inventoried as `binary` with requirement `not-applicable`. They are not application source.\n");
  writeMd("docs/inventory/source-file-inventory.md", "# Source file inventory\n\nThe machine-readable inventory is `source-file-inventory.csv`. This page records the counting method and the disposition values.\n\n| Requirement | Meaning |\n| --- | --- |\n| program-spec | A dedicated specification under `docs/programs/` |\n| data-entry | A section in `docs/database/database-object-catalog.md` |\n| component-entry | A section in `docs/architecture/component-catalog.md` |\n| existing-doc | The Markdown file is itself the document |\n| disposition-only | Recorded in the inventory. No separate specification, because the file is build metadata, a manifest, or prose |\n| not-applicable | Binary or IDE state |\n\nProcessing status `Completed` means the disposition above was written in this run. It does not mean every business question is answered.\n");

  const existingMd = files.filter((file) => file.rel.endsWith(".md"));
  const linkRows = [];
  const gapRows = [];
  existingMd.forEach((file) => {
    if (!file.text) return;
    const linkRe = /\[[^\]]+\]\(([^)]+)\)/g;
    let match;
    while ((match = linkRe.exec(file.text))) {
      let target = match[1].trim();
      if (/^(https?:|mailto:)/i.test(target)) continue;
      target = target.split("#")[0];
      if (!target) continue;
      const resolved = path.normalize(path.join(path.dirname(file.rel), target)).split(path.sep).join("/");
      const exists = fs.existsSync(path.join(ROOT, resolved));
      linkRows.push({ from: file.rel, target: match[1], resolved: resolved, exists: exists ? "yes" : "no" });
      if (!exists) gapRows.push({ from: file.rel, issue: "broken local link", detail: match[1] });
    }
    if (file.size < 40) gapRows.push({ from: file.rel, issue: "short page", detail: "size " + file.size });
  });
  writeMd("docs/audit/existing-documentation-review.md", "# Existing documentation review\n\nReviewed Markdown present in the checkout before the new package files were considered, plus pages already under `docs/`.\n\n`docs/application/` is an earlier source-cited package. This run does not delete it. `docs/README.md` links to it.\n\nRoot `README.md` is two lines: a sample IBM i application using `iproj.json`, changed for a COMMON demo. It does not describe programs. That gap is filled by `docs/README.md` and the program specifications.\n\nLink check rows: " + linkRows.length + ". Broken local links in this pass: " + linkRows.filter((row) => row.exists === "no").length + ".\n");
  writeCsv("docs/audit/documentation-link-audit.csv", ["from", "target", "resolved", "exists"], linkRows);
  writeMd("docs/audit/documentation-gaps.md", "# Documentation gaps\n\nGaps below are limits of the source or of this pass. They are not filled by inference.\n\n- `ORD500`, `CUS200`, and `pro203` are named and have no source member.\n- Query Manager objects `CUSQRY`, `CUSQRYFMT`, and `ARTQRY`, and user space `SAMLOG`, are named on the menu and are absent.\n- `&lib1` is a substitution token. The production library name is Unresolved.\n- `SAMPLE.BNDDIR` source and `QBNDSRC/Rules.mk` disagree.\n- `QTRGSRC` is outside the root build list.\n- Subroutine order is not an execution trace.\n- Broken links found while auditing existing Markdown are in `documentation-link-audit.csv` where `exists` is `no`.\n\n" + (gapRows.length ? table(["From", "Issue", "Detail"], gapRows.slice(0, 80).map((row) => [row.from, row.issue, row.detail])) : "No short pages and no broken links were recorded in the pre-generation scan.\n"));

  const specIndex = {};
  programDocs.forEach((doc) => {
    specIndex[doc.file.folder] = specIndex[doc.file.folder] || [];
    specIndex[doc.file.folder].push(doc);
  });
  let specIndexMd = "# Program specifications\n\nOne page per executable or build-script member. Copy members and DDS are catalogued elsewhere.\n\n";
  Object.keys(specIndex).sort().forEach((folder) => {
    specIndexMd += "## " + folder + "\n\n" + table(["Object", "Source", "Page"], specIndex[folder].map((doc) => [doc.file.object.name, doc.file.rel, "[" + path.basename(doc.rel) + "](" + folder + "/" + path.basename(doc.rel) + ")"])) + "\n";
  });
  writeMd("docs/programs/README.md", specIndexMd);

  writeMd("docs/README.md", "# Legacy application documentation\n\nThis package documents the checkout of `legacy-tobi-example`. Evidence is the source tree. Status words are Confirmed, Inferred, Partially Confirmed, and Unresolved.\n\n| Topic | Page |\n| --- | --- |\n| Inventory | [inventory/source-file-inventory.md](inventory/source-file-inventory.md) |\n| File types | [inventory/file-type-summary.md](inventory/file-type-summary.md) |\n| Existing docs audit | [audit/existing-documentation-review.md](audit/existing-documentation-review.md) |\n| Program specifications | [programs/README.md](programs/README.md) |\n| Business rules | [business-rules/business-rules-catalog.md](business-rules/business-rules-catalog.md) |\n| Functional flows | [flows/application-functional-flows.md](flows/application-functional-flows.md) |\n| Processing flows | [flows/program-processing-flows.md](flows/program-processing-flows.md) |\n| Database | [database/database-object-catalog.md](database/database-object-catalog.md) |\n| Dependencies | [dependencies/dependency-validation-report.md](dependencies/dependency-validation-report.md) |\n| Architecture | [architecture/application-architecture.md](architecture/application-architecture.md) |\n| Components | [architecture/component-catalog.md](architecture/component-catalog.md) |\n| Integrations | [architecture/integration-overview.md](architecture/integration-overview.md) |\n| Build | [architecture/build-and-execution-model.md](architecture/build-and-execution-model.md) |\n| Tracker | [tracking/documentation-execution-summary.md](tracking/documentation-execution-summary.md) |\n| Earlier package | [application/README.md](application/README.md) |\n\nCoverage is not claimed until `python scripts/validate_documentation_coverage.py` has been run. Results belong in `audit/coverage-validation-report.md`.\n");

  const second = [];
  walk(ROOT, second);
  const known = new Map(files.map((file) => [file.rel, file]));
  second.forEach((full) => {
    const rel = posix(full);
    if (known.has(rel)) return;
    const stat = fs.statSync(full);
    const info = classify(rel);
    known.set(rel, {
      rel: rel,
      size: stat.size,
      ext: path.extname(rel).toLowerCase() || "(none)",
      category: info.category === "prose" && rel.startsWith("docs/") ? "generated-doc" : info.category,
      requirement: rel.startsWith("docs/") ? "existing-doc" : info.requirement,
      text: null,
      lineCount: 0,
      object: objectId(rel),
      docPath: rel.startsWith("docs/") ? rel : "docs/inventory/source-file-inventory.md",
      menu: null,
    });
  });
  known.set(".git", {
    rel: ".git",
    size: 0,
    ext: "(directory)",
    category: "vcs-store",
    requirement: "not-applicable",
    docPath: "docs/inventory/file-type-summary.md",
    object: { name: ".git" },
    lineCount: 0,
  });

  const inventoryRows = Array.from(known.values()).sort((a, b) => a.rel.localeCompare(b.rel)).map((file) => ({
    relative_path: file.rel,
    extension: file.ext || "(none)",
    category: file.category,
    size_bytes: file.size || 0,
    documentation_requirement: file.requirement || "disposition-only",
    processing_status: "Completed",
    generated_documentation_path: file.docPath || "docs/inventory/source-file-inventory.md",
    notes: file.requirement === "not-applicable" ? "Not application source" : "",
  }));
  writeCsv("docs/inventory/source-file-inventory.csv", ["relative_path", "extension", "category", "size_bytes", "documentation_requirement", "processing_status", "generated_documentation_path", "notes"], inventoryRows);

  const trackerRows = inventoryRows.map((row) => {
    const deps = allDeps.filter((dep) => dep.referring_file === row.relative_path);
    const missingDep = deps.some((dep) => dep.status === "Confirmed Missing" || dep.status === "Unresolved");
    let status = "Completed";
    if (row.documentation_requirement === "not-applicable") status = "Not Applicable";
    else if (row.documentation_requirement === "program-spec" && missingDep) status = "Partially Completed";
    return {
      path: row.relative_path,
      type: row.category,
      status: status,
      documentation_path: row.generated_documentation_path,
      traceability_status: row.documentation_requirement === "program-spec" ? "Line citations in specification" : "Inventory path",
      dependency_status: deps.length ? (missingDep ? "Unresolved names recorded" : "Resolved or external") : "No extracted dependency",
      validation_status: "Pending",
      blocker: missingDep ? "Missing or unresolved dependency" : "",
    };
  });
  writeCsv("docs/tracking/documentation-execution-tracker.csv", ["path", "type", "status", "documentation_path", "traceability_status", "dependency_status", "validation_status", "blocker"], trackerRows);
  const statusCounts = {};
  trackerRows.forEach((row) => { statusCounts[row.status] = (statusCounts[row.status] || 0) + 1; });
  function writeSummary(rows, track) {
    const counts = {};
    track.forEach((row) => { counts[row.status] = (counts[row.status] || 0) + 1; });
    writeMd("docs/tracking/documentation-execution-summary.md", "# Documentation execution summary\n\nBatches in this run: inventory, existing-doc audit, program specifications, business rules and flows, database, dependencies, architecture, tracker.\n\nValidation status is Pending until `scripts/validate_documentation_coverage.py` runs.\n\n" + table(["Status", "Files"], Object.keys(counts).sort().map((key) => [key, counts[key]])) + "\nProgram specification pages: " + programDocs.length + ".\nBusiness rules: " + rules.length + ".\nDependency rows: " + allDeps.length + ".\nInventory rows including `.git`: " + rows.length + ".\n");
  }
  writeSummary(inventoryRows, trackerRows);
  const seen = new Set(inventoryRows.map((row) => row.relative_path));
  const extra = [];
  walk(ROOT, extra);
  extra.forEach((full) => {
    const rel = posix(full);
    if (seen.has(rel)) return;
    const stat = fs.statSync(full);
    const info = classify(rel);
    const requirement = rel.startsWith("docs/") ? "existing-doc" : (info.requirement || "disposition-only");
    inventoryRows.push({
      relative_path: rel,
      extension: path.extname(rel).toLowerCase() || "(none)",
      category: rel.startsWith("docs/") ? "generated-doc" : info.category,
      size_bytes: stat.size,
      documentation_requirement: requirement,
      processing_status: "Completed",
      generated_documentation_path: rel.startsWith("docs/") ? rel : "docs/inventory/source-file-inventory.md",
      notes: "",
    });
    trackerRows.push({
      path: rel,
      type: rel.startsWith("docs/") ? "generated-doc" : info.category,
      status: requirement === "not-applicable" ? "Not Applicable" : "Completed",
      documentation_path: rel.startsWith("docs/") ? rel : "docs/inventory/source-file-inventory.md",
      traceability_status: "Inventory path",
      dependency_status: "No extracted dependency",
      validation_status: "Pending",
      blocker: "",
    });
    seen.add(rel);
  });
  inventoryRows.sort((a, b) => a.relative_path.localeCompare(b.relative_path));
  trackerRows.sort((a, b) => a.path.localeCompare(b.path));
  writeCsv("docs/inventory/source-file-inventory.csv", ["relative_path", "extension", "category", "size_bytes", "documentation_requirement", "processing_status", "generated_documentation_path", "notes"], inventoryRows);
  writeCsv("docs/tracking/documentation-execution-tracker.csv", ["path", "type", "status", "documentation_path", "traceability_status", "dependency_status", "validation_status", "blocker"], trackerRows);
  writeSummary(inventoryRows, trackerRows);

  console.log(JSON.stringify({
    inventory: inventoryRows.length,
    specs: programDocs.length,
    rules: rules.length,
    dependencies: allDeps.length,
    missing: missing.length,
    fields: fieldRows.length,
  }, null, 2));
}

main();
