# COUNTRY (FILE)

|  |  |
| --- | --- |
| Source | `QDDSSRC/COUNTRY.PF` |
| Language | DDS |
| Class | physical-file |
| Section | data-stores |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 37 from `.ibmi.json` |
| Build manifest | `QDDSSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QDDSSRC/Rules.mk`).

## Purpose

The source defines record `FCOUN`.

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| COUNTRY.PF | `QDDSSRC/COUNTRY.PF` | `QDDSSRC/Rules.mk` |
| SAMREF.FILE | [SAMREF.FILE](./SAMREF-FILE.md) | `QDDSSRC/Rules.mk` |

## Layouts

### File-level source

| Source line | Evidence |
| --- | --- |
| UNIQUE | `QDDSSRC/COUNTRY.PF`:1 |
| REF(SAMREF) | `QDDSSRC/COUNTRY.PF`:2 |

### FCOUN

Record `FCOUN` at `QDDSSRC/COUNTRY.PF`:3.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| COID | R |  | `QDDSSRC/COUNTRY.PF`:4 |
| COUNTR | R |  | `QDDSSRC/COUNTRY.PF`:5 |
| COISO | 3 |  | `QDDSSRC/COUNTRY.PF`:6 |
| COISO5 | 3 |  | `QDDSSRC/COUNTRY.PF`:7 |
| COISO1 | 3 |  | `QDDSSRC/COUNTRY.PF`:8 |
| K | COID |  | `QDDSSRC/COUNTRY.PF`:9 |

No open question was raised from this page.

