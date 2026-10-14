# ORD200D (FILE)

|  |  |
| --- | --- |
| Source | `QDDSSRC/ORD200D.DSPF` |
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
| ORD200D.DSPF | `QDDSSRC/ORD200D.DSPF` | `QDDSSRC/Rules.mk` |
| ORDER.FILE | [ORDER.FILE](../data-stores/ORDER-FILE.md) | `QDDSSRC/Rules.mk` |
| CUSTOMER.FILE | [CUSTOMER.FILE](../data-stores/CUSTOMER-FILE.md) | `QDDSSRC/Rules.mk` |

## Records

### File-level source

| Source line | Evidence |
| --- | --- |
| DSPSIZ(24 80 *DS3) | `QDDSSRC/ORD200D.DSPF`:3 |
| INDARA | `QDDSSRC/ORD200D.DSPF`:4 |
| CA03(03) | `QDDSSRC/ORD200D.DSPF`:5 |
| CA12(12) | `QDDSSRC/ORD200D.DSPF`:6 |
| PRINT | `QDDSSRC/ORD200D.DSPF`:7 |
| ERRSFL | `QDDSSRC/ORD200D.DSPF`:8 |

### SFL01

Record `SFL01` at `QDDSSRC/ORD200D.DSPF`:9. Keywords: `SFL 33                                  SFLNXTCHG 34                                  DSPATR(RI) 34                                  DSPATR(PC) EDTCDE(Z) EDTCDE(2) EDTCDE(Z)`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| OPT01 | 2Y 0B  7  3 |  | `QDDSSRC/ORD200D.DSPF`:12 |
| ORID | FORDE/ORID *LIBL/ORDER |  | `QDDSSRC/ORD200D.DSPF`:16 |
| ORYEAR | FORDE/ORYEAR *LIBL/ORDER |  | `QDDSSRC/ORD200D.DSPF`:18 |
| DATORD | L  O  7 20DATFMT(*JOB) |  | `QDDSSRC/ORD200D.DSPF`:20 |
| DATLIV | L  O  7 46DATFMT(*JOB) |  | `QDDSSRC/ORD200D.DSPF`:21 |
| MAPVAL | (('1940-01-01' *BLANK)) |  | `QDDSSRC/ORD200D.DSPF`:22 |
| DATCLO | L  O  7 57DATFMT(*JOB) |  | `QDDSSRC/ORD200D.DSPF`:23 |
| MAPVAL | (('1940-01-01' *BLANK)) |  | `QDDSSRC/ORD200D.DSPF`:24 |
| SUMORD | 11Y 2O  7 31EDTCDE(2) |  | `QDDSSRC/ORD200D.DSPF`:25 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| 1940-01-01 | `QDDSSRC/ORD200D.DSPF`:22 |
| 1940-01-01 | `QDDSSRC/ORD200D.DSPF`:24 |

### CTL01

Record `CTL01` at `QDDSSRC/ORD200D.DSPF`:26. Keywords: `SFLCTL(SFL01) SFLSIZ(0015) SFLPAG(0014) CF06(06 'Create') CA05(05 'Refresh') OVERLAY 31                                  SFLDSP 32                                  SFLDSPCTL 30    `.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| ted | or deleted' 36) |  | `QDDSSRC/ORD200D.DSPF`:39 |
| RRB01 | 4S 0H      SFLRCDNBR |  | `QDDSSRC/ORD200D.DSPF`:42 |
| CUID | FCUST/CUID *LIBL/CUSTOMER |  | `QDDSSRC/ORD200D.DSPF`:66 |
| CUSTNM | FCUST/CUSTNM *LIBL/CUSTOMER |  | `QDDSSRC/ORD200D.DSPF`:67 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| Invalid Option | `QDDSSRC/ORD200D.DSPF`:37 |
| ORD200-1 | `QDDSSRC/ORD200D.DSPF`:43 |
| Type options, press Enter. | `QDDSSRC/ORD200D.DSPF`:45 |
| Opt | `QDDSSRC/ORD200D.DSPF`:47 |
| Work with Customer Orders | `QDDSSRC/ORD200D.DSPF`:49 |
| 2=Edit | `QDDSSRC/ORD200D.DSPF`:56 |
| 5=Display | `QDDSSRC/ORD200D.DSPF`:58 |
| 4=Delete | `QDDSSRC/ORD200D.DSPF`:60 |
| 6=Print | `QDDSSRC/ORD200D.DSPF`:62 |
| 7=Close | `QDDSSRC/ORD200D.DSPF`:64 |
| Order | `QDDSSRC/ORD200D.DSPF`:68 |
| Year | `QDDSSRC/ORD200D.DSPF`:70 |
| Creation | `QDDSSRC/ORD200D.DSPF`:72 |
| Delivery | `QDDSSRC/ORD200D.DSPF`:74 |
| Close | `QDDSSRC/ORD200D.DSPF`:76 |
| Value | `QDDSSRC/ORD200D.DSPF`:78 |
| 8=Deliver | `QDDSSRC/ORD200D.DSPF`:80 |

### KEY01

Record `KEY01` at `QDDSSRC/ORD200D.DSPF`:82. Keywords: `23  3'F3=Exit' COLOR(BLU) 23 32'F12=Cancel' COLOR(BLU) 23 16'F6=Create' COLOR(BLU)`.

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| F3=Exit | `QDDSSRC/ORD200D.DSPF`:84 |
| F12=Cancel | `QDDSSRC/ORD200D.DSPF`:86 |
| F6=Create | `QDDSSRC/ORD200D.DSPF`:88 |

No open question was raised from this page.

