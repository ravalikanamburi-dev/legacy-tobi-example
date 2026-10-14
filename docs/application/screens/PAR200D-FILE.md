# PAR200D (FILE)

|  |  |
| --- | --- |
| Source | `QDDSSRC/PAR200D.DSPF` |
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
| PAR200D.DSPF | `QDDSSRC/PAR200D.DSPF` | `QDDSSRC/Rules.mk` |
| PARAMETER.FILE | [PARAMETER.FILE](../data-stores/PARAMETER-FILE.md) | `QDDSSRC/Rules.mk` |

## Records

### File-level source

| Source line | Evidence |
| --- | --- |
| DSPSIZ(24 80 *DS3) | `QDDSSRC/PAR200D.DSPF`:3 |
| REF(*LIBL/PARAMETER) | `QDDSSRC/PAR200D.DSPF`:4 |
| INDARA | `QDDSSRC/PAR200D.DSPF`:5 |
| CA03(03) | `QDDSSRC/PAR200D.DSPF`:6 |
| CA12(12) | `QDDSSRC/PAR200D.DSPF`:7 |
| PRINT | `QDDSSRC/PAR200D.DSPF`:8 |
| ERRSFL | `QDDSSRC/PAR200D.DSPF`:9 |

### SFL01

Record `SFL01` at `QDDSSRC/PAR200D.DSPF`:10. Keywords: `SFL 33                                  SFLNXTCHG 34                                  DSPATR(RI) 34                                  DSPATR(PC) EDTCDE(Z)`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| OPT01 | 2Y 0B  7  3 |  | `QDDSSRC/PAR200D.DSPF`:13 |
| PACODE | R        O  7  6REFFLD(FPARAM/PACODE *LIBL/PARAMETE- |  | `QDDSSRC/PAR200D.DSPF`:17 |
| R | ) |  | `QDDSSRC/PAR200D.DSPF`:18 |
| PASUBCODE | R        O  7 17REFFLD(FPARAM/PASUBCODE *LIBL/PARAM- |  | `QDDSSRC/PAR200D.DSPF`:19 |
| ETER | ) |  | `QDDSSRC/PAR200D.DSPF`:20 |
| PARM1 | FPARAM/PARM1 *LIBL/PARAMETER |  | `QDDSSRC/PAR200D.DSPF`:21 |
| PARM3 | FPARAM/PARM3 *LIBL/PARAMETER |  | `QDDSSRC/PAR200D.DSPF`:22 |
| PARM5 | FPARAM/PARM5 *LIBL/PARAMETER |  | `QDDSSRC/PAR200D.DSPF`:23 |
| PARM4 | FPARAM/PARM4 *LIBL/PARAMETER |  | `QDDSSRC/PAR200D.DSPF`:24 |
| PARM2S | 32   O  7 39 |  | `QDDSSRC/PAR200D.DSPF`:25 |

### CTL01

Record `CTL01` at `QDDSSRC/PAR200D.DSPF`:26. Keywords: `SFLCTL(SFL01) CA05(05 'Refresh') CF06(06 'Create') OVERLAY 31                                  SFLDSP 32                                  SFLDSPCTL 30                              `.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| N80 | PAGEDOWN(25 'dynamic subfile') |  | `QDDSSRC/PAR200D.DSPF`:28 |
| RRB01 | 4S 0H      SFLRCDNBR |  | `QDDSSRC/PAR200D.DSPF`:39 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| dynamic subfile | `QDDSSRC/PAR200D.DSPF`:28 |
| Invalid Option | `QDDSSRC/PAR200D.DSPF`:38 |
| PAR200-1 | `QDDSSRC/PAR200D.DSPF`:40 |
| Type options, press Enter. | `QDDSSRC/PAR200D.DSPF`:42 |
| Opt | `QDDSSRC/PAR200D.DSPF`:44 |
| Work with Parameters | `QDDSSRC/PAR200D.DSPF`:46 |
| 2=Edit | `QDDSSRC/PAR200D.DSPF`:53 |
| 4=Delete | `QDDSSRC/PAR200D.DSPF`:55 |
| Code | `QDDSSRC/PAR200D.DSPF`:57 |
| Sub-Code | `QDDSSRC/PAR200D.DSPF`:59 |
| 1 | `QDDSSRC/PAR200D.DSPF`:61 |
| 2 | `QDDSSRC/PAR200D.DSPF`:63 |
| 3 | `QDDSSRC/PAR200D.DSPF`:65 |
| 4 | `QDDSSRC/PAR200D.DSPF`:67 |
| 5 | `QDDSSRC/PAR200D.DSPF`:69 |

### KEY01

Record `KEY01` at `QDDSSRC/PAR200D.DSPF`:71. Keywords: `23  3'F3=Exit' COLOR(BLU) 23 34'F12=Cancel' COLOR(BLU) 23 18'F6=Create' COLOR(BLU)`.

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| F3=Exit | `QDDSSRC/PAR200D.DSPF`:73 |
| F12=Cancel | `QDDSSRC/PAR200D.DSPF`:75 |
| F6=Create | `QDDSSRC/PAR200D.DSPF`:77 |

### FMT02

