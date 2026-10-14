# ART301D (FILE)

|  |  |
| --- | --- |
| Source | `QDDSSRC/ART301D-Function_Select_an_article.DSPF` |
| Language | DDS |
| Class | display-file |
| Section | screens |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 37 from `.ibmi.json` |
| Build manifest | `QDDSSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QDDSSRC/Rules.mk`).

## Purpose

A literal in the source reads "Select an Article".

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| ART301D-Function_Select_an_article.DSPF | `QDDSSRC/ART301D-Function_Select_an_article.DSPF` | `QDDSSRC/Rules.mk` |
| ARTICLE.FILE | [ARTICLE.FILE](../data-stores/ARTICLE-FILE.md) | `QDDSSRC/Rules.mk` |
| VATDEF.FILE | [VATDEF.FILE](../data-stores/VATDEF-FILE.md) | `QDDSSRC/Rules.mk` |

## Recipe

``

## Records

### File-level source

| Source line | Evidence |
| --- | --- |
| DSPSIZ(24 80 *DS3) | `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:3 |
| REF(*LIBL/ARTICLE) | `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:4 |
| INDARA | `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:5 |
| PRINT | `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:6 |
| ERRSFL | `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:7 |
| CA03(03) | `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:8 |
| CA12(12) | `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:9 |

### SFL01

Record `SFL01` at `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:10. Keywords: `SFL 33                                  SFLNXTCHG 34                                  DSPATR(RI) 34                                  DSPATR(PC) EDTCDE(Z)`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| OPT01 | 1Y 0B  8  3 |  | `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:13 |
| ARID | ARID ARTICLE |  | `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:17 |
| ARDESC | FARTI/ARDESC *LIBL/ARTICLE |  | `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:18 |
| ARTIFA | FARTI/ARTIFA *LIBL/ARTICLE |  | `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:19 |
| ARSALEPR | FARTI/ARSALEPR *LIBL/ARTICLE |  | `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:20 |

### CTL01

Record `CTL01` at `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:21. Keywords: `SFLCTL(SFL01) SFLSIZ(0015) SFLPAG(0014) CF04(04) OVERLAY 31                                  SFLDSP 32                                  SFLDSPCTL 30                                `.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| N80 | PAGEDOWN(25 'dynamic subfile') |  | `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:25 |
| RRB01 | 4S 0H      SFLRCDNBR |  | `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:34 |
| SRCHDESC | 10A  B  2 27 |  | `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:49 |
| SRCHFAM | FARTI/ARTIFA *LIBL/ARTICLE |  | `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:56 |
| FAMDESC | 20A  O  3 33 |  | `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:62 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| dynamic subfile | `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:25 |
| INVALID OPTION | `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:32 |
| ONLY ONE SELECTION | `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:33 |
| Select an Article | `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:35 |
| Make a selection. Press Enter | `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:37 |
| 1=Select | `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:39 |
| Opt | `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:41 |
| Code | `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:43 |
| ART301 | `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:45 |
| Desc contains  . . . : | `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:47 |
| Family . . . . . . . : | `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:48 |
| Description | `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:50 |
| Fam | `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:52 |
| Price | `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:54 |

### KEY01

Record `KEY01` at `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:63. Keywords: `OVERLAY 23  2'F3=Exit' COLOR(BLU) 23 29'F12=Cancel' COLOR(BLU) 23 14'F4=Prompt' COLOR(BLU)`.

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| F3=Exit | `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:66 |
| F12=Cancel | `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:68 |
| F4=Prompt | `QDDSSRC/ART301D-Function_Select_an_article.DSPF`:70 |

No open question was raised from this page.

