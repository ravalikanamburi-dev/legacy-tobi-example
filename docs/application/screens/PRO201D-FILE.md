# PRO201D (FILE)

|  |  |
| --- | --- |
| Source | `QDDSSRC/PRO201D.DSPF` |
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
| PRO201D.DSPF | `QDDSSRC/PRO201D.DSPF` | `QDDSSRC/Rules.mk` |

## Records

### File-level source

| Source line | Evidence |
| --- | --- |
| DSPSIZ(24 80 *DS3) | `QDDSSRC/PRO201D.DSPF`:3 |
| CA03(03) | `QDDSSRC/PRO201D.DSPF`:4 |
| CA12(12) | `QDDSSRC/PRO201D.DSPF`:5 |
| PRINT | `QDDSSRC/PRO201D.DSPF`:6 |
| ERRSFL | `QDDSSRC/PRO201D.DSPF`:7 |

### SFL01

Record `SFL01` at `QDDSSRC/PRO201D.DSPF`:8. Keywords: `SFL 33                                  SFLNXTCHG 34                                  DSPATR(RI) 34                                  DSPATR(PC) EDTCDE(Z)`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| OPT01 | 2Y 0B  7  3 |  | `QDDSSRC/PRO201D.DSPF`:11 |
| PRID | PRID PROVIDER |  | `QDDSSRC/PRO201D.DSPF`:15 |
| PROVNM | PROVNM PROVIDER |  | `QDDSSRC/PRO201D.DSPF`:16 |
| PRCITY | PRCITY PROVIDER |  | `QDDSSRC/PRO201D.DSPF`:17 |
| PRDEL | PRDEL PROVIDER |  | `QDDSSRC/PRO201D.DSPF`:18 |
| PRCONT | FPROV/PRCONT *LIBL/PROVIDER |  | `QDDSSRC/PRO201D.DSPF`:19 |
| PRPHONE | FPROV/PRPHONE *LIBL/PROVIDER |  | `QDDSSRC/PRO201D.DSPF`:20 |
| PRVAT | FPROV/PRVAT *LIBL/PROVIDER |  | `QDDSSRC/PRO201D.DSPF`:21 |
| PRMAIL | FPROV/PRMAIL *LIBL/PROVIDER |  | `QDDSSRC/PRO201D.DSPF`:22 |
| PRLINE1 | FPROV/PRLINE1 *LIBL/PROVIDER |  | `QDDSSRC/PRO201D.DSPF`:23 |
| PRLINE2 | FPROV/PRLINE2 *LIBL/PROVIDER |  | `QDDSSRC/PRO201D.DSPF`:24 |
| PRLINE3 | FPROV/PRLINE3 *LIBL/PROVIDER |  | `QDDSSRC/PRO201D.DSPF`:25 |
| PRZIP | FPROV/PRZIP *LIBL/PROVIDER |  | `QDDSSRC/PRO201D.DSPF`:26 |
| PRCREA | FPROV/PRCREA *LIBL/PROVIDER |  | `QDDSSRC/PRO201D.DSPF`:27 |

### CTL01

Record `CTL01` at `QDDSSRC/PRO201D.DSPF`:28. Keywords: `SFLCTL(SFL01) SFLSIZ(0015) SFLPAG(0014) OVERLAY 31                                  SFLDSP 32                                  SFLDSPCTL 30                                  SFLCLR `.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| N80 | PAGEDOWN |  | `QDDSSRC/PRO201D.DSPF`:32 |
| RRB01 | 4S 0H      SFLRCDNBR |  | `QDDSSRC/PRO201D.DSPF`:39 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| Invalid Option | `QDDSSRC/PRO201D.DSPF`:38 |
| PRO201-1 | `QDDSSRC/PRO201D.DSPF`:40 |
| Type options, press Enter. | `QDDSSRC/PRO201D.DSPF`:42 |
| Opt | `QDDSSRC/PRO201D.DSPF`:44 |
| 2=Display | `QDDSSRC/PRO201D.DSPF`:49 |
| 5=Items | `QDDSSRC/PRO201D.DSPF`:51 |
| Id | `QDDSSRC/PRO201D.DSPF`:53 |
| Provider | `QDDSSRC/PRO201D.DSPF`:55 |
| City | `QDDSSRC/PRO201D.DSPF`:57 |
| Del | `QDDSSRC/PRO201D.DSPF`:59 |
| Display Providers | `QDDSSRC/PRO201D.DSPF`:61 |

