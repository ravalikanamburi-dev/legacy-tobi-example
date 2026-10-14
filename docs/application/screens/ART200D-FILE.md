# ART200D (FILE)

|  |  |
| --- | --- |
| Source | `QDDSSRC/ART200D-Work_with_Article.DSPF` |
| Language | DDS |
| Class | display-file |
| Section | screens |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 37 from `.ibmi.json` |
| Build manifest | `QDDSSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QDDSSRC/Rules.mk`).

## Purpose

A literal in the source reads "Type options, press Enter.".

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| ART200D-Work_with_Article.DSPF | `QDDSSRC/ART200D-Work_with_Article.DSPF` | `QDDSSRC/Rules.mk` |
| ARTICLE.FILE | [ARTICLE.FILE](../data-stores/ARTICLE-FILE.md) | `QDDSSRC/Rules.mk` |
| VATDEF.FILE | [VATDEF.FILE](../data-stores/VATDEF-FILE.md) | `QDDSSRC/Rules.mk` |

## Records

### File-level source

| Source line | Evidence |
| --- | --- |
| DSPSIZ(24 80 *DS3) | `QDDSSRC/ART200D-Work_with_Article.DSPF`:4 |
| INDARA | `QDDSSRC/ART200D-Work_with_Article.DSPF`:5 |
| CA03(03) | `QDDSSRC/ART200D-Work_with_Article.DSPF`:6 |
| CA12(12) | `QDDSSRC/ART200D-Work_with_Article.DSPF`:7 |
| PRINT | `QDDSSRC/ART200D-Work_with_Article.DSPF`:8 |
| ERRSFL | `QDDSSRC/ART200D-Work_with_Article.DSPF`:9 |

### SFL01

Record `SFL01` at `QDDSSRC/ART200D-Work_with_Article.DSPF`:10. Keywords: `SFL 33                                  SFLNXTCHG 34                                  DSPATR(RI) 34                                  DSPATR(PC) EDTCDE(Z)`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| OPT01 | 2Y 0B  7  3 |  | `QDDSSRC/ART200D-Work_with_Article.DSPF`:13 |
| ARID | FARTI/ARID *LIBL/ARTICLE |  | `QDDSSRC/ART200D-Work_with_Article.DSPF`:17 |
| ARDESC | FARTI/ARDESC *LIBL/ARTICLE |  | `QDDSSRC/ART200D-Work_with_Article.DSPF`:18 |
| ARTIFA | FARTI/ARTIFA *LIBL/ARTICLE |  | `QDDSSRC/ART200D-Work_with_Article.DSPF`:19 |
| ARDEL | FARTI/ARDEL *LIBL/ARTICLE |  | `QDDSSRC/ART200D-Work_with_Article.DSPF`:20 |

### CTL01

Record `CTL01` at `QDDSSRC/ART200D-Work_with_Article.DSPF`:21. Keywords: `SFLCTL(SFL01) SFLSIZ(0015) SFLPAG(0014) CF06(06 'Create') OVERLAY 31                                  SFLDSP 32                                  SFLDSPCTL 30                       `.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| N80 | PAGEDOWN(25 'dynamic subfile') |  | `QDDSSRC/ART200D-Work_with_Article.DSPF`:25 |
| RRB01 | 4S 0H      SFLRCDNBR |  | `QDDSSRC/ART200D-Work_with_Article.DSPF`:33 |
| POSTO | 10A  B  2 23CHECK(LC) |  | `QDDSSRC/ART200D-Work_with_Article.DSPF`:62 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| dynamic subfile | `QDDSSRC/ART200D-Work_with_Article.DSPF`:25 |
| Invalid Option | `QDDSSRC/ART200D-Work_with_Article.DSPF`:32 |
| ART200-1 | `QDDSSRC/ART200D-Work_with_Article.DSPF`:34 |
| Type options, press Enter. | `QDDSSRC/ART200D-Work_with_Article.DSPF`:36 |
| Opt | `QDDSSRC/ART200D-Work_with_Article.DSPF`:38 |
| Work with Articles | `QDDSSRC/ART200D-Work_with_Article.DSPF`:40 |
| 2=Edit | `QDDSSRC/ART200D-Work_with_Article.DSPF`:45 |
| 3=Info | `QDDSSRC/ART200D-Work_with_Article.DSPF`:47 |
| 6=Suppliers | `QDDSSRC/ART200D-Work_with_Article.DSPF`:49 |
| 4=Delete | `QDDSSRC/ART200D-Work_with_Article.DSPF`:51 |
| Id | `QDDSSRC/ART200D-Work_with_Article.DSPF`:53 |
| Description | `QDDSSRC/ART200D-Work_with_Article.DSPF`:55 |
| Fam | `QDDSSRC/ART200D-Work_with_Article.DSPF`:57 |
| Del | `QDDSSRC/ART200D-Work_with_Article.DSPF`:59 |
| Position to . . . | `QDDSSRC/ART200D-Work_with_Article.DSPF`:61 |

### KEY01

Record `KEY01` at `QDDSSRC/ART200D-Work_with_Article.DSPF`:63. Keywords: `23  3'F3=Exit' COLOR(BLU) 23 33'F12=Cancel' COLOR(BLU) 23 16'F6=Create' COLOR(BLU)`.

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| F3=Exit | `QDDSSRC/ART200D-Work_with_Article.DSPF`:65 |
| F12=Cancel | `QDDSSRC/ART200D-Work_with_Article.DSPF`:67 |
| F6=Create | `QDDSSRC/ART200D-Work_with_Article.DSPF`:69 |

