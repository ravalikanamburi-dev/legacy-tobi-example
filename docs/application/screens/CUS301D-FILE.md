# CUS301D (FILE)

|  |  |
| --- | --- |
| Source | `QDDSSRC/CUS301D.DSPF` |
| Language | DDS |
| Class | display-file |
| Section | screens |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 37 from `.ibmi.json` |
| Build manifest | `QDDSSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QDDSSRC/Rules.mk`).

## Purpose

A literal in the source reads "Select a Customer".

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| CUS301D.DSPF | `QDDSSRC/CUS301D.DSPF` | `QDDSSRC/Rules.mk` |
| CUSTOMER.FILE | [CUSTOMER.FILE](../data-stores/CUSTOMER-FILE.md) | `QDDSSRC/Rules.mk` |

## Records

### File-level source

| Source line | Evidence |
| --- | --- |
| DSPSIZ(24 80 *DS3) | `QDDSSRC/CUS301D.DSPF`:3 |
| REF(*LIBL/CUSTOMER) | `QDDSSRC/CUS301D.DSPF`:4 |
| INDARA | `QDDSSRC/CUS301D.DSPF`:5 |
| PRINT | `QDDSSRC/CUS301D.DSPF`:6 |
| ERRSFL | `QDDSSRC/CUS301D.DSPF`:7 |
| CA03(03) | `QDDSSRC/CUS301D.DSPF`:8 |
| CA12(12) | `QDDSSRC/CUS301D.DSPF`:9 |

### SFL01

Record `SFL01` at `QDDSSRC/CUS301D.DSPF`:10. Keywords: `SFL 33                                  SFLNXTCHG 34                                  DSPATR(RI) 34                                  DSPATR(PC) EDTCDE(Z)`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| OPT01 | 1Y 0B  8  3 |  | `QDDSSRC/CUS301D.DSPF`:13 |
| CUID | FCUST/CUID *LIBL/CUSTOMER |  | `QDDSSRC/CUS301D.DSPF`:17 |
| CUSTNM | FCUST/CUSTNM *LIBL/CUSTOMER |  | `QDDSSRC/CUS301D.DSPF`:18 |
| CUCITY | FCUST/CUCITY *LIBL/CUSTOMER |  | `QDDSSRC/CUS301D.DSPF`:19 |
| CUCOUN | FCUST/CUCOUN *LIBL/CUSTOMER |  | `QDDSSRC/CUS301D.DSPF`:20 |

### CTL01

Record `CTL01` at `QDDSSRC/CUS301D.DSPF`:21. Keywords: `SFLCTL(SFL01) CF08(08) OVERLAY 31                                  SFLDSP 32                                  SFLDSPCTL 30                                  SFLCLR 80               `.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| N80 | PAGEDOWN(25 'dynamic subfile') |  | `QDDSSRC/CUS301D.DSPF`:24 |
| RRB01 | 4S 0H      SFLRCDNBR |  | `QDDSSRC/CUS301D.DSPF`:34 |
| SRCHNAME | 10   B  2 27 |  | `QDDSSRC/CUS301D.DSPF`:53 |
| SRCHCITY | 10   B  3 27 |  | `QDDSSRC/CUS301D.DSPF`:54 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| dynamic subfile | `QDDSSRC/CUS301D.DSPF`:24 |
| INVALID OPTION | `QDDSSRC/CUS301D.DSPF`:32 |
| ONLY ONE SELECTION | `QDDSSRC/CUS301D.DSPF`:33 |
| Select a Customer | `QDDSSRC/CUS301D.DSPF`:35 |
| Make a selection. Press Enter | `QDDSSRC/CUS301D.DSPF`:37 |
| 1=Select | `QDDSSRC/CUS301D.DSPF`:39 |
| Opt | `QDDSSRC/CUS301D.DSPF`:41 |
| Code | `QDDSSRC/CUS301D.DSPF`:43 |
| CUS301 | `QDDSSRC/CUS301D.DSPF`:45 |
| Name | `QDDSSRC/CUS301D.DSPF`:47 |
| City | `QDDSSRC/CUS301D.DSPF`:49 |
| Name contains  . . . : | `QDDSSRC/CUS301D.DSPF`:51 |
| City contains  . . . : | `QDDSSRC/CUS301D.DSPF`:52 |

### KEY01

Record `KEY01` at `QDDSSRC/CUS301D.DSPF`:55. Keywords: `OVERLAY 23  2'F3=Exit' COLOR(BLU) 40                             23 14'F8=By code' COLOR(BLU) 23 14'F12=Cancel' COLOR(BLU)`.

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| F3=Exit | `QDDSSRC/CUS301D.DSPF`:58 |
| F8=By code | `QDDSSRC/CUS301D.DSPF`:60 |
| F12=Cancel | `QDDSSRC/CUS301D.DSPF`:62 |

No open question was raised from this page.

