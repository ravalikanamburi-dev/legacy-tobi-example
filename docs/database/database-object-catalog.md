# Database and DDS catalog

Field lines are extracted from DDS or SQL source. A reference field (`R`) points at `SAMREF` or another reference when the member says `REF`. Length is Confirmed only when the member writes digits.

## SAMREF

<a id="common-SAMREF-PF"></a>

Source `common/SAMREF.PF`. Category `physical-file`.

| Line | Record |
| --- | --- |
| 1 | REFER |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 3 | REFER | ADID | 5 P 0 | ADDRESS ID |
| 6 | REFER | ADRLINE | 50 T | ADDRESS LINE |
| 8 | REFER | ARID | 6 T | ARTICLE ID |
| 10 | REFER | ARDESC | 50 T | ARTICLE DESCRPTION |
| 12 | REFER | CUID | 5 P 0 | CUSTOMER ID |
| 15 | REFER | COID | 2 T | COUNTRY CODE |
| 17 | REFER | COUNTR | 30 T | COUNTRY NAME |
| 19 | REFER | CITY | 30 T | CITY |
| 21 | REFER | CUSTNM | 30 T | CUSTOMER NAME |
| 23 | REFER | DLCODE | 1 C |  |
| 25 | REFER | FAID | 3 T | FAMILLY ID |
| 27 | REFER | FADESC | 50 T | FAMILLY DESCRIPTION |
| 29 | REFER | EMAIL | 50 T | ADDRESS MAIL |
| 31 | REFER | ORID | 6 P 0 | ORDER NUMBER |
| 34 | REFER | ODLINE | 5 P 0 | ORDER LINE |
| 37 | REFER | PRID | 5 P 0 | PROVIDER ID |
| 40 | REFER | PROVNM | 30 T | PROVIDER NAME |
| 42 | REFER | PHONE | 15 T | PHONE NUMBER |
| 44 | REFER | QUANTITY | 5 0 | QUANTITY |
| 47 | REFER | TOTPRICE | 9 P 2 | TOTAL PRICE |
| 50 | REFER | UNITPRICE | 7 P 2 | UNIT PRICE |
| 53 | REFER | WHID | 3 T | WAREHOUSE ID |
| 55 | REFER | VATCODE | 1 T | VAT CODE |
| 58 | REFER | VATRATE | 4 2 | VAT RATE % |
| 61 | REFER | VATNUM | 12 T | VAT NUMBER |
| 63 | REFER | WHNAME | 20 T | WAREHOUSE NAME |
| 65 | REFER | YEAR | 4 P 0 | YEAR |
| 67 | REFER | ZIPCOD | 10 T | ZIP CODE |

## vatdef

<a id="functionsVAT-vatdef-pf"></a>

Source `functionsVAT/vatdef.pf`. Category `physical-file`.

| Line | Record |
| --- | --- |
| 2 | FVAT |

Unresolved. No field line was extracted.

## ART200D

<a id="QDDSSRC-ART200D-Work-with-Article-DSPF"></a>

Source `QDDSSRC/ART200D-Work_with_Article.DSPF`. Category `display-file`.

| Line | Record |
| --- | --- |
| 10 | SFL01 |
| 21 | CTL01 |
| 63 | KEY01 |
| 71 | FMT02 |
| 114 | FMT03 |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 12 | SFL01 | A | 33 S |  |
| 14 | SFL01 | A | 34 D |  |
| 15 | SFL01 | A | 34 D |  |
| 28 | CTL01 | A | 31 S |  |
| 29 | CTL01 | A | 32 S |  |
| 30 | CTL01 | A | 30 S |  |
| 31 | CTL01 | A | 80 S |  |
| 32 | CTL01 | A | 35 S |  |
| 34 | CTL01 | A | 1 2 |  |
| 36 | CTL01 | A | 3 4 |  |
| 38 | CTL01 | A | 6 2 |  |
| 40 | CTL01 | A | 1 32 |  |
| 42 | CTL01 | A | 1 68 |  |
| 44 | CTL01 | A | 2 68 |  |
| 45 | CTL01 | A | 4 7 |  |
| 47 | CTL01 | A | 4 17 |  |
| 49 | CTL01 | A | 4 39 |  |
| 51 | CTL01 | A | 4 26 |  |
| 53 | CTL01 | A | 6 7 |  |
| 55 | CTL01 | A | 6 14 |  |
| 57 | CTL01 | A | 6 65 |  |
| 59 | CTL01 | A | 6 69 |  |
| 61 | CTL01 | A | 2 4 |  |
| 65 | KEY01 | A | 23 3 |  |
| 67 | KEY01 | A | 23 33 |  |
| 69 | KEY01 | A | 23 16 |  |
| 74 | FMT02 | A | 1 2 |  |
| 76 | FMT02 | A | 3 4 |  |
| 78 | FMT02 | A | 23 3 |  |
| 80 | FMT02 | A | 23 36 |  |
| 82 | FMT02 | A | 1 32 |  |
| 84 | FMT02 | A | 5 4 |  |
| 86 | FMT02 | A | 6 4 |  |
| 88 | FMT02 | A | 41 E |  |
| 89 | FMT02 | A | 41 |  |
| 91 | FMT02 | A | 7 4 |  |
| 92 | FMT02 | A | 9 4 |  |
| 93 | FMT02 | A | 11 4 |  |
| 94 | FMT02 | A | 12 4 |  |
| 96 | FMT02 | A | 40 E |  |
| 100 | FMT02 | A | 13 4 |  |
| 103 | FMT02 | A | 23 15 |  |
| 105 | FMT02 | A | 8 4 |  |
| 106 | FMT02 | A | 10 9 |  |
| 112 | FMT02 | A | 8 37 |  |
| 116 | FMT03 | A | 1 2 |  |
| 118 | FMT03 | A | 3 4 |  |
| 121 | FMT03 | A | 23 3 |  |
| 123 | FMT03 | A | 23 19 |  |
| 125 | FMT03 | A | 1 31 |  |
| 128 | FMT03 | A | 1 69 |  |
| 131 | FMT03 | A | 2 69 |  |

## ART201D

<a id="QDDSSRC-ART201D-Work-with-Article-DSPF"></a>

Source `QDDSSRC/ART201D-Work_with_Article.DSPF`. Category `display-file`.

| Line | Record |
| --- | --- |
| 10 | SFL01 |
| 22 | CTL01 |
| 55 | KEY01 |
| 63 | FMT02 |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 12 | SFL01 | A | 33 S |  |
| 14 | SFL01 | A | 34 D |  |
| 15 | SFL01 | A | 34 D |  |
| 26 | CTL01 | A | 31 S |  |
| 27 | CTL01 | A | 32 S |  |
| 28 | CTL01 | A | 30 S |  |
| 29 | CTL01 | A | 80 S |  |
| 32 | CTL01 | A | 35 S |  |
| 34 | CTL01 | A | 1 2 |  |
| 36 | CTL01 | A | 3 4 |  |
| 38 | CTL01 | A | 6 2 |  |
| 40 | CTL01 | A | 1 27 |  |
| 42 | CTL01 | A | 1 68 |  |
| 44 | CTL01 | A | 2 68 |  |
| 45 | CTL01 | A | 4 7 |  |
| 49 | CTL01 | A | 6 7 |  |
| 51 | CTL01 | A | 6 44 |  |
| 53 | CTL01 | A | 6 57 |  |
| 57 | KEY01 | A | 23 3 |  |
| 59 | KEY01 | A | 23 34 |  |
| 61 | KEY01 | A | 23 17 |  |
| 66 | FMT02 | A | 1 2 |  |
| 68 | FMT02 | A | 3 4 |  |
| 70 | FMT02 | A | 23 3 |  |
| 72 | FMT02 | A | 23 19 |  |
| 74 | FMT02 | A | 1 32 |  |
| 76 | FMT02 | A | 5 4 |  |
| 78 | FMT02 | A | 9 4 |  |
| 79 | FMT02 | A | 10 4 |  |
| 80 | FMT02 | A | 7 4 |  |
| 81 | FMT02 | A | 7 13 |  |
| 82 | FMT02 | A | 7 15 |  |
| 83 | FMT02 | A | 7 17 |  |
| 84 | FMT02 | A | 7 19 |  |
| 85 | FMT02 | A | 7 21 |  |
| 86 | FMT02 | A | 7 23 |  |
| 87 | FMT02 | A | 7 25 |  |
| 88 | FMT02 | A | 7 27 |  |