### KEY01

Record `KEY01` at `QDDSSRC/PRO201D.DSPF`:63. Keywords: `23  3'F3=Exit' COLOR(BLU) 23 19'F12=Cancel' COLOR(BLU)`.

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| F3=Exit | `QDDSSRC/PRO201D.DSPF`:64 |
| F12=Cancel | `QDDSSRC/PRO201D.DSPF`:66 |

### FMT02

Record `FMT02` at `QDDSSRC/PRO201D.DSPF`:69. Keywords: `CF04(04) 1  2'PRO201-2' COLOR(BLU) 3  4'Type choices, press Enter.' COLOR(BLU) 23  3'F3=Exit' COLOR(BLU) 23 19'F12=Cancel' COLOR(BLU) 1 70DATE EDTCDE(Y) 2 70TIME 5  3'Provider Id .`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| PRID | PRID PROVIDER |  | `QDDSSRC/PRO201D.DSPF`:85 |
| PROVNM | PROVNM PROVIDER |  | `QDDSSRC/PRO201D.DSPF`:86 |
| PRMAIL | PRMAIL PROVIDER |  | `QDDSSRC/PRO201D.DSPF`:91 |
| PRPHONE | PRPHONE PROVIDER |  | `QDDSSRC/PRO201D.DSPF`:92 |
| PRVAT | PRVAT PROVIDER |  | `QDDSSRC/PRO201D.DSPF`:93 |
| PRLINE1 | PRLINE1 PROVIDER |  | `QDDSSRC/PRO201D.DSPF`:95 |
| PRLINE2 | PRLINE2 PROVIDER |  | `QDDSSRC/PRO201D.DSPF`:96 |
| PRLINE3 | PRLINE3 PROVIDER |  | `QDDSSRC/PRO201D.DSPF`:97 |
| PRZIP | PRZIP PROVIDER |  | `QDDSSRC/PRO201D.DSPF`:98 |
| PRCITY | PRCITY PROVIDER |  | `QDDSSRC/PRO201D.DSPF`:99 |
| PRCOUN | PRCOUN PROVIDER |  | `QDDSSRC/PRO201D.DSPF`:102 |
| CONAME | 30A  O 14 31 |  | `QDDSSRC/PRO201D.DSPF`:104 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| PRO201-2 | `QDDSSRC/PRO201D.DSPF`:72 |
| Type choices, press Enter. | `QDDSSRC/PRO201D.DSPF`:74 |
| F3=Exit | `QDDSSRC/PRO201D.DSPF`:76 |
| F12=Cancel | `QDDSSRC/PRO201D.DSPF`:78 |
| Provider Id . . . . . : | `QDDSSRC/PRO201D.DSPF`:83 |
| Name  . . . . . . . . : | `QDDSSRC/PRO201D.DSPF`:84 |
| The name is mandatory | `QDDSSRC/PRO201D.DSPF`:87 |
| Phone . . . . . . . . : | `QDDSSRC/PRO201D.DSPF`:88 |
| Vat N°  . . . . . . . : | `QDDSSRC/PRO201D.DSPF`:89 |
| eMail . . . . . . . . : | `QDDSSRC/PRO201D.DSPF`:90 |
| Address . . . . . . . : | `QDDSSRC/PRO201D.DSPF`:94 |
| Postal Code & City  . : | `QDDSSRC/PRO201D.DSPF`:100 |
| Country Code  . . . . : | `QDDSSRC/PRO201D.DSPF`:101 |
| Display Provider | `QDDSSRC/PRO201D.DSPF`:105 |

No open question was raised from this page.

