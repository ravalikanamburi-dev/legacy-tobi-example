# Cursor Prompt: Complete Legacy Application Documentation

**Target repository:**
`https://github.com/ravalikanamburi-dev/legacy-tobi-example`\
**Purpose:** Generate a complete, source-traceable documentation package
for the legacy IBM i application in this repository.

> **Important:** Run this prompt in Cursor Agent mode with the full
> repository opened locally. The repository appears to be based on IBM's
> TOBI/BOB example, which includes IBM i source categories such as
> RPG/RPGLE, CL, DDS, SQL, C/C++, service-program-related source, and
> supporting project metadata. Verify the actual contents of this
> checkout before relying on any assumed file count or language
> inventory.

------------------------------------------------------------------------

## Master Prompt for Cursor Agent

Act as a senior IBM i / AS/400 application architect, legacy-code
reverse engineer, and technical documentation specialist.

Analyze the **entire currently opened repository** and create a
complete, evidence-based application documentation package. Do not stop
after writing a high-level README or a summary. Create the actual
documentation files, source inventory, dependency reports, execution
tracker, and validation script in the repository.

### Core rules

1.  Treat source code and repository configuration as the primary
    evidence.
2.  Inspect the repository before deciding which languages, programs,
    objects, and dependencies exist.
3.  Do not assume a fixed number of source files. Calculate counts from
    the current checkout and record the counting method.
4.  Do not invent business rules, field definitions, program calls,
    execution order, or dependencies.
5.  Distinguish **Confirmed**, **Inferred**, **Partially Confirmed**,
    and **Unresolved** findings.
6.  Preserve all original application source files. Do not rename,
    delete, or modify them as part of documentation generation.
7.  Do not expose secrets or copy credentials, tokens, connection
    strings, or sensitive values into documentation.
8.  Work in small batches and update the execution tracker after each
    batch.
9.  Avoid placeholder documents that merely repeat a template. Each
    completed document must contain meaningful analysis of its source.
10. Do not claim full coverage until the automated checks have run and
    remaining gaps are clearly reported.

## Phase 1 --- Repository inventory

Recursively inspect the complete repository, including hidden
project/configuration files, build files, includes, tests, and
supporting assets.

Identify and classify all files that are relevant to understanding or
building the application, including applicable:

-   RPG and RPGLE source
-   CL and CLLE source
-   COBOL source, if present
-   DDS source for physical files, logical files, display files, and
    record formats
-   SQL source, embedded SQL, tables, views, indexes, procedures, and
    other database artifacts
-   C and C++ source
-   Modules, service programs, binding source/directories, prototypes,
    copybooks, includes, and headers
-   Commands, message files, menus, job descriptions, build scripts,
    project metadata, configuration, tests, and deployment files
-   Documentation and examples

Classify binary files, generated outputs, and files that cannot be
meaningfully parsed separately. Every file must receive a documented
disposition, even if it does not require its own detailed specification.

Create:

-   `docs/inventory/source-file-inventory.csv`
-   `docs/inventory/source-file-inventory.md`
-   `docs/inventory/file-type-summary.md`

The inventory must include at least: relative path, extension/type,
category, size where available, documentation requirement, processing
status, generated documentation path, and notes/blockers.

## Phase 2 --- Audit existing documentation

Inspect all existing README files and documentation, including links to
pages that may not have been included in a prior shared output.

Create:

-   `docs/audit/existing-documentation-review.md`
-   `docs/audit/documentation-link-audit.csv`
-   `docs/audit/documentation-gaps.md`

Report missing, empty, duplicated, outdated, and incomplete pages. Do
not delete valid existing content; improve and cross-link it where
appropriate. Ensure every local documentation link points to a real
file.

## Phase 3 --- Program and component specifications

Create a dedicated specification for every applicable executable program
and significant component. Organize output by actual language and
component type, for example:

-   `docs/programs/rpg/`
-   `docs/programs/cl/`
-   `docs/programs/cobol/`
-   `docs/programs/c/`
-   `docs/programs/cpp/`
-   `docs/programs/other/`

Use only the directories that match the repository contents. For each
program, document:

1.  Program/object name and source path
2.  Purpose and business context
3.  Entry point, parameters, caller/callee information where available
4.  Inputs, outputs, files, and external interfaces
5.  Step-by-step processing logic
6.  Business rules and conditional branches
7.  Validations, calculations, and derived values
8.  Database/file operations and their modes
9.  Error handling, status codes, messages, and failure paths
10. Called programs, procedures, service programs, modules, prototypes,
    includes, and data objects
11. Side effects and changes to application data
12. Build or runtime assumptions, if evidenced
13. Source traceability: file path, procedure/paragraph/label, and line
    range where practical
14. Confidence/evidence status and unresolved questions

For RPG/RPGLE, explain relevant calculations, indicators, data
structures, subroutines, procedures, file specifications, and embedded
SQL where present. For CL/CLLE, explain commands, parameters, branching,
error handling, and invoked programs. For DDS, explain record formats,
fields, keys, and file/display usage. For SQL, explain object
definitions and data access behavior. Tailor each document to its source
type.

If source content is not interpretable or dependencies are unavailable,
document the limitation rather than guessing.

## Phase 4 --- Business rules and functional workflows

Create:

-   `docs/business-rules/business-rules-catalog.md`
-   `docs/business-rules/business-rules-catalog.csv`
-   `docs/flows/application-functional-flows.md`
-   `docs/flows/program-processing-flows.md`

Give each rule a unique ID. Record its business description, conditions,
decision logic, calculations, expected outcome, exception behavior,
related program/data objects, source file and code location, and
evidence status.

