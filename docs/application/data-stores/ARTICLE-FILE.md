# ARTICLE (FILE)

|  |  |
| --- | --- |
| Source | `QDDSSRC/ARTICLE-Article_File.PF` |
| Language | DDS |
| Class | physical-file |
| Section | data-stores |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 37 from `.ibmi.json` |
| Build manifest | `QDDSSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QDDSSRC/Rules.mk`).

## Purpose

The source defines record `FARTI`.

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| ARTICLE-Article_File.PF | `QDDSSRC/ARTICLE-Article_File.PF` | `QDDSSRC/Rules.mk` |
| SAMREF.FILE | [SAMREF.FILE](./SAMREF-FILE.md) | `QDDSSRC/Rules.mk` |

## Layouts

### File-level source

| Source line | Evidence |
| --- | --- |
| REF(SAMREF) | `QDDSSRC/ARTICLE-Article_File.PF`:1 |

### FARTI

Record `FARTI` at `QDDSSRC/ARTICLE-Article_File.PF`:2. Keywords: `TEXT('REF SALE PRICE') COLHDG('REF' 'SALE' 'PRICE') EDTCDE(2) TEXT('STOCK PRICE') COLHDG('STOCK' 'PRICE') EDTCDE(2) TEXT('STOCK') COLHDG('STOCK') EDTCDE(2) TEXT('MINIMUM STOCK') CO`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| ARID | R |  | `QDDSSRC/ARTICLE-Article_File.PF`:3 |
| ARDESC | R |  | `QDDSSRC/ARTICLE-Article_File.PF`:4 |
| ARSALEPR | UNITPRICE |  | `QDDSSRC/ARTICLE-Article_File.PF`:5 |
| ARWHSPR | UNITPRICE |  | `QDDSSRC/ARTICLE-Article_File.PF`:9 |
| ARTIFA | FAID |  | `QDDSSRC/ARTICLE-Article_File.PF`:13 |
| ARSTOCK | QUANTITY |  | `QDDSSRC/ARTICLE-Article_File.PF`:14 |
| ARMINQTY | QUANTITY |  | `QDDSSRC/ARTICLE-Article_File.PF`:18 |
| ARCUSQTY | QUANTITY |  | `QDDSSRC/ARTICLE-Article_File.PF`:22 |
| ARPURQTY | QUANTITY |  | `QDDSSRC/ARTICLE-Article_File.PF`:25 |
| ARVATCD | VATCODE |  | `QDDSSRC/ARTICLE-Article_File.PF`:29 |
| ARCREA | L         TEXT('CREATION DATE') | CREATION DATE | `QDDSSRC/ARTICLE-Article_File.PF`:30 |
| ARMOD | Z         TEXT('LAST MODIFICATION') | LAST MODIFICATION | `QDDSSRC/ARTICLE-Article_File.PF`:32 |
| ARMODID | 11          TEXT('LAS MOD BY') | LAS MOD BY | `QDDSSRC/ARTICLE-Article_File.PF`:34 |
| ARDEL | DLCODE |  | `QDDSSRC/ARTICLE-Article_File.PF`:36 |

No open question was raised from this page.