## ART202D

<a id="QDDSSRC-ART202D-Work-with-Article-DSPF"></a>

Source `QDDSSRC/ART202D-Work_with_Article.DSPF`. Category `display-file`.

| Line | Record |
| --- | --- |
| 9 | SFL01 |
| 20 | CTL01 |
| 50 | KEY01 |
| 56 | FMT02 |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 11 | SFL01 | A | 33 S |  |
| 13 | SFL01 | A | 34 D |  |
| 14 | SFL01 | A | 34 D |  |
| 25 | CTL01 | A | 31 S |  |
| 26 | CTL01 | A | 32 S |  |
| 27 | CTL01 | A | 30 S |  |
| 28 | CTL01 | A | 80 S |  |
| 29 | CTL01 | A | 35 S |  |
| 31 | CTL01 | A | 1 2 |  |
| 33 | CTL01 | A | 3 4 |  |
| 35 | CTL01 | A | 6 2 |  |
| 37 | CTL01 | A | 1 27 |  |
| 39 | CTL01 | A | 1 68 |  |
| 41 | CTL01 | A | 2 68 |  |
| 42 | CTL01 | A | 4 7 |  |
| 44 | CTL01 | A | 6 64 |  |
| 48 | CTL01 | A | 6 6 |  |
| 51 | KEY01 | A | 23 3 |  |
| 53 | KEY01 | A | 23 19 |  |
| 59 | FMT02 | A | 1 2 |  |
| 61 | FMT02 | A | 3 4 |  |
| 63 | FMT02 | A | 23 3 |  |
| 65 | FMT02 | A | 23 19 |  |
| 67 | FMT02 | A | 1 32 |  |
| 69 | FMT02 | A | 5 4 |  |
| 71 | FMT02 | A | 9 4 |  |
| 72 | FMT02 | A | 10 4 |  |
| 73 | FMT02 | A | 7 4 |  |
| 74 | FMT02 | A | 7 13 |  |
| 75 | FMT02 | A | 7 15 |  |
| 76 | FMT02 | A | 7 17 |  |
| 77 | FMT02 | A | 7 19 |  |
| 78 | FMT02 | A | 7 21 |  |
| 79 | FMT02 | A | 7 23 |  |
| 80 | FMT02 | A | 7 25 |  |
| 81 | FMT02 | A | 7 27 |  |

## ART301D

<a id="QDDSSRC-ART301D-Function-Select-an-article-DSPF"></a>

Source `QDDSSRC/ART301D-Function_Select_an_article.DSPF`. Category `display-file`.

| Line | Record |
| --- | --- |
| 10 | SFL01 |
| 21 | CTL01 |
| 63 | KEY01 |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 12 | SFL01 | A | 33 S |  |
| 14 | SFL01 | A | 34 D |  |
| 15 | SFL01 | A | 34 D |  |
| 28 | CTL01 | A | 31 S |  |
| 29 | CTL01 | A | 32 S |  |
| 30 | CTL01 | A | 30 S |  |
| 31 | CTL01 | A | 80 S |  |
| 32 | CTL01 | A | 35 S |  |
| 33 | CTL01 | A | 36 S |  |
| 35 | CTL01 | A | 1 32 |  |
| 37 | CTL01 | A | 4 3 |  |
| 39 | CTL01 | A | 5 5 |  |
| 41 | CTL01 | A | 7 2 |  |
| 43 | CTL01 | A | 7 6 |  |
| 45 | CTL01 | A | 1 2 |  |
| 47 | CTL01 | A | 2 3 |  |
| 48 | CTL01 | A | 3 3 |  |
| 50 | CTL01 | A | 7 12 |  |
| 52 | CTL01 | A | 7 63 |  |
| 54 | CTL01 | A | 7 68 |  |
| 57 | CTL01 | A | 1 70 |  |
| 60 | CTL01 | A | 2 70 |  |
| 66 | KEY01 | A | 23 2 |  |
| 68 | KEY01 | A | 23 29 |  |
| 70 | KEY01 | A | 23 14 |  |

## ARTICLE

<a id="QDDSSRC-ARTICLE-Article-File-PF"></a>

Source `QDDSSRC/ARTICLE-Article_File.PF`. Category `physical-file`.

| Line | Record |
| --- | --- |
| 2 | FARTI |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 3 | FARTI | ARID | reference |  |
| 4 | FARTI | ARDESC | reference |  |
| 5 | FARTI | ARSALEPR | reference |  |
| 9 | FARTI | ARWHSPR | reference |  |
| 13 | FARTI | ARTIFA | reference |  |
| 14 | FARTI | ARSTOCK | reference |  |
| 18 | FARTI | ARMINQTY | reference |  |
| 22 | FARTI | ARCUSQTY | reference |  |
| 25 | FARTI | ARPURQTY | reference |  |
| 29 | FARTI | ARVATCD | reference |  |
| 34 | FARTI | ARMODID | 11 T | LAS MOD BY |
| 36 | FARTI | ARDEL | reference |  |

## ARTICLE1

<a id="QDDSSRC-ARTICLE1-Article-File-LF"></a>

Source `QDDSSRC/ARTICLE1-Article_File.LF`. Category `logical-file`.

| Line | Record |
| --- | --- |
| 2 | FARTI |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 3 | FARTI | ARID | key |  |

## ARTICLE2

<a id="QDDSSRC-ARTICLE2-LF"></a>

Source `QDDSSRC/ARTICLE2.LF`. Category `logical-file`.

| Line | Record |
| --- | --- |
| 1 | FARTI |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 2 | FARTI | ARDESC | key |  |
| 3 | FARTI | ARID | key |  |

## ARTIPRO1

<a id="QDDSSRC-ARTIPRO1-LF"></a>

Source `QDDSSRC/ARTIPRO1.LF`. Category `logical-file`.

| Line | Record |
| --- | --- |
| 2 | FARPR |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 3 | FARPR | APARID | key |  |
| 4 | FARPR | APPRID | key |  |

## ARTIPROV

<a id="QDDSSRC-ARTIPROV-PF"></a>

Source `QDDSSRC/ARTIPROV.PF`. Category `physical-file`.

| Line | Record |
| --- | --- |
| 3 | FARPR |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 4 | FARPR | APARID | reference |  |
| 5 | FARPR | APPRID | reference |  |
| 6 | FARPR | APPRICE | reference |  |
| 8 | FARPR | APREF | 10 T | PROVIDER REFERENCE |
| 13 | FARPR | APMODID | 10 T | LAS MOD BY |
| 15 | FARPR | APDEL | reference |  |
| 16 | FARPR | APPRID | key |  |
| 17 | FARPR | APARID | key |  |

