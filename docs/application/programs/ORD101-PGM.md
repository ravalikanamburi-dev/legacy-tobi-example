# ORD101 (PGM)

|  |  |
| --- | --- |
| Source | `QRPGLESRC/ORD101.PGM.RPGLE` |
| Language | RPGLE |
| Class | ile-rpg |
| Section | programs |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 297 from `QRPGLESRC/.ibmi.json` |
| Build manifest | `QRPGLESRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QRPGLESRC/Rules.mk`).

## Purpose

The sources read for this object do not state a business purpose (`QRPGLESRC/ORD101.PGM.RPGLE`).

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| ORD101.PGM.RPGLE | `QRPGLESRC/ORD101.PGM.RPGLE` | `QRPGLESRC/Rules.mk` |

Source form in this member: fixed-form (`QRPGLESRC/ORD101.PGM.RPGLE`).

## Control specifications

| Line | Text |
| --- | --- |
| `QRPGLESRC/ORD101.PGM.RPGLE` | h dftactgrp(*no) bnddir('SAMPLE') |

## Files

| File | Declaration | Evidence |
| --- | --- | --- |
| order1 | forder1    uf   e           k disk | `QRPGLESRC/ORD101.PGM.RPGLE`:5 |
| detord1 | fdetord1   uf   e           k disk | `QRPGLESRC/ORD101.PGM.RPGLE`:6 |
| ord101d | ford101d   cf   e             workstn F                                     indds(indds) F                                     sfile(sfl01:rrn01) F                                     Infds(Info) | `QRPGLESRC/ORD101.PGM.RPGLE`:7 |

## Copies and includes

| Name | Evidence |
| --- | --- |
| customer | `QRPGLESRC/ORD101.PGM.RPGLE`:12 |
| article | `QRPGLESRC/ORD101.PGM.RPGLE`:13 |
| vat | `QRPGLESRC/ORD101.PGM.RPGLE`:14 |

## Program calls

| Target | Kind | In this repository | Evidence |
| --- | --- | --- | --- |
| ORD500 | extpgm | external | `QRPGLESRC/ORD101.PGM.RPGLE`:24 |

## Subroutines

Names appear in source order. That order is not an execution trace.

| Subroutine | Nearby comment | Evidence |
| --- | --- | --- |
| pnl01 | //- Subfiles  01 Subroutines --------------------------------------  --- | `QRPGLESRC/ORD101.PGM.RPGLE`:75 |
| s01prp | //--- Clear Subfile  ---------------------------------------------------- | `QRPGLESRC/ORD101.PGM.RPGLE`:92 |
| s01lod | //--- Load Subfile  ----------------------------------------------------- | `QRPGLESRC/ORD101.PGM.RPGLE`:102 |
| s01dsp | //--- Display Subfile  -------------------------------------------------- | `QRPGLESRC/ORD101.PGM.RPGLE`:119 |
| s01key | //--- Command Keys  ----------------------------------------------------- | `QRPGLESRC/ORD101.PGM.RPGLE`:131 |
| s01chk | //--- Check Subfile  ---------------------------------------------------- | `QRPGLESRC/ORD101.PGM.RPGLE`:146 |
| s01act | //--- action Subfile  --------------------------------------------------- | `QRPGLESRC/ORD101.PGM.RPGLE`:177 |
| pnl02 | //--- Format 02 Subroutines ------------------------------------     --- | `QRPGLESRC/ORD101.PGM.RPGLE`:199 |
| S02prp | //--- clear & Load ------------------------------------------------------ | `QRPGLESRC/ORD101.PGM.RPGLE`:215 |
| S02dsp | //--- Display  ---------------------------------------------------------- | `QRPGLESRC/ORD101.PGM.RPGLE`:227 |
| S02key | //--- command Keys  ----------------------------------------------------- | `QRPGLESRC/ORD101.PGM.RPGLE`:232 |
| S02chk | //--- check ------------------------------------------------------------- | `QRPGLESRC/ORD101.PGM.RPGLE`:245 |
| S02act | //--- Action ------------------------------------------------------------ | `QRPGLESRC/ORD101.PGM.RPGLE`:260 |
| pnl00 | //--------END SUBROUTINE ---------------------------------- | `QRPGLESRC/ORD101.PGM.RPGLE`:284 |

## Panel or step tests

Only the conditions written in this member are listed.

