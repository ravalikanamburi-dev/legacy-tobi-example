---
name: ibmi-program-analysis
description: >-
  Extracts behavior from ILE RPG, SQLRPGLE, OPM RPG, CL, COBOL, C, and C++
  members in an IBM i repository. Use when documenting programs, modules,
  procedures, copy members, calls, files, or control flow for an application
  documentation package.
---

# Program analysis

Use this skill for inventory sections `programs`, `modules`, `copy-members`, and `tests`, and for SQL routines whose body is a procedural language. Read [reference.md](reference.md) while extracting. Fill the section template from the documentation config.

## Procedure

1. Open the primary source and every include it names. Follow includes through the project include path and the source directory.
2. Record the compilation unit: object name, type, language, activation group, binding directory, and whether it is `nomain` or an entry program.
3. List files, parameters, calls, SQL, indicators, and messages that appear in that source.
4. Outline control flow from the subroutines, procedures, or paragraphs that source actually contains.
5. If a display or printer file is declared, summarize the interaction and link to the interface page. Do not copy the entire screen into the program page.
6. For a module, list exported procedures and the prototype member that declares them.
7. For a test, list the procedures it calls and the assertions it contains. Do not add cases the test does not assert.

## Local patterns

Record a screen state machine, indicator layout, or status-flag convention only when that member defines it. If the member has no such variables, write that the pattern is absent. Do not import the layout from a different program or from a coding-convention skill.

## Entry programs built from a script or from modules

When the primary source is a bind script, document the script's entry module, bound modules, and service programs on the program page. Put each module's logic on the module page and link to it.

When the program target has no primary source and `composedFrom` lists modules, the program page records those links plus the activation group and text from the manifest. The module pages keep the procedure logic. A `derived` target is different: a recipe creates it, and the data or build page quotes that recipe.

## Copy members

Document prototypes, copybooks, and included CL fragments on their own pages. On the caller, cite the member name and the symbols used. Do not paste the whole copy member into every caller.