Record `FMT02` at `QDDSSRC/PAR200D.DSPF`:79. Keywords: `1  2'PAR200-2' COLOR(BLU) 3  4'Type choices, press Enter.' COLOR(BLU) 23  3'F3=Exit' COLOR(BLU) 23 19'F12=Cancel' COLOR(BLU) 1 34'Edit Parameter' DSPATR(HI) 1 70DATE EDTCDE(Y) COLO`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| PACODE | R        O  5 27REFFLD(FPARAM/PACODE *LIBL/PARAMETE- |  | `QDDSSRC/PAR200D.DSPF`:103 |
| R | ) |  | `QDDSSRC/PAR200D.DSPF`:104 |
| PASUBCODE | R        O  6 27REFFLD(FPARAM/PASUBCODE *LIBL/PARAM- |  | `QDDSSRC/PAR200D.DSPF`:105 |
| ETER | ) |  | `QDDSSRC/PAR200D.DSPF`:106 |
| PARM1 | FPARAM/PARM1 *LIBL/PARAMETER |  | `QDDSSRC/PAR200D.DSPF`:107 |
| PARM2 | FPARAM/PARM2 *LIBL/PARAMETER |  | `QDDSSRC/PAR200D.DSPF`:108 |
| PARM3 | FPARAM/PARM3 *LIBL/PARAMETER |  | `QDDSSRC/PAR200D.DSPF`:110 |
| PARM4 | FPARAM/PARM4 *LIBL/PARAMETER |  | `QDDSSRC/PAR200D.DSPF`:111 |
| PARM5 | FPARAM/PARM5 *LIBL/PARAMETER |  | `QDDSSRC/PAR200D.DSPF`:112 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| PAR200-2 | `QDDSSRC/PAR200D.DSPF`:81 |
| Type choices, press Enter. | `QDDSSRC/PAR200D.DSPF`:83 |
| F3=Exit | `QDDSSRC/PAR200D.DSPF`:85 |
| F12=Cancel | `QDDSSRC/PAR200D.DSPF`:87 |
| Edit Parameter | `QDDSSRC/PAR200D.DSPF`:89 |
| Parameter Code  . . . : | `QDDSSRC/PAR200D.DSPF`:96 |
| parameter Sub_code  . : | `QDDSSRC/PAR200D.DSPF`:97 |
| Parameter 1 . . . . . . | `QDDSSRC/PAR200D.DSPF`:98 |
| Parameter 2 . . . . . . | `QDDSSRC/PAR200D.DSPF`:99 |
| Parameter 3 . . . . . . | `QDDSSRC/PAR200D.DSPF`:100 |
| Parameter 4 . . . . . . | `QDDSSRC/PAR200D.DSPF`:101 |
| Parameter 5 . . . . . . | `QDDSSRC/PAR200D.DSPF`:102 |

### FMT03

Record `FMT03` at `QDDSSRC/PAR200D.DSPF`:113. Keywords: `1  2'PAR200-3' COLOR(BLU) 3  4'Type choices, press Enter.' COLOR(BLU) 23  3'F3=Exit' COLOR(BLU) 23 19'F12=Cancel' COLOR(BLU) 1 33'Create Parameter' DSPATR(HI) 1 70DATE EDTCDE(Y) CO`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| PACODE | R        B  5 27REFFLD(FPARAM/PACODE *LIBL/PARAMETE- |  | `QDDSSRC/PAR200D.DSPF`:137 |
| R | ) |  | `QDDSSRC/PAR200D.DSPF`:138 |
| exist | .' 40) |  | `QDDSSRC/PAR200D.DSPF`:140 |
| PASUBCODE | R        B  6 27REFFLD(FPARAM/PASUBCODE *LIBL/PARAM- |  | `QDDSSRC/PAR200D.DSPF`:141 |
| ETER | ) |  | `QDDSSRC/PAR200D.DSPF`:142 |
| PARM1 | FPARAM/PARM1 *LIBL/PARAMETER |  | `QDDSSRC/PAR200D.DSPF`:143 |
| PARM2 | FPARAM/PARM2 *LIBL/PARAMETER |  | `QDDSSRC/PAR200D.DSPF`:144 |
| PARM3 | FPARAM/PARM3 *LIBL/PARAMETER |  | `QDDSSRC/PAR200D.DSPF`:146 |
| PARM4 | FPARAM/PARM4 *LIBL/PARAMETER |  | `QDDSSRC/PAR200D.DSPF`:147 |
| PARM5 | FPARAM/PARM5 *LIBL/PARAMETER |  | `QDDSSRC/PAR200D.DSPF`:148 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| PAR200-3 | `QDDSSRC/PAR200D.DSPF`:115 |
| Type choices, press Enter. | `QDDSSRC/PAR200D.DSPF`:117 |
| F3=Exit | `QDDSSRC/PAR200D.DSPF`:119 |
| F12=Cancel | `QDDSSRC/PAR200D.DSPF`:121 |
| Create Parameter | `QDDSSRC/PAR200D.DSPF`:123 |
| Parameter Code  . . . . | `QDDSSRC/PAR200D.DSPF`:130 |
| parameter Sub_code  . . | `QDDSSRC/PAR200D.DSPF`:131 |
| Parameter 1 . . . . . . | `QDDSSRC/PAR200D.DSPF`:132 |
| Parameter 2 . . . . . . | `QDDSSRC/PAR200D.DSPF`:133 |
| Parameter 3 . . . . . . | `QDDSSRC/PAR200D.DSPF`:134 |
| Parameter 4 . . . . . . | `QDDSSRC/PAR200D.DSPF`:135 |
| Parameter 5 . . . . . . | `QDDSSRC/PAR200D.DSPF`:136 |

No open question was raised from this page.

