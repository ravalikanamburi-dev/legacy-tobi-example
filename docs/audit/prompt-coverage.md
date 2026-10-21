# Documentation requirement coverage

This page maps each required documentation point to the file that carries it. Status is Confirmed when that file exists and contains source-backed content. A source fact that the checkout does not contain stays Unresolved in the linked page. No Inferred business behavior is added to close a gap.

## Phase 1 — Repository inventory

| Requirement | Where | Status |
| --- | --- | --- |
| Recursive inventory of the working tree | [../inventory/source-file-inventory.csv](../inventory/source-file-inventory.csv) | Confirmed |
| Counting method recorded | [../inventory/file-type-summary.md](../inventory/file-type-summary.md) | Confirmed |
| Path, extension, category, size, requirement, status, doc path, notes | CSV columns in the inventory | Confirmed |
| Binary and unparsed files given a disposition | Inventory rows with requirement `not-applicable` | Confirmed |

## Phase 2 — Audit existing documentation

| Requirement | Where | Status |
| --- | --- | --- |
| Review of existing README and docs | [existing-documentation-review.md](existing-documentation-review.md) | Confirmed |
| Local link audit | [documentation-link-audit.csv](documentation-link-audit.csv) | Confirmed |
| Missing, empty, and incomplete pages | [documentation-gaps.md](documentation-gaps.md) | Confirmed |
| Prior package kept | [../application/README.md](../application/README.md) | Confirmed |

## Phase 3 — Program specifications

Each applicable program page uses these sections. A section that says Unresolved means the member did not contain that kind of statement.

| Required point | Section on each program page |
| --- | --- |
| 1. Name and source path | Identity |
| 2. Purpose and business context | Purpose. Menu text is Partially Confirmed. Comments are claims. |
| 3. Entry, parameters, callers | Entry and calls |
| 4. Inputs, outputs, files, interfaces | Files and interfaces |
| 5. Step-by-step processing | Processing logic. CL command order is the written order. RPG subroutine order is not an execution trace. |
| 6. Business rules and branches | Business rules and branches |
| 7. Validations and calculations | Validations and calculations |
| 8. Database and file modes | Data operations |
| 9. Error handling | Error handling |
| 10. Calls, procedures, copies, data objects | Dependencies |
| 11. Side effects | Side effects |
| 12. Build or runtime assumptions | Build assumptions |
| 13. Path and line | Traceability |
| 14. Confidence and open questions | Evidence status |

Language folders that this checkout actually contains: `docs/programs/rpg/`, `docs/programs/cl/`, `docs/programs/cobol/`, `docs/programs/c/`, `docs/programs/cpp/`, `docs/programs/other/`. Index: [../programs/README.md](../programs/README.md).

DDS record formats, fields, and keys are in the database catalog, not duplicated as program pages.

## Phase 4 — Business rules and flows

| Requirement | Where | Status |
| --- | --- | --- |
| Unique rule IDs | [../business-rules/business-rules-catalog.csv](../business-rules/business-rules-catalog.csv) | Confirmed |
| Condition, logic, outcome, objects, source, evidence | Same CSV columns | Confirmed |
| User workflow from the menu | [../flows/application-functional-flows.md](../flows/application-functional-flows.md) | Partially Confirmed. The diagram quotes menu labels. |
| Technical path for order entry | [../flows/program-processing-flows.md](../flows/program-processing-flows.md) | Confirmed through `ORD100`. `ORD500` is Unresolved. |

## Phase 5 — Database and DDS

| Requirement | Where | Status |
| --- | --- | --- |
| Physical, logical, display, printer, SQL objects | [../database/database-object-catalog.md](../database/database-object-catalog.md) | Confirmed |
| Fields, lengths, text, keys | [../database/database-field-definitions.csv](../database/database-field-definitions.csv) | Confirmed where the DDS writes them. Reference fields are Partially Confirmed. |
| REF, PFILE, JFILE relationships | [../database/file-and-table-relationships.md](../database/file-and-table-relationships.md) | Confirmed for extracted keywords |
| Programs that declare or update data | [../database/program-data-access-matrix.csv](../database/program-data-access-matrix.csv) | Confirmed for declarations and embedded SQL text |
| Input-to-output mappings | [../database/data-mappings.md](../database/data-mappings.md) | Confirmed only for SQL statements the source writes |

## Phase 6 — Dependencies

| Requirement | Where | Status |
| --- | --- | --- |
| Referenced name, file, location, type, evidence, status | [../dependencies/dependency-inventory.csv](../dependencies/dependency-inventory.csv) | Confirmed |
| Statuses Resolved, External Dependency, Dynamic Reference, Unresolved, Confirmed Missing | [../dependencies/dependency-validation-report.md](../dependencies/dependency-validation-report.md) | Confirmed |
| Names searched against members and build targets before marked missing | Same report | Confirmed |
| Unresolved and missing names | [../dependencies/missing-dependencies.csv](../dependencies/missing-dependencies.csv) | Confirmed as an open list |
| Diagram of confirmed calls | [../dependencies/dependency-diagrams.md](../dependencies/dependency-diagrams.md) | Confirmed for the edges named there |

## Phase 7 — Architecture

| Requirement | Where | Status |
| --- | --- | --- |
| Application overview | [../README.md](../README.md) and [../architecture/application-architecture.md](../architecture/application-architecture.md) | Confirmed |
| Component catalog | [../architecture/component-catalog.md](../architecture/component-catalog.md) | Confirmed |
| Integrations | [../architecture/integration-overview.md](../architecture/integration-overview.md) | Confirmed |
| Build and execution | [../architecture/build-and-execution-model.md](../architecture/build-and-execution-model.md) | Confirmed. Job schedules and user profiles are Unresolved. |

## Phase 8 — Rule and tracker

| Requirement | Where | Status |
| --- | --- | --- |
| Cursor rule for later sessions | `../../.cursor/rules/legacy-documentation.mdc` | Confirmed |
| Per-file tracker | [../tracking/documentation-execution-tracker.csv](../tracking/documentation-execution-tracker.csv) | Confirmed |
| Batch summary | [../tracking/documentation-execution-summary.md](../tracking/documentation-execution-summary.md) | Confirmed |

## Phase 9 — Coverage validation

| Requirement | Where | Status |
| --- | --- | --- |
| Repeatable script | `../../scripts/validate_documentation_coverage.py` | Confirmed |
| Report and result CSV | [coverage-validation-report.md](coverage-validation-report.md), [coverage-validation-results.csv](coverage-validation-results.csv) | Confirmed after the script is run |

## Phase 10 — Final review

| Requirement | Where | Status |
| --- | --- | --- |
| Quality review | [../final-review/documentation-quality-review.md](../final-review/documentation-quality-review.md) | Confirmed |
| Coverage summary | [../final-review/final-coverage-summary.md](../final-review/final-coverage-summary.md) | Confirmed |
| Remaining gaps | [../final-review/unresolved-gaps-and-next-actions.md](../final-review/unresolved-gaps-and-next-actions.md) | Confirmed |
| PDF | Not generated | Outstanding. The Markdown package is the delivered form. |

Application source files are not modified by this generation.