| Condition | Evidence |
| --- | --- |
| when panel = 1; | `QRPGLESRC/ORD101.PGM.RPGLE`:67 |
| when panel = 2; | `QRPGLESRC/ORD101.PGM.RPGLE`:69 |
| when step01 = prp ; | `QRPGLESRC/ORD101.PGM.RPGLE`:77 |
| when step01 = lod ; | `QRPGLESRC/ORD101.PGM.RPGLE`:79 |
| when step01 = dsp ; | `QRPGLESRC/ORD101.PGM.RPGLE`:81 |
| when step01 = key ; | `QRPGLESRC/ORD101.PGM.RPGLE`:83 |
| when step01 = chk ; | `QRPGLESRC/ORD101.PGM.RPGLE`:85 |
| when step01 = act ; | `QRPGLESRC/ORD101.PGM.RPGLE`:87 |
| when step02 = prp ; | `QRPGLESRC/ORD101.PGM.RPGLE`:201 |
| when step02 = dsp ; | `QRPGLESRC/ORD101.PGM.RPGLE`:203 |
| when step02 = key ; | `QRPGLESRC/ORD101.PGM.RPGLE`:205 |
| when step02 = chk ; | `QRPGLESRC/ORD101.PGM.RPGLE`:207 |
| when step02 = act ; | `QRPGLESRC/ORD101.PGM.RPGLE`:209 |

## Indicator declarations

| Declaration | Evidence |
| --- | --- |
| D  help                   1      1n | `QRPGLESRC/ORD101.PGM.RPGLE`:31 |
| D  exit                   3      3n | `QRPGLESRC/ORD101.PGM.RPGLE`:32 |
| D  prompt                 4      4n | `QRPGLESRC/ORD101.PGM.RPGLE`:33 |
| D  refresh                5      5n | `QRPGLESRC/ORD101.PGM.RPGLE`:34 |
| D  create                 6      6n | `QRPGLESRC/ORD101.PGM.RPGLE`:35 |
| D  confirm                8      8n | `QRPGLESRC/ORD101.PGM.RPGLE`:36 |
| D  cancel                12     12n | `QRPGLESRC/ORD101.PGM.RPGLE`:37 |
| D  morekeys              24     24n | `QRPGLESRC/ORD101.PGM.RPGLE`:38 |
| D  pagedown              25     25n | `QRPGLESRC/ORD101.PGM.RPGLE`:39 |
| D  change                27     27n | `QRPGLESRC/ORD101.PGM.RPGLE`:40 |
| D  sflclr                30     30n | `QRPGLESRC/ORD101.PGM.RPGLE`:41 |
| D  sfldsp                31     31n | `QRPGLESRC/ORD101.PGM.RPGLE`:42 |
| D  sfldspctl             32     32n | `QRPGLESRC/ORD101.PGM.RPGLE`:43 |
| D  sflnxtchg             33     33n | `QRPGLESRC/ORD101.PGM.RPGLE`:44 |
| D  dspatr_ri             34     34n | `QRPGLESRC/ORD101.PGM.RPGLE`:45 |
| D  sflmsg                35     35n | `QRPGLESRC/ORD101.PGM.RPGLE`:46 |
| D  sflmsg2               36     36n | `QRPGLESRC/ORD101.PGM.RPGLE`:47 |
| D  ErrQtyLiv             37     37n | `QRPGLESRC/ORD101.PGM.RPGLE`:48 |
| D  ErrQty                38     38n | `QRPGLESRC/ORD101.PGM.RPGLE`:49 |
| D  sflend                80     80n | `QRPGLESRC/ORD101.PGM.RPGLE`:50 |
| D panel           S              3  0 INZ(1) | `QRPGLESRC/ORD101.PGM.RPGLE`:52 |
| D count           s              3  0 | `QRPGLESRC/ORD101.PGM.RPGLE`:56 |

## Key tests

| Test | Evidence |
| --- | --- |
| when exit; | `QRPGLESRC/ORD101.PGM.RPGLE`:133 |
| when cancel; | `QRPGLESRC/ORD101.PGM.RPGLE`:136 |
| when refresh; | `QRPGLESRC/ORD101.PGM.RPGLE`:139 |
| when exit; | `QRPGLESRC/ORD101.PGM.RPGLE`:234 |
| when cancel; | `QRPGLESRC/ORD101.PGM.RPGLE`:237 |

## Not evidenced

| Topic | What is missing |
| --- | --- |
| ORD500 | No source in this repository describes the called program ORD500. |

