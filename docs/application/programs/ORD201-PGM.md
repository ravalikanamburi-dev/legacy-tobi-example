# ORD201 (PGM)

|  |  |
| --- | --- |
| Source | `QRPGLESRC/ORD201.PGM.SQLRPGLE` |
| Language | SQLRPGLE |
| Class | ile-rpg-sql |
| Section | programs |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 297 from `QRPGLESRC/.ibmi.json` |
| Build manifest | `QRPGLESRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QRPGLESRC/Rules.mk`).

## Purpose

Menu `QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC` option 3 labels this "Work with Customer Orders" and runs `cmd call ORD201`.

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| ORD201.PGM.SQLRPGLE | `QRPGLESRC/ORD201.PGM.SQLRPGLE` | `QRPGLESRC/Rules.mk` |

Source form in this member: fixed-form (`QRPGLESRC/ORD201.PGM.SQLRPGLE`).

## Control specifications

| Line | Text |
| --- | --- |
| `QRPGLESRC/ORD201.PGM.SQLRPGLE` | h dftactgrp(*no) bnddir('SAMPLE') |

## Files

| File | Declaration | Evidence |
| --- | --- | --- |
| order1 | forder1    uf   e           k disk | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:4 |
| custome1 | fcustome1  if   e           k disk | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:5 |
| article1 | farticle1  if   e           k disk | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:6 |
| detord1 | fdetord1   uf   e           k disk | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:7 |
| ord201d | ford201d   cf   e             workstn F                                     indds(indds) F                                     sfile(sfl01:rrn01) F                                     Infds(Info) | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:8 |

## Program calls

| Target | Kind | In this repository | Evidence |
| --- | --- | --- | --- |
| ORD100C2 | extpgm | [ORD100C2.PGM](./ORD100C2-PGM.md) | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:13 |
| ORD101 | extpgm | [ORD101.PGM](./ORD101-PGM.md) | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:15 |
| ORD202 | extpgm | [ORD202.PGM](./ORD202-PGM.md) | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:18 |
| ORD500 | extpgm | external | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:21 |

## Embedded SQL

| Statement start | Evidence |
| --- | --- |
| exec sql declare c1 cursor for SELECT ORID, ORYEAR, ISOTODATE40(ORDATE) AS DATORD, | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:95 |
| exec sql open c1; step01 = lod; rrs01 = 0; | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:104 |
| exec sql fetch c1 into :orid, :oryear, :datord, :datliv, :datclo, :sumord, :cuid, :custnm; | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:115 |
| exec sql close c1; when create; NewOrd(); | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:151 |
| exec sql close c1; when pagedown; step01 = lod; | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:155 |
| exec sql close c1; *inlr = *on; endsr; | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:289 |

## Subroutines

Names appear in source order. That order is not an execution trace.

| Subroutine | Nearby comment | Evidence |
| --- | --- | --- |
| pnl01 | //- Subfiles  01 Subroutines --------------------------------------  --- | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:73 |
| s01prp | //--- Clear Subfile  ---------------------------------------------------- | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:90 |
| s01lod | //--- Load Subfile  ----------------------------------------------------- | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:109 |
| s01dsp | //--- Display Subfile  -------------------------------------------------- | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:129 |
| s01key | //--- Command Keys  ----------------------------------------------------- | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:141 |
| s01chk | //--- Check Subfile  ---------------------------------------------------- | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:163 |
| s01act | //--- action Subfile  --------------------------------------------------- | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:221 |
| pnl00 | //--------END SUBROUTINE ---------------------------------- | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:288 |

## Panel or step tests

Only the conditions written in this member are listed.

| Condition | Evidence |
| --- | --- |
| when panel = 1; | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:67 |
| when step01 = prp ; | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:75 |
| when step01 = lod ; | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:77 |
| when step01 = dsp ; | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:79 |
| when step01 = key ; | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:81 |
| when step01 = chk ; | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:83 |
| when step01 = act ; | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:85 |

## Indicator declarations

| Declaration | Evidence |
| --- | --- |
| D  help                   1      1n | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:25 |
| D  exit                   3      3n | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:26 |
| D  prompt                 4      4n | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:27 |
| D  refresh                5      5n | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:28 |
| D  create                 6      6n | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:29 |
| D  cancel                12     12n | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:30 |
| D  morekeys              24     24n | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:31 |
| D  pagedown              25     25n | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:32 |
| D  sflclr                30     30n | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:33 |
| D  sfldsp                31     31n | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:34 |
| D  sfldspctl             32     32n | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:35 |
| D  sflnxtchg             33     33n | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:36 |
| D  dspatr_ri             34     34n | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:37 |
| D  sflmsg                35     35n | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:38 |
| D  sflmsg2               36     36n | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:39 |
| D  sflmsg3               37     37n | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:40 |
| D  sflend                80     80n | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:41 |

## Key tests

| Test | Evidence |
| --- | --- |
| when exit; | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:143 |
| when cancel; | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:146 |
| when refresh; | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:149 |
| when pagedown; | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:156 |

## Not evidenced

| Topic | What is missing |
| --- | --- |
| ORD500 | No source in this repository describes the called program ORD500. |

