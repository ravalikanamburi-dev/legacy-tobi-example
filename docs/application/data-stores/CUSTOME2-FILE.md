# CUSTOME2 (FILE)

|  |  |
| --- | --- |
| Source | `QDDSSRC/CUSTOME2.LF` |
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
| CUSTOME2.LF | `QDDSSRC/CUSTOME2.LF` | `QDDSSRC/Rules.mk` |
| CUSTOMER.FILE | [CUSTOMER.FILE](./CUSTOMER-FILE.md) | `QDDSSRC/Rules.mk` |

## Layouts

### FCUST

Record `FCUST` at `QDDSSRC/CUSTOME2.LF`:1. Keywords: `PFILE(CUSTOMER)`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| K | CUSTNM |  | `QDDSSRC/CUSTOME2.LF`:2 |
| K | CUID |  | `QDDSSRC/CUSTOME2.LF`:3 |

No open question was raised from this page.

