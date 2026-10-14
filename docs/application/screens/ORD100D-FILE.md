# ORD100D (FILE)

|  |  |
| --- | --- |
| Source | `QDDSSRC/ORD100D.DSPF` |
| Language | DDS |
| Class | display-file |
| Section | screens |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 37 from `.ibmi.json` |
| Build manifest | `QDDSSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QDDSSRC/Rules.mk`).

## Purpose

A literal in the source reads "Create a Customer Order".

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| ORD100D.DSPF | `QDDSSRC/ORD100D.DSPF` | `QDDSSRC/Rules.mk` |
| DETORD.FILE | [DETORD.FILE](../data-stores/DETORD-FILE.md) | `QDDSSRC/Rules.mk` |
| ORDER.FILE | [ORDER.FILE](../data-stores/ORDER-FILE.md) | `QDDSSRC/Rules.mk` |
| VATDEF.FILE | [VATDEF.FILE](../data-stores/VATDEF-FILE.md) | `QDDSSRC/Rules.mk` |

## Records

### File-level source

| Source line | Evidence |
| --- | --- |
| DSPSIZ(24 80 *DS3) | `QDDSSRC/ORD100D.DSPF`:3 |
| INDARA | `QDDSSRC/ORD100D.DSPF`:4 |
| CA03(03) | `QDDSSRC/ORD100D.DSPF`:5 |
| CA12(12) | `QDDSSRC/ORD100D.DSPF`:6 |
| PRINT | `QDDSSRC/ORD100D.DSPF`:7 |
| ERRSFL | `QDDSSRC/ORD100D.DSPF`:8 |

### SFL01

Record `SFL01` at `QDDSSRC/ORD100D.DSPF`:9. Keywords: `SFL 33                                  SFLNXTCHG 34                                  DSPATR(RI) 34                                  DSPATR(PC) EDTCDE(Z) EDTCDE(Z)`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| OPT01 | 2Y 0B  7  3 |  | `QDDSSRC/ORD100D.DSPF`:12 |
| LINE | FDETO/ODLINE *LIBL/DETORD |  | `QDDSSRC/ORD100D.DSPF`:16 |
| ODARID | FDETO/ODARID *LIBL/DETORD |  | `QDDSSRC/ORD100D.DSPF`:17 |
| ARTDESC | 30A  O  7 19 |  | `QDDSSRC/ORD100D.DSPF`:18 |
| ODQTY | FDETO/ODQTY *LIBL/DETORD |  | `QDDSSRC/ORD100D.DSPF`:19 |
| ODTOT | FDETO/ODTOT *LIBL/DETORD |  | `QDDSSRC/ORD100D.DSPF`:21 |
| ODPRICE | FDETO/ODPRICE *LIBL/DETORD |  | `QDDSSRC/ORD100D.DSPF`:22 |

### CTL01

Record `CTL01` at `QDDSSRC/ORD100D.DSPF`:23. Keywords: `SFLCTL(SFL01) SFLSIZ(0015) SFLPAG(0014) CF06(06) CF08(08 'Confirm') OVERLAY 31                                  SFLDSP 32                                  SFLDSPCTL 30             `.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| N80 | PAGEDOWN(25 'dynamic subfile') |  | `QDDSSRC/ORD100D.DSPF`:27 |
| RRB01 | 4S 0H      SFLRCDNBR |  | `QDDSSRC/ORD100D.DSPF`:38 |
| ORCUID | FORDE/ORCUID *LIBL/ORDER |  | `QDDSSRC/ORD100D.DSPF`:53 |
| CUSTNAME | 30A  O  2 29 |  | `QDDSSRC/ORD100D.DSPF`:54 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| dynamic subfile | `QDDSSRC/ORD100D.DSPF`:27 |
| Invalid Option | `QDDSSRC/ORD100D.DSPF`:35 |
| ORD100-1 | `QDDSSRC/ORD100D.DSPF`:39 |
| 2=Edit | `QDDSSRC/ORD100D.DSPF`:44 |
| Opt | `QDDSSRC/ORD100D.DSPF`:46 |
| Create a Customer Order | `QDDSSRC/ORD100D.DSPF`:48 |
| 4=Delete | `QDDSSRC/ORD100D.DSPF`:50 |
| Customer . . . : | `QDDSSRC/ORD100D.DSPF`:52 |
| Line | `QDDSSRC/ORD100D.DSPF`:55 |
| Item | `QDDSSRC/ORD100D.DSPF`:57 |
| Description | `QDDSSRC/ORD100D.DSPF`:59 |
| Qty | `QDDSSRC/ORD100D.DSPF`:61 |
| U.Price | `QDDSSRC/ORD100D.DSPF`:63 |
| Total | `QDDSSRC/ORD100D.DSPF`:65 |

### KEY01

