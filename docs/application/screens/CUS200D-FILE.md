# CUS200D (FILE)

|  |  |
| --- | --- |
| Source | `QDDSSRC/CUS200D.DSPF` |
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
| CUS200D.DSPF | `QDDSSRC/CUS200D.DSPF` | `QDDSSRC/Rules.mk` |
| CUSTOMER.FILE | [CUSTOMER.FILE](../data-stores/CUSTOMER-FILE.md) | `QDDSSRC/Rules.mk` |
| SAMMSGF.MSGF | [SAMMSGF.MSGF](../messages/SAMMSGF-MSGF.md) | `QDDSSRC/Rules.mk` |

## Records

### File-level source

| Source line | Evidence |
| --- | --- |
| DSPSIZ(24 80 *DS3) | `QDDSSRC/CUS200D.DSPF`:3 |
| INDARA | `QDDSSRC/CUS200D.DSPF`:4 |
| CA03(03) | `QDDSSRC/CUS200D.DSPF`:5 |
| CA12(12) | `QDDSSRC/CUS200D.DSPF`:6 |
| PRINT | `QDDSSRC/CUS200D.DSPF`:7 |
| ERRSFL | `QDDSSRC/CUS200D.DSPF`:8 |

### SFL01

Record `SFL01` at `QDDSSRC/CUS200D.DSPF`:9. Keywords: `SFL 33                                  SFLNXTCHG 34                                  DSPATR(RI) 34                                  DSPATR(PC) EDTCDE(Z)`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| OPT01 | 2Y 0B  7  3 |  | `QDDSSRC/CUS200D.DSPF`:12 |
| CUID | FCUST/CUID *LIBL/CUSTOMER |  | `QDDSSRC/CUS200D.DSPF`:16 |
| CUSTNM | FCUST/CUSTNM *LIBL/CUSTOMER |  | `QDDSSRC/CUS200D.DSPF`:17 |
| CUCITY | FCUST/CUCITY *LIBL/CUSTOMER |  | `QDDSSRC/CUS200D.DSPF`:18 |
| CUDEL | FCUST/CUDEL *LIBL/CUSTOMER |  | `QDDSSRC/CUS200D.DSPF`:19 |

### CTL01

Record `CTL01` at `QDDSSRC/CUS200D.DSPF`:20. Keywords: `SFLCTL(SFL01) CA05(05 'Refresh') CF06(06 'Create') OVERLAY 31                                  SFLDSP 32                                  SFLDSPCTL 30                              `.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| N80 | PAGEDOWN(25 'dynamic subfile') |  | `QDDSSRC/CUS200D.DSPF`:22 |
| RRB01 | 4S 0H      SFLRCDNBR |  | `QDDSSRC/CUS200D.DSPF`:33 |
| POSTO | 10A  B  2 27CHECK(LC) |  | `QDDSSRC/CUS200D.DSPF`:59 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| dynamic subfile | `QDDSSRC/CUS200D.DSPF`:22 |
| Invalid Option | `QDDSSRC/CUS200D.DSPF`:32 |
| CUS200-1 | `QDDSSRC/CUS200D.DSPF`:34 |
| Type options, press Enter. | `QDDSSRC/CUS200D.DSPF`:36 |
| Opt | `QDDSSRC/CUS200D.DSPF`:38 |
| Work with Customers | `QDDSSRC/CUS200D.DSPF`:40 |
| 2=Edit | `QDDSSRC/CUS200D.DSPF`:45 |
| 5=Orders | `QDDSSRC/CUS200D.DSPF`:47 |
| Id | `QDDSSRC/CUS200D.DSPF`:49 |
| Customer | `QDDSSRC/CUS200D.DSPF`:51 |
| City | `QDDSSRC/CUS200D.DSPF`:53 |
| Del | `QDDSSRC/CUS200D.DSPF`:55 |
| Position to name . . | `QDDSSRC/CUS200D.DSPF`:57 |

### KEY01

Record `KEY01` at `QDDSSRC/CUS200D.DSPF`:60. Keywords: `23  3'F3=Exit' COLOR(BLU) 23 48'F12=Cancel' COLOR(BLU) 23 17'F5=Refresh' COLOR(BLU) 23 33'F6=Create' COLOR(BLU)`.

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| F3=Exit | `QDDSSRC/CUS200D.DSPF`:62 |
| F12=Cancel | `QDDSSRC/CUS200D.DSPF`:64 |
| F5=Refresh | `QDDSSRC/CUS200D.DSPF`:66 |
| F6=Create | `QDDSSRC/CUS200D.DSPF`:68 |

### FMT02

