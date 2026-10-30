# Legacy application documentation and validation

Cursor master prompt. Handoff date: 29 October 2026.

This document stands on its own. It is the reusable prompt for one end-to-end documentation pass in Cursor Agent, updated for the files, evidence labels, dependency statuses, and skills in this checkout.

## Purpose

Inspect the existing source, build configuration, generated documentation, and Cursor skills. Improve that implementation. Finish the documentation, dependency analysis, validation, and reporting that this checkout can support. Leave anything the checkout cannot prove marked unresolved.

## How to use

1. Open this repository root in Cursor. The folder contains `iproj.json`.
2. Open Agent with `Ctrl+I` (`Cmd+I` on macOS). For this pass, press `Shift+Tab` until Plan mode is on. Approve the plan before large edits.
3. Copy the master prompt in [Prompt to paste](#prompt-to-paste) into the agent.
4. Review the plan. Reject changes to IBM i source under `Q*` directories, `includes/`, `common/`, `functionsVAT/`, or `globalization/`, and reject changes to `Rules.mk` or `iproj.json`, unless the assignment explicitly approves them.
5. Read the reports. A row that names an SME stays open until that person confirms it. Cursor cannot sign off for them.

## What this checkout already has

Reuse these. Do not start a second documentation tree.

| Already present | Role |
| --- | --- |
| `docs/README.md` | Application narrative |
| `scripts/generate_legacy_docs.js` | Regenerates the delivered package |
| `scripts/validate_documentation_coverage.py` | Structural coverage check |
| `docs/inventory/` | One row per file |
| `docs/programs/` | One specification per executable member |
| `docs/dependencies/` | Dependency inventory, missing-name list, and diagrams |
| `docs/business-rules/` | Menu and SQL rules |
| `docs/flows/` | Menu flow and the order-entry path |
| `docs/database/` | DDS and SQL catalog |
| `docs/architecture/` | Build and component notes |
| `docs/audit/` and `docs/final-review/` | Coverage, gaps, and open actions |
| `docs/application/` | Earlier package. Keep it. Regenerate it only when the assignment names it |
| `.cursor/rules/` | Evidence, discovery, and coverage rules |
| `.cursor/skills/` | Analysis skills listed below |
| `dotnet/cobol-modernization/` | COBOL-only .NET port. It is not IBM i runtime evidence |

## Labels to keep

Evidence labels stay these four: Confirmed, Partially Confirmed, Inferred, Unresolved. A menu title or a comment is Partially Confirmed. A fact this checkout does not contain is Unresolved.

Dependency statuses stay the ones the generator already writes:

| Status in this repository | Meaning here |
| --- | --- |
| Resolved | An object or member stem in this checkout matches the name |
| External Dependency | The name is in the fixed IBM set recorded by the generator |
| Dynamic Reference | The call target starts with `&` |
| Confirmed Missing | A `CALL PGM`, `extpgm`, or copy name matches nothing in this checkout |
| Unresolved | Named, and neither resolved nor in the IBM set |

Confirmed Missing means the member is not in this checkout. It does not prove the object is absent from an IBM i system. Do not delete the row. Do not mark it Resolved without source in the tree.

## Six responsibilities, existing skills

Do not add a second set of skills named Discovery, Dependency Analysis, Business-Rule Extraction, Documentation Generation, Validation, or Reporting. Improve the skill that already covers that work.

| Responsibility in the master prompt | Skill or tool already in this repository |
| --- | --- |
| Discovery | `ibmi-source-inventory`, with `.cursor/rules/ibmi-doc-discovery.mdc` |
| Dependency analysis | `ibmi-build-dependency-analysis` |
| Business-rule extraction | `ibmi-program-analysis`, plus `ibmi-data-definition-analysis` and `ibmi-interface-analysis` |
| Documentation generation | `scripts/generate_legacy_docs.js` for the delivered package. `ibmi-app-documentation` only when the assignment names `docs/application/` |
| Validation | `scripts/validate_documentation_coverage.py`, with `.cursor/rules/ibmi-doc-coverage.mdc` and `.cursor/rules/ibmi-doc-evidence.mdc` |
| Reporting | `docs/audit/`, `docs/final-review/`, and `docs/tracking/` |

`tobi-makei`, `tobi-rpgle`, and `tobi-rpgunit` are coding conventions. They are not evidence. Use them only when the assignment is to change IBM i source or tests.

## Prompt to paste

```text
Act as a senior legacy application analyst for this IBM i checkout. Review the repository, the build configuration, the documentation under docs/, and the skills under .cursor/skills/. Improve what is already here. Do not start a second documentation package.

Read these before editing:
- .cursor/rules/legacy-documentation.mdc
- .cursor/rules/ibmi-doc-evidence.mdc
- .cursor/rules/ibmi-doc-discovery.mdc
- .cursor/rules/ibmi-doc-coverage.mdc
- docs/knowledge-transfer/cursor-poc-knowledge-transfer.md
- docs/final-review/unresolved-gaps-and-next-actions.md

Evidence labels are only Confirmed, Partially Confirmed, Inferred, and Unresolved. Dependency statuses are only Resolved, External Dependency, Dynamic Reference, Confirmed Missing, and Unresolved. Confirmed Missing means the name is not in this checkout. It is not proof the object is absent from an IBM i system. A menu label or a comment is Partially Confirmed. Do not invent programs, business rules, screenshots, build results, library names, or SME approvals.

Leave IBM i source unchanged. Do not edit Rules.mk or iproj.json. Do not regenerate docs/application/ unless this assignment names that package. The delivered package is produced by node scripts/generate_legacy_docs.js.

Work in this order.

1. Source discovery. Inventory programs, copybooks, screens, database files, service programs, binding directories, build scripts, tests, configuration, and CCSID files. Reconcile that inventory with docs/inventory/source-file-inventory.csv. Recount. Do not copy an older file count.

2. Unresolved references. Investigate ORD500, CUS200, pro203, the COBOL DDS- copybooks, CUSQRY, CUSQRYFMT, ARTQRY, and SAMLOG. For each, record the referencing member, path and line where the checkout has one, the dependency status, the business scenario named by the menu or the caller, and the next action. ORD500O is a printer file. ORD500C is a different CL program. CUS200D is a display file, not the program CUS200. Absence of a member is not a reason to delete the row.

3. Build and runtime configuration. Compare QBNDSRC/SAMPLE.BNDDIR with QBNDSRC/Rules.mk and record both lists. Explain, from the root Rules.mk and iproj.json, why QTRGSRC and QTESTSRC are outside the default makei build. Record CCSID files and the library token &lib1. The concrete library name is Unresolved. Separate Confirmed findings from items that need a build engineer or an SME.

4. Dependency matrices. Update the existing matrices rather than inventing a new status vocabulary. Cover caller to callee, program to copybook, program to file, program to screen, and program to service program or build target. Each row needs dependency type, source location, resolution status, business scenario where the source names one, and evidence. Home for these rows: docs/dependencies/ and docs/database/program-data-access-matrix.csv.

5. Business rules and scenarios. Take rules, validations, calculations, conditions, and file updates from source statements. Map each one to the programs, screens, files, and copybooks the source names. Cite path and line. Two scenarios are in scope when the source supports them: menu option 6 through ORD100C2 and ORD100, with ORD500 left unresolved, and menu option 5, the COBOL module PRO201. Do not describe the .NET pages as IBM i screens.

6. Skills. Improve the existing skills in place: ibmi-source-inventory, ibmi-build-dependency-analysis, ibmi-program-analysis, ibmi-data-definition-analysis, ibmi-interface-analysis, and ibmi-app-documentation. Do not add duplicate skills named Discovery, Dependency Analysis, Business-Rule Extraction, Documentation Generation, Validation, or Reporting. Skills must keep the evidence rules and must not tell a later session to edit IBM i source in order to make documentation easier.

7. Excel workbook. Create one workbook for the order-entry path, the PRO201 provider display, or both, and only where a source statement supports the row. Columns: scenario, business rule, program, screen, file, dependency, source path, evidence label, validation status, gap, SME question. Do not add a screenshot unless a real image already exists in the repository or was captured from the running IBM i application. The local .NET site is not that application. If a workbook cannot be written, record that as a blocker instead of inventing one.

8. Validation. Run node scripts/generate_legacy_docs.js and then python scripts/validate_documentation_coverage.py from the repository root. Update the hand-maintained count pages so they match docs/audit/coverage-validation-report.md. Record checks that ran, checks that were skipped, failures, and blockers. A pass with open dependency rows is still an incomplete business picture. Do not call the package complete while source-level questions remain open.

9. Reports. Update the existing pages rather than opening a parallel folder. Source inventory and matrices stay under docs/inventory, docs/dependencies, and docs/database. Program and scenario pages stay under docs/programs, docs/flows, and docs/business-rules. Build findings stay under docs/architecture. The unresolved register stays in docs/dependencies/missing-dependencies.csv and docs/final-review/unresolved-gaps-and-next-actions.md. Coverage stays in docs/audit/coverage-validation-report.md. SME questions stay in the unresolved-gaps page. The execution summary stays in docs/tracking/documentation-execution-summary.md.

When you finish, summarize files created or updated, the validation result, coverage counts and what they are counts of, unresolved dependencies, business impact of each gap, blockers, SME questions, and remaining actions. State anything this checkout cannot verify.
```

## Expected deliverables

| Deliverable | Where it belongs |
| --- | --- |
| Source inventory | `docs/inventory/source-file-inventory.csv` |
| Dependency matrices | `docs/dependencies/` and `docs/database/program-data-access-matrix.csv` |
| Business scenarios with source lines | `docs/flows/`, `docs/business-rules/`, and the program pages |
| Build and runtime findings | `docs/architecture/build-and-execution-model.md` |
| Unresolved register | `docs/dependencies/missing-dependencies.csv` and `docs/final-review/unresolved-gaps-and-next-actions.md` |
| Updated skills | The six existing analysis skills listed above, edited in place |
| Excel workbook | One workbook for option 6, PRO201, or both, only when the rows are source-backed |
| Coverage report | `docs/audit/coverage-validation-report.md` |
| Build and test readiness | A section in the execution summary. `makei build` needs an IBM i environment. The .NET tests do not prove the IBM i build |
| SME questions | Open rows in `docs/final-review/unresolved-gaps-and-next-actions.md` |
| Final limitations | The same open-gaps page, plus the agent summary |

## Validation principle

A generated page is not proof that a dependency or a business rule is correct. A finding needs a source line, a build entry, or an explicit Unresolved mark. External commands, objects that are not in this checkout, and questions waiting on an SME stay open until they are verified.
