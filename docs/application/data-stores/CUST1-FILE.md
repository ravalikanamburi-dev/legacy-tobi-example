# CUST1 (FILE)

|  |  |
| --- | --- |
| Source | `QDDSSRC/CUST1.LF` |
| Language | DDS |
| Class | logical-file |
| Section | data-stores |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 37 from `.ibmi.json` |
| Build manifest | `QDDSSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QDDSSRC/Rules.mk`).

## Purpose

The source defines record `TAB001L`.

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| CUST1.LF | `QDDSSRC/CUST1.LF` | `QDDSSRC/Rules.mk` |
| CUST.FILE | [CUST.FILE](./CUST-FILE.md) | `QDDSSRC/Rules.mk` |

## Build attributes

| Key | Value | Private | Evidence |
| --- | --- | --- | --- |
| MBR | *NONE | yes | `QDDSSRC/Rules.mk` |

## Layouts

### TAB001L

Record `TAB001L` at `QDDSSRC/CUST1.LF`:1. Keywords: `PFILE(CUST)`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| CUSTID |  |  | `QDDSSRC/CUST1.LF`:2 |
| CUSTNAME |  |  | `QDDSSRC/CUST1.LF`:3 |
| CITY |  |  | `QDDSSRC/CUST1.LF`:4 |
| AMOUNT |  |  | `QDDSSRC/CUST1.LF`:5 |
| STATUS |  |  | `QDDSSRC/CUST1.LF`:6 |
| K | CITY |  | `QDDSSRC/CUST1.LF`:7 |
| K | CUSTNAME |  | `QDDSSRC/CUST1.LF`:8 |

No open question was raised from this page.