## COU200D

<a id="QDDSSRC-COU200D-DSPF"></a>

Source `QDDSSRC/COU200D.DSPF`. Category `display-file`.

| Line | Record |
| --- | --- |
| 9 | SFL01 |
| 19 | CTL01 |
| 44 | KEY01 |
| 49 | FMT02 |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 11 | SFL01 | A | 33 S |  |
| 13 | SFL01 | A | 34 D |  |
| 14 | SFL01 | A | 34 D |  |
| 25 | CTL01 | A | 31 S |  |
| 26 | CTL01 | A | 32 S |  |
| 27 | CTL01 | A | 30 S |  |
| 28 | CTL01 | A | 80 S |  |
| 29 | CTL01 | A | 35 S |  |
| 31 | CTL01 | A | 1 2 |  |
| 33 | CTL01 | A | 3 4 |  |
| 35 | CTL01 | A | 4 6 |  |
| 37 | CTL01 | A | 6 3 |  |
| 39 | CTL01 | A | 1 31 |  |
| 41 | CTL01 | A | 1 66 |  |
| 43 | CTL01 | A | 2 66 |  |
| 45 | KEY01 | A | 23 3 |  |
| 47 | KEY01 | A | 23 19 |  |
| 51 | FMT02 | A | 1 2 |  |
| 53 | FMT02 | A | 3 4 |  |
| 55 | FMT02 | A | 23 3 |  |
| 57 | FMT02 | A | 23 19 |  |
| 59 | FMT02 | A | 6 4 |  |
| 60 | FMT02 | A | 5 4 |  |
| 61 | FMT02 | A | 7 4 |  |
| 62 | FMT02 | A | 1 34 |  |
| 64 | FMT02 | A | 1 66 |  |
| 66 | FMT02 | A | 2 66 |  |

## COU301D

<a id="QDDSSRC-COU301D-DSPF"></a>

Source `QDDSSRC/COU301D.DSPF`. Category `display-file`.

| Line | Record |
| --- | --- |
| 9 | DUMMY |
| 15 | SFL01 |
| 24 | CTL01 |
| 66 | KEY01 |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 17 | SFL01 | A | 33 S |  |
| 19 | SFL01 | A | 34 D |  |
| 20 | SFL01 | A | 34 D |  |
| 32 | CTL01 | A | 31 S |  |
| 33 | CTL01 | A | 32 S |  |
| 34 | CTL01 | A | 30 S |  |
| 35 | CTL01 | A | 80 S |  |
| 36 | CTL01 | A | 35 S |  |
| 37 | CTL01 | A | 36 S |  |
| 39 | CTL01 | A | 1 22 |  |
| 41 | CTL01 | A | 2 2 |  |
| 43 | CTL01 | A | 3 3 |  |
| 45 | CTL01 | A | 4 2 |  |
| 48 | CTL01 | A | 41 E |  |
| 49 | CTL01 | A | 42 E |  |
| 51 | CTL01 | A | 3 19 |  |
| 53 | CTL01 | A | 4 6 |  |
| 55 | CTL01 | A | 4 13 |  |
| 58 | CTL01 | A | 40 D |  |
| 59 | CTL01 | A | 40 D |  |
| 60 | CTL01 | A | 1 1 |  |
| 70 | KEY01 | A | 17 2 |  |
| 72 | KEY01 | A | 40 17 |  |
| 76 | KEY01 | A | 17 27 |  |

## COUNTR1

<a id="QDDSSRC-COUNTR1-LF"></a>

Source `QDDSSRC/COUNTR1.LF`. Category `logical-file`.

| Line | Record |
| --- | --- |
| 1 | FCOUN |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 2 | FCOUN | COUNTR | key |  |

## COUNTRY

<a id="QDDSSRC-COUNTRY-PF"></a>

Source `QDDSSRC/COUNTRY.PF`. Category `physical-file`.

| Line | Record |
| --- | --- |
| 3 | FCOUN |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 4 | FCOUN | COID | reference |  |
| 5 | FCOUN | COUNTR | reference |  |
| 6 | FCOUN | COISO | 3 |  |
| 7 | FCOUN | COISO5 | 3 |  |
| 8 | FCOUN | COISO1 | 3 |  |
| 9 | FCOUN | COID | key |  |

## CUS200D

<a id="QDDSSRC-CUS200D-DSPF"></a>

Source `QDDSSRC/CUS200D.DSPF`. Category `display-file`.

| Line | Record |
| --- | --- |
| 9 | SFL01 |
| 20 | CTL01 |
| 60 | KEY01 |
| 70 | FMT02 |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 11 | SFL01 | A | 33 S |  |
| 13 | SFL01 | A | 34 D |  |
| 14 | SFL01 | A | 34 D |  |
| 26 | CTL01 | A | 31 S |  |
| 27 | CTL01 | A | 32 S |  |
| 28 | CTL01 | A | 30 S |  |
| 29 | CTL01 | A | 80 S |  |
| 32 | CTL01 | A | 35 S |  |
| 34 | CTL01 | A | 1 2 |  |
| 36 | CTL01 | A | 3 4 |  |
| 38 | CTL01 | A | 6 3 |  |
| 40 | CTL01 | A | 1 31 |  |
| 42 | CTL01 | A | 1 70 |  |
| 44 | CTL01 | A | 2 70 |  |
| 45 | CTL01 | A | 4 6 |  |
| 47 | CTL01 | A | 4 17 |  |
| 49 | CTL01 | A | 6 7 |  |
| 51 | CTL01 | A | 6 13 |  |
| 53 | CTL01 | A | 6 44 |  |
| 55 | CTL01 | A | 6 74 |  |
| 57 | CTL01 | A | 2 4 |  |
| 62 | KEY01 | A | 23 3 |  |
| 64 | KEY01 | A | 23 48 |  |
| 66 | KEY01 | A | 23 17 |  |
| 68 | KEY01 | A | 23 33 |  |
| 73 | FMT02 | A | 1 2 |  |
| 75 | FMT02 | A | 3 4 |  |
| 77 | FMT02 | A | 23 3 |  |
| 79 | FMT02 | A | 23 19 |  |
| 81 | FMT02 | A | 1 34 |  |
| 83 | FMT02 | A | 1 70 |  |
| 86 | FMT02 | A | 2 70 |  |
| 88 | FMT02 | A | 5 3 |  |
| 89 | FMT02 | A | 6 3 |  |
| 92 | FMT02 | A | 41 E |  |
| 94 | FMT02 | A | 7 3 |  |
| 95 | FMT02 | A | 8 3 |  |
| 96 | FMT02 | A | 9 3 |  |
| 100 | FMT02 | A | 10 3 |  |
| 110 | FMT02 | A | 13 3 |  |
| 111 | FMT02 | A | 14 3 |  |
| 113 | FMT02 | A | 40 E |  |
| 114 | FMT02 | A | 15 3 |  |
| 115 | FMT02 | A | 16 3 |  |
| 117 | FMT02 | A | reference |  |
| 120 | FMT02 | A | reference |  |
| 124 | FMT02 | A | 17 3 |  |

## CUS301D

<a id="QDDSSRC-CUS301D-DSPF"></a>

Source `QDDSSRC/CUS301D.DSPF`. Category `display-file`.

