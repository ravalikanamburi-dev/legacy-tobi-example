# ORD101D (FILE)

|  |  |
| --- | --- |
| Source | `QDDSSRC/ORD101D.DSPF` |
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
| ORD101D.DSPF | `QDDSSRC/ORD101D.DSPF` | `QDDSSRC/Rules.mk` |
| DETORD.FILE | [DETORD.FILE](../data-stores/DETORD-FILE.md) | `QDDSSRC/Rules.mk` |
| ORDER.FILE | [ORDER.FILE](../data-stores/ORDER-FILE.md) | `QDDSSRC/Rules.mk` |
| SAMMSGF.MSGF | [SAMMSGF.MSGF](../messages/SAMMSGF-MSGF.md) | `QDDSSRC/Rules.mk` |

## Records

### File-level source

| Source line | Evidence |
| --- | --- |
| DSPSIZ(24 80 *DS3) | `QDDSSRC/ORD101D.DSPF`:3 |
| PRINT | `QDDSSRC/ORD101D.DSPF`:4 |
| INDARA | `QDDSSRC/ORD101D.DSPF`:5 |
| ERRSFL | `QDDSSRC/ORD101D.DSPF`:6 |
| CA03(03) | `QDDSSRC/ORD101D.DSPF`:7 |
| CA12(12) | `QDDSSRC/ORD101D.DSPF`:8 |

### SFL01

Record `SFL01` at `QDDSSRC/ORD101D.DSPF`:9. Keywords: `SFL 33                                  SFLNXTCHG 34                                  DSPATR(RI) 34                                  DSPATR(PC) EDTCDE(Z) EDTCDE(Z)`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| OPT01 | 2Y 0B  7  3 |  | `QDDSSRC/ORD101D.DSPF`:12 |
| ODLINE | FDETO/ODLINE *LIBL/DETORD |  | `QDDSSRC/ORD101D.DSPF`:16 |
| ODARID | FDETO/ODARID *LIBL/DETORD |  | `QDDSSRC/ORD101D.DSPF`:17 |
| ARTDESC | 30A  O  7 19 |  | `QDDSSRC/ORD101D.DSPF`:18 |
| ODQTY | FDETO/ODQTY *LIBL/DETORD |  | `QDDSSRC/ORD101D.DSPF`:19 |
| ODTOT | FDETO/ODTOT *LIBL/DETORD |  | `QDDSSRC/ORD101D.DSPF`:21 |
| ODPRICE | FDETO/ODPRICE *LIBL/DETORD |  | `QDDSSRC/ORD101D.DSPF`:22 |
| ODQTYLIV | FDETO/ODQTYLIV *LIBL/DETORD |  | `QDDSSRC/ORD101D.DSPF`:23 |
| ODTOTVAT | FDETO/ODTOTVAT *LIBL/DETORD |  | `QDDSSRC/ORD101D.DSPF`:24 |

### CTL01

Record `CTL01` at `QDDSSRC/ORD101D.DSPF`:25. Keywords: `SFLCTL(SFL01) CA05(05 'Refresh') OVERLAY 31                                  SFLDSP 32                                  SFLDSPCTL 30                                  SFLCLR 80     `.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| N80 | PAGEDOWN(25 'dynamic subfile') |  | `QDDSSRC/ORD101D.DSPF`:27 |
| be | deleted.' 36) |  | `QDDSSRC/ORD101D.DSPF`:38 |
| RRB01 | 4S 0H      SFLRCDNBR |  | `QDDSSRC/ORD101D.DSPF`:39 |
| ORCUID | FORDE/ORCUID *LIBL/ORDER |  | `QDDSSRC/ORD101D.DSPF`:53 |
| CUSTNAME | 30A  O  2 29 |  | `QDDSSRC/ORD101D.DSPF`:54 |
| ORYEAR | FORDE/ORYEAR *LIBL/ORDER |  | `QDDSSRC/ORD101D.DSPF`:73 |
| ORID | FORDE/ORID *LIBL/ORDER |  | `QDDSSRC/ORD101D.DSPF`:75 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| dynamic subfile | `QDDSSRC/ORD101D.DSPF`:27 |
| Invalid Option | `QDDSSRC/ORD101D.DSPF`:36 |
| ORD101-1 | `QDDSSRC/ORD101D.DSPF`:40 |
| Type options, press Enter. | `QDDSSRC/ORD101D.DSPF`:42 |
| 2=Edit | `QDDSSRC/ORD101D.DSPF`:44 |
| Opt | `QDDSSRC/ORD101D.DSPF`:46 |
| Edit  a Customer Order | `QDDSSRC/ORD101D.DSPF`:48 |
| 4=Delete | `QDDSSRC/ORD101D.DSPF`:50 |
| Customer . . . : | `QDDSSRC/ORD101D.DSPF`:52 |
| Line | `QDDSSRC/ORD101D.DSPF`:55 |
| Item | `QDDSSRC/ORD101D.DSPF`:57 |
| Description | `QDDSSRC/ORD101D.DSPF`:59 |
| Qty | `QDDSSRC/ORD101D.DSPF`:61 |
| U.Price | `QDDSSRC/ORD101D.DSPF`:63 |
| Total | `QDDSSRC/ORD101D.DSPF`:65 |
| Order  . . . . : | `QDDSSRC/ORD101D.DSPF`:72 |
| / | `QDDSSRC/ORD101D.DSPF`:74 |
| 6=Deliver | `QDDSSRC/ORD101D.DSPF`:76 |