### FMT02

Record `FMT02` at `QDDSSRC/ART200D-Work_with_Article.DSPF`:71. Keywords: `CF04(04 'Prompt') 1  2'ART200-2' COLOR(BLU) 3  4'Type choices, press Enter.' COLOR(BLU) 23  3'F3=Exit' COLOR(BLU) 23 36'F12=Cancel' COLOR(BLU) 1 32'Article definition' DSPATR(HI) 5`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| ARID | FARTI/ARID *LIBL/ARTICLE |  | `QDDSSRC/ART200D-Work_with_Article.DSPF`:85 |
| ARDESC | FARTI/ARDESC *LIBL/ARTICLE |  | `QDDSSRC/ART200D-Work_with_Article.DSPF`:87 |
| ARTIFA | FARTI/ARTIFA *LIBL/ARTICLE |  | `QDDSSRC/ART200D-Work_with_Article.DSPF`:95 |
| ARSALEPR | FARTI/ARSALEPR *LIBL/ARTICLE |  | `QDDSSRC/ART200D-Work_with_Article.DSPF`:97 |
| ARWHSPR | FARTI/ARWHSPR *LIBL/ARTICLE |  | `QDDSSRC/ART200D-Work_with_Article.DSPF`:98 |
| ARSTOCK | FARTI/ARSTOCK *LIBL/ARTICLE |  | `QDDSSRC/ART200D-Work_with_Article.DSPF`:99 |
| ARMINQTY | FARTI/ARMINQTY *LIBL/ARTICLE |  | `QDDSSRC/ART200D-Work_with_Article.DSPF`:101 |
| FAMDESC | 30A  O  7 34 |  | `QDDSSRC/ART200D-Work_with_Article.DSPF`:102 |
| WITHVAT | FARTI/ARSALEPR *LIBL/ARTICLE |  | `QDDSSRC/ART200D-Work_with_Article.DSPF`:107 |
| ARVATCD | FARTI/ARVATCD *LIBL/ARTICLE |  | `QDDSSRC/ART200D-Work_with_Article.DSPF`:109 |
| VATRATE | FVAT/VATRATE *LIBL/VATDEF |  | `QDDSSRC/ART200D-Work_with_Article.DSPF`:110 |
| VATDESC | FVAT/VATDESC *LIBL/VATDEF |  | `QDDSSRC/ART200D-Work_with_Article.DSPF`:113 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| ART200-2 | `QDDSSRC/ART200D-Work_with_Article.DSPF`:74 |
| Type choices, press Enter. | `QDDSSRC/ART200D-Work_with_Article.DSPF`:76 |
| F3=Exit | `QDDSSRC/ART200D-Work_with_Article.DSPF`:78 |
| F12=Cancel | `QDDSSRC/ART200D-Work_with_Article.DSPF`:80 |
| Article definition | `QDDSSRC/ART200D-Work_with_Article.DSPF`:82 |
| Article id . . . . . . : | `QDDSSRC/ART200D-Work_with_Article.DSPF`:84 |
| Description  . . . . . . | `QDDSSRC/ART200D-Work_with_Article.DSPF`:86 |
| A description is mandatory | `QDDSSRC/ART200D-Work_with_Article.DSPF`:88 |
| Familly. . . . . . . . . | `QDDSSRC/ART200D-Work_with_Article.DSPF`:91 |
| Reference sale price . . | `QDDSSRC/ART200D-Work_with_Article.DSPF`:92 |
| Stock price  . . . . . . | `QDDSSRC/ART200D-Work_with_Article.DSPF`:93 |
| Minimum stock  . . . . . | `QDDSSRC/ART200D-Work_with_Article.DSPF`:94 |
| Stock  . . . . . . . . . | `QDDSSRC/ART200D-Work_with_Article.DSPF`:100 |
| F4=Prompt | `QDDSSRC/ART200D-Work_with_Article.DSPF`:103 |
| VAT code . . . . . . . . | `QDDSSRC/ART200D-Work_with_Article.DSPF`:105 |
| with VAT  . . . . : | `QDDSSRC/ART200D-Work_with_Article.DSPF`:106 |
| % | `QDDSSRC/ART200D-Work_with_Article.DSPF`:112 |

### FMT03

Record `FMT03` at `QDDSSRC/ART200D-Work_with_Article.DSPF`:114. Keywords: `1  2'ART200-3' COLOR(BLU) 3  4' Make change. Press Enter to confi- COLOR(BLU) 23  3' F3Exit' COLOR(BLU) 23 19' F12Cancel' COLOR(BLU) 1 31'Article Informations' DSPATR(HI) 1 69DATE `.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| rm | ' |  | `QDDSSRC/ART200D-Work_with_Article.DSPF`:119 |
| ARID | FARTI/ARID *LIBL/ARTICLE |  | `QDDSSRC/ART200D-Work_with_Article.DSPF`:127 |
| ARDESC | FARTI/ARDESC *LIBL/ARTICLE |  | `QDDSSRC/ART200D-Work_with_Article.DSPF`:130 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| ART200-3 | `QDDSSRC/ART200D-Work_with_Article.DSPF`:116 |
| F3Exit | `QDDSSRC/ART200D-Work_with_Article.DSPF`:121 |
| F12Cancel | `QDDSSRC/ART200D-Work_with_Article.DSPF`:123 |
| Article Informations | `QDDSSRC/ART200D-Work_with_Article.DSPF`:125 |

No open question was raised from this page.

