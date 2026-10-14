# PRO202D (FILE)

|  |  |
| --- | --- |
| Source | `QDDSSRC/PRO202D.DSPF` |
| Language | DDS |
| Class | display-file |
| Section | screens |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 37 from `.ibmi.json` |
| Build manifest | `QDDSSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QDDSSRC/Rules.mk`).

## Purpose

A literal in the source reads "Prepare Purchase Proposal".

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| PRO202D.DSPF | `QDDSSRC/PRO202D.DSPF` | `QDDSSRC/Rules.mk` |
| ARTIPROV.FILE | [ARTIPROV.FILE](../data-stores/ARTIPROV-FILE.md) | `QDDSSRC/Rules.mk` |

## Records

### File-level source

| Source line | Evidence |
| --- | --- |
| DSPSIZ(24 80 *DS3) | `QDDSSRC/PRO202D.DSPF`:4 |
| INDARA | `QDDSSRC/PRO202D.DSPF`:5 |
| CA03(03) | `QDDSSRC/PRO202D.DSPF`:6 |
| CA12(12) | `QDDSSRC/PRO202D.DSPF`:7 |
| PRINT | `QDDSSRC/PRO202D.DSPF`:8 |
| ERRSFL | `QDDSSRC/PRO202D.DSPF`:9 |

### SFL01

Record `SFL01` at `QDDSSRC/PRO202D.DSPF`:10. Keywords: `SFL 33                                  SFLNXTCHG EDTCDE(Z) EDTCDE(Z) EDTCDE(Z) EDTCDE(Z) EDTCDE(Z)`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| ARID | ARID *LIBL/ARTICLE |  | `QDDSSRC/PRO202D.DSPF`:13 |
| NAME25 | 25A  O  6  9 |  | `QDDSSRC/PRO202D.DSPF`:14 |
| ARSTOCK | FARTI/ARSTOCK *LIBL/ARTICLE |  | `QDDSSRC/PRO202D.DSPF`:15 |
| ARMINQTY | FARTI/ARMINQTY *LIBL/ARTICLE |  | `QDDSSRC/PRO202D.DSPF`:17 |
| ARCUSQTY | FARTI/ARCUSQTY *LIBL/ARTICLE |  | `QDDSSRC/PRO202D.DSPF`:19 |
| ARPURQTY | FARTI/ARPURQTY *LIBL/ARTICLE |  | `QDDSSRC/PRO202D.DSPF`:21 |
| NEWORD | 5Y 0O  6 62DSPATR(HI) |  | `QDDSSRC/PRO202D.DSPF`:23 |
| APPRICE | FARPR/APPRICE *LIBL/ARTIPROV |  | `QDDSSRC/PRO202D.DSPF`:25 |
| APREF | APREF ARTIPROV |  | `QDDSSRC/PRO202D.DSPF`:26 |
| ARDESC | ARDESC ARTICLE |  | `QDDSSRC/PRO202D.DSPF`:27 |

### CTL01

Record `CTL01` at `QDDSSRC/PRO202D.DSPF`:28. Keywords: `SFLCTL(SFL01) SFLSIZ(0015) SFLPAG(0014) CF08(08 'Confirm') OVERLAY 31                                  SFLDSP 32                                  SFLDSPCTL 30                      `.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| N80 | PAGEDOWN(25 'dynamic subfile') |  | `QDDSSRC/PRO202D.DSPF`:32 |
| SFLDROP | (CF11) |  | `QDDSSRC/PRO202D.DSPF`:39 |
| ted | or deleted' 36) |  | `QDDSSRC/PRO202D.DSPF`:42 |
| RRB01 | 4S 0H      SFLRCDNBR |  | `QDDSSRC/PRO202D.DSPF`:45 |
| PRID | FPROV/PRID *LIBL/PROVIDER |  | `QDDSSRC/PRO202D.DSPF`:54 |
| PROVNM | FPROV/PROVNM *LIBL/PROVIDER |  | `QDDSSRC/PRO202D.DSPF`:55 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| dynamic subfile | `QDDSSRC/PRO202D.DSPF`:32 |
| Invalid Option | `QDDSSRC/PRO202D.DSPF`:40 |
| PRO202-1 | `QDDSSRC/PRO202D.DSPF`:46 |
| Prepare Purchase Proposal | `QDDSSRC/PRO202D.DSPF`:48 |
| Provider . . . . : | `QDDSSRC/PRO202D.DSPF`:53 |
| Press <F8> to confirm. | `QDDSSRC/PRO202D.DSPF`:58 |
| Cust | `QDDSSRC/PRO202D.DSPF`:60 |
| Pur | `QDDSSRC/PRO202D.DSPF`:62 |
| New | `QDDSSRC/PRO202D.DSPF`:64 |
| Article | `QDDSSRC/PRO202D.DSPF`:66 |
| Stock | `QDDSSRC/PRO202D.DSPF`:68 |
| Min | `QDDSSRC/PRO202D.DSPF`:70 |
| Order | `QDDSSRC/PRO202D.DSPF`:72 |
| Order | `QDDSSRC/PRO202D.DSPF`:74 |
| Order | `QDDSSRC/PRO202D.DSPF`:76 |
| U Price | `QDDSSRC/PRO202D.DSPF`:78 |

### KEY01

Record `KEY01` at `QDDSSRC/PRO202D.DSPF`:80. Keywords: `23  3'F3=Exit' COLOR(BLU) 23 32'F12=Cancel' COLOR(BLU) 23 17'F8=Confirm' COLOR(BLU)`.

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| F3=Exit | `QDDSSRC/PRO202D.DSPF`:82 |
| F12=Cancel | `QDDSSRC/PRO202D.DSPF`:84 |
| F8=Confirm | `QDDSSRC/PRO202D.DSPF`:86 |

### FMT03

Record `FMT03` at `QDDSSRC/PRO202D.DSPF`:88. Keywords: `WINDOW(7 10 7 50) 1 20'Confirmation' DSPATR(HI) 3  2'XML File' 6  2'Press Enter to continue.' COLOR(BLU) 4  2'created' 4 10'in'`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| WDWBORDER | ((*CHAR '*-*!!*-*')) |  | `QDDSSRC/PRO202D.DSPF`:91 |
| FILENAME | 30A  O  3 12 |  | `QDDSSRC/PRO202D.DSPF`:97 |
| PATH | 35A  O  4 14 |  | `QDDSSRC/PRO202D.DSPF`:100 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| *-*!!*-* | `QDDSSRC/PRO202D.DSPF`:91 |
| Confirmation | `QDDSSRC/PRO202D.DSPF`:92 |
| XML File | `QDDSSRC/PRO202D.DSPF`:94 |
| Press Enter to continue. | `QDDSSRC/PRO202D.DSPF`:95 |
| created | `QDDSSRC/PRO202D.DSPF`:98 |
| in | `QDDSSRC/PRO202D.DSPF`:99 |

No open question was raised from this page.

