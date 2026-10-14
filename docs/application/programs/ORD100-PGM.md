# ORD100 (PGM)

|  |  |
| --- | --- |
| Source | `QRPGLESRC/ORD100.PGM.RPGLE` |
| Language | RPGLE |
| Class | ile-rpg |
| Section | programs |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 297 from `QRPGLESRC/.ibmi.json` |
| Build manifest | `QRPGLESRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QRPGLESRC/Rules.mk`).

## Purpose

Header comments in the source: *       Before compilation *       ovrdbf tmpdetord detord

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| ORD100.PGM.RPGLE | `QRPGLESRC/ORD100.PGM.RPGLE` | `QRPGLESRC/Rules.mk` |
| TMPDETORD.FILE | [TMPDETORD.FILE](../data-stores/TMPDETORD-FILE.md) | `QRPGLESRC/Rules.mk` |
| SAMPLE.BNDDIR | [SAMPLE.BNDDIR](../binding-directories/SAMPLE-BNDDIR.md) | `QRPGLESRC/Rules.mk` |
| VATDEF.FILE | [VATDEF.FILE](../data-stores/VATDEF-FILE.md) | `QRPGLESRC/Rules.mk` |
| FVAT.SRVPGM | [FVAT.SRVPGM](../service-programs/FVAT-SRVPGM.md) | `QRPGLESRC/Rules.mk` |
| ORDER.FILE | [ORDER.FILE](../data-stores/ORDER-FILE.md) | `QRPGLESRC/Rules.mk` |
| ORD100D.FILE | [ORD100D.FILE](../screens/ORD100D-FILE.md) | `QRPGLESRC/Rules.mk` |

Source form in this member: fixed-form (`QRPGLESRC/ORD100.PGM.RPGLE`).

## Control specifications

| Line | Text |
| --- | --- |
| `QRPGLESRC/ORD100.PGM.RPGLE` | h dftactgrp(*no) bnddir('SAMPLE') |

## Files

| File | Declaration | Evidence |
| --- | --- | --- |
| order | forder     o    e             disk | `QRPGLESRC/ORD100.PGM.RPGLE`:7 |
| detord | fdetord    o    e           k disk | `QRPGLESRC/ORD100.PGM.RPGLE`:8 |
| Tmpdetord | fTmpdetord uf a e           k disk    rename(fdeto:tmprec) | `QRPGLESRC/ORD100.PGM.RPGLE`:9 |
| ord100d | ford100d   cf   e             workstn F                                     indds(indds) F                                     sfile(sfl01:rrn01) F                                     Infds(Info) | `QRPGLESRC/ORD100.PGM.RPGLE`:10 |

## Copies and includes

| Name | Evidence |
| --- | --- |
| customer | `QRPGLESRC/ORD100.PGM.RPGLE`:15 |
| article | `QRPGLESRC/ORD100.PGM.RPGLE`:16 |
| vat | `QRPGLESRC/ORD100.PGM.RPGLE`:17 |

## Program calls

| Target | Kind | In this repository | Evidence |
| --- | --- | --- | --- |
| ORD500 | extpgm | external | `QRPGLESRC/ORD100.PGM.RPGLE`:27 |

## Data areas

| Name | Evidence |
| --- | --- |
| LASTORDNO | `QRPGLESRC/ORD100.PGM.RPGLE`:53 |

## Subroutines

Names appear in source order. That order is not an execution trace.

| Subroutine | Nearby comment | Evidence |
| --- | --- | --- |
| pnl01 | //- Subfiles  01 Subroutines --------------------------------------  --- | `QRPGLESRC/ORD100.PGM.RPGLE`:78 |
| s01prp | //--- Clear Subfile  ---------------------------------------------------- | `QRPGLESRC/ORD100.PGM.RPGLE`:95 |
| s01lod | //--- Load Subfile  ----------------------------------------------------- | `QRPGLESRC/ORD100.PGM.RPGLE`:105 |
| s01dsp | //--- Display Subfile  -------------------------------------------------- | `QRPGLESRC/ORD100.PGM.RPGLE`:123 |
| s01key | //--- Command Keys  ----------------------------------------------------- | `QRPGLESRC/ORD100.PGM.RPGLE`:135 |
| s01chk | //--- Check Subfile  ---------------------------------------------------- | `QRPGLESRC/ORD100.PGM.RPGLE`:153 |
| s01act | //--- action Subfile  --------------------------------------------------- | `QRPGLESRC/ORD100.PGM.RPGLE`:184 |
| pnl02 | //--- Format 02 Subroutines ------------------------------------     --- | `QRPGLESRC/ORD100.PGM.RPGLE`:232 |
| S02prp | //--- clear & Load ------------------------------------------------------ | `QRPGLESRC/ORD100.PGM.RPGLE`:248 |
| S02dsp | //--- Display  ---------------------------------------------------------- | `QRPGLESRC/ORD100.PGM.RPGLE`:270 |
| S02key | //--- command Keys  ----------------------------------------------------- | `QRPGLESRC/ORD100.PGM.RPGLE`:275 |
| S02chk | //--- check ------------------------------------------------------------- | `QRPGLESRC/ORD100.PGM.RPGLE`:288 |
| S02act | //--- Action ------------------------------------------------------------ | `QRPGLESRC/ORD100.PGM.RPGLE`:295 |
| pnl00 | //--------END SUBROUTINE ---------------------------------- | `QRPGLESRC/ORD100.PGM.RPGLE`:330 |

