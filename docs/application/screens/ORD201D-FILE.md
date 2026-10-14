# ORD201D (FILE)

|  |  |
| --- | --- |
| Source | `QDDSSRC/ORD201D.DSPF` |
| Language | DDS |
| Class | display-file |
| Section | screens |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 37 from `.ibmi.json` |
| Build manifest | `QDDSSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QDDSSRC/Rules.mk`).

## Purpose

A literal in the source reads "1940-01-01".

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| ORD201D.DSPF | `QDDSSRC/ORD201D.DSPF` | `QDDSSRC/Rules.mk` |
| ORDER.FILE | [ORDER.FILE](../data-stores/ORDER-FILE.md) | `QDDSSRC/Rules.mk` |
| CUSTOMER.FILE | [CUSTOMER.FILE](../data-stores/CUSTOMER-FILE.md) | `QDDSSRC/Rules.mk` |

## Records

### File-level source

| Source line | Evidence |
| --- | --- |
| DSPSIZ(24 80 *DS3) | `QDDSSRC/ORD201D.DSPF`:3 |
| INDARA | `QDDSSRC/ORD201D.DSPF`:4 |
| CA03(03) | `QDDSSRC/ORD201D.DSPF`:5 |
| CA12(12) | `QDDSSRC/ORD201D.DSPF`:6 |
| PRINT | `QDDSSRC/ORD201D.DSPF`:7 |
| ERRSFL | `QDDSSRC/ORD201D.DSPF`:8 |

### SFL01

Record `SFL01` at `QDDSSRC/ORD201D.DSPF`:9. Keywords: `SFL 33                                  SFLNXTCHG 34                                  DSPATR(RI) 34                                  DSPATR(PC) EDTCDE(Z) EDTCDE(2) EDTCDE(Z)`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| OPT01 | 2Y 0B  7  3 |  | `QDDSSRC/ORD201D.DSPF`:12 |
| ORID | FORDE/ORID *LIBL/ORDER |  | `QDDSSRC/ORD201D.DSPF`:16 |
| ORYEAR | FORDE/ORYEAR *LIBL/ORDER |  | `QDDSSRC/ORD201D.DSPF`:18 |
| DATCLO | L  O  7 57DATFMT(*JOB) |  | `QDDSSRC/ORD201D.DSPF`:20 |
| MAPVAL | (('1940-01-01' *BLANK)) |  | `QDDSSRC/ORD201D.DSPF`:21 |
| SUMORD | 11Y 2O  7 31EDTCDE(2) |  | `QDDSSRC/ORD201D.DSPF`:22 |
| CUID | FCUST/CUID *LIBL/CUSTOMER |  | `QDDSSRC/ORD201D.DSPF`:23 |
| CUSTNM | FCUST/CUSTNM *LIBL/CUSTOMER |  | `QDDSSRC/ORD201D.DSPF`:24 |
| DATORD | L  O  7 19DATFMT(*JOB) |  | `QDDSSRC/ORD201D.DSPF`:25 |
| DATLIV | L  O  7 46DATFMT(*JOB) |  | `QDDSSRC/ORD201D.DSPF`:26 |
| MAPVAL | (('1940-01-01' *BLANK)) |  | `QDDSSRC/ORD201D.DSPF`:27 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| 1940-01-01 | `QDDSSRC/ORD201D.DSPF`:21 |
| 1940-01-01 | `QDDSSRC/ORD201D.DSPF`:27 |

### CTL01

Record `CTL01` at `QDDSSRC/ORD201D.DSPF`:28. Keywords: `SFLCTL(SFL01) SFLSIZ(0015) SFLPAG(0007) CF06(06 'Create') CA05(05 'Refresh') OVERLAY 31                                  SFLDSP 32                                  SFLDSPCTL 30    `.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| N80 | PAGEDOWN(25 'dynamic subfile') |  | `QDDSSRC/ORD201D.DSPF`:32 |
| SFLDROP | (CF11) |  | `QDDSSRC/ORD201D.DSPF`:40 |
| ted | or deleted' 36) |  | `QDDSSRC/ORD201D.DSPF`:43 |
| RRB01 | 4S 0H      SFLRCDNBR |  | `QDDSSRC/ORD201D.DSPF`:46 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| dynamic subfile | `QDDSSRC/ORD201D.DSPF`:32 |
| Invalid Option | `QDDSSRC/ORD201D.DSPF`:41 |
| ORD200-1 | `QDDSSRC/ORD201D.DSPF`:47 |
| Type options, press Enter. | `QDDSSRC/ORD201D.DSPF`:49 |
| Opt | `QDDSSRC/ORD201D.DSPF`:51 |
| Work with Customer Orders | `QDDSSRC/ORD201D.DSPF`:53 |
| 2=Edit | `QDDSSRC/ORD201D.DSPF`:58 |
| 5=Display | `QDDSSRC/ORD201D.DSPF`:60 |
| 4=Delete | `QDDSSRC/ORD201D.DSPF`:62 |
| 6=Print | `QDDSSRC/ORD201D.DSPF`:64 |
| 7=Close | `QDDSSRC/ORD201D.DSPF`:66 |
| Order | `QDDSSRC/ORD201D.DSPF`:68 |
| Year | `QDDSSRC/ORD201D.DSPF`:70 |
| Creation | `QDDSSRC/ORD201D.DSPF`:72 |
| Delivery | `QDDSSRC/ORD201D.DSPF`:74 |
| Close | `QDDSSRC/ORD201D.DSPF`:76 |
| Value | `QDDSSRC/ORD201D.DSPF`:78 |
| 8=Deliver | `QDDSSRC/ORD201D.DSPF`:80 |

### KEY01

Record `KEY01` at `QDDSSRC/ORD201D.DSPF`:82. Keywords: `23  3'F3=Exit' COLOR(BLU) 23 55'F12=Cancel' COLOR(BLU) 23 42'F11=Detail' COLOR(BLU) 23 14'F5=Refresh' COLOR(BLU) 23 28'F6=Create' COLOR(BLU)`.

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| F3=Exit | `QDDSSRC/ORD201D.DSPF`:84 |
| F12=Cancel | `QDDSSRC/ORD201D.DSPF`:86 |
| F11=Detail | `QDDSSRC/ORD201D.DSPF`:88 |
| F5=Refresh | `QDDSSRC/ORD201D.DSPF`:90 |
| F6=Create | `QDDSSRC/ORD201D.DSPF`:92 |

No open question was raised from this page.

