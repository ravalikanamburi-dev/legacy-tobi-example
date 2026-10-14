# ORD200 (PGM)

|  |  |
| --- | --- |
| Source | `QRPGLESRC/ORD200.PGM.SQLRPGLE` |
| Language | SQLRPGLE |
| Class | ile-rpg-sql |
| Section | programs |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 297 from `QRPGLESRC/.ibmi.json` |
| Build manifest | `QRPGLESRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QRPGLESRC/Rules.mk`).

## Purpose

The sources read for this object do not state a business purpose (`QRPGLESRC/ORD200.PGM.SQLRPGLE`).

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| ORD200.PGM.SQLRPGLE | `QRPGLESRC/ORD200.PGM.SQLRPGLE` | `QRPGLESRC/Rules.mk` |

Source form in this member: fixed-form (`QRPGLESRC/ORD200.PGM.SQLRPGLE`).

## Control specifications

| Line | Text |
| --- | --- |
| `QRPGLESRC/ORD200.PGM.SQLRPGLE` | h dftactgrp(*no) bnddir('SAMPLE') |

## Files

| File | Declaration | Evidence |
| --- | --- | --- |
| order1 | forder1    uf   e           k disk | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:4 |
| detord1 | fdetord1   uf   e           k disk | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:5 |
| custome1 | fcustome1  if   e           k disk | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:6 |
| ord200d | ford200d   cf   e             workstn F                                     indds(indds) F                                     sfile(sfl01:rrn01) F                                     Infds(Info) | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:7 |

## Program calls

| Target | Kind | In this repository | Evidence |
| --- | --- | --- | --- |
| ORD101 | extpgm | [ORD101.PGM](./ORD101-PGM.md) | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:18 |
| ORD202 | extpgm | [ORD202.PGM](./ORD202-PGM.md) | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:21 |
| ORD500 | extpgm | external | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:24 |
| ORD100C | extpgm | [ORD100C.PGM](./ORD100C-PGM.md) | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:27 |

## Embedded SQL

| Statement start | Evidence |
| --- | --- |
| exec sql declare c1 cursor for SELECT ORID, ORYEAR, ISOTODATE40(ORDATE) AS DATORD, | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:102 |
| exec sql open c1; step01 = lod; endsr; | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:111 |
| exec sql fetch c1 into :orid, :oryear, :datord, :datliv, :datclo, :sumord; dow sqlcod = 0; | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:118 |
| exec sql fetch c1 into :orid, :oryear, :datord, :datliv, :datclo, :sumord; enddo; | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:123 |
| exec sql close c1; sflend = *on ; step01 = dsp; | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:126 |

## Subroutines

Names appear in source order. That order is not an execution trace.

| Subroutine | Nearby comment | Evidence |
| --- | --- | --- |
| pnl01 | //- Subfiles  01 Subroutines --------------------------------------  --- | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:80 |
| s01prp | //--- Clear Subfile  ---------------------------------------------------- | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:97 |
| s01lod | //--- Load Subfile  ----------------------------------------------------- | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:115 |
| s01dsp | //--- Display Subfile  -------------------------------------------------- | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:131 |
| s01key | //--- Command Keys  ----------------------------------------------------- | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:143 |
| s01chk | //--- Check Subfile  ---------------------------------------------------- | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:159 |
| s01act | //--- action Subfile  --------------------------------------------------- | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:217 |
| pnl00 | //--------END SUBROUTINE ---------------------------------- | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:283 |

## Panel or step tests

Only the conditions written in this member are listed.

| Condition | Evidence |
| --- | --- |
| when panel = 1; | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:74 |
| when step01 = prp ; | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:82 |
| when step01 = lod ; | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:84 |
| when step01 = dsp ; | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:86 |
| when step01 = key ; | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:88 |
| when step01 = chk ; | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:90 |
| when step01 = act ; | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:92 |

## Indicator declarations

| Declaration | Evidence |
| --- | --- |
| D  help                   1      1n | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:31 |
| D  exit                   3      3n | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:32 |
| D  prompt                 4      4n | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:33 |
| D  refresh                5      5n | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:34 |
| D  create                 6      6n | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:35 |
| D  cancel                12     12n | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:36 |
| D  morekeys              24     24n | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:37 |
| D  pagedown              25     25n | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:38 |
| D  sflclr                30     30n | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:39 |
| D  sfldsp                31     31n | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:40 |
| D  sfldspctl             32     32n | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:41 |
| D  sflnxtchg             33     33n | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:42 |
| D  dspatr_ri             34     34n | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:43 |
| D  sflmsg                35     35n | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:44 |
| D  sflmsg2               36     36n | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:45 |
| D  sflmsg3               37     37n | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:46 |
| D  sflend                80     80n | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:47 |

## Key tests

| Test | Evidence |
| --- | --- |
| when exit; | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:145 |
| when cancel; | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:148 |

## Not evidenced

| Topic | What is missing |
| --- | --- |
| ORD500 | No source in this repository describes the called program ORD500. |