| Line | Record |
| --- | --- |
| 10 | SFL01 |
| 21 | CTL01 |
| 55 | KEY01 |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 12 | SFL01 | A | 33 S |  |
| 14 | SFL01 | A | 34 D |  |
| 15 | SFL01 | A | 34 D |  |
| 26 | CTL01 | A | 31 S |  |
| 27 | CTL01 | A | 32 S |  |
| 28 | CTL01 | A | 30 S |  |
| 29 | CTL01 | A | 80 S |  |
| 32 | CTL01 | A | 35 S |  |
| 33 | CTL01 | A | 36 S |  |
| 35 | CTL01 | A | 1 32 |  |
| 37 | CTL01 | A | 4 3 |  |
| 39 | CTL01 | A | 5 5 |  |
| 41 | CTL01 | A | 7 2 |  |
| 43 | CTL01 | A | 7 6 |  |
| 45 | CTL01 | A | 1 2 |  |
| 47 | CTL01 | A | 7 11 |  |
| 49 | CTL01 | A | 7 42 |  |
| 51 | CTL01 | A | 2 3 |  |
| 52 | CTL01 | A | 3 3 |  |
| 58 | KEY01 | A | 23 2 |  |
| 60 | KEY01 | A | 40 23 |  |
| 62 | KEY01 | A | 23 14 |  |

## CUST

<a id="QDDSSRC-CUST-PF"></a>

Source `QDDSSRC/CUST.PF`. Category `physical-file`.

| Line | Record |
| --- | --- |
| 1 | TAB001R |

Unresolved. No field line was extracted.

## CUST1

<a id="QDDSSRC-CUST1-LF"></a>

Source `QDDSSRC/CUST1.LF`. Category `logical-file`.

| Line | Record |
| --- | --- |
| 1 | TAB001L |

Unresolved. No field line was extracted.

## CUSTOME1

<a id="QDDSSRC-CUSTOME1-LF"></a>

Source `QDDSSRC/CUSTOME1.LF`. Category `logical-file`.

| Line | Record |
| --- | --- |
| 2 | FCUST |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 3 | FCUST | CUID | key |  |

## CUSTOME2

<a id="QDDSSRC-CUSTOME2-LF"></a>

Source `QDDSSRC/CUSTOME2.LF`. Category `logical-file`.

| Line | Record |
| --- | --- |
| 1 | FCUST |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 2 | FCUST | CUSTNM | key |  |
| 3 | FCUST | CUID | key |  |

## CUSTOMER

<a id="QDDSSRC-CUSTOMER-PF"></a>

Source `QDDSSRC/CUSTOMER.PF`. Category `physical-file`.

| Line | Record |
| --- | --- |
| 2 | FCUST |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 3 | FCUST | CUID | reference |  |
| 4 | FCUST | CUSTNM | reference |  |
| 5 | FCUST | CUPHONE | reference |  |
| 6 | FCUST | CUVAT | reference |  |
| 7 | FCUST | CUMAIL | reference |  |
| 8 | FCUST | CULINE1 | reference |  |
| 9 | FCUST | CULINE2 | reference |  |
| 10 | FCUST | CULINE3 | reference |  |
| 11 | FCUST | CUZIP | reference |  |
| 12 | FCUST | CUCITY | reference |  |
| 13 | FCUST | CUCOUN | reference |  |
| 14 | FCUST | CULIMCRE | 9 2 | LIMIT CREDIT |
| 16 | FCUST | CUCREDIT | 9 2 | CREDIT |
| 18 | FCUST | CULASTORD | 8 0 | Last Order Date |
| 24 | FCUST | CUMODID | 10 T | LAS MOD BY |
| 26 | FCUST | CUDEL | reference |  |

## DETORD

<a id="QDDSSRC-DETORD-PF"></a>

Source `QDDSSRC/DETORD.PF`. Category `physical-file`.

| Line | Record |
| --- | --- |
| 2 | FDETO |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 3 | FDETO | ODORID | reference |  |
| 4 | FDETO | ODYEAR | reference |  |
| 5 | FDETO | ODLINE | reference |  |
| 6 | FDETO | ODARID | reference |  |
| 7 | FDETO | ODQTY | reference | ORDERED QUANTITY |
| 10 | FDETO | ODQTYLIV | reference | DELIVERED QUANTITY |
| 13 | FDETO | ODPRICE | reference |  |
| 14 | FDETO | ODTOT | reference |  |
| 15 | FDETO | ODTOTVAT | reference |  |
| 18 | FDETO | ODLINE | key |  |
| 19 | FDETO | ODORID | key |  |
| 20 | FDETO | ODYEAR | key |  |

## DETORD1

<a id="QDDSSRC-DETORD1-LF"></a>

Source `QDDSSRC/DETORD1.LF`. Category `logical-file`.

| Line | Record |
| --- | --- |
| 2 | FDETO |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 3 | FDETO | ODORID | key |  |
| 4 | FDETO | ODLINE | key |  |

## FAM301D

<a id="QDDSSRC-FAM301D-DSPF"></a>

Source `QDDSSRC/FAM301D.DSPF`. Category `display-file`.

| Line | Record |
| --- | --- |
| 9 | DUMMY |
| 15 | SFL01 |
| 24 | CTL01 |
| 66 | KEY01 |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 17 | SFL01 | A | 33 S |  |
| 19 | SFL01 | A | 34 D |  |
| 20 | SFL01 | A | 34 D |  |
| 32 | CTL01 | A | 31 S |  |
| 33 | CTL01 | A | 32 S |  |
| 34 | CTL01 | A | 30 S |  |
| 35 | CTL01 | A | 80 S |  |
| 36 | CTL01 | A | 35 S |  |
| 37 | CTL01 | A | 36 S |  |
| 39 | CTL01 | A | 1 22 |  |
| 41 | CTL01 | A | 2 2 |  |
| 43 | CTL01 | A | 3 3 |  |
| 45 | CTL01 | A | 4 2 |  |
| 48 | CTL01 | A | 41 E |  |
| 49 | CTL01 | A | 42 E |  |
| 51 | CTL01 | A | 3 19 |  |
| 53 | CTL01 | A | 4 6 |  |
| 55 | CTL01 | A | 4 13 |  |
| 58 | CTL01 | A | 40 D |  |
| 59 | CTL01 | A | 40 D |  |
| 60 | CTL01 | A | 1 1 |  |
| 70 | KEY01 | A | 17 2 |  |
| 72 | KEY01 | A | 40 17 |  |
| 76 | KEY01 | A | 17 27 |  |

## FAMILL1

<a id="QDDSSRC-FAMILL1-LF"></a>

Source `QDDSSRC/FAMILL1.LF`. Category `logical-file`.

| Line | Record |
| --- | --- |
| 1 | FFAMI |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 2 | FFAMI | FADESC | key |  |

## FAMILLY

<a id="QDDSSRC-FAMILLY-PF"></a>

Source `QDDSSRC/FAMILLY.PF`. Category `physical-file`.

| Line | Record |
| --- | --- |
| 3 | FFAMI |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 4 | FFAMI | FAID | reference |  |
| 5 | FFAMI | FADESC | reference |  |
| 6 | FFAMI | FAVATCD | reference |  |
| 13 | FFAMI | FAMODID | 10 T | LAS MOD BY |
| 15 | FFAMI | FADEL | reference |  |
| 16 | FFAMI | FAID | key |  |

## ORD100D

<a id="QDDSSRC-ORD100D-DSPF"></a>

Source `QDDSSRC/ORD100D.DSPF`. Category `display-file`.