### KEY01

Record `KEY01` at `QDDSSRC/ORD101D.DSPF`:78. Keywords: `23  3'F3=Exit' COLOR(BLU) 23 40'F12=Cancel' COLOR(BLU) DSPATR(HI) DSPATR(HI) 23 19'F5=Refresh' COLOR(BLU)`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| TOT | FDETO/ODTOT *LIBL/DETORD |  | `QDDSSRC/ORD101D.DSPF`:84 |
| TOTVAT | FDETO/ODTOTVAT *LIBL/DETORD |  | `QDDSSRC/ORD101D.DSPF`:86 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| F3=Exit | `QDDSSRC/ORD101D.DSPF`:80 |
| F12=Cancel | `QDDSSRC/ORD101D.DSPF`:82 |
| F5=Refresh | `QDDSSRC/ORD101D.DSPF`:88 |

### FMT02

Record `FMT02` at `QDDSSRC/ORD101D.DSPF`:90. Keywords: `1  2'ORD101-2' COLOR(BLU) 3  4'Type choices, press Enter.' COLOR(BLU) 23  3'F3=Exit' COLOR(BLU) 23 19'F12=Cancel' COLOR(BLU) 1 28'Edit  customer Order Line' DSPATR(HI) 1 65DATE EDT`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| CHANGE | (27) |  | `QDDSSRC/ORD101D.DSPF`:92 |
| ODARID | FDETO/ODARID *LIBL/DETORD |  | `QDDSSRC/ORD101D.DSPF`:115 |
| DSQTY | FDETO/ODQTY *LIBL/DETORD |  | `QDDSSRC/ORD101D.DSPF`:116 |
| DSPRICE | FDETO/ODPRICE *LIBL/DETORD |  | `QDDSSRC/ORD101D.DSPF`:118 |
| ODTOT | FDETO/ODTOT *LIBL/DETORD |  | `QDDSSRC/ORD101D.DSPF`:119 |
| ODTOTVAT | FDETO/ODTOTVAT *LIBL/DETORD |  | `QDDSSRC/ORD101D.DSPF`:120 |
| VAT | FDETO/ODTOTVAT *LIBL/DETORD |  | `QDDSSRC/ORD101D.DSPF`:121 |
| VATRATE | FVAT/VATRATE *LIBL/VATDEF |  | `QDDSSRC/ORD101D.DSPF`:122 |
| ARTDESC | 30A  O  8 31 |  | `QDDSSRC/ORD101D.DSPF`:124 |
| ODLINE | FDETO/ODLINE *LIBL/DETORD |  | `QDDSSRC/ORD101D.DSPF`:126 |
| ORCUID | FORDE/ORCUID *LIBL/ORDER |  | `QDDSSRC/ORD101D.DSPF`:127 |
| CUSTNAME | 30A  O  5 31 |  | `QDDSSRC/ORD101D.DSPF`:128 |
| ORYEAR | FORDE/ORYEAR *LIBL/ORDER |  | `QDDSSRC/ORD101D.DSPF`:130 |
| ORID | FORDE/ORID *LIBL/ORDER |  | `QDDSSRC/ORD101D.DSPF`:132 |
| DSQTYLIV | FDETO/ODQTYLIV *LIBL/DETORD |  | `QDDSSRC/ORD101D.DSPF`:134 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| ORD101-2 | `QDDSSRC/ORD101D.DSPF`:93 |
| Type choices, press Enter. | `QDDSSRC/ORD101D.DSPF`:95 |
| F3=Exit | `QDDSSRC/ORD101D.DSPF`:97 |
| F12=Cancel | `QDDSSRC/ORD101D.DSPF`:99 |
| Edit  customer Order Line | `QDDSSRC/ORD101D.DSPF`:101 |
| Customer . . . . : | `QDDSSRC/ORD101D.DSPF`:108 |
| Article  . . . . : | `QDDSSRC/ORD101D.DSPF`:109 |
| Quantity . . . . . | `QDDSSRC/ORD101D.DSPF`:110 |
| Unit price . . . . | `QDDSSRC/ORD101D.DSPF`:111 |
| Net price  . . . : | `QDDSSRC/ORD101D.DSPF`:112 |
| Vat  . . . . . . : | `QDDSSRC/ORD101D.DSPF`:113 |
| Total  . . . . . : | `QDDSSRC/ORD101D.DSPF`:114 |
| VAT rate . . . : | `QDDSSRC/ORD101D.DSPF`:123 |
| Order line . . . : | `QDDSSRC/ORD101D.DSPF`:125 |
| Order  . . . . . : | `QDDSSRC/ORD101D.DSPF`:129 |
| / | `QDDSSRC/ORD101D.DSPF`:131 |
| Delivered qty  . . | `QDDSSRC/ORD101D.DSPF`:133 |

No open question was raised from this page.

