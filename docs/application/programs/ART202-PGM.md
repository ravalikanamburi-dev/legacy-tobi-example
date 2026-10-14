# ART202 (PGM)

|  |  |
| --- | --- |
| Source | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE` |
| Language | RPGLE |
| Class | ile-rpg |
| Section | programs |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 297 from `QRPGLESRC/.ibmi.json` |
| Build manifest | `QRPGLESRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QRPGLESRC/Rules.mk`).

## Purpose

The sources read for this object do not state a business purpose (`QRPGLESRC/ART202-Function_Article.PGM.RPGLE`).

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| ART202-Function_Article.PGM.RPGLE | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE` | `QRPGLESRC/Rules.mk` |
| SAMPLE.BNDDIR | [SAMPLE.BNDDIR](../binding-directories/SAMPLE-BNDDIR.md) | `QRPGLESRC/Rules.mk` |

Source form in this member: fixed-form (`QRPGLESRC/ART202-Function_Article.PGM.RPGLE`).

## Control specifications

| Line | Text |
| --- | --- |
| `QRPGLESRC/ART202-Function_Article.PGM.RPGLE` | h dftactgrp(*no) bnddir('SAMPLE') |

## Files

| File | Declaration | Evidence |
| --- | --- | --- |
| artiprov | fartiprov  uf a e           k disk | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:4 |
| art202d | fart202d   cf   e             workstn F                                     indds(indds) F                                     sfile(sfl01:rrn01) F                                     Infds(Info) | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:5 |

## Copies and includes

| Name | Evidence |
| --- | --- |
| provider | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:10 |
| article | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:11 |

## Subroutines

Names appear in source order. That order is not an execution trace.

| Subroutine | Nearby comment | Evidence |
| --- | --- | --- |
| pnl01 | //- Subfiles  01 Subroutines --------------------------------------  --- | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:72 |
| s01prp | //--- Clear Subfile  ---------------------------------------------------- | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:89 |
| s01lod | //--- Load Subfile  ----------------------------------------------------- | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:98 |
| s01dsp | //--- Display Subfile  -------------------------------------------------- | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:113 |
| s01key | //--- Command Keys  ----------------------------------------------------- | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:125 |
| s01chk | //--- Check Subfile  ---------------------------------------------------- | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:138 |
| s01act | //--- action Subfile  --------------------------------------------------- | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:160 |
| pnl02 | //--- Format 02 Subroutines ------------------------------------     --- | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:177 |
| S02prp | //--- clear & Load ------------------------------------------------------ | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:193 |
| S02dsp | //--- Display  ---------------------------------------------------------- | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:198 |
| S02key | //--- command Keys  ----------------------------------------------------- | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:203 |
| S02chk | //--- check ------------------------------------------------------------- | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:216 |
| S02act | //--- Action ------------------------------------------------------------ | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:221 |
| pnl00 | //--------END SUBROUTINE ---------------------------------- | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:235 |

## Panel or step tests

Only the conditions written in this member are listed.

| Condition | Evidence |
| --- | --- |
| when panel = 1; | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:64 |
| when panel = 2; | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:66 |
| when step01 = prp ; | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:74 |
| when step01 = lod ; | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:76 |
| when step01 = dsp ; | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:78 |
| when step01 = key ; | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:80 |
| when step01 = chk ; | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:82 |
| when step01 = act ; | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:84 |
| when step02 = prp ; | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:179 |
| when step02 = dsp ; | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:181 |
| when step02 = key ; | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:183 |
| when step02 = chk ; | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:185 |
| when step02 = act ; | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:187 |

## Indicator declarations

| Declaration | Evidence |
| --- | --- |
| D  help                   1      1n | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:20 |
| D  exit                   3      3n | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:21 |
| D  prompt                 4      4n | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:22 |
| D  refresh                5      5n | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:23 |
| D  cancel                12     12n | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:24 |
| D  morekeys              24     24n | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:25 |
| D  pagedown              25     25n | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:26 |
| D  sflclr                30     30n | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:27 |
| D  sfldsp                31     31n | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:28 |
| D  sfldspctl             32     32n | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:29 |
| D  sflnxtchg             33     33n | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:30 |
| D  dspatr_ri             34     34n | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:31 |
| D  sflmsg                35     35n | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:32 |
| D  errFamilly            40     40n | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:33 |
| D  errDesc               41     41n | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:34 |
| D  sflend                80     80n | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:35 |

## Key tests

| Test | Evidence |
| --- | --- |
| when exit; | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:127 |
| when cancel; | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:130 |
| when exit; | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:205 |
| when cancel; | `QRPGLESRC/ART202-Function_Article.PGM.RPGLE`:208 |

No open question was raised from this page.

