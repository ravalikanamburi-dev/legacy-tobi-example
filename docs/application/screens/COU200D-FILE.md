# COU200D (FILE)

|  |  |
| --- | --- |
| Source | `QDDSSRC/COU200D.DSPF` |
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
| COU200D.DSPF | `QDDSSRC/COU200D.DSPF` | `QDDSSRC/Rules.mk` |
| SAMREF.FILE | [SAMREF.FILE](../data-stores/SAMREF-FILE.md) | `QDDSSRC/Rules.mk` |
| CUSTOMER.FILE | [CUSTOMER.FILE](../data-stores/CUSTOMER-FILE.md) | `QDDSSRC/Rules.mk` |
| SAMMSGF.MSGF | [SAMMSGF.MSGF](../messages/SAMMSGF-MSGF.md) | `QDDSSRC/Rules.mk` |

## Records

### File-level source

| Source line | Evidence |
| --- | --- |
| DSPSIZ(24 80 *DS3) | `QDDSSRC/COU200D.DSPF`:3 |
| INDARA | `QDDSSRC/COU200D.DSPF`:4 |
| CA03(03) | `QDDSSRC/COU200D.DSPF`:5 |
| CA12(12) | `QDDSSRC/COU200D.DSPF`:6 |
| PRINT | `QDDSSRC/COU200D.DSPF`:7 |
| ERRSFL | `QDDSSRC/COU200D.DSPF`:8 |

### SFL01

Record `SFL01` at `QDDSSRC/COU200D.DSPF`:9. Keywords: `SFL 33                                  SFLNXTCHG 34                                  DSPATR(RI) 34                                  DSPATR(PC) EDTCDE(Z)`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| OPT01 | 2Y 0B  7  3 |  | `QDDSSRC/COU200D.DSPF`:12 |
| COID | FCOUN/COID *LIBL/COUNTRY |  | `QDDSSRC/COU200D.DSPF`:16 |
| COUNTR | FCOUN/COUNTR *LIBL/COUNTRY |  | `QDDSSRC/COU200D.DSPF`:17 |
| COISO | FCOUN/COISO *LIBL/COUNTRY |  | `QDDSSRC/COU200D.DSPF`:18 |

### CTL01

Record `CTL01` at `QDDSSRC/COU200D.DSPF`:19. Keywords: `SFLCTL(SFL01) SFLSIZ(0015) SFLPAG(0014) OVERLAY 31                                  SFLDSP 32                                  SFLDSPCTL 30                                  SFLCLR `.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| N80 | PAGEDOWN(25 'dynamic subfile') |  | `QDDSSRC/COU200D.DSPF`:23 |
| RRB01 | 4S 0H      SFLRCDNBR |  | `QDDSSRC/COU200D.DSPF`:30 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| dynamic subfile | `QDDSSRC/COU200D.DSPF`:23 |
| Invalid Option | `QDDSSRC/COU200D.DSPF`:29 |
| COU200 | `QDDSSRC/COU200D.DSPF`:31 |
| Type options, press Enter. | `QDDSSRC/COU200D.DSPF`:33 |
| 2=Edit | `QDDSSRC/COU200D.DSPF`:35 |
| Opt | `QDDSSRC/COU200D.DSPF`:37 |
| Work with Countries | `QDDSSRC/COU200D.DSPF`:39 |

### KEY01

Record `KEY01` at `QDDSSRC/COU200D.DSPF`:44. Keywords: `23  3'F3=Exit' COLOR(BLU) 23 19'F12=Cancel' COLOR(BLU)`.

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| F3=Exit | `QDDSSRC/COU200D.DSPF`:45 |
| F12=Cancel | `QDDSSRC/COU200D.DSPF`:47 |

### FMT02

Record `FMT02` at `QDDSSRC/COU200D.DSPF`:49. Keywords: `1  2'COU200 ' COLOR(BLU) 3  4'Type choices, press Enter.' COLOR(BLU) 23  3'F3=Exit' COLOR(BLU) 23 19'F12=Cancel' COLOR(BLU) 6  4'Country Name . . .' 5  4'Country Code . . :' 7  4'I`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| COID | FCOUN/COID *LIBL/COUNTRY |  | `QDDSSRC/COU200D.DSPF`:67 |
| COUNTR | FCOUN/COUNTR *LIBL/COUNTRY |  | `QDDSSRC/COU200D.DSPF`:68 |
| COISO | FCOUN/COISO *LIBL/COUNTRY |  | `QDDSSRC/COU200D.DSPF`:70 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| COU200 | `QDDSSRC/COU200D.DSPF`:51 |
| Type choices, press Enter. | `QDDSSRC/COU200D.DSPF`:53 |
| F3=Exit | `QDDSSRC/COU200D.DSPF`:55 |
| F12=Cancel | `QDDSSRC/COU200D.DSPF`:57 |
| Country Name . . . | `QDDSSRC/COU200D.DSPF`:59 |
| Country Code . . : | `QDDSSRC/COU200D.DSPF`:60 |
| Iso Code (3) . . . | `QDDSSRC/COU200D.DSPF`:61 |
| Edit a country | `QDDSSRC/COU200D.DSPF`:62 |

No open question was raised from this page.

