# SAMREF (FILE)

|  |  |
| --- | --- |
| Source | `common/SAMREF.PF` |
| Language | DDS |
| Class | physical-file |
| Section | data-stores |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 37 from `.ibmi.json` |
| Build manifest | `common/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`common/Rules.mk`).

## Purpose

The source defines record `REFER`.

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| $(d)/SAMREF.PF | `common/SAMREF.PF` | `common/Rules.mk` |

## Layouts

### REFER

Record `REFER` at `common/SAMREF.PF`:1. Keywords: `COLHDG('ADRES.' 'ID') EDTCDE(Z) COLHDG('ADDRESS' 'LINE') COLHDG('ART.' 'ID') COLHDG('DESCRIPTION') COLHDG('CUST' 'ID') EDTCDE(Z) COLHDG('CO' 'ID') COLHDG('COUNTRY' 'NAME') COLHDG('`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| ADID | 5P 0       TEXT('ADDRESS ID') | ADDRESS ID | `common/SAMREF.PF`:3 |
| ADRLINE | 50          TEXT('ADDRESS LINE') | ADDRESS LINE | `common/SAMREF.PF`:6 |
| ARID | 6          TEXT('ARTICLE ID') | ARTICLE ID | `common/SAMREF.PF`:8 |
| ARDESC | 50          TEXT('ARTICLE DESCRPTION') | ARTICLE DESCRPTION | `common/SAMREF.PF`:10 |
| CUID | 5P 0       TEXT('CUSTOMER ID') | CUSTOMER ID | `common/SAMREF.PF`:12 |
| COID | 2          TEXT('COUNTRY CODE') | COUNTRY CODE | `common/SAMREF.PF`:15 |
| COUNTR | 30          TEXT('COUNTRY NAME') | COUNTRY NAME | `common/SAMREF.PF`:17 |
| CITY | 30          TEXT('CITY') | CITY | `common/SAMREF.PF`:19 |
| CUSTNM | 30          TEXT('CUSTOMER NAME') | CUSTOMER NAME | `common/SAMREF.PF`:21 |
| DLCODE | 1          COLHDG('DEL' 'CD') |  | `common/SAMREF.PF`:23 |
| FAID | 3          TEXT('FAMILLY ID') | FAMILLY ID | `common/SAMREF.PF`:25 |
| FADESC | 50          TEXT('FAMILLY DESCRIPTION') | FAMILLY DESCRIPTION | `common/SAMREF.PF`:27 |
| EMAIL | 50          TEXT('ADDRESS MAIL') | ADDRESS MAIL | `common/SAMREF.PF`:29 |
| ORID | 6P 0       TEXT('ORDER NUMBER') | ORDER NUMBER | `common/SAMREF.PF`:31 |
| ODLINE | 5P 0       TEXT('ORDER LINE') | ORDER LINE | `common/SAMREF.PF`:34 |
| PRID | 5P 0       TEXT('PROVIDER ID') | PROVIDER ID | `common/SAMREF.PF`:37 |
| PROVNM | 30          TEXT('PROVIDER NAME') | PROVIDER NAME | `common/SAMREF.PF`:40 |
| PHONE | 15          TEXT('PHONE NUMBER') | PHONE NUMBER | `common/SAMREF.PF`:42 |
| QUANTITY | 5  0       TEXT('QUANTITY') | QUANTITY | `common/SAMREF.PF`:44 |
| TOTPRICE | 9P 2       TEXT('TOTAL PRICE') | TOTAL PRICE | `common/SAMREF.PF`:47 |
| UNITPRICE | 7P 2       TEXT('UNIT PRICE') | UNIT PRICE | `common/SAMREF.PF`:50 |
| WHID | 3          TEXT('WAREHOUSE ID') | WAREHOUSE ID | `common/SAMREF.PF`:53 |
| VATCODE | 1          TEXT('VAT CODE') | VAT CODE | `common/SAMREF.PF`:55 |
| VATRATE | 4  2       TEXT('VAT RATE %') | VAT RATE % | `common/SAMREF.PF`:58 |
| VATNUM | 12          TEXT('VAT NUMBER') | VAT NUMBER | `common/SAMREF.PF`:61 |
| WHNAME | 20          TEXT('WAREHOUSE NAME') | WAREHOUSE NAME | `common/SAMREF.PF`:63 |
| YEAR | 4P 0       TEXT('YEAR') | YEAR | `common/SAMREF.PF`:65 |
| ZIPCOD | 10          TEXT('ZIP CODE') | ZIP CODE | `common/SAMREF.PF`:67 |

No open question was raised from this page.