| Line | Record |
| --- | --- |
| 9 | SFL01 |
| 23 | CTL01 |
| 72 | KEY01 |
| 86 | FMT02 |
| 125 | FMT03 |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 11 | SFL01 | A | 33 S |  |
| 13 | SFL01 | A | 34 D |  |
| 14 | SFL01 | A | 34 D |  |
| 31 | CTL01 | A | 31 S |  |
| 32 | CTL01 | A | 32 S |  |
| 33 | CTL01 | A | 30 S |  |
| 34 | CTL01 | A | 80 S |  |
| 35 | CTL01 | A | 35 S |  |
| 36 | CTL01 | A | 36 S |  |
| 39 | CTL01 | A | 1 2 |  |
| 41 | CTL01 | A | 3 4 |  |
| 42 | CTL01 | A | 8 t |  |
| 44 | CTL01 | A | 4 6 |  |
| 46 | CTL01 | A | 6 3 |  |
| 48 | CTL01 | A | 1 29 |  |
| 50 | CTL01 | A | 4 17 |  |
| 52 | CTL01 | A | 2 4 |  |
| 55 | CTL01 | A | 6 7 |  |
| 57 | CTL01 | A | 6 12 |  |
| 59 | CTL01 | A | 6 19 |  |
| 61 | CTL01 | A | 6 52 |  |
| 63 | CTL01 | A | 6 58 |  |
| 65 | CTL01 | A | 6 70 |  |
| 67 | CTL01 | A | 1 69 |  |
| 70 | CTL01 | A | 2 69 |  |
| 74 | KEY01 | A | 23 3 |  |
| 76 | KEY01 | A | 23 40 |  |
| 78 | KEY01 | A | 23 14 |  |
| 80 | KEY01 | A | 23 25 |  |
| 89 | FMT02 | A | 1 2 |  |
| 91 | FMT02 | A | 3 4 |  |
| 93 | FMT02 | A | 23 3 |  |
| 95 | FMT02 | A | 23 19 |  |
| 97 | FMT02 | A | 1 28 |  |
| 99 | FMT02 | A | 1 65 |  |
| 102 | FMT02 | A | 2 65 |  |
| 104 | FMT02 | A | 5 4 |  |
| 105 | FMT02 | A | 7 4 |  |
| 106 | FMT02 | A | 9 4 |  |
| 107 | FMT02 | A | 10 4 |  |
| 108 | FMT02 | A | 11 4 |  |
| 109 | FMT02 | A | 12 4 |  |
| 110 | FMT02 | A | 13 4 |  |
| 118 | FMT02 | A | 8 6 |  |
| 120 | FMT02 | A | 6 4 |  |
| 129 | FMT03 | A | 1 20 |  |
| 131 | FMT03 | A | 3 2 |  |
| 133 | FMT03 | A | 3 15 |  |
| 136 | FMT03 | A | 5 2 |  |
| 137 | FMT03 | A | 6 2 |  |

## ORD101D

<a id="QDDSSRC-ORD101D-DSPF"></a>

Source `QDDSSRC/ORD101D.DSPF`. Category `display-file`.

| Line | Record |
| --- | --- |
| 9 | SFL01 |
| 25 | CTL01 |
| 78 | KEY01 |
| 90 | FMT02 |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 11 | SFL01 | A | 33 S |  |
| 13 | SFL01 | A | 34 D |  |
| 14 | SFL01 | A | 34 D |  |
| 30 | CTL01 | A | 31 S |  |
| 31 | CTL01 | A | 32 S |  |
| 32 | CTL01 | A | 30 S |  |
| 33 | CTL01 | A | 80 S |  |
| 36 | CTL01 | A | 35 S |  |
| 37 | CTL01 | A | 36 S |  |
| 40 | CTL01 | A | 1 2 |  |
| 42 | CTL01 | A | 4 4 |  |
| 44 | CTL01 | A | 5 6 |  |
| 46 | CTL01 | A | 6 3 |  |
| 48 | CTL01 | A | 1 30 |  |
| 50 | CTL01 | A | 5 17 |  |
| 52 | CTL01 | A | 2 4 |  |
| 55 | CTL01 | A | 6 7 |  |
| 57 | CTL01 | A | 6 12 |  |
| 59 | CTL01 | A | 6 19 |  |
| 61 | CTL01 | A | 6 52 |  |
| 63 | CTL01 | A | 6 58 |  |
| 65 | CTL01 | A | 6 70 |  |
| 67 | CTL01 | A | 1 69 |  |
| 70 | CTL01 | A | 2 69 |  |
| 72 | CTL01 | A | 3 4 |  |
| 74 | CTL01 | A | 3 27 |  |
| 76 | CTL01 | A | 5 29 |  |
| 80 | KEY01 | A | 23 3 |  |
| 82 | KEY01 | A | 23 40 |  |
| 88 | KEY01 | A | 23 19 |  |
| 93 | FMT02 | A | 1 2 |  |
| 95 | FMT02 | A | 3 4 |  |
| 97 | FMT02 | A | 23 3 |  |
| 99 | FMT02 | A | 23 19 |  |
| 101 | FMT02 | A | 1 28 |  |
| 103 | FMT02 | A | 1 65 |  |
| 106 | FMT02 | A | 2 65 |  |
| 108 | FMT02 | A | 5 4 |  |
| 109 | FMT02 | A | 8 4 |  |
| 110 | FMT02 | A | 10 4 |  |
| 111 | FMT02 | A | 12 4 |  |
| 112 | FMT02 | A | 13 4 |  |
| 113 | FMT02 | A | 14 4 |  |
| 114 | FMT02 | A | 15 4 |  |
| 117 | FMT02 | A | 38 E |  |
| 123 | FMT02 | A | 9 6 |  |
| 125 | FMT02 | A | 7 4 |  |
| 129 | FMT02 | A | 6 4 |  |
| 131 | FMT02 | A | 6 28 |  |
| 133 | FMT02 | A | 11 4 |  |
| 135 | FMT02 | A | 37 E |  |

## ORD200D

<a id="QDDSSRC-ORD200D-DSPF"></a>

Source `QDDSSRC/ORD200D.DSPF`. Category `display-file`.

| Line | Record |
| --- | --- |
| 9 | SFL01 |
| 26 | CTL01 |
| 82 | KEY01 |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 11 | SFL01 | A | 33 S |  |
| 13 | SFL01 | A | 34 D |  |
| 14 | SFL01 | A | 34 D |  |
| 33 | CTL01 | A | 31 S |  |
| 34 | CTL01 | A | 32 S |  |
| 35 | CTL01 | A | 30 S |  |
| 36 | CTL01 | A | 80 S |  |
| 37 | CTL01 | A | 35 S |  |
| 38 | CTL01 | A | 36 S |  |
| 40 | CTL01 | A | 37 S |  |
| 43 | CTL01 | A | 1 2 |  |
| 45 | CTL01 | A | 3 4 |  |
| 47 | CTL01 | A | 6 2 |  |
| 49 | CTL01 | A | 1 27 |  |
| 51 | CTL01 | A | 1 68 |  |
| 54 | CTL01 | A | 2 68 |  |
| 56 | CTL01 | A | 4 7 |  |
| 58 | CTL01 | A | 4 30 |  |
| 60 | CTL01 | A | 4 18 |  |
| 62 | CTL01 | A | 4 43 |  |
| 64 | CTL01 | A | 4 56 |  |
| 68 | CTL01 | A | 6 8 |  |
| 70 | CTL01 | A | 6 14 |  |
| 72 | CTL01 | A | 6 20 |  |
| 74 | CTL01 | A | 6 46 |  |
| 76 | CTL01 | A | 6 57 |  |
| 78 | CTL01 | A | 6 37 |  |
| 80 | CTL01 | A | 4 68 |  |
| 84 | KEY01 | A | 23 3 |  |
| 86 | KEY01 | A | 23 32 |  |
| 88 | KEY01 | A | 23 16 |  |

