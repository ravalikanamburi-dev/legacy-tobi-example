# COUNTR1 (FILE)

|  |  |
| --- | --- |
| Source | `QDDSSRC/COUNTR1.LF` |
| Language | DDS |
| Class | logical-file |
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
| COUNTR1.LF | `QDDSSRC/COUNTR1.LF` | `QDDSSRC/Rules.mk` |
| COUNTRY.FILE | [COUNTRY.FILE](./COUNTRY-FILE.md) | `QDDSSRC/Rules.mk` |

## Layouts

### FCOUN

Record `FCOUN` at `QDDSSRC/COUNTR1.LF`:1. Keywords: `PFILE(COUNTRY)`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| K | COUNTR |  | `QDDSSRC/COUNTR1.LF`:2 |

No open question was raised from this page.

