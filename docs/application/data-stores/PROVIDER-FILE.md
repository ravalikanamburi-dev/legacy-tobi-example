# PROVIDER (FILE)

|  |  |
| --- | --- |
| Source | `QDDSSRC/PROVIDER.PF` |
| Language | DDS |
| Class | physical-file |
| Section | data-stores |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 37 from `.ibmi.json` |
| Build manifest | `QDDSSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QDDSSRC/Rules.mk`).

## Purpose

The source defines record `FPROV`.

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| PROVIDER.PF | `QDDSSRC/PROVIDER.PF` | `QDDSSRC/Rules.mk` |
| SAMREF.FILE | [SAMREF.FILE](./SAMREF-FILE.md) | `QDDSSRC/Rules.mk` |

## Layouts

### File-level source

| Source line | Evidence |
| --- | --- |
| REF(SAMREF) | `QDDSSRC/PROVIDER.PF`:1 |

### FPROV

Record `FPROV` at `QDDSSRC/PROVIDER.PF`:2. Keywords: `COLHDG('CREAETION' 'DATE') COLHDG('LAST' 'MODIFICATION') COLHDG('LAST' 'MODIF.' 'BY')`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| PRID | R |  | `QDDSSRC/PROVIDER.PF`:3 |
| PROVNM | R |  | `QDDSSRC/PROVIDER.PF`:4 |
| PRCONT | 30          TEXT('CONTACT PERSON') | CONTACT PERSON | `QDDSSRC/PROVIDER.PF`:5 |
| PRPHONE | PHONE |  | `QDDSSRC/PROVIDER.PF`:6 |
| PRVAT | VATNUM |  | `QDDSSRC/PROVIDER.PF`:7 |
| PRMAIL | EMAIL |  | `QDDSSRC/PROVIDER.PF`:8 |
| PRLINE1 | ADRLINE |  | `QDDSSRC/PROVIDER.PF`:9 |
| PRLINE2 | ADRLINE |  | `QDDSSRC/PROVIDER.PF`:10 |
| PRLINE3 | ADRLINE |  | `QDDSSRC/PROVIDER.PF`:11 |
| PRZIP | ZIPCOD |  | `QDDSSRC/PROVIDER.PF`:12 |
| PRCITY | CITY |  | `QDDSSRC/PROVIDER.PF`:13 |
| PRCOUN | COID |  | `QDDSSRC/PROVIDER.PF`:14 |
| PRCREA | L         TEXT('CREATION DATE') | CREATION DATE | `QDDSSRC/PROVIDER.PF`:15 |
| PRMOD | Z         TEXT('LAST MODIFICATION') | LAST MODIFICATION | `QDDSSRC/PROVIDER.PF`:17 |
| PRMODID | 10          TEXT('LAS MOD BY') | LAS MOD BY | `QDDSSRC/PROVIDER.PF`:19 |
| PRDEL | DLCODE |  | `QDDSSRC/PROVIDER.PF`:21 |

No open question was raised from this page.

