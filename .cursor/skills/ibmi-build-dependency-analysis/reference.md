# What to extract from the build

## Manifest

- Subdirectory list and whether each child manifest is reachable from the root.
- Variables and what they name.
- For each target: prerequisites, attributes (`TEXT`, activation group, debug view, optimize, command-processing program, and any other key present), and recipes.
- Private attributes are still documented. Say they are marked private in the manifest.
- Commented targets are inactive.

## ILE

From a create-program or create-service-program script, record modules, entry module, bound service programs, binding directory, activation group, export mode, and text. `&O` and `&N` mean the library and object supplied by the build; they are not a specific library unless the project file names one.

From binder source, record each export block, signature, and symbol exactly. A current and a previous block are both in scope.

From a binding directory, record every bound object. Then compare that list with the manifest prerequisites.

## Triggers

System-trigger script: file, time, event, program, replace option, and trigger name.

SQL trigger: timing, event, table, granularity, referenced row names, and the SQL body or the program it calls. A trigger target and the program it calls are different objects when the names differ. Document both.

## Calls and copies

- Program and procedure calls from the program analysis.
- Service programs named by a binding directory or a bind script.
- Files named by declarations, SQL, overrides, and trigger scripts.
- Copy members that resolve, and include names that do not.

An object with no source is external. Put it on the dependency page and in open questions if the application appears to require it.

## Tests

- Fixture setup and cleanup statements.
- Each test procedure and the assertion it makes.
- The production procedure under test, linked by the call in the test.
- Say which results are asserted: success, missing row, inactive row, or another case. Do not claim a case that has no assertion.

## Globalization

Group files by the CCSID file that applies to their directory. The root CCSID is the default. A nearer file overrides it. List source the inventory could not read as UTF-8. Do not assign a language name without a statement in the repository.

## Actions

Editor actions that compile or build are entry points. Record the command text. Do not describe them as production operations procedures unless the repository says that.
