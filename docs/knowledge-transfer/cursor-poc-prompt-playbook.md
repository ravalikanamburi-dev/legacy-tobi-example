# Cursor POC playbook

Handoff date: 27 October 2026.

Two lists, both high level. The first is the requests used so far. The second is what those requests produced in Cursor. Chat text is not stored in the repository, so a row is the request, not a copied transcript.

Setup steps are in [cursor-poc-user-guide.md](cursor-poc-user-guide.md). File-level detail and open gaps are in [cursor-poc-knowledge-transfer.md](cursor-poc-knowledge-transfer.md).

## Prompts used

| # | Request |
| --- | --- |
| 1 | Document this IBM i checkout from source. |
| 2 | Cover every file, cite the source, leave unknowns unresolved, and leave IBM i source unchanged. |
| 3 | Port the COBOL members only, using that documentation as the map. |
| 4 | Follow the provider screen: list, page down, display, record the ART202 call, reject a bad option, exit, and start again. |
| 5 | Write down what was built, how to continue, and what is still open. |
| 6 | Explain how to open Cursor, set up the project, and continue the work. |
| 7 | Put those two guides on `main`. |

Each request named the task, the files, what stayed out of scope, and the check: the coverage script, `dotnet test`, or the provider-screen walk.

## Done in Cursor

Cursor was the workspace for reading the checkout, writing the documentation, and writing the COBOL port. The result is the files in the repository.

| Area | Done |
| --- | --- |
| Project rules | Documentation rules in `.cursor/rules/` and analysis skills in `.cursor/skills/`. |
| Application documentation | Source-cited package under `docs/`: inventory, 76 program specifications, business rules, flows, database catalog, and dependency list. |
| Coverage | `scripts/generate_legacy_docs.js` regenerates the package. `scripts/validate_documentation_coverage.py` checks it. Latest recorded result: 0 structural failures, 13 open dependency rows. |
| Evidence | Facts are marked Confirmed, Partially Confirmed, Inferred, or Unresolved. Menu titles and comments stay Partially Confirmed. |
| COBOL port | .NET 10 app in `dotnet/cobol-modernization/`. `PRO201` is the `/Providers` screen. The verify members and `SMPL.CBL` are in the core library and tests. |
| Provider behavior | Page of 14, page down, option 2 opens the detail, option 5 records `CALL ART202`, an invalid option stays on the list, F3 exits, restart loads the list again. Provider rows are sample data in memory. |
| Handoff | This playbook, the user guide, and the knowledge transfer. The user guide and the knowledge transfer are on `main` at commit `602f52a`. |

Left as source on IBM i: RPG, CL, the rest of menu `SAMMNU`, DDS and SQL as a database, and C and C++. Still open in the checkout: `ORD500`, `CUS200`, `pro203`, the Query Manager objects, `SAMLOG`, the COBOL `DDS-` copybooks, and the concrete library name behind `&lib1`.

## Where to start next

Use the paste-ready prompts in the user guide. They repeat requests 1 through 4 for a new session.