Document the major user/business workflows and technical execution
paths. Use Mermaid diagrams when supported by source evidence. Mark
inferred paths explicitly and do not present them as verified behavior.

## Phase 5 --- Database, DDS, and data mapping

Create:

-   `docs/database/database-object-catalog.md`
-   `docs/database/database-field-definitions.csv`
-   `docs/database/file-and-table-relationships.md`
-   `docs/database/program-data-access-matrix.csv`
-   `docs/database/data-mappings.md`

Document applicable physical files, logical files, display files, record
formats, fields, data types, lengths, precision, keys, constraints,
tables, views, indexes, stored procedures, and data access operations.

Trace data objects to the programs that read or change them. Explain
joins, relationships, transformations, and input-to-output mappings only
when the source supports them. Mark unknown definitions as unknown.

## Phase 6 --- Dependency discovery and validation

Build a dependency inventory from actual references, including program
calls, procedure calls, service programs, modules, binding information,
includes, copybooks, DDS/database objects, and external commands or
interfaces.

Create:

-   `docs/dependencies/dependency-inventory.csv`
-   `docs/dependencies/dependency-validation-report.md`
-   `docs/dependencies/missing-dependencies.csv`
-   `docs/dependencies/dependency-diagrams.md`

For each dependency, record the referenced name, referring file and code
location, dependency type, evidence, and status. Use statuses such as
**Resolved**, **External Dependency**, **Dynamic Reference**,
**Unresolved**, and **Confirmed Missing**.

Search the entire repository and inspect declarations before marking
anything missing. A name not found as a filename is not sufficient
evidence that a dependency is missing. Consider naming conventions,
build metadata, dynamic calls, externally supplied IBM i objects, and
generated objects where applicable.

## Phase 7 --- Architecture and application overview

Create or update:

-   `docs/architecture/application-architecture.md`
-   `docs/architecture/component-catalog.md`
-   `docs/architecture/integration-overview.md`
-   `docs/architecture/build-and-execution-model.md`
-   `docs/README.md`

Explain the repository structure, application components, entry points,
program interactions, database/file access, integrations, and
build/execution flow to the extent supported by evidence. Separate
verified facts from assumptions.

## Phase 8 --- Cursor rules and repeatable batch processing

Create a reusable Cursor project rule at:

-   `.cursor/rules/legacy-documentation.mdc`

The rule must instruct future Cursor sessions to analyze source before
documenting it, follow consistent templates, cite source locations,
avoid unsupported claims, process related components in manageable
batches, update the tracker, preserve original source, and record
blockers and unresolved dependencies.

Create:

-   `docs/tracking/documentation-execution-tracker.csv`
-   `docs/tracking/documentation-execution-summary.md`

Track each source file's path, type, status, documentation path,
traceability status, dependency status, validation status, and blocker
details. Use controlled statuses such as **Not Started**, **In
Progress**, **Completed**, **Partially Completed**, **Blocked**, and
**Not Applicable**.

Resume from the tracker after each batch. Do not mark a file completed
unless the required analysis and validation have actually been
performed.

## Phase 9 --- Automated coverage validation

Create a script:

`scripts/validate_documentation_coverage.py`

The script should compare the source inventory with the generated
documentation and report:

1.  Relevant source files without a documented disposition
2.  Applicable programs without dedicated specifications
3.  Empty or missing documentation files
4.  Missing local links referenced by README and Markdown documents
5.  Missing required sections in program specifications
6.  Invalid source paths and line references where practical
7.  Tracker entries with inconsistent or incomplete statuses
8.  Unresolved dependencies listed in the dependency report
9.  Counts of inventoried, analyzed, fully documented, partially
    documented, blocked, skipped, and not-applicable files
10. Overall coverage and remaining gaps

Write results to:

-   `docs/audit/coverage-validation-report.md`
-   `docs/audit/coverage-validation-results.csv`

Support a repeatable command:

``` bash
python scripts/validate_documentation_coverage.py
```

Use repository-relative paths, handle missing directories and parse
errors gracefully, and return a non-zero exit code when validation
failures exist. Avoid false positives for external links, anchors,
generated files, and documented exceptions. Do not report success if
required checks fail.

## Phase 10 --- Final consistency review

Align the README, architecture documents, component specifications,
business rules, dependency reports, and final summary with the actual
analysis completed. Fix broken links and incomplete sections, then rerun
the validation script.

Create:

-   `docs/final-review/documentation-quality-review.md`
-   `docs/final-review/final-coverage-summary.md`
-   `docs/final-review/unresolved-gaps-and-next-actions.md`

If a PDF is required, first create and validate its Markdown source.
Regenerate the PDF only if the available tooling supports it reliably;
otherwise state clearly that PDF generation remains outstanding. Do not
label a discovery document as fully validated if source-level validation
is still incomplete.

## Final acceptance criteria

The work is complete only when:

-   Every repository file has an inventory entry and documented
    disposition.
-   Every applicable program has a meaningful specification or an
    explicit, justified limitation.
-   Business rules and technical flows include source traceability.
-   Database and DDS artifacts are documented where present.
-   Dependencies have been investigated and unresolved cases are
    reported.
-   README links point to existing local documents.
-   The execution tracker matches the generated output.
-   The validation script has been run and its actual results are
    recorded.
-   Remaining gaps and manual follow-up tasks are explicit.

At the end, provide a concise summary with actual counts for files
inventoried, files analyzed, program specifications generated, business
rules traced, dependencies resolved/unresolved, documents generated,
broken links, validation results, and remaining manual-review items.

**Do the work in the repository; do not return only a plan or sample
output.** Begin with the repository inventory and documentation audit,
then proceed in small batches. Preserve the original application source
and do not claim full completion while outstanding work remains.
