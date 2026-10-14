# Package rules

## Evidence

- Every behavioral sentence cites a repository path and the symbol, record, command, or line region it comes from.
- Object text, comments, and help literals are labeled as text. Behavior is labeled as behavior.
- Quote user-visible literals from display files, reports, commands, menus, and message files. Do not paraphrase them into a different promise.
- Keep identifiers as written, including quoted SQL names. If a quoted name and an unquoted name both appear, record both spellings.
- A called program, command, or service program with no source in the repository is an external interface. Document the call. Do not describe the callee's behavior.

## Functional areas

Build areas from evidence, in this order:

1. Menu options, command prompts, and help titles that name a user task.
2. Programs those options and commands invoke.
3. Files, displays, and reports those programs declare.
4. Service programs and modules they bind or call.
5. Remaining objects, grouped by shared files and call edges.
6. A name prefix may label a group only after step 5 shows the objects are connected. Objects that do not connect stay standalone.

## Disagreements to look for

Record both sides when any of these differ:

- Build prerequisites and a binding-directory source listing.
- Binder exports, prototype names, and procedure exports. Compare case-insensitively and keep the exact spelling.
- A bind script and a binder listing that share an object name.
- A program call and the build target of that name.
- File-level reference text and the referenced field's own text.
- A test's expected value and the procedure's source.

## CCSID and language

- The compile CCSID is the nearest configured CCSID file, then the project root.
- Do not translate source. Do not infer a national language from a directory name unless a file in the repository states that language.
- If a file is not valid UTF-8 in the working tree, say so and do not invent the unreadable text.

## Quality gate

Stop only when all of these are true:

- `inventory.js --check` exits 0.
- Every active target and every `file:` page owner has a page.
- Every page cites at least one repository path.
- Every unknown marker used in a page is listed in the open-questions chapter.
- Every inventory finding with severity `gap` or `error` is listed there too.
- The index names any chapter that was omitted because the inventory had no members.
- Application source and build files are unchanged by the documentation run.