## Panel or step tests

Only the conditions written in this member are listed.

| Condition | Evidence |
| --- | --- |
| when panel = 1; | `QRPGLESRC/ORD100.PGM.RPGLE`:70 |
| when panel = 2; | `QRPGLESRC/ORD100.PGM.RPGLE`:72 |
| when step01 = prp ; | `QRPGLESRC/ORD100.PGM.RPGLE`:80 |
| when step01 = lod ; | `QRPGLESRC/ORD100.PGM.RPGLE`:82 |
| when step01 = dsp ; | `QRPGLESRC/ORD100.PGM.RPGLE`:84 |
| when step01 = key ; | `QRPGLESRC/ORD100.PGM.RPGLE`:86 |
| when step01 = chk ; | `QRPGLESRC/ORD100.PGM.RPGLE`:88 |
| when step01 = act ; | `QRPGLESRC/ORD100.PGM.RPGLE`:90 |
| when step02 = prp ; | `QRPGLESRC/ORD100.PGM.RPGLE`:234 |
| when step02 = dsp ; | `QRPGLESRC/ORD100.PGM.RPGLE`:236 |
| when step02 = key ; | `QRPGLESRC/ORD100.PGM.RPGLE`:238 |
| when step02 = chk ; | `QRPGLESRC/ORD100.PGM.RPGLE`:240 |
| when step02 = act ; | `QRPGLESRC/ORD100.PGM.RPGLE`:242 |

## Indicator declarations

| Declaration | Evidence |
| --- | --- |
| D  help                   1      1n | `QRPGLESRC/ORD100.PGM.RPGLE`:34 |
| D  exit                   3      3n | `QRPGLESRC/ORD100.PGM.RPGLE`:35 |
| D  prompt                 4      4n | `QRPGLESRC/ORD100.PGM.RPGLE`:36 |
| D  refresh                5      5n | `QRPGLESRC/ORD100.PGM.RPGLE`:37 |
| D  create                 6      6n | `QRPGLESRC/ORD100.PGM.RPGLE`:38 |
| D  confirm                8      8n | `QRPGLESRC/ORD100.PGM.RPGLE`:39 |
| D  cancel                12     12n | `QRPGLESRC/ORD100.PGM.RPGLE`:40 |
| D  morekeys              24     24n | `QRPGLESRC/ORD100.PGM.RPGLE`:41 |
| D  pagedown              25     25n | `QRPGLESRC/ORD100.PGM.RPGLE`:42 |
| D  change                27     27n | `QRPGLESRC/ORD100.PGM.RPGLE`:43 |
| D  sflclr                30     30n | `QRPGLESRC/ORD100.PGM.RPGLE`:44 |
| D  sfldsp                31     31n | `QRPGLESRC/ORD100.PGM.RPGLE`:45 |
| D  sfldspctl             32     32n | `QRPGLESRC/ORD100.PGM.RPGLE`:46 |
| D  sflnxtchg             33     33n | `QRPGLESRC/ORD100.PGM.RPGLE`:47 |
| D  dspatr_ri             34     34n | `QRPGLESRC/ORD100.PGM.RPGLE`:48 |
| D  sflmsg                35     35n | `QRPGLESRC/ORD100.PGM.RPGLE`:49 |
| D  sflmsg2               36     36n | `QRPGLESRC/ORD100.PGM.RPGLE`:50 |
| D  sflend                80     80n | `QRPGLESRC/ORD100.PGM.RPGLE`:51 |
| D panel           S              3  0 INZ(1) | `QRPGLESRC/ORD100.PGM.RPGLE`:55 |
| D count           s              3  0 | `QRPGLESRC/ORD100.PGM.RPGLE`:59 |

## Key tests

| Test | Evidence |
| --- | --- |
| when exit; | `QRPGLESRC/ORD100.PGM.RPGLE`:137 |
| when cancel; | `QRPGLESRC/ORD100.PGM.RPGLE`:140 |
| when refresh; | `QRPGLESRC/ORD100.PGM.RPGLE`:143 |
| if confirm and (opt01 = 2 or opt01 = 4) ; | `QRPGLESRC/ORD100.PGM.RPGLE`:168 |
| if confirm; | `QRPGLESRC/ORD100.PGM.RPGLE`:185 |
| when exit; | `QRPGLESRC/ORD100.PGM.RPGLE`:277 |
| when cancel; | `QRPGLESRC/ORD100.PGM.RPGLE`:280 |

## Not evidenced

| Topic | What is missing |
| --- | --- |
| ORD500 | No source in this repository describes the called program ORD500. |