## ORD201D

<a id="QDDSSRC-ORD201D-DSPF"></a>

Source `QDDSSRC/ORD201D.DSPF`. Category `display-file`.

| Line | Record |
| --- | --- |
| 9 | SFL01 |
| 28 | CTL01 |
| 82 | KEY01 |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 11 | SFL01 | A | 33 S |  |
| 13 | SFL01 | A | 34 D |  |
| 14 | SFL01 | A | 34 D |  |
| 36 | CTL01 | A | 31 S |  |
| 37 | CTL01 | A | 32 S |  |
| 38 | CTL01 | A | 30 S |  |
| 39 | CTL01 | A | 80 S |  |
| 41 | CTL01 | A | 35 S |  |
| 42 | CTL01 | A | 36 S |  |
| 44 | CTL01 | A | 37 S |  |
| 47 | CTL01 | A | 1 2 |  |
| 49 | CTL01 | A | 3 4 |  |
| 51 | CTL01 | A | 6 2 |  |
| 53 | CTL01 | A | 1 27 |  |
| 55 | CTL01 | A | 1 68 |  |
| 57 | CTL01 | A | 2 68 |  |
| 58 | CTL01 | A | 4 7 |  |
| 60 | CTL01 | A | 4 30 |  |
| 62 | CTL01 | A | 4 18 |  |
| 64 | CTL01 | A | 4 43 |  |
| 66 | CTL01 | A | 4 56 |  |
| 68 | CTL01 | A | 6 8 |  |
| 70 | CTL01 | A | 6 14 |  |
| 72 | CTL01 | A | 6 19 |  |
| 74 | CTL01 | A | 6 46 |  |
| 76 | CTL01 | A | 6 57 |  |
| 78 | CTL01 | A | 6 37 |  |
| 80 | CTL01 | A | 4 68 |  |
| 84 | KEY01 | A | 23 3 |  |
| 86 | KEY01 | A | 23 55 |  |
| 88 | KEY01 | A | 23 42 |  |
| 90 | KEY01 | A | 23 14 |  |
| 92 | KEY01 | A | 23 28 |  |

## ORD202D

<a id="QDDSSRC-ORD202D-DSPF"></a>

Source `QDDSSRC/ORD202D.DSPF`. Category `display-file`.

| Line | Record |
| --- | --- |
| 9 | SFL01 |
| 26 | CTL01 |
| 75 | KEY01 |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 11 | SFL01 | A | 33 S |  |
| 31 | CTL01 | A | 31 S |  |
| 32 | CTL01 | A | 32 S |  |
| 33 | CTL01 | A | 30 S |  |
| 34 | CTL01 | A | 80 S |  |
| 38 | CTL01 | A | 35 S |  |
| 40 | CTL01 | A | 1 2 |  |
| 42 | CTL01 | A | 1 27 |  |
| 44 | CTL01 | A | 1 68 |  |
| 46 | CTL01 | A | 2 68 |  |
| 47 | CTL01 | A | 2 2 |  |
| 50 | CTL01 | A | 3 2 |  |
| 58 | CTL01 | A | 4 2 |  |
| 59 | CTL01 | A | 5 2 |  |
| 60 | CTL01 | A | 6 2 |  |
| 61 | CTL01 | A | 7 2 |  |
| 63 | CTL01 | A | 7 7 |  |
| 65 | CTL01 | A | 7 15 |  |
| 67 | CTL01 | A | 7 22 |  |
| 69 | CTL01 | A | 7 41 |  |
| 71 | CTL01 | A | 7 54 |  |
| 73 | CTL01 | A | 7 65 |  |
| 77 | KEY01 | A | 23 3 |  |
| 79 | KEY01 | A | 23 32 |  |
| 81 | KEY01 | A | 23 17 |  |
| 87 | KEY01 | A | 21 50 |  |

## ORD500O

<a id="QDDSSRC-ORD500O-PRTF"></a>

Source `QDDSSRC/ORD500O.PRTF`. Category `printer-file`.

| Line | Record |
| --- | --- |
| 6 | HEADER |
| 27 | HEADER2 |
| 63 | HEADER3 |
| 93 | DETAIL |
| 118 | TOTAL |
| 151 | FOOTER |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 12 | HEADER | A | 3 |  |
| 16 | HEADER | A | 3 |  |
| 19 | HEADER | A | 3 |  |
| 32 | HEADER2 | A | 41 |  |
| 70 | HEADER3 | A | 3 |  |
| 78 | HEADER3 | A | 66 |  |
| 80 | HEADER3 | A | 3 |  |
| 125 | TOTAL | A | 72 |  |
| 127 | TOTAL | A | 66 |  |
| 133 | TOTAL | A | 66 |  |
| 139 | TOTAL | A | 64 |  |
| 158 | FOOTER | A | 37 |  |

## ORDER

<a id="QDDSSRC-ORDER-PF"></a>

Source `QDDSSRC/ORDER.PF`. Category `physical-file`.

| Line | Record |
| --- | --- |
| 2 | FORDE |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 3 | FORDE | ORID | reference |  |
| 4 | FORDE | ORYEAR | reference |  |
| 5 | FORDE | ORCUID | reference |  |
| 6 | FORDE | ORDATE | 8 0 | ORDER DATE |
| 8 | FORDE | ORDATDEL | 8 0 | DELIVERY DATE |
| 10 | FORDE | ORDATCLO | 8 0 | CLOSE DATE |

## ORDER1

<a id="QDDSSRC-ORDER1-LF"></a>

Source `QDDSSRC/ORDER1.LF`. Category `logical-file`.

| Line | Record |
| --- | --- |
| 2 | FORDE |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 3 | FORDE | ORID | key |  |

## ORDER2

<a id="QDDSSRC-ORDER2-LF"></a>

Source `QDDSSRC/ORDER2.LF`. Category `logical-file`.

| Line | Record |
| --- | --- |
| 1 | FORDE |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 2 | FORDE | ORCUID | key |  |
| 3 | FORDE | ORID | key |  |

## ORDER3

<a id="QDDSSRC-ORDER3-LF"></a>

Source `QDDSSRC/ORDER3.LF`. Category `logical-file`.

| Line | Record |
| --- | --- |
| 1 | FORDE |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 2 | FORDE | ORDATE | key |  |
| 3 | FORDE | ORID | key |  |

## PAR200D

<a id="QDDSSRC-PAR200D-DSPF"></a>

Source `QDDSSRC/PAR200D.DSPF`. Category `display-file`.

