# CUST (FILE)

|  |  |
| --- | --- |
| Source | `QDDSSRC/CUST.PF` |
| Language | DDS |
| Class | physical-file |
| Section | data-stores |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 37 from `.ibmi.json` |
| Build manifest | `QDDSSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QDDSSRC/Rules.mk`).

## Purpose

The source defines record `TAB001R`.

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| CUST.PF | `QDDSSRC/CUST.PF` | `QDDSSRC/Rules.mk` |

## Build attributes

| Key | Value | Private | Evidence |
| --- | --- | --- | --- |
| MBR | *NONE | yes | `QDDSSRC/Rules.mk` |

## Layouts

### TAB001R

Record `TAB001R` at `QDDSSRC/CUST.PF`:1. Keywords: `TEXT('Customer Record')`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| CUSTID | 5S 0       COLHDG('Customer' 'ID') |  | `QDDSSRC/CUST.PF`:2 |
| CUSTNAME | 30A         COLHDG('Customer' 'Name') |  | `QDDSSRC/CUST.PF`:3 |
| CITY | 20A         COLHDG('City') |  | `QDDSSRC/CUST.PF`:4 |
| AMOUNT | 9P 2       COLHDG('Amount') |  | `QDDSSRC/CUST.PF`:5 |
| STATUS | 1A         COLHDG('Status') |  | `QDDSSRC/CUST.PF`:6 |
| K | CUSTID |  | `QDDSSRC/CUST.PF`:7 |

No open question was raised from this page.

