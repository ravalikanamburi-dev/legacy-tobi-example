# DETORD (FILE)

|  |  |
| --- | --- |
| Source | `QDDSSRC/DETORD.PF` |
| Language | DDS |
| Class | physical-file |
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
| DETORD.PF | `QDDSSRC/DETORD.PF` | `QDDSSRC/Rules.mk` |
| SAMREF.FILE | [SAMREF.FILE](./SAMREF-FILE.md) | `QDDSSRC/Rules.mk` |

## Layouts

### File-level source

| Source line | Evidence |
| --- | --- |
| REF(SAMREF) | `QDDSSRC/DETORD.PF`:1 |

### FDETO

Record `FDETO` at `QDDSSRC/DETORD.PF`:2. Keywords: `COLHDG('ORDER' 'QUANTITY') REFFLD(QUANTITY) COLHDG('DELIV' 'QUANTITY') REFFLD(QUANTITY) TEXT('TOTAL LINE WITH VAT') COLHDG('TOTAL LINE' 'WITH VAT')`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| ODORID | ORID |  | `QDDSSRC/DETORD.PF`:3 |
| ODYEAR | YEAR |  | `QDDSSRC/DETORD.PF`:4 |
| ODLINE | R |  | `QDDSSRC/DETORD.PF`:5 |
| ODARID | ARID |  | `QDDSSRC/DETORD.PF`:6 |
| ODQTY | R               TEXT('ORDERED QUANTITY') | ORDERED QUANTITY | `QDDSSRC/DETORD.PF`:7 |
| ODQTYLIV | R               TEXT('DELIVERED QUANTITY') | DELIVERED QUANTITY | `QDDSSRC/DETORD.PF`:10 |
| ODPRICE | UNITPRICE |  | `QDDSSRC/DETORD.PF`:13 |
| ODTOT | TOTPRICE |  | `QDDSSRC/DETORD.PF`:14 |
| ODTOTVAT | TOTPRICE |  | `QDDSSRC/DETORD.PF`:15 |
| K | ODLINE |  | `QDDSSRC/DETORD.PF`:18 |
| K | ODORID |  | `QDDSSRC/DETORD.PF`:19 |
| K | ODYEAR |  | `QDDSSRC/DETORD.PF`:20 |

No open question was raised from this page.