Record `KEY01` at `QDDSSRC/ORD100D.DSPF`:72. Keywords: `23  3'F3=Exit' COLOR(BLU) 23 40'F12=Cancel' COLOR(BLU) 23 14'F6=Add' COLOR(BLU) 23 25'F8=Confirm' COLOR(BLU) DSPATR(HI) DSPATR(HI)`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| TOT | FDETO/ODTOT *LIBL/DETORD |  | `QDDSSRC/ORD100D.DSPF`:82 |
| TOTVAT | FDETO/ODTOTVAT *LIBL/DETORD |  | `QDDSSRC/ORD100D.DSPF`:84 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| F3=Exit | `QDDSSRC/ORD100D.DSPF`:74 |
| F12=Cancel | `QDDSSRC/ORD100D.DSPF`:76 |
| F6=Add | `QDDSSRC/ORD100D.DSPF`:78 |
| F8=Confirm | `QDDSSRC/ORD100D.DSPF`:80 |

### FMT02

Record `FMT02` at `QDDSSRC/ORD100D.DSPF`:86. Keywords: `1  2'ORD100-2' COLOR(BLU) 3  4'Type choices, press Enter.' COLOR(BLU) 23  3'F3=Exit' COLOR(BLU) 23 19'F12=Cancel' COLOR(BLU) 1 28'Add a customer Order Line' DSPATR(HI) 1 65DATE EDT`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| CHANGE | (27) |  | `QDDSSRC/ORD100D.DSPF`:88 |
| ODARID | FDETO/ODARID *LIBL/DETORD |  | `QDDSSRC/ORD100D.DSPF`:111 |
| ODQTY | FDETO/ODQTY *LIBL/DETORD |  | `QDDSSRC/ORD100D.DSPF`:112 |
| ODPRICE | FDETO/ODPRICE *LIBL/DETORD |  | `QDDSSRC/ORD100D.DSPF`:113 |
| ODTOT | FDETO/ODTOT *LIBL/DETORD |  | `QDDSSRC/ORD100D.DSPF`:114 |
| ODTOTVAT | FDETO/ODTOTVAT *LIBL/DETORD |  | `QDDSSRC/ORD100D.DSPF`:115 |
| VAT | FDETO/ODTOTVAT *LIBL/DETORD |  | `QDDSSRC/ORD100D.DSPF`:116 |
| VATRATE | FVAT/VATRATE *LIBL/VATDEF |  | `QDDSSRC/ORD100D.DSPF`:117 |
| ARTDESC | 30A  O  7 31 |  | `QDDSSRC/ORD100D.DSPF`:119 |
| ODLINE | FDETO/ODLINE *LIBL/DETORD |  | `QDDSSRC/ORD100D.DSPF`:121 |
| ORCUID | FORDE/ORCUID *LIBL/ORDER |  | `QDDSSRC/ORD100D.DSPF`:122 |
| CUSTNAME | 30A  O  5 31 |  | `QDDSSRC/ORD100D.DSPF`:123 |
| MODE | 3   O  3 65COLOR(BLU) |  | `QDDSSRC/ORD100D.DSPF`:124 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| ORD100-2 | `QDDSSRC/ORD100D.DSPF`:89 |
| Type choices, press Enter. | `QDDSSRC/ORD100D.DSPF`:91 |
| F3=Exit | `QDDSSRC/ORD100D.DSPF`:93 |
| F12=Cancel | `QDDSSRC/ORD100D.DSPF`:95 |
| Add a customer Order Line | `QDDSSRC/ORD100D.DSPF`:97 |
| Customer . . . . : | `QDDSSRC/ORD100D.DSPF`:104 |
| Article  . . . . : | `QDDSSRC/ORD100D.DSPF`:105 |
| Quantity . . . . . | `QDDSSRC/ORD100D.DSPF`:106 |
| Unit price . . . . | `QDDSSRC/ORD100D.DSPF`:107 |
| Net price  . . . : | `QDDSSRC/ORD100D.DSPF`:108 |
| Vat  . . . . . . : | `QDDSSRC/ORD100D.DSPF`:109 |
| Total  . . . . . : | `QDDSSRC/ORD100D.DSPF`:110 |
| VAT rate . . . : | `QDDSSRC/ORD100D.DSPF`:118 |
| Order line . . . : | `QDDSSRC/ORD100D.DSPF`:120 |

### FMT03

Record `FMT03` at `QDDSSRC/ORD100D.DSPF`:125. Keywords: `WINDOW(7 10 7 50) 1 20'Confirmation' DSPATR(HI) 3  2'Order' 3 15'has been create for user' 5  2'The order is printed.' 6  2'Press Enter to continue.' COLOR(BLU)`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| WDWBORDER | ((*CHAR '*-*!!*-*')) |  | `QDDSSRC/ORD100D.DSPF`:128 |
| ORID | FORDE/ORID *LIBL/ORDER |  | `QDDSSRC/ORD100D.DSPF`:132 |
| ORCUID | FORDE/ORCUID *LIBL/ORDER |  | `QDDSSRC/ORD100D.DSPF`:134 |
| CUSTNAME | 30A  O  4  2 |  | `QDDSSRC/ORD100D.DSPF`:135 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| *-*!!*-* | `QDDSSRC/ORD100D.DSPF`:128 |
| Confirmation | `QDDSSRC/ORD100D.DSPF`:129 |
| Order | `QDDSSRC/ORD100D.DSPF`:131 |
| has been create for user | `QDDSSRC/ORD100D.DSPF`:133 |
| The order is printed. | `QDDSSRC/ORD100D.DSPF`:136 |
| Press Enter to continue. | `QDDSSRC/ORD100D.DSPF`:137 |

No open question was raised from this page.

