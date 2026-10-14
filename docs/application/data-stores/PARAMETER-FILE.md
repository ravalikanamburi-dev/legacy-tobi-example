# PARAMETER (FILE)

|  |  |
| --- | --- |
| Source | `QDDSSRC/PARAMETER.PF` |
| Language | DDS |
| Class | physical-file |
| Section | data-stores |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 37 from `.ibmi.json` |
| Build manifest | `QDDSSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QDDSSRC/Rules.mk`).

## Purpose

The source defines record `FPARAM`.

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| PARAMETER.PF | `QDDSSRC/PARAMETER.PF` | `QDDSSRC/Rules.mk` |

## Layouts

### File-level source

| Source line | Evidence |
| --- | --- |
| UNIQUE | `QDDSSRC/PARAMETER.PF`:1 |

### FPARAM

Record `FPARAM` at `QDDSSRC/PARAMETER.PF`:2.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| PACODE | 10          TEXT('Parameter code') | Parameter code | `QDDSSRC/PARAMETER.PF`:3 |
| PASUBCODE | 10          TEXT('Parameter sub-Code') | Parameter sub-Code | `QDDSSRC/PARAMETER.PF`:4 |
| PARM1 | 10          TEXT('Parameter 1') | Parameter 1 | `QDDSSRC/PARAMETER.PF`:5 |
| PARM2 | 100          TEXT('Parameter 2') | Parameter 2 | `QDDSSRC/PARAMETER.PF`:6 |
| PARM3 | 2          TEXT('Parameter 3') | Parameter 3 | `QDDSSRC/PARAMETER.PF`:7 |
| PARM4 | 1  0       TEXT('Parameter 4') | Parameter 4 | `QDDSSRC/PARAMETER.PF`:8 |
| PARM5 | 3  0       TEXT('Parameter 5') | Parameter 5 | `QDDSSRC/PARAMETER.PF`:9 |
| K | PACODE |  | `QDDSSRC/PARAMETER.PF`:10 |
| K | PASUBCODE |  | `QDDSSRC/PARAMETER.PF`:11 |

No open question was raised from this page.

