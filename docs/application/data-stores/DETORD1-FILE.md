# DETORD1 (FILE)

|  |  |
| --- | --- |
| Source | `QDDSSRC/DETORD1.LF` |
| Language | DDS |
| Class | logical-file |
| Section | data-stores |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 37 from `.ibmi.json` |
| Build manifest | `QDDSSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QDDSSRC/Rules.mk`).

## Purpose

The source defines record `FDETO`.

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| DETORD1.LF | `QDDSSRC/DETORD1.LF` | `QDDSSRC/Rules.mk` |
| DETORD.FILE | [DETORD.FILE](./DETORD-FILE.md) | `QDDSSRC/Rules.mk` |

## Layouts

### File-level source

| Source line | Evidence |
| --- | --- |
| UNIQUE | `QDDSSRC/DETORD1.LF`:1 |

### FDETO

Record `FDETO` at `QDDSSRC/DETORD1.LF`:2. Keywords: `PFILE(DETORD)`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| K | ODORID |  | `QDDSSRC/DETORD1.LF`:3 |
| K | ODLINE |  | `QDDSSRC/DETORD1.LF`:4 |

No open question was raised from this page.

