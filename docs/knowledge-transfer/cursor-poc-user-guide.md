# Cursor POC user guide

Handoff date: 26 October 2026.

This is the step-by-step guide for the next person assigned to this proof of concept. It explains how to install Cursor, open this repository, confirm the tools, talk to the agent, and continue the work from the files already in the tree.

The technical record of what was built sits beside this page: [cursor-poc-knowledge-transfer.md](cursor-poc-knowledge-transfer.md). Read that page before changing the documentation generator, the coverage check, or the COBOL port. This page is how you get there.

The durable result of the proof of concept is the repository. A chat transcript is not the handoff. A new Cursor conversation can continue the work when this guide and the files it names are present.

## What this proof of concept is

The application under study is the sample IBM i checkout in this repository. The proof of concept did two things with it:

1. Produce a source-cited documentation package that covers every file in the working tree.
2. Port the COBOL members only to a .NET 10 web application, using that documentation as the map.

RPG, CL, DDS programs other than the provider display, SQL tables, and menu `SAMMNU` were not rewritten. Stay inside the assignment you were given. Expanding into RPG or CL is a new scope decision.

## What you need before you open the project

Install these on the machine you will use. The documentation scripts and the COBOL port run locally. An IBM i system is not required to read the documentation or to run the .NET slice.

| Tool | Use in this POC | How to check |
| --- | --- | --- |
| Cursor desktop | Edit, search, and run the agent against this folder | The app opens and you are signed in |
| Git | Clone the repository and review changes | `git --version` |
| Node.js 18 or newer | `node scripts/generate_legacy_docs.js` | `node --version` |
| Python 3 | `python scripts/validate_documentation_coverage.py` | `python --version` |
| .NET 10 SDK | Build, test, and run `dotnet/cobol-modernization` | `dotnet --version` shows a 10.x SDK |

Downloads:

- Cursor: [https://cursor.com/downloads](https://cursor.com/downloads). Windows 10 or later uses the `.exe` installer. macOS 12 or later uses the `.dmg`. Official install notes are in the [Cursor quickstart](https://cursor.com/docs/get-started/quickstart).
- Git: [https://git-scm.com/downloads](https://git-scm.com/downloads).
- Node.js: [https://nodejs.org/](https://nodejs.org/).
- Python: [https://www.python.org/downloads/](https://www.python.org/downloads/). On Windows, enable **Add python.exe to PATH** during setup.
- .NET: [https://dotnet.microsoft.com/download](https://dotnet.microsoft.com/download). Install the .NET 10 SDK, which includes the runtime.

Sign in to Cursor with the account your team assigned for this proof of concept. Agent use follows that account's plan. Opening the folder and reading files does not require a cloud agent.

You also need permission to read `https://github.com/ravalikanamburi-dev/legacy-tobi-example.git`. Confirm you can open that repository in a browser before you clone it. `iproj.json` still stores a different repository string, `https://github.com/edmundreinhardt/tobi-example.git`. Leave that string as written. It is not the clone URL for this workspace, and it does not name the IBM i library.

## Step 1. Install Cursor and sign in

1. Download the installer for your operating system from [https://cursor.com/downloads](https://cursor.com/downloads).
2. Run the installer and accept the default locations unless your team has a required install path.
3. Open Cursor.
4. Sign in when the app asks. Use the work account for this proof of concept.
5. Leave the start screen open. The next step is to put the repository on disk, then open that folder.

Product help for this sequence is [Your first project](https://cursor.com/help/getting-started/first-project).

## Step 2. Clone the repository

Clone from a terminal so the folder you open is the repository root. On Windows, PowerShell is enough.

```powershell
git clone https://github.com/ravalikanamburi-dev/legacy-tobi-example.git
cd legacy-tobi-example
```

If Git asks you to authenticate, sign in with the GitHub account that can read the repository. A failed clone usually means that account does not have access yet. Ask for access, then run the clone again. Do not copy a partial folder from someone else's machine and call it the project.

After the clone, the folder contains `iproj.json`, `docs`, `QCBLSRC`, `scripts`, and `dotnet` side by side. That folder is the project root. Opening a subfolder such as `docs` or `dotnet/cobol-modernization` hides the rules and makes the scripts look for files in the wrong place.

## Step 3. Open the folder in Cursor

1. In Cursor, choose **File > Open Folder**.
2. Select the cloned repository root. The folder name is `legacy-tobi-example` unless you renamed it during the clone.
3. If Cursor asks whether you trust the authors of the folder, trust it. Trust lets the agent read the project rules and run the terminal checks in this guide.
4. Confirm the Explorer shows `iproj.json` at the top level, next to `docs`, `QCBLSRC`, `.cursor`, and `dotnet`.

You can close Cursor and reopen this same folder later from **File > Open Recent**. You do not clone again unless you are setting up a second machine.

## Step 4. Confirm the tools from Cursor's terminal

Open the integrated terminal from the **Terminal** menu and choose **New Terminal**. The shell should start in the repository root. On Windows, PowerShell is the shell this checkout was exercised with.

Run:

```powershell
git --version
node --version
python --version
dotnet --version
```

Expected results:

| Command | What a usable result looks like |
| --- | --- |
| `git --version` | Any current Git version prints |
| `node --version` | `v18` or higher |
| `python --version` | Python 3. On some machines the command is `py --version` or `python3 --version`. Use whichever command prints Python 3 for the later coverage step. |
| `dotnet --version` | A version that starts with `10.` |

If `python` opens the Microsoft Store or prints Python 2, install Python 3 and reopen the terminal. If `dotnet --version` is below 10, install the .NET 10 SDK and reopen the terminal. Cursor picks up a new install only after the terminal is started again.

## Step 5. Learn the layout before you ask the agent to change anything

Read these files in Cursor, in this order. Click each path in the Explorer, or press `Ctrl+P` (`Cmd+P` on macOS) and type the file name.

| Order | File | Why you read it |
| --- | --- | --- |
| 1 | `docs/README.md` | What the sample application is, the menu, and what the checkout does not contain |
| 2 | `docs/knowledge-transfer/cursor-poc-knowledge-transfer.md` | How the documentation was generated, how the COBOL port follows `PRO201`, and which gaps stay open |
| 3 | `docs/final-review/unresolved-gaps-and-next-actions.md` | The list you must not close by rewriting a sentence |
| 4 | `docs/programs/cobol/PRO201.md` and `QCBLSRC/PRO201.CBLLE` | The COBOL member and its specification, side by side |
| 5 | `dotnet/cobol-modernization/README.md` | How to run the port |

The Explorer groups the work like this:

| Path | What it is |
| --- | --- |
| `QRPGLESRC/`, `QCBLSRC/`, `QCLSRC/`, `QDDSSRC/`, and the other `Q*` directories | IBM i source. Leave these unchanged while you are documenting. |
| `iproj.json`, `Rules.mk` | makei build metadata. The build command needs an IBM i environment. It is not required for the documentation or the .NET slice. |
| `.cursor/rules/` | Instructions the agent follows when a task matches them |
| `.cursor/skills/` | Workflows the agent can load for inventory, program reading, data definitions, screens, and the build |
| `docs/` | The delivered documentation package, plus this guide |
| `docs/application/` | An earlier documentation package. Keep it. Do not regenerate it unless someone explicitly asks. |
| `scripts/generate_legacy_docs.js` | Regenerates the delivered package |
| `scripts/validate_documentation_coverage.py` | Checks that every file is accounted for |
| `dotnet/cobol-modernization/` | The COBOL-only .NET 10 port |

## Step 6. Open the agent and tell it what to do

The agent is the assistant that searches this folder, edits files, and runs terminal commands. Cursor's description of that behavior is [Agent](https://cursor.com/docs/agent/overview).

1. Open the Agent panel. On Windows and Linux press `Ctrl+I`. On macOS press `Cmd+I`.
2. Click in the chat input at the bottom of that panel.
3. Type the request in ordinary language. Say which files matter, what done looks like, and what must stay unchanged.
4. Send the message.
5. Watch the files it reads and the commands it runs. When it edits, review the diff and reject a change that does not match the request.

For a task that spans several files, switch on Plan mode before the agent edits. Press `Shift+Tab` in the agent input until Plan mode is selected. The agent then reads the code, asks questions, and writes a plan. Approve the plan before it changes files. The [quickstart](https://cursor.com/docs/get-started/quickstart) describes that toggle.

Attach a file when you already know which one matters. Type `@` in the chat input and start typing the path. Examples that come up in this repository:

- `@docs/README.md`
- `@docs/knowledge-transfer/cursor-poc-knowledge-transfer.md`
- `@` followed by `QCBLSRC/PRO201.CBLLE`
- `@.cursor/rules/legacy-documentation.mdc`

The agent can search without an `@` mention. Use `@` when a specific file must be in the prompt.

Start a fresh Agent conversation when the task changes. Earlier conversations stay in the agent list. They are reference material. The files in the repository are the work product.

## Step 7. Let the project rules and skills do the repeated work

This repository already contains the instructions for documentation. You do not paste those rules into every chat. Cursor loads project rules from `.cursor/rules/` and skills from `.cursor/skills/`. Rule behavior is described in [Rules](https://cursor.com/help/customization/rules). Skills are described in [Agent Skills](https://cursor.com/docs/skills).

The documentation rules apply when the task is documentation. Name that in the first sentence of the prompt, for example "Refresh the application documentation." If a reply starts inventing library names or editing IBM i source, stop it and send a follow-up that points at `@.cursor/rules/legacy-documentation.mdc`.

| Rule file | Attach it when the task is |
| --- | --- |
| `.cursor/rules/legacy-documentation.mdc` | Writing or refreshing `docs/`, the inventory, or the coverage check |
| `.cursor/rules/ibmi-doc-evidence.mdc` | Deciding whether a sentence is Confirmed, Partially Confirmed, Inferred, or Unresolved |
| `.cursor/rules/ibmi-doc-discovery.mdc` | Classifying a file from its name and extension |
| `.cursor/rules/ibmi-doc-coverage.mdc` | Checking that every source artifact is included |

To force a skill for one message, type `/` in the agent input and choose the skill. Use a skill when the task matches its job:

| Skill | Use it when |
| --- | --- |
| `ibmi-source-inventory` | Classifying the tree for the earlier `docs/application/` package |
| `ibmi-program-analysis` | Reading an RPG, CL, COBOL, C, or C++ member |
| `ibmi-data-definition-analysis` | Reading DDS or SQL table source |
| `ibmi-interface-analysis` | Reading a display file, printer file, command, menu, or message file |
| `ibmi-build-dependency-analysis` | Reading `Rules.mk`, binding directories, or CCSID files |
| `ibmi-app-documentation` | Regenerating `docs/application/` after someone explicitly asks for that package |
| `tobi-makei`, `tobi-rpgle`, `tobi-rpgunit` | Changing IBM i source or RPGUnit tests. Those skills are coding conventions. They are not evidence for the documentation. |

`.cursor/ibmi-documentation.json` sets `doNotGenerateUntilAsked` to true. Leave `docs/application/` alone unless the assignment names that package. The package this proof of concept validates is the one produced by `scripts/generate_legacy_docs.js`.

Evidence labels in every documentation edit are only these four: Confirmed, Partially Confirmed, Inferred, Unresolved. A menu title or a comment stays Partially Confirmed. A fact the checkout does not contain stays Unresolved.

## Step 8. Run the checks yourself

Run these from the repository root in Cursor's terminal. Ask the agent to run the same commands when it changes the tree, then read the output yourself.

Refresh the generated documentation, then check coverage:

```powershell
node scripts/generate_legacy_docs.js
python scripts/validate_documentation_coverage.py
```

The generator rewrites the generated pages under `docs/programs/`, `docs/database/`, `docs/business-rules/`, `docs/flows/`, `docs/dependencies/`, `docs/architecture/`, `docs/inventory/`, `docs/audit/`, and `docs/tracking/`. It leaves these hand-maintained pages in place when `docs/README.md` still starts with the heading `# Legacy IBM i application`:

- `docs/README.md`
- `docs/final-review/documentation-quality-review.md`
- `docs/final-review/final-coverage-summary.md`
- `docs/final-review/unresolved-gaps-and-next-actions.md`
- `docs/application/**`
- `docs/knowledge-transfer/cursor-poc-knowledge-transfer.md`
- `docs/knowledge-transfer/cursor-poc-user-guide.md`

After a passing coverage run, update the count sentences in `docs/README.md`, `docs/final-review/final-coverage-summary.md`, and `docs/tracking/documentation-execution-summary.md` so they match `docs/audit/coverage-validation-report.md`. The generator sets tracker validation to Pending. Replace the Pending sentence in the summary with the pass result. Leave the 13 open dependency rows in place.

A new file, including a Markdown page, must be inventoried. Add the file, run the generator, run the coverage script, and update the three count pages. The coverage script fails with `no-disposition` until the new path has an inventory row. Local links in Markdown under `docs/` must point at files that exist. A link to a directory fails the check.

Test and run the COBOL port:

```powershell
dotnet test dotnet/cobol-modernization/tests/Tobi.Cobol.Tests/Tobi.Cobol.Tests.csproj
dotnet run --project dotnet/cobol-modernization/src/Tobi.Cobol.Web/Tobi.Cobol.Web.csproj --urls http://127.0.0.1:5068
```

Leave the `dotnet run` terminal open while you use the site. Stop it with `Ctrl+C` in that terminal when you are finished. Then open `http://127.0.0.1:5068/` in a browser.

`makei build` is the IBM i build stored in `iproj.json`. Skip it on Windows. It does not build the .NET port.

## Step 9. Walk the COBOL port in a browser

Do this on the first day, and again after any change to the provider screens. A screenshot of the list is not this walkthrough.

1. Open `http://127.0.0.1:5068/`. The home page lists the COBOL members that were ported. The copybook message is `HELLO FROM COPYBOOK`. The arithmetic error count is `0`.
2. Open **PRO201 Display Providers**, or go directly to `http://127.0.0.1:5068/Providers`. The heading is **Display Providers**. The hint reads `2=Display` and `5=Items`. The first page shows 14 provider rows. Those rows are sample data held in memory. They are not a copy of live IBM i records.
3. Click **Page down**. The next rows appear. With the 20 sample rows, page down reaches the end of the file and the button is disabled.
4. On the first page, type `2` in the option box of one row and click **Enter**. The **Display Provider** page opens for that provider. Country Code is blank. The page explains that the COBOL `MOVE CORRESPONDING` does not copy that field.
5. Click **F12=Cancel**. You return to the provider list.
6. Type `5` on a row and click **Enter**. You stay on the list. A notice records `CALL ART202` and names `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`. The RPG program does not run.
7. Type `9` on a row and click **Enter**. The page shows **Invalid Option** and stays on the list.
8. Click **F3=Exit**. The page title is **PRO201 ended**.
9. Click **Start PRO201 again**. Panel 1 is back, loaded from the first provider.

Option 2, option 5, F12, an invalid option, F3, and restart are the behaviors already locked in by `dotnet/cobol-modernization/tests/Tobi.Cobol.Tests/Pro201ProgramTests.cs`. If a code change disagrees with that walkthrough, fix the code or update the test in the same change. Do not describe the sample rows as a data extract.

## Step 10. Prompts you can paste

Use these as the first message of a new Agent chat. Add the assignment's extra constraint in the same message. Plan mode (`Shift+Tab`) fits the refresh prompt and any change that touches more than one project.

**Orient yourself**

```text
Explain this proof of concept from docs/README.md and docs/knowledge-transfer/cursor-poc-knowledge-transfer.md. List the two workstreams, the commands that check them, and the open gaps. Do not edit files.
```

**Refresh the documentation**

```text
Refresh the application documentation for this checkout. Follow .cursor/rules/legacy-documentation.mdc. Run node scripts/generate_legacy_docs.js, then python scripts/validate_documentation_coverage.py. Update the hand-maintained count pages so they match the validation report. Leave IBM i source unchanged. Leave Confirmed Missing and Unresolved dependency rows in place.
```

**Read one member**

```text
Explain QCBLSRC/PRO201.CBLLE using docs/programs/cobol/PRO201.md. Cite the repository path and the line for each behavior you state. Use only these evidence labels: Confirmed, Partially Confirmed, Inferred, Unresolved. Do not edit the COBOL member.
```

**Confirm the port still runs**

```text
Run dotnet test on dotnet/cobol-modernization/tests/Tobi.Cobol.Tests/Tobi.Cobol.Tests.csproj. Report the result. Do not change RPG, CL, or COBOL source.
```

**Change the COBOL port**

```text
The change I need is: <describe the behavior>.
Keep Pro201Program aligned with QCBLSRC/PRO201.CBLLE. Do not implement ART202. Keep the in-memory provider rows labeled as sample data. Add or update an xUnit test. Run dotnet test and then walk /Providers through page down, option 2, F12, option 5, an invalid option, F3, and restart.
```

Replace the angle-bracket sentence with the actual change. If the assignment is to load real `PROVIDER` rows, wait until a data extract or a database connection has been supplied. Until then the sample file stays.

## Step 11. Review what the agent changed

The agent applies edits as it works. Your review is part of the task.

1. Read each diff in the editor. Reject a hunk that does not belong to the request.
2. Open Source Control from the activity bar, or press `Ctrl+Shift+G` (`Cmd+Shift+G` on macOS), and read the list of changed files.
3. Documentation work should change files under `docs/` and, when the generator or the checker ran, the generated pages those scripts own. It should leave `QCBLSRC`, `QRPGLESRC`, `QCLSRC`, and the other IBM i members untouched.
4. COBOL port work should stay under `dotnet/cobol-modernization/` unless the assignment also updates a hand-maintained explanation in `docs/`.
5. Run the matching check from [Step 8](#step-8-run-the-checks-yourself) after the diff looks right.

Commit when the person who assigned the work asks for a commit. Say so in the agent prompt if you want Cursor to prepare the commit message. Push when that assignment includes publishing the branch. A local passing test is the checkpoint. A commit is a separate decision.

## Step 12. First-day checklist

Complete this once on a new machine before you take a new task.

1. Clone the repository and open the root folder in Cursor.
2. Trust the folder.
3. Confirm `git`, `node`, `python`, and `dotnet` from Cursor's terminal.
4. Read `docs/README.md` through the menu table and the section on what the checkout does not contain.
5. Open `docs/programs/cobol/PRO201.md` and `QCBLSRC/PRO201.CBLLE` side by side.
6. Run `dotnet test` on `Tobi.Cobol.Tests` and confirm the existing tests pass.
7. Run the web app and complete the browser walk in [Step 9](#step-9-walk-the-cobol-port-in-a-browser).
8. Run `python scripts/validate_documentation_coverage.py`. A pass that still reports 13 unresolved dependency rows is the expected handoff state. Read `docs/audit/coverage-validation-report.md`.
9. Read `docs/final-review/unresolved-gaps-and-next-actions.md` before you promise that a missing program can be documented.
10. Read [cursor-poc-knowledge-transfer.md](cursor-poc-knowledge-transfer.md) sections "How to continue" and "Current status and open items."

## Step 13. Continue the work on your own

Pick the track that matches the assignment.

**Documentation.** Follow the eight steps under "Documentation process" in [cursor-poc-knowledge-transfer.md](cursor-poc-knowledge-transfer.md). The short version is: read the member, run the generator, run the coverage script, update the three count pages, and leave missing programs listed. `ORD500`, `CUS200`, `pro203`, the Query Manager objects, and `SAMLOG` need source that is not in this checkout. Recover that source before specifying those paths.

**COBOL port.** The members in `QCBLSRC` already have a .NET representation. The next useful changes, in this order, are recorded in the knowledge transfer: load real provider rows only after data exists, then decide separately whether option 5 should grow into a port of ART202. Porting `QRPGLESRC/ART202-Function_Article.PGM.RPGLE` is a new scope. It is not a small edit inside `Pro201Program`.

**IBM i source.** Use the `tobi-makei`, `tobi-rpgle`, and `tobi-rpgunit` skills only when the assignment is to change or compile IBM i members. Confirm any behavior in the member before it is written into `docs/`.

When you finish a slice, update this guide only if a setup step changed, and update the knowledge transfer when a behavior, a count, or an open item changed. The next person should be able to start at [Step 1](#step-1-install-cursor-and-sign-in) on a clean machine and reach the same checks you just ran.

## If something does not work

| What you see | What to do |
| --- | --- |
| Cursor opens and the Explorer is empty | You have not opened a folder. Use **File > Open Folder** and select the clone root. |
| The agent cannot see `docs/README.md` | The opened folder is a subdirectory. Close it and open the directory that contains `iproj.json`. |
| `node` or `python` is not recognized | Install the tool, confirm PATH, then open a new terminal in Cursor. |
| `dotnet test` says the target framework is missing | Install the .NET 10 SDK and open a new terminal. |
| The browser cannot open port 5068 | The `dotnet run` command is not running, or another process has that port. Start it again from the repository root with the `--urls` argument in [Step 8](#step-8-run-the-checks-yourself). |
| Coverage fails with `no-disposition` | A file was added and the generator has not been run. Run `node scripts/generate_legacy_docs.js`, then the coverage script. |
| Coverage fails with `broken-link` | A Markdown link under `docs/` points at a missing file. Point it at a file that exists. |
| The agent edits a `Q*` member during documentation | Reject that diff. Repeat the prompt with `@.cursor/rules/legacy-documentation.mdc` and the sentence "Leave IBM i source unchanged." |
| The agent marks a missing program as documented | Reject that diff. The open list is `docs/dependencies/missing-dependencies.csv`. |
| Git clone fails with authentication | Confirm the GitHub account can open `https://github.com/ravalikanamburi-dev/legacy-tobi-example.git` in a browser, then clone again. |

Official Cursor help for opening a project, prompting, and rules remains at [cursor.com/docs](https://cursor.com/docs). Behavior of this application remains in [docs/README.md](../README.md) and [cursor-poc-knowledge-transfer.md](cursor-poc-knowledge-transfer.md).
