# Cursor POC knowledge transfer

Handoff date: 26 October 2026.

This is the working reference for the Cursor proof of concept in this repository. Read it before changing documentation, the generator, the coverage check, or the COBOL-to-.NET slice. It records what was built, how it was built, what is finished, and how to continue without reconstructing the process.

The setup guide for a new machine is [cursor-poc-user-guide.md](cursor-poc-user-guide.md). Start there to install Cursor, clone this repository, open the folder, and run the first-day checks. This page is the technical record those checks rely on.

The application under study is the sample IBM i checkout in this repository. The proof of concept did two things with it:

1. Produce a source-cited documentation package that covers every file in the working tree.
2. Port the COBOL members only to a .NET 10 web application, using that documentation as the map.

RPG, CL, DDS programs other than the provider display, SQL tables, and menu `SAMMNU` were not rewritten.

## How to use this document

| If you need to | Start at |
| --- | --- |
| See the requests used so far | [cursor-poc-prompt-playbook.md](cursor-poc-prompt-playbook.md) |
| Open Cursor and set up this repository | [cursor-poc-user-guide.md](cursor-poc-user-guide.md) |
| Understand the sample application | [Application in one page](#application-in-one-page), then [docs/README.md](../README.md) |
| Refresh or extend the documentation | [Documentation process](#documentation-process) |
| Run or extend the .NET port | [COBOL to .NET implementation](#cobol-to-net-implementation) |
| See what is still open | [Current status and open items](#current-status-and-open-items) |
| Pick up the next task | [How to continue](#how-to-continue) |

Evidence labels used throughout the package, and in this handoff when a fact comes from source, are only these four:

| Label | Meaning |
| --- | --- |
| Confirmed | A source line or build entry shows it |
| Partially Confirmed | The text is a comment, menu label, object text, or a statement whose runtime effect is not fully shown |
| Inferred | A conclusion drawn from evidence, and labeled as such |
| Unresolved | The checkout does not contain the fact |

Do not invent a fifth label. Do not upgrade a menu label or a comment to Confirmed.

## Repository layout

Git remote recorded for this workspace: `https://github.com/ravalikanamburi-dev/legacy-tobi-example.git`.

`iproj.json` still stores a different repository string, `https://github.com/edmundreinhardt/tobi-example.git`. Both strings are kept as written. Neither string proves the IBM i library the programs run in. The library token in `iproj.json` is `&lib1`. The concrete library name is Unresolved. Editor actions pass `lib1=&CURLIB`.

| Path | Role |
| --- | --- |
| `QRPGLESRC/`, `QRPGSRC/`, `QCLSRC/`, `QCBLSRC/`, `QCSRC/`, `QCPPSRC/`, `QSQLSRC/`, `QDDSSRC/`, and the other `Q*` directories | IBM i source. Do not edit these while documenting. |
| `iproj.json`, `Rules.mk`, `*/Rules.mk`, `.ibmi.json` | makei build metadata |
| `docs/README.md` | Hand-written application narrative and index of the delivered package |
| `docs/programs/`, `docs/database/`, `docs/business-rules/`, `docs/flows/`, `docs/dependencies/`, `docs/architecture/`, `docs/inventory/`, `docs/tracking/`, `docs/audit/` | Generated documentation package |
| `docs/final-review/` | Hand-maintained quality review and open-gap list |
| `docs/application/` | Earlier documentation package. Kept. Not deleted by later runs. |
| `docs/knowledge-transfer/cursor-poc-user-guide.md` | Step-by-step setup and daily use of Cursor for this proof of concept |
| `docs/knowledge-transfer/cursor-poc-knowledge-transfer.md` | This handoff |
| `scripts/generate_legacy_docs.js` | Regenerates the delivered package from the checkout |
| `scripts/validate_documentation_coverage.py` | Structural coverage check. Exit 0 only when there are no validation failures. |
| `.cursor/rules/` | Rules a later Cursor session must follow when documenting |
| `.cursor/skills/` | Analysis skills and the earlier package templates |
| `.cursor/ibmi-documentation.json` | Configuration for the earlier `docs/application/` package |
| `dotnet/cobol-modernization/` | COBOL-only .NET 10 port |

## What Cursor was used for

Cursor was used as the workspace for reverse engineering and for the COBOL port. The durable result is the files in the repository, not a chat transcript.

A later session should follow the rules already stored in the repo:

| Rule | File | What it requires |
| --- | --- | --- |
| Legacy documentation | `.cursor/rules/legacy-documentation.mdc` | Cite path and line. Use the four evidence labels. Do not modify application source while documenting. Update the tracker. Run the coverage script before claiming coverage. |
| Evidence | `.cursor/rules/ibmi-doc-evidence.mdc` | A comment is a claim. When two artifacts disagree, record both. Do not invent libraries, schedules, or authority. |
| Discovery | `.cursor/rules/ibmi-doc-discovery.mdc` | Classify from the file name and extension. Do not assume one application's names. |
| Coverage | `.cursor/rules/ibmi-doc-coverage.mdc` | Every source artifact is included. |

Project skills under `.cursor/skills/` support that work:

| Skill | Use it when |
| --- | --- |
| `ibmi-source-inventory` | Classifying the tree and building the machine-readable inventory for `docs/application/` |
| `ibmi-program-analysis` | Reading RPG, CL, COBOL, C, and C++ members |
| `ibmi-data-definition-analysis` | Reading DDS, SQL tables, views, sequences, data areas, and data queues |
| `ibmi-interface-analysis` | Reading display files, printer files, commands, menus, panel groups, and message files |
| `ibmi-build-dependency-analysis` | Reading `Rules.mk`, binding directories, triggers, and CCSID files |
| `ibmi-app-documentation` | Regenerating the earlier package under `docs/application/` |
| `tobi-makei`, `tobi-rpgle`, `tobi-rpgunit` | Changing IBM i source or tests. They are coding conventions, not evidence. Confirm any claim in source before writing it into the documentation. |

`.cursor/ibmi-documentation.json` sets `doNotGenerateUntilAsked` to true. Do not regenerate `docs/application/` unless someone explicitly asks for that package. The package this proof of concept delivers and validates is the one under `docs/`, produced by `scripts/generate_legacy_docs.js`.

## Application in one page

The root `README.md` describes the checkout as a sample IBM i application with multiple source types, using project metadata in `iproj.json`. The operator menu `QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC` shows the title "Arcad Sample Application". That title, the copyright line, and comments such as "Source generated by ARCAD Software" are labels. They are Partially Confirmed as text in the file. They are not proof of runtime behavior.

The checkout holds two kinds of source at once:

1. A menu-driven sample whose options name articles, customers, orders, providers, countries, and parameters.
2. A makei sample that also contains COBOL, C, C++, OPM RPG, SQL, globalization members, service programs, and two RPGUnit tests.

The only operator entry defined here is menu `SAMMNU`. The most complete path in source is menu option 6, Create a Customer Order:

1. `QCLSRC/ORD100C2.PGM.CLLE` deletes `QTEMP/DETORD`, duplicates `DETORD` into `QTEMP` with no constraints and no triggers, overrides `TMPDETORD`, and calls `ORD100`.
2. `QRPGLESRC/ORD100.PGM.RPGLE` is the ILE RPG program. It declares `order`, `detord`, `Tmpdetord`, and workstation file `ord100d`, and it prototypes `ORD500`.
3. There is no source member for `ORD500`. What that call does is Unresolved.

Menu option 5, Display Providers, calls `pro201`. The checkout builds `PRO201` as a COBOL **module** (`QCBLSRC/Rules.mk` target `PRO201.MODULE`), not as a `*PGM`. That module is the one the .NET slice ports. Full menu, file, and build detail is in [docs/README.md](../README.md).

Build command stored in `iproj.json`: `/QOpenSys/pkgs/bin/makei build`. Running that command needs an IBM i environment with makei. It is not required to read the documentation or to run the .NET slice on Windows.

## Two documentation packages

Keep them separate.

| Package | How it is produced | Unknown marker | Status in this POC |
| --- | --- | --- | --- |
| `docs/application/` | Skills and templates listed in `.cursor/ibmi-documentation.json`. Output directory is `package.outputDirectory`. | `NOT EVIDENCED` | Earlier package. Still present. Do not delete it. |
| `docs/` (everything except `docs/application/` and this handoff's prose) | `node scripts/generate_legacy_docs.js`, plus a few hand-maintained pages | Confirmed, Partially Confirmed, Inferred, Unresolved | Delivered package. This is what the coverage script checks. |

`docs/application/` is a narrative guide plus one page per object (`programs/`, `screens/`, `data-stores/`, and so on). The later package adds the inventory, one specification per executable member, the rule catalog, the dependency check, and the coverage script. Later runs do not delete `docs/application/`.

## Documentation process

Work in this order. Each step has a concrete output. Do not skip the coverage script and then call the package complete.

### Step 1. Read before writing

1. Read `.cursor/rules/legacy-documentation.mdc`.
2. Read [docs/README.md](../README.md) and this handoff.
3. Read the source member you are about to describe. Cite a repository path and, where practical, a line number.
4. Do not copy file counts or object names from an older checkout. Recount.

### Step 2. Inventory the working tree

The generator walks the repository from the root. It skips `.git` contents (the directory itself is one inventory row), `node_modules`, `bin`, and `obj`. Classification uses the file name and extension. A directory name is not treated as a language.

Requirement values written to `docs/inventory/source-file-inventory.csv`:

| Requirement | Meaning |
| --- | --- |
| `program-spec` | A dedicated page under `docs/programs/` |
| `data-entry` | A section in `docs/database/database-object-catalog.md` |
| `component-entry` | A section in `docs/architecture/component-catalog.md` |
| `existing-doc` | The Markdown file is itself the document |
| `disposition-only` | Build metadata, a manifest, prose, or tooling. Recorded in the inventory. No separate specification. |
| `not-applicable` | Binary or IDE state, including the `.git` row |

Object names come from the makei member pattern. In `ART200-Work_with_article.PGM.SQLRPGLE`, the object is `ART200` and the type token is `PGM`. The words after the hyphen are a description, not the object name.

### Step 3. Regenerate the package

From the repository root, with Node.js 18 or newer:

```bash
node scripts/generate_legacy_docs.js
```

The script does not modify IBM i source. It rewrites the generated pages listed below. Hand edits to those pages are replaced on the next run. Put narrative that must survive a regeneration into one of the hand-maintained files.

Generated, and overwritten on the next run:

| Output | Contents |
| --- | --- |
| `docs/programs/<language>/<object>.md` | One specification per `program-spec` file. Languages present: `rpg`, `cl`, `cobol`, `c`, `cpp`, `other`. |
| `docs/programs/README.md` | Index of those specifications |
| `docs/database/database-object-catalog.md` | DDS and SQL objects |
| `docs/database/database-field-definitions.csv` | Field and statement rows |
| `docs/database/file-and-table-relationships.md` | `REF`, `PFILE`, and `JFILE` only |
| `docs/database/program-data-access-matrix.csv` | File declarations and embedded SQL text |
| `docs/database/data-mappings.md` | Mappings only where a source statement writes them |
| `docs/business-rules/business-rules-catalog.md` and `.csv` | Menu actions and SQL statements, with IDs `BR-001` onward |
| `docs/flows/application-functional-flows.md` | Menu diagram. An arrow means the menu names that option. |
| `docs/flows/program-processing-flows.md` | Order-entry path through `ORD100`. `ORD500` stays Unresolved. |
| `docs/dependencies/dependency-inventory.csv` | Every extracted name |
| `docs/dependencies/missing-dependencies.csv` | Rows whose status is Confirmed Missing or Unresolved |
| `docs/dependencies/dependency-validation-report.md` | How each status was decided |
| `docs/dependencies/dependency-diagrams.md` | Call edges whose callee source exists |
| `docs/architecture/application-architecture.md` | Structure taken from `README.md` and `iproj.json` |
| `docs/architecture/component-catalog.md` | Copy members, binder source, display-related members that are not program specs |
| `docs/architecture/integration-overview.md` | External names and missing programs |
| `docs/architecture/build-and-execution-model.md` | makei command, directory order, CCSID locations |
| `docs/inventory/source-file-inventory.md` and `.csv` | One row per file, plus `.git` |
| `docs/inventory/file-type-summary.md` | Category totals |
| `docs/audit/existing-documentation-review.md` | Review of Markdown already in the tree |
| `docs/audit/documentation-link-audit.csv` | Local link check performed during generation |
| `docs/audit/documentation-gaps.md` | Limits of the source. Not filled by inference. |
| `docs/audit/prompt-coverage.md` | Requirement-to-file map |
| `docs/tracking/documentation-execution-tracker.csv` | One row per inventoried path |
| `docs/tracking/documentation-execution-summary.md` | Status counts for that run |

Hand-maintained. The generator does not rewrite these, provided `docs/README.md` still starts with the heading `# Legacy IBM i application`:

| File | Why it is kept by hand |
| --- | --- |
| `docs/README.md` | Application narrative, menu walkthrough, and the count paragraph that must match the latest validation report |
| `docs/final-review/documentation-quality-review.md` | Quality review |
| `docs/final-review/final-coverage-summary.md` | Counts copied from the validation report |
| `docs/final-review/unresolved-gaps-and-next-actions.md` | Open items and the next action for each |
| `docs/application/**` | Earlier package |
| `docs/knowledge-transfer/cursor-poc-user-guide.md` | Setup guide. Inventoried as `existing-doc`. |
| `docs/knowledge-transfer/cursor-poc-knowledge-transfer.md` | This handoff. Inventoried as `existing-doc`. |

After generation, every tracker row has `validation_status` `Pending`. That is expected. The generator does not run the coverage script.

### Step 4. What each program specification contains

Every generated program page has these sections, in this order. The coverage script fails if any heading is missing. A section that says Unresolved means the extractor did not find that kind of statement in the member. It does not mean someone forgot to write the section.

| Section | What belongs there |
| --- | --- |
| Identity | Object name, source path, category, line count |
| Purpose | Menu text and header comments, marked Partially Confirmed when they are labels |
| Entry and calls | Parameters and `CALL` / `extpgm` names the extractor found |
| Files and interfaces | File declarations |
| Processing logic | CL command order is the written order. RPG subroutine order is not an execution trace. |
| Business rules and branches | Conditions copied from the member. A condition is not given a new business name. |
| Validations and calculations | Comparisons and SQL text the extractor found |
| Data operations | File-spec mode or SQL. A declaration is not proof of every runtime read or write. |
| Error handling | Monitors and error indicators the extractor found |
| Dependencies | Name, kind, status, location, resolved path |
| Side effects | Output, update, or SQL that changes rows, when the member shows it |
| Build assumptions | Control specifications and binding directories found in the member |
| Traceability | The path cited, plus any indicators extracted |
| Evidence status | What is Confirmed and what remains Unresolved |

The COBOL extractor is narrower than a COBOL programmer's reading of the member. `QCBLSRC/PRO201.CBLLE` is the example. The generated page records the `CALL "ART202"` and the `WHEN` conditions, and it leaves Files and interfaces Unresolved because the COBOL `SELECT` statements are not RPG file specifications. The behavioral reading used for the .NET port is in [COBOL to .NET implementation](#cobol-to-net-implementation), and it cites the COBOL line numbers directly. When you extend a specification by hand, put the extra sentences in a hand-maintained page or accept that the next generator run will replace `docs/programs/**`.

### Step 5. How a dependency status is decided

The generator searches the name against object names, member stems, and `Rules.mk` targets.

| Status | Rule |
| --- | --- |
| Resolved | An object or member stem in this checkout matches the name |
| External Dependency | The name is in the fixed IBM set: `QUSCRTUS`, `QUSPTRUS`, `QCMDEXC`, `QCMD`, `SIGNOFF`, `STRQMQRY`, `ADSPUSRSPC` |
| Dynamic Reference | The call target starts with `&` |
| Confirmed Missing | A `CALL PGM`, `extpgm`, or copy name matches nothing in the checkout |
| Unresolved | Named, and neither resolved nor in the IBM set |

Menu options 11 and 12 run `STRQMQRY`, and option 84 runs `ADSPUSRSPC`. Those commands are External Dependency because they are IBM commands. The objects they name (`CUSQRY`, `CUSQRYFMT`, `ARTQRY`, `SAMLOG`) are still absent. Record that absence in the gap list. Do not mark the command itself Confirmed Missing.

`SAMPLE.BNDDIR` and `QBNDSRC/Rules.mk` do not list the same service programs. Record both lists. Status for that disagreement is Partially Confirmed.

### Step 6. Tracker statuses

Allowed values: Not Started, In Progress, Completed, Partially Completed, Blocked, Not Applicable.

The generator assigns them as follows:

| Status | When the generator sets it |
| --- | --- |
| Not Applicable | Requirement is `not-applicable` |
| Partially Completed | Requirement is `program-spec` and the member has a Confirmed Missing or Unresolved dependency |
| Completed | Every other inventoried path |

Partially Completed does not mean the page is empty. It means a named dependency has no implementation in this checkout. The five members in that state at this handoff are `QCBLSRC/PRO201.CBLLE`, `QRPGLESRC/ORD100.PGM.RPGLE`, `QRPGLESRC/ORD101.PGM.RPGLE`, `QRPGLESRC/ORD200.PGM.SQLRPGLE`, and `QRPGLESRC/ORD201.PGM.SQLRPGLE`.

### Step 7. Validate coverage

From the repository root:

```bash
python scripts/validate_documentation_coverage.py
```

The script needs Python 3. It walks the same tree, skipping `.git`, `node_modules`, `bin`, and `obj`. It writes:

- `docs/audit/coverage-validation-report.md`
- `docs/audit/coverage-validation-results.csv`

It returns exit code 0 when there are no structural failures. Unresolved dependencies that are listed in `docs/dependencies/missing-dependencies.csv` are reported and do not, by themselves, fail the run.

Checks that do fail the run:

| Check | Failure means |
| --- | --- |
| `no-disposition` | A file on disk has no inventory row. The `.git` directory must have a row even though its contents are not walked. |
| `missing-spec` | A `program-spec` row points at a page that is not on disk |
| `missing-section` | A program page is missing one of the 14 headings |
| `empty-doc` | A program page is under 80 characters, or any Markdown file under `docs/` is under 20 characters |
| `missing-doc` | An inventory path points at a file that is not on disk |
| `broken-link` | A local Markdown link under `docs/` does not resolve to a file |
| `bad-source-path` | A backticked source path with a known extension does not exist |
| `bad-line` | A backticked `path:line` cites a line past the end of that file |
| `tracker-status` | A tracker status is not one of the six allowed values |
| `tracker-incomplete` | A tracker row is missing documentation, traceability, dependency, or validation status |
| `tracker-doc-missing` | The tracker's documentation path is not a file |
| `tracker-missing` | An inventory path has no tracker row |
| `tracker-unknown` | A tracker path is neither on disk nor in the inventory |

After a passing run, update the count sentences in these hand-maintained files so they match the report:

- `docs/README.md`
- `docs/final-review/final-coverage-summary.md`
- `docs/tracking/documentation-execution-summary.md` (replace the generator's "Pending" sentence with the pass result)

Do not claim the package is complete while the script reports failures, or while source-level questions remain open. Open questions stay listed. They are not closed by smoother wording.

### Step 8. Adding a file without breaking coverage

Any new file, including a Markdown page, must be inventoried. The coverage script fails with `no-disposition` until it is.

1. Add the file.
2. Run `node scripts/generate_legacy_docs.js`.
3. Run `python scripts/validate_documentation_coverage.py`.
4. Update the hand-maintained count pages.
5. If the new file is Markdown under `docs/`, every local link must point at a file that exists. Links to directories fail the check.

`.cs`, `.csproj`, `.cshtml`, `.css`, and `.slnx` files under `dotnet/cobol-modernization/` are classified as `dotnet-modernization` with requirement `disposition-only`. They do not get program specifications. The COBOL behavior they implement is documented from `QCBLSRC`, and the port itself is described in `dotnet/cobol-modernization/README.md` and in this handoff.

## COBOL to .NET implementation

The port lives in `dotnet/cobol-modernization/`. It targets `net10.0`. It is a COBOL slice, not a rewrite of the RPG application.

Solution layout:

| Project | Path | Responsibility |
| --- | --- | --- |
| `Tobi.Cobol.Core` | `dotnet/cobol-modernization/src/Tobi.Cobol.Core/` | Behavior taken from the COBOL members. No ASP.NET types. |
| `Tobi.Cobol.Web` | `dotnet/cobol-modernization/src/Tobi.Cobol.Web/` | ASP.NET Core MVC UI for `PRO201` |
| `Tobi.Cobol.Tests` | `dotnet/cobol-modernization/tests/Tobi.Cobol.Tests/` | xUnit tests for the core library |

Solution file: `dotnet/cobol-modernization/Tobi.Cobol.Modernization.slnx`.

### What was ported

| COBOL | Build target in `QCBLSRC/Rules.mk` | .NET |
| --- | --- | --- |
| `QCBLSRC/PRO201.CBLLE` and display file `QDDSSRC/PRO201D.DSPF` | `PRO201.MODULE` | `Pro201Program` and the `/Providers` screens |
| `QCBLSRC/verify.pgm.cblle` | `VERIFY.PGM` | `VerifyCobol.CountErrors` |
| `QCBLSRC/verifysql.sqlcblle` | `VERIFYSQL.MODULE` | Same arithmetic. `EXEC SQL SET :A = 5` assigns 5. It is not a table read. |
| `QCBLSRC/verifysqlp.pgm.sqlcblle` | `VERIFYSQLP.PGM` | Same arithmetic |
| `QCBLSRC/SMPL.CBL` with `COPY DATACPY` from `QPROTOSRC/DATACPY.CBL` | `SMPL.PGM` | `SimpleCopybook.WsMessage` = `HELLO FROM COPYBOOK` |

Not ported, and not in scope for this slice:

- RPG, including `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`
- CL, commands, and the rest of `SAMMNU`
- DDS physical and logical files as a database
- SQL tables, views, procedures, and triggers
- C and C++ members

### PRO201 state machine

`QCBLSRC/PRO201.CBLLE` is an interactive program. `PROCEDURE DIVISION` starts at `PRO201` (line 107). It performs `PGM-INIT`, then loops while `PANEL` is not 0. Panel 1 runs `PNL01`. Panel 2 runs `PNL02`. Any other panel runs `PGM-END`.

Step letters are declared at lines 97–102: `P` prepare, `L` load, `D` display, `F` function key, `C` check, `A` act. `SFLPAG` is 14 (line 91).

Panel 1:

| Step | Paragraph | What the member does |
| --- | --- | --- |
| PRP | `PRP01` | Clears the subfile control, sets saved RRN to 0, reads `PROVIDE1`, moves to LOAD |
| LOAD | `LOD01` | Fills up to 14 subfile rows from `PROVIDE1` with `MOVE CORR FPROV TO SFL01-O`, then moves to DSP |
| DSP | `DSP01` | Shows the subfile when the saved RRN is not zero, writes the formats, reads the workstation |
| FKEY | `FKEY01` | F3 sets panel 0. F12 subtracts 1 from panel and returns to PRP. Page down (AID `90`) returns to LOAD. Any other key goes to CHK. |
| CHK | `CHK01` | Reads modified subfile rows. Option values other than 0, 2, and 5 set the invalid-option indicators and return to DSP. |
| ACT | `ACT01` | Option 2 sets panel 2 and clears the option. Option 5 moves the provider id and executes `CALL "ART202" USING PRID-WRK` (line 255), then clears the option. If no modified row remains, returns to DSP. |

Panel 2:

| Step | Paragraph | What the member does |
| --- | --- | --- |
| PRP | `PRP02` | `MOVE CORRESPONDING SFL01-I TO FMT02-O`, then DSP |
| DSP | `DSP02` | Writes format `FMT02` and reads it |
| FKEY | `FKEY02` | F3 returns to panel 1 and resets both steps to PRP, which reloads the list. F12 subtracts 1 from panel, resets step 2 to PRP, and sets step 1 to DSP, which redisplays the list without reloading. Enter takes the same path as the `WHEN OTHER` branch: panel decreases by 1 and step 2 returns to PRP. |

`PGM-INIT` (line 304) opens `PROVIDE1` input and `PRO201D` I-O. `PGM-END` (line 311) closes both and `STOP RUN`.

Workstation keys in the member: F3 is `'03'`, F12 is `'12'`, page down is `'90'` (lines 72–77).

### How the C# program follows that member

`Pro201Program` uses the same panel numbers and the same step letters. `SubfilePage` is 14. `Submit` is the web stand-in for the COBOL workstation `READ`: the COBOL `DSP` paragraphs block on the read and then set the step to FKEY; the C# `DSP` methods set a wait flag and return, and the next HTTP post supplies the function key and the option values.

| COBOL | C# |
| --- | --- |
| `PANEL`, `STEP01`, `STEP02` | `Panel`, `Step01`, `Step02` |
| `SFLPAG` 14 | `Pro201Program.SubfilePage` |
| `PROVIDE1` sequential read | `IProviderFile.ReadSequential`, ordered by `PrId` |
| Subfile row and RRN | `SubfileRow` |
| F3, F12, page down, Enter | `FunctionKey` |
| `CALL "ART202" USING PRID-WRK` | `IArt202Gateway.Call` |
| Invalid option | `InvalidOption` |
| `PGM-END` | `Exited` with `Panel` 0 |

`RecordingArt202Gateway` stores the provider id that would have been passed to ART202. It does not call the RPG program. The UI says so when option 5 is used.

### Where the copybooks and the provider file came from

`PRO201` copies `DDS-FPROV`, `DDS-CTL01-O`, `DDS-CTL01-I`, `DDS-SFL01-O`, `DDS-SFL01-I`, `DDS-FMT02-O`, and `DDS-FMT02-I` (lines 47–68). Those copybooks are not stored as members. Their origin is Unresolved. The usual IBM i COBOL compiler can generate `DDS-` books from the display file and the physical file. This checkout does not contain the generated books, so the port does not pretend they were found.

Field names and lengths on `ProviderRecord` are taken from `QDDSSRC/PROVIDER.PF` and the field-reference file `common/SAMREF.PF`. Each property comment cites the field and the line. `PRCOUN` is on format `FMT02` and is not on the subfile. `MOVE CORRESPONDING SFL01-I TO FMT02-O` therefore does not copy it. The detail screen leaves Country Code blank for that reason.

`SampleProviderFile` builds 20 in-memory rows so the subfile can page (14, then the remaining 6). The repository has no PROVIDER data members. These rows are sample data for the port. They are not live IBM i records, and they must not be described as a data extract.

### Web application

`Program.cs` registers MVC, a two-hour session cookie, one shared `SampleProviderFile`, and one `Pro201SessionStore`.

`Pro201SessionStore` keeps one `Pro201Program` per session id in memory. The first request to `/Providers` calls `Start`, which runs `PGM-INIT` and the state machine until the first display wait. Later posts call `Submit`. Restart replaces that session's program.

Routes:

| URL | What the user gets |
| --- | --- |
| `/` | Home page. Shows the copybook message and the VERIFY error count. Zero means the arithmetic checks passed. |
| `/Providers` | Panel 1, Display Providers, while `Panel` is 1 |
| `/Providers` post with option 2 | Panel 2, Display Provider |
| `/Providers` post with option 5 | Stays on panel 1 and records `CALL ART202` |
| `/Providers` post with F3 from panel 1 | Exited page |
| `/Providers` post `Restart` | New program, back to panel 1 |

Launch profile `http` uses `http://localhost:5068`. The `https` profile also binds `https://localhost:7186`.

### Run and test

Requires the .NET 10 SDK. From the repository root:

```bash
dotnet test dotnet/cobol-modernization/tests/Tobi.Cobol.Tests/Tobi.Cobol.Tests.csproj
dotnet run --project dotnet/cobol-modernization/src/Tobi.Cobol.Web/Tobi.Cobol.Web.csproj --urls http://127.0.0.1:5068
```

Then open `http://127.0.0.1:5068/Providers`.

Tests already in `Pro201ProgramTests`:

| Test | Behavior locked in |
| --- | --- |
| `StartLoadsFirstPageOfFourteen` | After start, panel 1 is at DSP and the visible page has 14 rows beginning at provider 1 |
| `PageDownLoadsNextProviders` | Page down appends the next page. With 20 sample rows the subfile length becomes 20 and end of file is set. |
| `Option2OpensPanel2FromSubfileRow` | Option 2 on the third visible row opens panel 2 on provider 3 |
| `Option5CallsArt202WithProviderId` | Option 5 passes that row's provider id to the gateway and clears the option |
| `InvalidOptionStaysOnPanel1` | Option 9 stays on panel 1 and sets `InvalidOption` |
| `F3EndsTheProgram` | F3 from panel 1 sets `Exited` and panel 0 |
| `F12OnPanel2ReturnsToListWithoutReload` | F12 from panel 2 returns to the list without reloading from the first row |

`VerifyCobolTests` asserts that `CountErrors` returns 0 and that the copybook message is `HELLO FROM COPYBOOK`.

When you change the UI, exercise the flow in a browser: start, page down, option 2, F12, option 5, invalid option, F3, and restart. A single screenshot is not a test of that state machine.

### Known differences from the COBOL member

These are deliberate boundaries of the port. Do not "fix" them by inventing RPG behavior.

| Topic | COBOL | This port |
| --- | --- | --- |
| ART202 | `CALL "ART202" USING PRID-WRK` | Gateway records the id. RPG source is not executed. |
| Provider rows | `SELECT PROVIDE1 ASSIGN DATABASE-PROVIDE1` | 20 sample rows in memory |
| DDS copybooks | `COPY DDS-*` | Fields copied from `PROVIDER.PF` and `common/SAMREF.PF` |
| Workstation | Blocking `READ` on `PRO201D` | HTTP post into `Submit` |
| Indicators `IN30`–`IN35`, `IN80` | Set around subfile display and end of file | End of file and invalid option are explicit properties. Display indicators are represented by `DisplaySubfile` and the disabled Page down button. |
| Program object | `Rules.mk` builds a module. The menu calls `pro201`. No `*PGM` target is in this checkout. | The web app is the runnable stand-in for that call. |
| Files | Opens and closes `PROVIDE1` and `PRO201D` | No IBM i files are opened |

## Current status and open items

Regenerate and revalidate after any tree change. Trust `docs/audit/coverage-validation-report.md` over any older count. These numbers include this handoff page and [cursor-poc-user-guide.md](cursor-poc-user-guide.md).

| Item | Count |
| --- | --- |
| Inventory rows, including `.git` | 586 |
| Files on disk, excluding the `.git` object store | 585 |
| Program specifications | 76 |
| Business-rule rows | 23 |
| Dependency rows | 131 |
| Unresolved or missing dependency rows | 13 |
| Database field or statement rows | 814 |
| Tracker Completed / Partially Completed / Not Applicable | 575 / 5 / 6 |
| Coverage script structural failures | 0 |

The 13 open dependency rows in `docs/dependencies/missing-dependencies.csv` are the seven `DDS-` copybooks in `PRO201`, four `ORD500` prototypes, menu call `CUS200`, and menu call `pro203`.

Further gaps, with the next action, are in [unresolved-gaps-and-next-actions.md](../final-review/unresolved-gaps-and-next-actions.md):

| Item | Status | Next action |
| --- | --- | --- |
| `ORD500` called from `ORD100`, `ORD101`, `ORD200`, and `ORD201` | Confirmed Missing | Recover the program source before documenting the call. `ORD500O` is a printer file. `ORD500C` is a different CL program. |
| Menu option 2 calls `CUS200` | Confirmed Missing | Recover the program. Display file `CUS200D` is not that program. |
| Menu option 10 calls `pro203` | Confirmed Missing | Recover the program. |
| Menu options 11 and 12 name `CUSQRY`, `CUSQRYFMT`, and `ARTQRY` | Named on the menu. The command is an IBM external. The query objects are absent. | Recover the Query Manager definitions before describing those reports. |
| Menu option 84 names user space `SAMLOG` | The command is an IBM external. The user space is absent. | No user-space source is in the checkout. |
| COBOL `COPY DDS-*` books | Unresolved | Confirm whether the compiler generates them from `PRO201D` and `PROVIDER`. They are not stored as members. |
| `&lib1` | Unresolved | The production library name is not in the repository. |
| `SAMPLE.BNDDIR` versus `QBNDSRC/Rules.mk` | Partially Confirmed | The binder source also names `ORDER`, `XSS`, and `FVAT`. Reconcile the two lists on the system before changing service programs. |
| `QTRGSRC` | Confirmed | `Rules.mk` exists and is not in the root subdirectory list, so a default `makei build` does not compile `ORD700A`, `ORD700D`, or `ORD700U`. |
| RPGUnit `QTESTSRC` | Confirmed | Two tests exist. The directory has no `Rules.mk` and is not in the root build list. `iproj.json` names library `RPGUNIT`. The product is not in this checkout. |
| PDF | Outstanding | No PDF was generated. Markdown is the delivered form. |

Manual follow-up is required for `ORD500`, `CUS200`, `pro203`, the Query Manager objects, and `SAMLOG` before those paths can be specified from source.

## How to continue

### Continue the documentation

1. Read the rule file and this handoff.
2. If the task is a full refresh, run the generator, then the coverage script, then update the three hand-maintained count pages.
3. If the task is one new member, read that member, let the generator emit its specification, and only then add narrative in `docs/README.md` for behavior the extractor cannot see. Cite the path and line.
4. Leave Confirmed Missing and Unresolved rows in `missing-dependencies.csv`. Closing one requires the missing source to appear in the tree, or a status change that the generator's rules support. Do not delete the row to make the report look cleaner.
5. Do not edit files under `Q*` directories, `includes/`, `common/`, `functionsVAT/`, or `globalization/` in order to make the documentation easier to write.
6. Do not copy secrets, credentials, or connection strings into documentation. This checkout's sample provider emails use `example.invalid` for that reason.

### Continue the COBOL port

The COBOL members in `QCBLSRC` are already represented. The next useful work, if the proof of concept is extended, is one of these, in this order:

1. Replace `SampleProviderFile` with a reader that can load real `PROVIDER` rows, once a data extract or a database connection is actually supplied. Until then, keep the sample rows and keep the comment that they are not live data.
2. Decide what option 5 should do with ART202. The RPG program is `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`. Porting it is a new scope decision. It is not a small change inside `Pro201Program`. The specification page is `docs/programs/rpg/ART202.md`.
3. If a `PRO201` `*PGM` target is added to `Rules.mk` on the IBM i side, update the documentation through the generator. Do not change the COBOL member only to match the web app.

Stay inside the COBOL slice unless the assignment explicitly expands to RPG or CL.

### Commands

From the repository root:

```bash
node scripts/generate_legacy_docs.js
python scripts/validate_documentation_coverage.py
dotnet test dotnet/cobol-modernization/tests/Tobi.Cobol.Tests/Tobi.Cobol.Tests.csproj
dotnet run --project dotnet/cobol-modernization/src/Tobi.Cobol.Web/Tobi.Cobol.Web.csproj --urls http://127.0.0.1:5068
```

The inventory script used by the earlier `docs/application/` package, and only when that package was explicitly requested, is:

```bash
node .cursor/skills/ibmi-source-inventory/scripts/inventory.js --root . --check
```

Do not run that inventory as a substitute for `scripts/generate_legacy_docs.js`. They feed different packages.

### First-day checklist

1. Open [docs/README.md](../README.md) and read the menu table and the "What the checkout does not contain" section.
2. Open `docs/programs/cobol/PRO201.md` and `QCBLSRC/PRO201.CBLLE` side by side.
3. Run `dotnet test` on `Tobi.Cobol.Tests` and confirm the existing tests pass.
4. Run the web app and walk `/Providers` through page down, option 2, F12, option 5, an invalid option, F3, and restart.
5. Run `python scripts/validate_documentation_coverage.py` and read the report. A pass with 13 unresolved dependency rows is the expected handoff state. This page is already an inventory row.
6. Read [unresolved-gaps-and-next-actions.md](../final-review/unresolved-gaps-and-next-actions.md) before promising that a missing program can be documented.
