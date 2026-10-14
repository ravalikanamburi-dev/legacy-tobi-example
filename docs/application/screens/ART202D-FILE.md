# ART202D (FILE)

|  |  |
| --- | --- |
| Source | `QDDSSRC/ART202D-Work_with_Article.DSPF` |
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
| ART202D-Work_with_Article.DSPF | `QDDSSRC/ART202D-Work_with_Article.DSPF` | `QDDSSRC/Rules.mk` |

## Records

### File-level source

| Source line | Evidence |
| --- | --- |
| DSPSIZ(24 80 *DS3) | `QDDSSRC/ART202D-Work_with_Article.DSPF`:3 |
| INDARA | `QDDSSRC/ART202D-Work_with_Article.DSPF`:4 |
| CA03(03) | `QDDSSRC/ART202D-Work_with_Article.DSPF`:5 |
| CA12(12) | `QDDSSRC/ART202D-Work_with_Article.DSPF`:6 |
| PRINT | `QDDSSRC/ART202D-Work_with_Article.DSPF`:7 |
| ERRSFL | `QDDSSRC/ART202D-Work_with_Article.DSPF`:8 |

### SFL01

Record `SFL01` at `QDDSSRC/ART202D-Work_with_Article.DSPF`:9. Keywords: `SFL 33                                  SFLNXTCHG 34                                  DSPATR(RI) 34                                  DSPATR(PC) EDTCDE(Z)`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| OPT01 | 2Y 0B  7  3 |  | `QDDSSRC/ART202D-Work_with_Article.DSPF`:12 |
| APREF | FARPR/APREF *LIBL/ARTIPROV |  | `QDDSSRC/ART202D-Work_with_Article.DSPF`:16 |
| APARID | APARID ARTIPROV |  | `QDDSSRC/ART202D-Work_with_Article.DSPF`:17 |
| ARDESC | ARDESC ARTICLE |  | `QDDSSRC/ART202D-Work_with_Article.DSPF`:18 |
| APPRICE | FARPR/APPRICE *LIBL/ARTIPROV |  | `QDDSSRC/ART202D-Work_with_Article.DSPF`:19 |

### CTL01

Record `CTL01` at `QDDSSRC/ART202D-Work_with_Article.DSPF`:20. Keywords: `SFLCTL(SFL01) SFLSIZ(0015) SFLPAG(0014) OVERLAY 31                                  SFLDSP 32                                  SFLDSPCTL 30                                  SFLCLR `.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| RRB01 | 4S 0H      SFLRCDNBR |  | `QDDSSRC/ART202D-Work_with_Article.DSPF`:30 |
| APPRID | FARPR/APPRID *LIBL/ARTIPROV |  | `QDDSSRC/ART202D-Work_with_Article.DSPF`:46 |
| PROVNM | FPROV/PROVNM *LIBL/PROVIDER |  | `QDDSSRC/ART202D-Work_with_Article.DSPF`:47 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| Invalid Option | `QDDSSRC/ART202D-Work_with_Article.DSPF`:29 |
| ART202-1 | `QDDSSRC/ART202D-Work_with_Article.DSPF`:31 |
| Type options, press Enter. | `QDDSSRC/ART202D-Work_with_Article.DSPF`:33 |
| Opt | `QDDSSRC/ART202D-Work_with_Article.DSPF`:35 |
| Work with Article Providers | `QDDSSRC/ART202D-Work_with_Article.DSPF`:37 |
| 2=Edit | `QDDSSRC/ART202D-Work_with_Article.DSPF`:42 |
| Reference | `QDDSSRC/ART202D-Work_with_Article.DSPF`:44 |
| Article | `QDDSSRC/ART202D-Work_with_Article.DSPF`:48 |

### KEY01

Record `KEY01` at `QDDSSRC/ART202D-Work_with_Article.DSPF`:50. Keywords: `23  3'F3=Exit' COLOR(BLU) 23 19'F12=Cancel' COLOR(BLU)`.

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| F3=Exit | `QDDSSRC/ART202D-Work_with_Article.DSPF`:51 |
| F12=Cancel | `QDDSSRC/ART202D-Work_with_Article.DSPF`:53 |

### FMT02

Record `FMT02` at `QDDSSRC/ART202D-Work_with_Article.DSPF`:56. Keywords: `CF04(04 'Prompt') 1  2'ART202-2' COLOR(BLU) 3  4'Type choices, press Enter.' COLOR(BLU) 23  3'F3=Exit' COLOR(BLU) 23 19'F12=Cancel' COLOR(BLU) 1 32'ARTIPROV definition' DSPATR(HI) `.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| ARDESC | ARDESC ARTICLE |  | `QDDSSRC/ART202D-Work_with_Article.DSPF`:70 |
| APARID | APARID ARTIPROV |  | `QDDSSRC/ART202D-Work_with_Article.DSPF`:82 |
| APPRICE | FARPR/APPRICE *LIBL/ARTIPROV |  | `QDDSSRC/ART202D-Work_with_Article.DSPF`:83 |
| APREF | FARPR/APREF *LIBL/ARTIPROV |  | `QDDSSRC/ART202D-Work_with_Article.DSPF`:85 |
| APPRID | FARPR/APPRID *LIBL/ARTIPROV |  | `QDDSSRC/ART202D-Work_with_Article.DSPF`:86 |
| PROVNM | FPROV/PROVNM *LIBL/PROVIDER |  | `QDDSSRC/ART202D-Work_with_Article.DSPF`:87 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| ART202-2 | `QDDSSRC/ART202D-Work_with_Article.DSPF`:59 |
| Type choices, press Enter. | `QDDSSRC/ART202D-Work_with_Article.DSPF`:61 |
| F3=Exit | `QDDSSRC/ART202D-Work_with_Article.DSPF`:63 |
| F12=Cancel | `QDDSSRC/ART202D-Work_with_Article.DSPF`:65 |
| ARTIPROV definition | `QDDSSRC/ART202D-Work_with_Article.DSPF`:67 |
| Article  . . . . . . . : | `QDDSSRC/ART202D-Work_with_Article.DSPF`:69 |
| Unit Price   . . . . . . | `QDDSSRC/ART202D-Work_with_Article.DSPF`:71 |
| Provider Reference . . . | `QDDSSRC/ART202D-Work_with_Article.DSPF`:72 |
| Provider | `QDDSSRC/ART202D-Work_with_Article.DSPF`:73 |
| . | `QDDSSRC/ART202D-Work_with_Article.DSPF`:74 |
| . | `QDDSSRC/ART202D-Work_with_Article.DSPF`:75 |
| . | `QDDSSRC/ART202D-Work_with_Article.DSPF`:76 |
| . | `QDDSSRC/ART202D-Work_with_Article.DSPF`:77 |
| . | `QDDSSRC/ART202D-Work_with_Article.DSPF`:78 |
| . | `QDDSSRC/ART202D-Work_with_Article.DSPF`:79 |
| . | `QDDSSRC/ART202D-Work_with_Article.DSPF`:80 |
| : | `QDDSSRC/ART202D-Work_with_Article.DSPF`:81 |

No open question was raised from this page.