| Line | Record |
| --- | --- |
| 10 | SFL01 |
| 26 | CTL01 |
| 71 | KEY01 |
| 79 | FMT02 |
| 113 | FMT03 |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 12 | SFL01 | A | 33 S |  |
| 14 | SFL01 | A | 34 D |  |
| 15 | SFL01 | A | 34 D |  |
| 18 | SFL01 | A | reference |  |
| 32 | CTL01 | A | 31 S |  |
| 33 | CTL01 | A | 32 S |  |
| 34 | CTL01 | A | 30 S |  |
| 35 | CTL01 | A | 80 S |  |
| 38 | CTL01 | A | 35 S |  |
| 40 | CTL01 | A | 1 2 |  |
| 42 | CTL01 | A | 3 4 |  |
| 44 | CTL01 | A | 6 2 |  |
| 46 | CTL01 | A | 1 31 |  |
| 48 | CTL01 | A | 1 70 |  |
| 51 | CTL01 | A | 2 70 |  |
| 53 | CTL01 | A | 4 6 |  |
| 55 | CTL01 | A | 4 17 |  |
| 57 | CTL01 | A | 6 6 |  |
| 59 | CTL01 | A | 6 17 |  |
| 61 | CTL01 | A | 6 28 |  |
| 63 | CTL01 | A | 6 39 |  |
| 65 | CTL01 | A | 6 72 |  |
| 67 | CTL01 | A | 6 75 |  |
| 69 | CTL01 | A | 6 79 |  |
| 73 | KEY01 | A | 23 3 |  |
| 75 | KEY01 | A | 23 34 |  |
| 77 | KEY01 | A | 23 18 |  |
| 81 | FMT02 | A | 1 2 |  |
| 83 | FMT02 | A | 3 4 |  |
| 85 | FMT02 | A | 23 3 |  |
| 87 | FMT02 | A | 23 19 |  |
| 89 | FMT02 | A | 1 34 |  |
| 91 | FMT02 | A | 1 70 |  |
| 94 | FMT02 | A | 2 70 |  |
| 96 | FMT02 | A | 5 3 |  |
| 97 | FMT02 | A | 6 3 |  |
| 98 | FMT02 | A | 7 3 |  |
| 99 | FMT02 | A | 8 3 |  |
| 100 | FMT02 | A | 10 3 |  |
| 101 | FMT02 | A | 11 3 |  |
| 102 | FMT02 | A | 12 3 |  |
| 104 | FMT02 | A | reference |  |
| 115 | FMT03 | A | 1 2 |  |
| 117 | FMT03 | A | 3 4 |  |
| 119 | FMT03 | A | 23 3 |  |
| 121 | FMT03 | A | 23 19 |  |
| 123 | FMT03 | A | 1 33 |  |
| 125 | FMT03 | A | 1 70 |  |
| 128 | FMT03 | A | 2 70 |  |
| 130 | FMT03 | A | 5 3 |  |
| 131 | FMT03 | A | 6 3 |  |
| 132 | FMT03 | A | 7 3 |  |
| 133 | FMT03 | A | 8 3 |  |
| 134 | FMT03 | A | 10 3 |  |
| 135 | FMT03 | A | 11 3 |  |
| 136 | FMT03 | A | 12 3 |  |
| 138 | FMT03 | A | reference |  |
| 139 | FMT03 | A | 40 E |  |

## PARAMETER

<a id="QDDSSRC-PARAMETER-PF"></a>

Source `QDDSSRC/PARAMETER.PF`. Category `physical-file`.

| Line | Record |
| --- | --- |
| 2 | FPARAM |

Unresolved. No field line was extracted.

## PRO200D

<a id="QDDSSRC-PRO200D-DSPF"></a>

Source `QDDSSRC/PRO200D.DSPF`. Category `display-file`.

| Line | Record |
| --- | --- |
| 9 | SFL01 |
| 20 | CTL01 |
| 57 | KEY01 |
| 63 | FMT02 |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 11 | SFL01 | A | 33 S |  |
| 13 | SFL01 | A | 34 D |  |
| 14 | SFL01 | A | 34 D |  |
| 26 | CTL01 | A | 31 S |  |
| 27 | CTL01 | A | 32 S |  |
| 28 | CTL01 | A | 30 S |  |
| 29 | CTL01 | A | 80 S |  |
| 30 | CTL01 | A | 35 S |  |
| 32 | CTL01 | A | 1 2 |  |
| 34 | CTL01 | A | 3 4 |  |
| 36 | CTL01 | A | 6 3 |  |
| 38 | CTL01 | A | 1 31 |  |
| 40 | CTL01 | A | 1 70 |  |
| 42 | CTL01 | A | 2 70 |  |
| 43 | CTL01 | A | 4 6 |  |
| 45 | CTL01 | A | 4 17 |  |
| 47 | CTL01 | A | 6 7 |  |
| 49 | CTL01 | A | 6 13 |  |
| 51 | CTL01 | A | 6 44 |  |
| 53 | CTL01 | A | 6 74 |  |
| 55 | CTL01 | A | 4 30 |  |
| 58 | KEY01 | A | 23 3 |  |
| 60 | KEY01 | A | 23 19 |  |
| 66 | FMT02 | A | 1 2 |  |
| 68 | FMT02 | A | 3 4 |  |
| 70 | FMT02 | A | 23 3 |  |
| 72 | FMT02 | A | 23 19 |  |
| 74 | FMT02 | A | 1 34 |  |
| 76 | FMT02 | A | 1 70 |  |
| 78 | FMT02 | A | 2 70 |  |
| 79 | FMT02 | A | 5 3 |  |
| 80 | FMT02 | A | 6 3 |  |
| 83 | FMT02 | A | 41 E |  |
| 84 | FMT02 | A | 7 3 |  |
| 85 | FMT02 | A | 8 3 |  |
| 86 | FMT02 | A | 9 3 |  |
| 90 | FMT02 | A | 10 3 |  |
| 96 | FMT02 | A | 13 3 |  |
| 97 | FMT02 | A | 14 3 |  |
| 99 | FMT02 | A | 40 E |  |

## PRO201D

<a id="QDDSSRC-PRO201D-DSPF"></a>

Source `QDDSSRC/PRO201D.DSPF`. Category `display-file`.

| Line | Record |
| --- | --- |
| 8 | SFL01 |
| 28 | CTL01 |
| 63 | KEY01 |
| 69 | FMT02 |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 10 | SFL01 | A | 33 S |  |
| 12 | SFL01 | A | 34 D |  |
| 13 | SFL01 | A | 34 D |  |
| 34 | CTL01 | A | 31 S |  |
| 35 | CTL01 | A | 32 S |  |
| 36 | CTL01 | A | 30 S |  |
| 37 | CTL01 | A | 80 S |  |
| 38 | CTL01 | A | 35 S |  |
| 40 | CTL01 | A | 1 2 |  |
| 42 | CTL01 | A | 3 4 |  |
| 44 | CTL01 | A | 6 3 |  |
| 46 | CTL01 | A | 1 70 |  |
| 48 | CTL01 | A | 2 70 |  |
| 49 | CTL01 | A | 4 6 |  |
| 51 | CTL01 | A | 4 17 |  |
| 53 | CTL01 | A | 6 7 |  |
| 55 | CTL01 | A | 6 13 |  |
| 57 | CTL01 | A | 6 44 |  |
| 59 | CTL01 | A | 6 74 |  |
| 61 | CTL01 | A | 1 32 |  |
| 64 | KEY01 | A | 23 3 |  |
| 66 | KEY01 | A | 23 19 |  |
| 72 | FMT02 | A | 1 2 |  |
| 74 | FMT02 | A | 3 4 |  |
| 76 | FMT02 | A | 23 3 |  |
| 78 | FMT02 | A | 23 19 |  |
| 80 | FMT02 | A | 1 70 |  |
| 82 | FMT02 | A | 2 70 |  |
| 83 | FMT02 | A | 5 3 |  |
| 84 | FMT02 | A | 6 3 |  |
| 87 | FMT02 | A | 41 E |  |
| 88 | FMT02 | A | 7 3 |  |
| 89 | FMT02 | A | 8 3 |  |
| 90 | FMT02 | A | 9 3 |  |
| 94 | FMT02 | A | 10 3 |  |
| 100 | FMT02 | A | 13 3 |  |
| 101 | FMT02 | A | 14 3 |  |
| 103 | FMT02 | A | 40 E |  |
| 105 | FMT02 | A | 1 33 |  |

