# COU301D (FILE)

|  |  |
| --- | --- |
| Source | `QDDSSRC/COU301D.DSPF` |
| Language | DDS |
| Class | display-file |
| Section | screens |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 37 from `.ibmi.json` |
| Build manifest | `QDDSSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QDDSSRC/Rules.mk`).

## Purpose

A literal in the source reads "Select a Country Code".

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| COU301D.DSPF | `QDDSSRC/COU301D.DSPF` | `QDDSSRC/Rules.mk` |

## Records

### File-level source

| Source line | Evidence |
| --- | --- |
| DSPSIZ(24 80 *DS3) | `QDDSSRC/COU301D.DSPF`:3 |
| INDARA | `QDDSSRC/COU301D.DSPF`:4 |
| PRINT | `QDDSSRC/COU301D.DSPF`:5 |
| ERRSFL | `QDDSSRC/COU301D.DSPF`:6 |
| CA03(03) | `QDDSSRC/COU301D.DSPF`:7 |
| CA12(12) | `QDDSSRC/COU301D.DSPF`:8 |

### DUMMY

Record `DUMMY` at `QDDSSRC/COU301D.DSPF`:9. Keywords: `OVERLAY PUTOVR`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| KEEP |  |  | `QDDSSRC/COU301D.DSPF`:10 |
| ASSUME |  |  | `QDDSSRC/COU301D.DSPF`:11 |
| FLD001 | 1   O 23 79 |  | `QDDSSRC/COU301D.DSPF`:14 |

### SFL01

Record `SFL01` at `QDDSSRC/COU301D.DSPF`:15. Keywords: `SFL 33                                  SFLNXTCHG 34                                  DSPATR(RI) 34                                  DSPATR(PC) EDTCDE(Z)`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| OPT01 | 1Y 0B  6  3 |  | `QDDSSRC/COU301D.DSPF`:18 |
| COID | COID COUNTRY |  | `QDDSSRC/COU301D.DSPF`:22 |
| COUNTR | COUNTR COUNTRY |  | `QDDSSRC/COU301D.DSPF`:23 |

### CTL01

Record `CTL01` at `QDDSSRC/COU301D.DSPF`:24. Keywords: `SFLCTL(SFL01) SFLSIZ(0011) SFLPAG(0010) WINDOW(KEY01) CF08(08) OVERLAY 31                                  SFLDSP 32                                  SFLDSPCTL 30                  `.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| N80 | PAGEDOWN(25 'dynamic subfile') |  | `QDDSSRC/COU301D.DSPF`:30 |
| RRB01 | 4S 0H      SFLRCDNBR |  | `QDDSSRC/COU301D.DSPF`:38 |
| OPTC1 | 1Y 0B  5  3EDTCDE(Z) |  | `QDDSSRC/COU301D.DSPF`:47 |
| ith | selection pending' 42) |  | `QDDSSRC/COU301D.DSPF`:50 |
| POSCOD | COID COUNTRY |  | `QDDSSRC/COU301D.DSPF`:57 |
| POSDES | COUNTR COUNTRY |  | `QDDSSRC/COU301D.DSPF`:62 |
| N40 | DSPATR(ND) |  | `QDDSSRC/COU301D.DSPF`:63 |
| N40 | DSPATR(PR) |  | `QDDSSRC/COU301D.DSPF`:64 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| dynamic subfile | `QDDSSRC/COU301D.DSPF`:30 |
| INVALID OPTION | `QDDSSRC/COU301D.DSPF`:36 |
| ONLY ONE SELECTION | `QDDSSRC/COU301D.DSPF`:37 |
| Select a Country Code | `QDDSSRC/COU301D.DSPF`:39 |
| Make a selection. Press Enter | `QDDSSRC/COU301D.DSPF`:41 |
| 1=Select | `QDDSSRC/COU301D.DSPF`:43 |
| Opt | `QDDSSRC/COU301D.DSPF`:45 |
| Invalid option | `QDDSSRC/COU301D.DSPF`:48 |
| 8=Position to | `QDDSSRC/COU301D.DSPF`:51 |
| Code | `QDDSSRC/COU301D.DSPF`:53 |
| Description | `QDDSSRC/COU301D.DSPF`:55 |
| COU301 | `QDDSSRC/COU301D.DSPF`:60 |

### KEY01

Record `KEY01` at `QDDSSRC/COU301D.DSPF`:66. Keywords: `OVERLAY WINDOW(4 25 18 42) 17  2'F3=Exit' COLOR(BLU) 40                             17 14'F8=By code' COLOR(BLU) COLOR(BLU) 17 27'F12=Cancel' COLOR(BLU)`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| N40 | 17 14'F8=By desc.' |  | `QDDSSRC/COU301D.DSPF`:74 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| F3=Exit | `QDDSSRC/COU301D.DSPF`:70 |
| F8=By code | `QDDSSRC/COU301D.DSPF`:72 |
| F8=By desc. | `QDDSSRC/COU301D.DSPF`:74 |
| F12=Cancel | `QDDSSRC/COU301D.DSPF`:76 |

No open question was raised from this page.