Record `FMT02` at `QDDSSRC/CUS200D.DSPF`:70. Keywords: `CF04(04) 1  2'CUS200-2' COLOR(BLU) 3  4'Type choices, press Enter.' COLOR(BLU) 23  3'F3=Exit' COLOR(BLU) 23 19'F12=Cancel' COLOR(BLU) 1 34'Edit Customer' DSPATR(HI) 1 70DATE EDTCDE`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| CUID | FCUST/CUID *LIBL/CUSTOMER |  | `QDDSSRC/CUS200D.DSPF`:90 |
| CUSTNM | FCUST/CUSTNM *LIBL/CUSTOMER |  | `QDDSSRC/CUS200D.DSPF`:91 |
| CUMAIL | FCUST/CUMAIL *LIBL/CUSTOMER |  | `QDDSSRC/CUS200D.DSPF`:97 |
| CUPHONE | FCUST/CUPHONE *LIBL/CUSTOMER |  | `QDDSSRC/CUS200D.DSPF`:98 |
| CUVAT | FCUST/CUVAT *LIBL/CUSTOMER |  | `QDDSSRC/CUS200D.DSPF`:99 |
| CULINE1 | FCUST/CULINE1 *LIBL/CUSTOMER |  | `QDDSSRC/CUS200D.DSPF`:101 |
| CULINE2 | FCUST/CULINE2 *LIBL/CUSTOMER |  | `QDDSSRC/CUS200D.DSPF`:103 |
| CULINE3 | FCUST/CULINE3 *LIBL/CUSTOMER |  | `QDDSSRC/CUS200D.DSPF`:105 |
| CUZIP | FCUST/CUZIP *LIBL/CUSTOMER |  | `QDDSSRC/CUS200D.DSPF`:107 |
| CUCITY | FCUST/CUCITY *LIBL/CUSTOMER |  | `QDDSSRC/CUS200D.DSPF`:108 |
| CUCOUN | FCUST/CUCOUN *LIBL/CUSTOMER |  | `QDDSSRC/CUS200D.DSPF`:112 |
| CULIMCRE | R        B 15 27REFFLD(FCUST/CULIMCRE *LIBL/CUSTOME- |  | `QDDSSRC/CUS200D.DSPF`:116 |
| R | ) |  | `QDDSSRC/CUS200D.DSPF`:117 |
| CUCREDIT | R        O 16 27REFFLD(FCUST/CUCREDIT *LIBL/CUSTOME- |  | `QDDSSRC/CUS200D.DSPF`:119 |
| R | ) |  | `QDDSSRC/CUS200D.DSPF`:120 |
| CONAME | 30A  O 14 31 |  | `QDDSSRC/CUS200D.DSPF`:122 |
| MODE | 3A  O  3 70 |  | `QDDSSRC/CUS200D.DSPF`:123 |
| LASTORD | L  B 17 27DATFMT(*JOB) |  | `QDDSSRC/CUS200D.DSPF`:125 |
| MAPVAL | (('1940-01-01' *BLANK)) |  | `QDDSSRC/CUS200D.DSPF`:126 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| CUS200-2 | `QDDSSRC/CUS200D.DSPF`:73 |
| Type choices, press Enter. | `QDDSSRC/CUS200D.DSPF`:75 |
| F3=Exit | `QDDSSRC/CUS200D.DSPF`:77 |
| F12=Cancel | `QDDSSRC/CUS200D.DSPF`:79 |
| Edit Customer | `QDDSSRC/CUS200D.DSPF`:81 |
| Customer Id . . . . . : | `QDDSSRC/CUS200D.DSPF`:88 |
| Name  . . . . . . . . . | `QDDSSRC/CUS200D.DSPF`:89 |
| The name is mandatory | `QDDSSRC/CUS200D.DSPF`:92 |
| Phone . . . . . . . . . | `QDDSSRC/CUS200D.DSPF`:94 |
| Vat N°  . . . . . . . . | `QDDSSRC/CUS200D.DSPF`:95 |
| eMail . . . . . . . . . | `QDDSSRC/CUS200D.DSPF`:96 |
| Address . . . . . . . . | `QDDSSRC/CUS200D.DSPF`:100 |
| Postal Code & City  . . | `QDDSSRC/CUS200D.DSPF`:110 |
| Country Code  . . . . . | `QDDSSRC/CUS200D.DSPF`:111 |
| Credit Limit  . . . . . | `QDDSSRC/CUS200D.DSPF`:114 |
| Current Credit  . . . : | `QDDSSRC/CUS200D.DSPF`:115 |
| Last Order Date . . . : | `QDDSSRC/CUS200D.DSPF`:124 |
| 1940-01-01 | `QDDSSRC/CUS200D.DSPF`:126 |

No open question was raised from this page.

