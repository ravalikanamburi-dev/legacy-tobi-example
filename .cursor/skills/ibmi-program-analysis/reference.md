# What to extract from a program

Record the form used by each member (fixed, free, or mixed). Do not describe one form as the application standard unless every member uses it.

## Identity

- RPG: `ctl-opt` / H-spec `dftactgrp`, `actgrp`, `bnddir`, `nomain`, debug and option keywords.
- COBOL: `PROGRAM-ID`, `SELECT`/`FD`, `CALL`, `COPY`, `EXEC SQL`.
- C and C++: `main` or exported functions, parameters, `#include`, file and stream calls, `EXEC SQL`, and macros that exist only for the IBM i target.
- CL: `PGM`/`ENDPGM`, `PARM`, `DCL`, `INCLUDE` or `SRCSTMF`, `CALL`, `OVRDBF`, `MONMSG`, and commands issued.
- SQL routine: procedure or function name, specific name, language, parameter modes, and the SQL body.

Object text comes from the build attribute, a `TEXT` keyword, or a source metadata block. Cite which one. If they disagree, record both.

## Files and data

- RPG F-spec or `dcl-f`: file, device, usage, keyed, `usropn`, rename, prefix, `indds`, `sfile`, `infds`.
- Data areas and data queues named in the member.
- Host variables and SQL statements, including commit and naming options.
- Quoted SQL identifiers stay quoted.

## Interfaces

- Prototypes, `extpgm`, `extproc`, exported procedures, and whether parameters are passed by value or reference.
- Entry parameters, including optional parameters and C `argc`/`argv`.
- Dynamic program names: record the expression. The target is unknown unless the source assigns a literal.

## Control flow

- Subroutines, procedures, COBOL paragraphs, and the conditions that select them.
- Indicator data structures: name and the position range written in this member.
- A panel or step selector: only the values this member assigns, and the subroutine each value performs.
- Function keys: the indicator or command this member tests.

## Errors

- Message identifiers, `MONMSG`, `sqlcode` / `sqlstate`, escape messages, and indicators used as errors.
- Message text belongs on the message-file page. The program page cites the identifier.

## Do not write

- A business purpose inferred only from the object name.
- The behavior of a program, command, or API whose source is not in the repository.
- A runtime library when the project file only has a substitution token.
- Commitment-control behavior that the source does not set.
