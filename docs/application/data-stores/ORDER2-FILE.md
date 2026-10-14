# ORDER2 (FILE)

|  |  |
| --- | --- |
| Source | `QDDSSRC/ORDER2.LF` |
| Language | DDS |
| Class | logical-file |
| Section | data-stores |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 37 from `.ibmi.json` |
| Build manifest | `QDDSSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QDDSSRC/Rules.mk`).

## Purpose

The source defines record `FORDE`.

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| ORDER2.LF | `QDDSSRC/ORDER2.LF` | `QDDSSRC/Rules.mk` |
| ORDER.FILE | [ORDER.FILE](./ORDER-FILE.md) | `QDDSSRC/Rules.mk` |

## Layouts

### FORDE

Record `FORDE` at `QDDSSRC/ORDER2.LF`:1. Keywords: `PFILE(ORDER)`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| K | ORCUID |  | `QDDSSRC/ORDER2.LF`:2 |
| K | ORID |  | `QDDSSRC/ORDER2.LF`:3 |

No open question was raised from this page.