## PRO202D

<a id="QDDSSRC-PRO202D-DSPF"></a>

Source `QDDSSRC/PRO202D.DSPF`. Category `display-file`.

| Line | Record |
| --- | --- |
| 10 | SFL01 |
| 28 | CTL01 |
| 80 | KEY01 |
| 88 | FMT03 |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 12 | SFL01 | A | 33 S |  |
| 35 | CTL01 | A | 31 S |  |
| 36 | CTL01 | A | 32 S |  |
| 37 | CTL01 | A | 30 S |  |
| 38 | CTL01 | A | 80 S |  |
| 40 | CTL01 | A | 35 S |  |
| 41 | CTL01 | A | 36 S |  |
| 43 | CTL01 | A | 37 S |  |
| 46 | CTL01 | A | 1 2 |  |
| 48 | CTL01 | A | 1 28 |  |
| 50 | CTL01 | A | 1 68 |  |
| 53 | CTL01 | A | 2 4 |  |
| 56 | CTL01 | A | 2 68 |  |
| 58 | CTL01 | A | 3 4 |  |
| 60 | CTL01 | A | 4 49 |  |
| 62 | CTL01 | A | 4 56 |  |
| 64 | CTL01 | A | 4 63 |  |
| 66 | CTL01 | A | 5 2 |  |
| 68 | CTL01 | A | 5 35 |  |
| 70 | CTL01 | A | 5 42 |  |
| 72 | CTL01 | A | 5 49 |  |
| 74 | CTL01 | A | 5 55 |  |
| 76 | CTL01 | A | 5 62 |  |
| 78 | CTL01 | A | 5 69 |  |
| 82 | KEY01 | A | 23 3 |  |
| 84 | KEY01 | A | 23 32 |  |
| 86 | KEY01 | A | 23 17 |  |
| 92 | FMT03 | A | 1 20 |  |
| 94 | FMT03 | A | 3 2 |  |
| 95 | FMT03 | A | 6 2 |  |
| 98 | FMT03 | A | 4 2 |  |
| 99 | FMT03 | A | 4 10 |  |

## PROVIDE1

<a id="QDDSSRC-PROVIDE1-LF"></a>

Source `QDDSSRC/PROVIDE1.LF`. Category `logical-file`.

| Line | Record |
| --- | --- |
| 2 | FPROV |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 3 | FPROV | PRID | key |  |

## PROVIDER

<a id="QDDSSRC-PROVIDER-PF"></a>

Source `QDDSSRC/PROVIDER.PF`. Category `physical-file`.

| Line | Record |
| --- | --- |
| 2 | FPROV |

| Line | Record | Field | Definition | Text |
| --- | --- | --- | --- | --- |
| 3 | FPROV | PRID | reference |  |
| 4 | FPROV | PROVNM | reference |  |
| 5 | FPROV | PRCONT | 30 T | CONTACT PERSON |
| 6 | FPROV | PRPHONE | reference |  |
| 7 | FPROV | PRVAT | reference |  |
| 8 | FPROV | PRMAIL | reference |  |
| 9 | FPROV | PRLINE1 | reference |  |
| 10 | FPROV | PRLINE2 | reference |  |
| 11 | FPROV | PRLINE3 | reference |  |
| 12 | FPROV | PRZIP | reference |  |
| 13 | FPROV | PRCITY | reference |  |
| 14 | FPROV | PRCOUN | reference |  |
| 19 | FPROV | PRMODID | 10 T | LAS MOD BY |
| 21 | FPROV | PRDEL | reference |  |

## LASTORDNO

<a id="QDTASRC-LASTORDNO-DTAARA"></a>

Source `QDTASRC/LASTORDNO.DTAARA`. Category `data-area`.

Unresolved. No CREATE or LABEL statement was extracted.

## STREAMDTA

<a id="QDTASRC-STREAMDTA-DTAQ"></a>

Source `QDTASRC/STREAMDTA.DTAQ`. Category `data-queue`.

Unresolved. No CREATE or LABEL statement was extracted.

## ARTIINF

<a id="QSQLSRC-ARTIINF-TABLE"></a>

Source `QSQLSRC/ARTIINF.TABLE`. Category `sql-table`.

| Line | Statement |
| --- | --- |
| 2 | CREATE OR REPLACE TABLE ARTIINF ( |
| 9 | LABEL ON TABLE ARTIINF |
| 12 | LABEL ON COLUMN ARTIINF |

## ARTLSTDAT

<a id="QSQLSRC-ARTLSTDAT-VIEW"></a>

Source `QSQLSRC/ARTLSTDAT.VIEW`. Category `sql-view`.

| Line | Statement |
| --- | --- |
| 4 | CREATE |
| 11 | SELECT |
| 27 | LABEL ON COLUMN ARTLSTDAT ( |
| 32 | LABEL ON COLUMN ARTLSTDAT ( |

## CUSSEQ

<a id="QSQLSRC-CUSSEQ-SQLSEQ"></a>

Source `QSQLSRC/CUSSEQ.SQLSEQ`. Category `sql-sequence`.

| Line | Statement |
| --- | --- |
| 5 | CREATE OR REPLACE SEQUENCE CUSSEQ |
| 11 | LABEL ON SEQUENCE CUSSEQ IS 'Next customer Number'; |

## CUSTINFO1

<a id="QSQLSRC-CUSTINFO1-PFSQL"></a>

Source `QSQLSRC/CUSTINFO1.PFSQL`. Category `sql-file`.

| Line | Statement |
| --- | --- |
| 1 | CREATE OR REPLACE TABLE Custinfo1( |
| 10 | LABEL ON TABLE Custinfo1 IS 'Custinfo1 Master Table'; |
| 12 | LABEL ON COLUMN Custinfo1( |

## CUSTTBL

<a id="QSQLSRC-CUSTTBL-TABLE"></a>

Source `QSQLSRC/CUSTTBL.TABLE`. Category `sql-table`.

| Line | Statement |
| --- | --- |
| 1 | CREATE OR REPLACE TABLE CUSTTBL ( |
| 7 | LABEL ON TABLE CUSTTBL |
| 10 | LABEL ON COLUMN CUSTTBL ( |

## ORDERCUS

<a id="QSQLSRC-ORDERCUS-VIEW"></a>

Source `QSQLSRC/ORDERCUS.VIEW`. Category `sql-view`.

| Line | Statement |
| --- | --- |
| 1 | CREATE OR REPLACE VIEW ORDERCUS ( |
| 11 | SELECT ORID, |
| 27 | LABEL ON COLUMN ORDERCUS |
| 33 | LABEL ON COLUMN ORDERCUS |

## valuse

<a id="QSQLSRC-valuse-sqlvar"></a>

Source `QSQLSRC/valuse.sqlvar`. Category `sql-variable`.

| Line | Statement |
| --- | --- |
| 1 | CREATE OR REPLACE VARIABLE VALUSE |
| 5 | LABEL ON VARIABLE VALUSE IS 'VALUSE indicator' ; |
