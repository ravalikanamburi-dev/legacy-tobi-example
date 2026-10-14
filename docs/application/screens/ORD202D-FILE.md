# ORD202D (FILE)

|  |  |
| --- | --- |
| Source | `QDDSSRC/ORD202D.DSPF` |
| Language | DDS |
| Class | display-file |
| Section | screens |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 37 from `.ibmi.json` |
| Build manifest | `QDDSSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QDDSSRC/Rules.mk`).

## Purpose

A literal in the source reads "Display a Customer Orders".

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| ORD202D.DSPF | `QDDSSRC/ORD202D.DSPF` | `QDDSSRC/Rules.mk` |
| DETORD.FILE | [DETORD.FILE](../data-stores/DETORD-FILE.md) | `QDDSSRC/Rules.mk` |
| ARTICLE.FILE | [ARTICLE.FILE](../data-stores/ARTICLE-FILE.md) | `QDDSSRC/Rules.mk` |
| CUSTOMER.FILE | [CUSTOMER.FILE](../data-stores/CUSTOMER-FILE.md) | `QDDSSRC/Rules.mk` |

## Records

### File-level source

| Source line | Evidence |
| --- | --- |
| DSPSIZ(24 80 *DS3) | `QDDSSRC/ORD202D.DSPF`:3 |
| INDARA | `QDDSSRC/ORD202D.DSPF`:4 |
| CA03(03) | `QDDSSRC/ORD202D.DSPF`:5 |
| CA12(12) | `QDDSSRC/ORD202D.DSPF`:6 |
| PRINT | `QDDSSRC/ORD202D.DSPF`:7 |
| ERRSFL | `QDDSSRC/ORD202D.DSPF`:8 |

### SFL01

Record `SFL01` at `QDDSSRC/ORD202D.DSPF`:9. Keywords: `SFL 33                                  SFLNXTCHG EDTCDE(Z) EDTCDE(2) EDTCDE(2) EDTCDE(2) EDTCDE(2) EDTCDE(2)`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| ODLINE | FDETO/ODLINE *LIBL/DETORD |  | `QDDSSRC/ORD202D.DSPF`:12 |
| ODARID | FDETO/ODARID *LIBL/DETORD |  | `QDDSSRC/ORD202D.DSPF`:14 |
| ODQTY | FDETO/ODQTY *LIBL/DETORD |  | `QDDSSRC/ORD202D.DSPF`:15 |
| ODQTYLIV | FDETO/ODQTYLIV *LIBL/DETORD |  | `QDDSSRC/ORD202D.DSPF`:17 |
| ODPRICE | FDETO/ODPRICE *LIBL/DETORD |  | `QDDSSRC/ORD202D.DSPF`:19 |
| ODTOT | FDETO/ODTOT *LIBL/DETORD |  | `QDDSSRC/ORD202D.DSPF`:21 |
| ODTOTVAT | FDETO/ODTOTVAT *LIBL/DETORD |  | `QDDSSRC/ORD202D.DSPF`:23 |
| ARDESC | FARTI/ARDESC *LIBL/ARTICLE |  | `QDDSSRC/ORD202D.DSPF`:25 |

### CTL01

Record `CTL01` at `QDDSSRC/ORD202D.DSPF`:26. Keywords: `SFLCTL(SFL01) CF06(06 'Create') CA05(05 'Refresh') OVERLAY 31                                  SFLDSP 32                                  SFLDSPCTL 30                              `.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| SFLDROP | (CF11) |  | `QDDSSRC/ORD202D.DSPF`:35 |
| RRB01 | 4S 0H      SFLRCDNBR |  | `QDDSSRC/ORD202D.DSPF`:39 |
| ORID | FORDE/ORID *LIBL/ORDER |  | `QDDSSRC/ORD202D.DSPF`:48 |
| ORYEAR | FORDE/ORYEAR *LIBL/ORDER |  | `QDDSSRC/ORD202D.DSPF`:49 |
| CUID | FCUST/CUID *LIBL/CUSTOMER |  | `QDDSSRC/ORD202D.DSPF`:51 |
| CUSTNM | FCUST/CUSTNM *LIBL/CUSTOMER |  | `QDDSSRC/ORD202D.DSPF`:52 |
| DATORD | L  O  4 15DATFMT(*DMY) |  | `QDDSSRC/ORD202D.DSPF`:53 |
| DATLIV | L  O  5 15DATFMT(*DMY) |  | `QDDSSRC/ORD202D.DSPF`:54 |
| MAPVAL | (('01/01/40' *BLANK)) |  | `QDDSSRC/ORD202D.DSPF`:55 |
| DATCLO | L  O  6 15DATFMT(*DMY) |  | `QDDSSRC/ORD202D.DSPF`:56 |
| MAPVAL | (('01/01/40' *BLANK)) |  | `QDDSSRC/ORD202D.DSPF`:57 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| Invalid Option | `QDDSSRC/ORD202D.DSPF`:38 |
| ORD202-1 | `QDDSSRC/ORD202D.DSPF`:40 |
| Display a Customer Orders | `QDDSSRC/ORD202D.DSPF`:42 |
| Order . . . | `QDDSSRC/ORD202D.DSPF`:47 |
| Customer  . | `QDDSSRC/ORD202D.DSPF`:50 |
| 01/01/40 | `QDDSSRC/ORD202D.DSPF`:55 |
| 01/01/40 | `QDDSSRC/ORD202D.DSPF`:57 |
| Création  . | `QDDSSRC/ORD202D.DSPF`:58 |
| Delivery  . | `QDDSSRC/ORD202D.DSPF`:59 |
| Close . . . | `QDDSSRC/ORD202D.DSPF`:60 |
| Line | `QDDSSRC/ORD202D.DSPF`:61 |
| Art. | `QDDSSRC/ORD202D.DSPF`:63 |
| Qty | `QDDSSRC/ORD202D.DSPF`:65 |
| Deliver | `QDDSSRC/ORD202D.DSPF`:67 |
| Un.Price | `QDDSSRC/ORD202D.DSPF`:69 |
| Total | `QDDSSRC/ORD202D.DSPF`:71 |
| With VAT | `QDDSSRC/ORD202D.DSPF`:73 |

### KEY01

Record `KEY01` at `QDDSSRC/ORD202D.DSPF`:75. Keywords: `23  3'F3=Exit' COLOR(BLU) 23 32'F12=Cancel' COLOR(BLU) 23 17'F11=Detail' COLOR(BLU) DSPATR(HI) DSPATR(HI) 21 50'============ ============' DSPATR(HI)`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| TOT | FDETO/ODTOT *LIBL/DETORD |  | `QDDSSRC/ORD202D.DSPF`:83 |
| TOTVAT | FDETO/ODTOTVAT *LIBL/DETORD |  | `QDDSSRC/ORD202D.DSPF`:85 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| F3=Exit | `QDDSSRC/ORD202D.DSPF`:77 |
| F12=Cancel | `QDDSSRC/ORD202D.DSPF`:79 |
| F11=Detail | `QDDSSRC/ORD202D.DSPF`:81 |
| ============ ============ | `QDDSSRC/ORD202D.DSPF`:87 |

No open question was raised from this page.

