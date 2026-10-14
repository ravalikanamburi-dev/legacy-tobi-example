# ART201D (FILE)

|  |  |
| --- | --- |
| Source | `QDDSSRC/ART201D-Work_with_Article.DSPF` |
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
| ART201D-Work_with_Article.DSPF | `QDDSSRC/ART201D-Work_with_Article.DSPF` | `QDDSSRC/Rules.mk` |
| ARTIPROV.FILE | [ARTIPROV.FILE](../data-stores/ARTIPROV-FILE.md) | `QDDSSRC/Rules.mk` |
| PROVIDER.FILE | [PROVIDER.FILE](../data-stores/PROVIDER-FILE.md) | `QDDSSRC/Rules.mk` |
| ARTICLE.FILE | [ARTICLE.FILE](../data-stores/ARTICLE-FILE.md) | `QDDSSRC/Rules.mk` |

## Records

### File-level source

| Source line | Evidence |
| --- | --- |
| DSPSIZ(24 80 *DS3) | `QDDSSRC/ART201D-Work_with_Article.DSPF`:4 |
| INDARA | `QDDSSRC/ART201D-Work_with_Article.DSPF`:5 |
| CA03(03) | `QDDSSRC/ART201D-Work_with_Article.DSPF`:6 |
| CA12(12) | `QDDSSRC/ART201D-Work_with_Article.DSPF`:7 |
| PRINT | `QDDSSRC/ART201D-Work_with_Article.DSPF`:8 |
| ERRSFL | `QDDSSRC/ART201D-Work_with_Article.DSPF`:9 |

### SFL01

Record `SFL01` at `QDDSSRC/ART201D-Work_with_Article.DSPF`:10. Keywords: `SFL 33                                  SFLNXTCHG 34                                  DSPATR(RI) 34                                  DSPATR(PC) EDTCDE(Z) EDTCDE(2)`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| OPT01 | 2Y 0B  7  3 |  | `QDDSSRC/ART201D-Work_with_Article.DSPF`:13 |
| APPRID | FARPR/APPRID *LIBL/ARTIPROV |  | `QDDSSRC/ART201D-Work_with_Article.DSPF`:17 |
| PROVNM | FPROV/PROVNM *LIBL/PROVIDER |  | `QDDSSRC/ART201D-Work_with_Article.DSPF`:18 |
| APPRICE | FARPR/APPRICE *LIBL/ARTIPROV |  | `QDDSSRC/ART201D-Work_with_Article.DSPF`:19 |
| APREF | FARPR/APREF *LIBL/ARTIPROV |  | `QDDSSRC/ART201D-Work_with_Article.DSPF`:21 |

### CTL01

Record `CTL01` at `QDDSSRC/ART201D-Work_with_Article.DSPF`:22. Keywords: `SFLCTL(SFL01) CA05(05) OVERLAY 31                                  SFLDSP 32                                  SFLDSPCTL 30                                  SFLCLR 80               `.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| RRB01 | 4S 0H      SFLRCDNBR |  | `QDDSSRC/ART201D-Work_with_Article.DSPF`:33 |
| APARID | APARID ARTIPROV |  | `QDDSSRC/ART201D-Work_with_Article.DSPF`:47 |
| ARDESC | ARDESC ARTICLE |  | `QDDSSRC/ART201D-Work_with_Article.DSPF`:48 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| Invalid Option | `QDDSSRC/ART201D-Work_with_Article.DSPF`:32 |
| ART201-1 | `QDDSSRC/ART201D-Work_with_Article.DSPF`:34 |
| Type options, press Enter. | `QDDSSRC/ART201D-Work_with_Article.DSPF`:36 |
| Opt | `QDDSSRC/ART201D-Work_with_Article.DSPF`:38 |
| Work with Article Providers | `QDDSSRC/ART201D-Work_with_Article.DSPF`:40 |
| 2=Edit | `QDDSSRC/ART201D-Work_with_Article.DSPF`:45 |
| Provider | `QDDSSRC/ART201D-Work_with_Article.DSPF`:49 |
| Unit Price | `QDDSSRC/ART201D-Work_with_Article.DSPF`:51 |
| Reference | `QDDSSRC/ART201D-Work_with_Article.DSPF`:53 |

