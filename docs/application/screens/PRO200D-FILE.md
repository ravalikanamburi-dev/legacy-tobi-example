# PRO200D (FILE)

|  |  |
| --- | --- |
| Source | `QDDSSRC/PRO200D.DSPF` |
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
| PRO200D.DSPF | `QDDSSRC/PRO200D.DSPF` | `QDDSSRC/Rules.mk` |
| PROVIDER.FILE | [PROVIDER.FILE](../data-stores/PROVIDER-FILE.md) | `QDDSSRC/Rules.mk` |
| SAMMSGF.MSGF | [SAMMSGF.MSGF](../messages/SAMMSGF-MSGF.md) | `QDDSSRC/Rules.mk` |

## Records

### File-level source

| Source line | Evidence |
| --- | --- |
| DSPSIZ(24 80 *DS3) | `QDDSSRC/PRO200D.DSPF`:3 |
| INDARA | `QDDSSRC/PRO200D.DSPF`:4 |
| CA03(03) | `QDDSSRC/PRO200D.DSPF`:5 |
| CA12(12) | `QDDSSRC/PRO200D.DSPF`:6 |
| PRINT | `QDDSSRC/PRO200D.DSPF`:7 |
| ERRSFL | `QDDSSRC/PRO200D.DSPF`:8 |

### SFL01

Record `SFL01` at `QDDSSRC/PRO200D.DSPF`:9. Keywords: `SFL 33                                  SFLNXTCHG 34                                  DSPATR(RI) 34                                  DSPATR(PC) EDTCDE(Z)`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| OPT01 | 2Y 0B  7  3 |  | `QDDSSRC/PRO200D.DSPF`:12 |
| PRID | PRID  PROVIDER |  | `QDDSSRC/PRO200D.DSPF`:16 |
| PROVNM | PROVNM  PROVIDER |  | `QDDSSRC/PRO200D.DSPF`:17 |
| PRCITY | PRCITY PROVIDER |  | `QDDSSRC/PRO200D.DSPF`:18 |
| PRDEL | PRDEL  PROVIDER |  | `QDDSSRC/PRO200D.DSPF`:19 |

### CTL01

Record `CTL01` at `QDDSSRC/PRO200D.DSPF`:20. Keywords: `SFLCTL(SFL01) SFLSIZ(0015) SFLPAG(0014) OVERLAY 31                                  SFLDSP 32                                  SFLDSPCTL 30                                  SFLCLR `.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| N80 | PAGEDOWN(25 'dynamic subfile') |  | `QDDSSRC/PRO200D.DSPF`:24 |
| RRB01 | 4S 0H      SFLRCDNBR |  | `QDDSSRC/PRO200D.DSPF`:31 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| dynamic subfile | `QDDSSRC/PRO200D.DSPF`:24 |
| Invalid Option | `QDDSSRC/PRO200D.DSPF`:30 |
| PRO200-1 | `QDDSSRC/PRO200D.DSPF`:32 |
| Type options, press Enter. | `QDDSSRC/PRO200D.DSPF`:34 |
| Opt | `QDDSSRC/PRO200D.DSPF`:36 |
| Work with Providers | `QDDSSRC/PRO200D.DSPF`:38 |
| 2=Edit | `QDDSSRC/PRO200D.DSPF`:43 |
| 5=Items | `QDDSSRC/PRO200D.DSPF`:45 |
| Id | `QDDSSRC/PRO200D.DSPF`:47 |
| Provider | `QDDSSRC/PRO200D.DSPF`:49 |
| City | `QDDSSRC/PRO200D.DSPF`:51 |
| Del | `QDDSSRC/PRO200D.DSPF`:53 |
| 7=Prepare Order | `QDDSSRC/PRO200D.DSPF`:55 |

### KEY01

Record `KEY01` at `QDDSSRC/PRO200D.DSPF`:57. Keywords: `23  3'F3=Exit' COLOR(BLU) 23 19'F12=Cancel' COLOR(BLU)`.

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| F3=Exit | `QDDSSRC/PRO200D.DSPF`:58 |
| F12=Cancel | `QDDSSRC/PRO200D.DSPF`:60 |

### FMT02

Record `FMT02` at `QDDSSRC/PRO200D.DSPF`:63. Keywords: `CF04(04) 1  2'PRO200-2' COLOR(BLU) 3  4'Type choices, press Enter.' COLOR(BLU) 23  3'F3=Exit' COLOR(BLU) 23 19'F12=Cancel' COLOR(BLU) 1 34'Edit PROVIDER' DSPATR(HI) 1 70DATE EDTCDE`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| PRID | PRID PROVIDER |  | `QDDSSRC/PRO200D.DSPF`:81 |
| PROVNM | PROVNM PROVIDER |  | `QDDSSRC/PRO200D.DSPF`:82 |
| PRMAIL | PRMAIL PROVIDER |  | `QDDSSRC/PRO200D.DSPF`:87 |
| PRPHONE | PRPHONE PROVIDER |  | `QDDSSRC/PRO200D.DSPF`:88 |
| PRVAT | PRVAT PROVIDER |  | `QDDSSRC/PRO200D.DSPF`:89 |
| PRLINE1 | PRLINE1 PROVIDER |  | `QDDSSRC/PRO200D.DSPF`:91 |
| PRLINE2 | PRLINE2 PROVIDER |  | `QDDSSRC/PRO200D.DSPF`:92 |
| PRLINE3 | PRLINE3 PROVIDER |  | `QDDSSRC/PRO200D.DSPF`:93 |
| PRZIP | PRZIP PROVIDER |  | `QDDSSRC/PRO200D.DSPF`:94 |
| PRCITY | PRCITY PROVIDER |  | `QDDSSRC/PRO200D.DSPF`:95 |
| PRCOUN | PRCOUN PROVIDER |  | `QDDSSRC/PRO200D.DSPF`:98 |
| CONAME | 30A  O 14 31 |  | `QDDSSRC/PRO200D.DSPF`:100 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| PRO200-2 | `QDDSSRC/PRO200D.DSPF`:66 |
| Type choices, press Enter. | `QDDSSRC/PRO200D.DSPF`:68 |
| F3=Exit | `QDDSSRC/PRO200D.DSPF`:70 |
| F12=Cancel | `QDDSSRC/PRO200D.DSPF`:72 |
| Edit PROVIDER | `QDDSSRC/PRO200D.DSPF`:74 |
| Provider Id . . . . . : | `QDDSSRC/PRO200D.DSPF`:79 |
| Name  . . . . . . . . . | `QDDSSRC/PRO200D.DSPF`:80 |
| The name is mandatory | `QDDSSRC/PRO200D.DSPF`:83 |
| Phone . . . . . . . . . | `QDDSSRC/PRO200D.DSPF`:84 |
| Vat N°  . . . . . . . . | `QDDSSRC/PRO200D.DSPF`:85 |
| eMail . . . . . . . . . | `QDDSSRC/PRO200D.DSPF`:86 |
| Address . . . . . . . . | `QDDSSRC/PRO200D.DSPF`:90 |
| Postal Code & City  . . | `QDDSSRC/PRO200D.DSPF`:96 |
| Country Code  . . . . . | `QDDSSRC/PRO200D.DSPF`:97 |

No open question was raised from this page.

