# CUSTOME1 (FILE)

|  |  |
| --- | --- |
| Source | `QDDSSRC/CUSTOME1.LF` |
| Language | DDS |
| Class | logical-file |
| Section | data-stores |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 37 from `.ibmi.json` |
| Build manifest | `QDDSSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QDDSSRC/Rules.mk`).

## Purpose

The source defines record `FCUST`.

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| CUSTOME1.LF | `QDDSSRC/CUSTOME1.LF` | `QDDSSRC/Rules.mk` |
| CUSTOMER.FILE | [CUSTOMER.FILE](./CUSTOMER-FILE.md) | `QDDSSRC/Rules.mk` |

## Layouts

### File-level source

| Source line | Evidence |
| --- | --- |
| UNIQUE | `QDDSSRC/CUSTOME1.LF`:1 |

### FCUST

Record `FCUST` at `QDDSSRC/CUSTOME1.LF`:2. Keywords: `PFILE(CUSTOMER)`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| K | CUID |  | `QDDSSRC/CUSTOME1.LF`:3 |

No open question was raised from this page.