### KEY01

Record `KEY01` at `QDDSSRC/ART201D-Work_with_Article.DSPF`:55. Keywords: `23  3'F3=Exit' COLOR(BLU) 23 34'F12=Cancel' COLOR(BLU) 23 17'F5=Refresh' COLOR(BLU)`.

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| F3=Exit | `QDDSSRC/ART201D-Work_with_Article.DSPF`:57 |
| F12=Cancel | `QDDSSRC/ART201D-Work_with_Article.DSPF`:59 |
| F5=Refresh | `QDDSSRC/ART201D-Work_with_Article.DSPF`:61 |

### FMT02

Record `FMT02` at `QDDSSRC/ART201D-Work_with_Article.DSPF`:63. Keywords: `CF04(04 'Prompt') 1  2'ART201-2' COLOR(BLU) 3  4'Type choices, press Enter.' COLOR(BLU) 23  3'F3=Exit' COLOR(BLU) 23 19'F12=Cancel' COLOR(BLU) 1 32'ARTIPROV definition' DSPATR(HI) `.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| ARDESC | ARDESC ARTICLE |  | `QDDSSRC/ART201D-Work_with_Article.DSPF`:77 |
| APARID | APARID ARTIPROV |  | `QDDSSRC/ART201D-Work_with_Article.DSPF`:89 |
| APPRICE | FARPR/APPRICE *LIBL/ARTIPROV |  | `QDDSSRC/ART201D-Work_with_Article.DSPF`:90 |
| APREF | FARPR/APREF *LIBL/ARTIPROV |  | `QDDSSRC/ART201D-Work_with_Article.DSPF`:92 |
| APPRID | FARPR/APPRID *LIBL/ARTIPROV |  | `QDDSSRC/ART201D-Work_with_Article.DSPF`:93 |
| PROVNM | FPROV/PROVNM *LIBL/PROVIDER |  | `QDDSSRC/ART201D-Work_with_Article.DSPF`:94 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| ART201-2 | `QDDSSRC/ART201D-Work_with_Article.DSPF`:66 |
| Type choices, press Enter. | `QDDSSRC/ART201D-Work_with_Article.DSPF`:68 |
| F3=Exit | `QDDSSRC/ART201D-Work_with_Article.DSPF`:70 |
| F12=Cancel | `QDDSSRC/ART201D-Work_with_Article.DSPF`:72 |
| ARTIPROV definition | `QDDSSRC/ART201D-Work_with_Article.DSPF`:74 |
| Article  . . . . . . . : | `QDDSSRC/ART201D-Work_with_Article.DSPF`:76 |
| Unit Price   . . . . . . | `QDDSSRC/ART201D-Work_with_Article.DSPF`:78 |
| Provider Reference . . . | `QDDSSRC/ART201D-Work_with_Article.DSPF`:79 |
| Provider | `QDDSSRC/ART201D-Work_with_Article.DSPF`:80 |
| . | `QDDSSRC/ART201D-Work_with_Article.DSPF`:81 |
| . | `QDDSSRC/ART201D-Work_with_Article.DSPF`:82 |
| . | `QDDSSRC/ART201D-Work_with_Article.DSPF`:83 |
| . | `QDDSSRC/ART201D-Work_with_Article.DSPF`:84 |
| . | `QDDSSRC/ART201D-Work_with_Article.DSPF`:85 |
| . | `QDDSSRC/ART201D-Work_with_Article.DSPF`:86 |
| . | `QDDSSRC/ART201D-Work_with_Article.DSPF`:87 |
| : | `QDDSSRC/ART201D-Work_with_Article.DSPF`:88 |

No open question was raised from this page.

