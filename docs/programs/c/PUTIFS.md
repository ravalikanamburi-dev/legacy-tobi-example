# PUTIFS

## Identity

| Item | Value |
| --- | --- |
| Object | PUTIFS (PGM) |
| Source | `QCSRC/PUTIFS.PGM.C` |
| Category | c |
| Lines | 113 |

## Purpose

Unresolved. No menu label and no header comment state a purpose for this member.

## Entry and calls

Unresolved. No parameter declaration was extracted.

Unresolved. The source member does not contain a statement of this kind.

## Files and interfaces

Unresolved. The source member does not contain a statement of this kind.

## Processing logic

Unresolved. No subroutine, procedure, data structure, or command sequence was extracted. Read the member before assuming an execution order.

## Business rules and branches

Conditions copied from the member. A condition is not a business-rule name.

| Line | Condition |
| --- | --- |
| 46 | if ((fd = fopen(fileName, "r")) == NULL) |
| 54 | if (fgets(line, sizeof(line), fd) == NULL) |
| 59 | if (line[0] == 0x00) |
| 62 | if (isdigit(line[0]) && line[3] == ' ') |
| 64 | if (memcmp(line+4, "bytes transferred in ", 21) == 0) |
| 67 | if (line[0] == '4' \|\| line[0] == '5') |
| 69 | if (memcmp(lastCmd, "QUOTE RCMD MKDIR DIR(", 21) == 0) |
| 77 | if (memcpy(lastCmd, "SYSCMD CRTSAVF FILE(QTEMP/PUTIFSSAVF)", 37) == 0) |
| 88 | if (rc > 0) |
| 94 | if (fgets(line, sizeof(line), fd) == NULL) |
| 98 | if (line[0] == 0x00) |

## Validations and calculations

Unresolved. The source member does not contain a statement of this kind.

## Data operations

Unresolved. No file declaration, file command, or SQL statement was extracted.

## Error handling

| Line | Statement |
| --- | --- |
| 90 | fprintf(stderr, "-- Dump of %s ----------------\n", file); |

## Dependencies

Unresolved. No call, copy, or file name was extracted.

## Side effects

Unresolved. This member does not show an output, update, or SQL change statement in the extracted lines.

## Build assumptions

| Line | Control text |
| --- | --- |
| 41 | char  fileName[100]; |
| 42 | char  line[1024]; |
| 43 | char  lastCmd[1024]; |
| 52 | while (!feof(fd)) |

## Traceability

Statements above cite `QCSRC/PUTIFS.PGM.C` and a line number. Indicators extracted: none.

## Evidence status

Confirmed for the statements extracted below. Behavior that is not written in this member remains Unresolved.

