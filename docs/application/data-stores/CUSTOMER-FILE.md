# CUSTOMER (FILE)

|  |  |
| --- | --- |
| Source | `QDDSSRC/CUSTOMER.PF` |
| Language | DDS |
| Class | physical-file |
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
| CUSTOMER.PF | `QDDSSRC/CUSTOMER.PF` | `QDDSSRC/Rules.mk` |
| SAMREF.FILE | [SAMREF.FILE](./SAMREF-FILE.md) | `QDDSSRC/Rules.mk` |

## Layouts

### File-level source

| Source line | Evidence |
| --- | --- |
| REF(SAMREF) | `QDDSSRC/CUSTOMER.PF`:1 |

### FCUST

Record `FCUST` at `QDDSSRC/CUSTOMER.PF`:2. Keywords: `COLHDG('LIMIT' 'CREDIT') COLHDG('CREDIT') COLHDG('Last' 'Order' 'Date') COLHDG('CREAETION' 'DATE') COLHDG('LAST' 'MODIFICATION') COLHDG('LAST' 'MODIF.' 'BY')`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| CUID | R |  | `QDDSSRC/CUSTOMER.PF`:3 |
| CUSTNM | R |  | `QDDSSRC/CUSTOMER.PF`:4 |
| CUPHONE | PHONE |  | `QDDSSRC/CUSTOMER.PF`:5 |
| CUVAT | VATNUM |  | `QDDSSRC/CUSTOMER.PF`:6 |
| CUMAIL | EMAIL |  | `QDDSSRC/CUSTOMER.PF`:7 |
| CULINE1 | ADRLINE |  | `QDDSSRC/CUSTOMER.PF`:8 |
| CULINE2 | ADRLINE |  | `QDDSSRC/CUSTOMER.PF`:9 |
| CULINE3 | ADRLINE |  | `QDDSSRC/CUSTOMER.PF`:10 |
| CUZIP | ZIPCOD |  | `QDDSSRC/CUSTOMER.PF`:11 |
| CUCITY | CITY |  | `QDDSSRC/CUSTOMER.PF`:12 |
| CUCOUN | COID |  | `QDDSSRC/CUSTOMER.PF`:13 |
| CULIMCRE | 9  2       TEXT('LIMIT CREDIT') | LIMIT CREDIT | `QDDSSRC/CUSTOMER.PF`:14 |
| CUCREDIT | 9  2       TEXT('CREDIT') | CREDIT | `QDDSSRC/CUSTOMER.PF`:16 |
| CULASTORD | 8  0       TEXT('Last Order Date') | Last Order Date | `QDDSSRC/CUSTOMER.PF`:18 |
| CUCREA | L         TEXT('CREATION DATE') | CREATION DATE | `QDDSSRC/CUSTOMER.PF`:20 |
| CUMOD | Z         TEXT('LAST MODIFICATION') | LAST MODIFICATION | `QDDSSRC/CUSTOMER.PF`:22 |
| CUMODID | 10          TEXT('LAS MOD BY') | LAS MOD BY | `QDDSSRC/CUSTOMER.PF`:24 |
| CUDEL | DLCODE |  | `QDDSSRC/CUSTOMER.PF`:26 |

No open question was raised from this page.

