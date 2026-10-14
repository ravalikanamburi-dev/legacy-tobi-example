# ART201 (PGM)

|  |  |
| --- | --- |
| Source | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE` |
| Language | RPGLE |
| Class | ile-rpg |
| Section | programs |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 297 from `QRPGLESRC/.ibmi.json` |
| Build manifest | `QRPGLESRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QRPGLESRC/Rules.mk`).

## Purpose

The sources read for this object do not state a business purpose (`QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`).

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| ART201-Work_with_article.PGM.RPGLE | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE` | `QRPGLESRC/Rules.mk` |
| SAMPLE.BNDDIR | [SAMPLE.BNDDIR](../binding-directories/SAMPLE-BNDDIR.md) | `QRPGLESRC/Rules.mk` |

Source form in this member: fixed-form (`QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`).

## Control specifications

| Line | Text |
| --- | --- |
| `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE` | h dftactgrp(*no) bnddir('SAMPLE') |

## Files

| File | Declaration | Evidence |
| --- | --- | --- |
| artipro1 | fartipro1  uf a e           k disk    block(*no) | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:4 |
| art201d | fart201d   cf   e             workstn F                                     indds(indds) F                                     sfile(sfl01:rrn01) F                                     Infds(Info) | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:5 |

## Copies and includes

| Name | Evidence |
| --- | --- |
| provider | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:10 |
| article | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:11 |

## Subroutines

Names appear in source order. That order is not an execution trace.

| Subroutine | Nearby comment | Evidence |
| --- | --- | --- |
| pnl01 | //- Subfiles  01 Subroutines --------------------------------------  --- | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:72 |
| s01prp | //--- Clear Subfile  ---------------------------------------------------- | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:89 |
| s01lod | //--- Load Subfile  ----------------------------------------------------- | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:98 |
| s01dsp | //--- Display Subfile  -------------------------------------------------- | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:113 |
| s01key | //--- Command Keys  ----------------------------------------------------- | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:125 |
| s01chk | //--- Check Subfile  ---------------------------------------------------- | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:140 |
| s01act | //--- action Subfile  --------------------------------------------------- | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:162 |
| pnl02 | //--- Format 02 Subroutines ------------------------------------     --- | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:180 |
| S02prp | //--- clear & Load ------------------------------------------------------ | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:196 |
| S02dsp | //--- Display  ---------------------------------------------------------- | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:201 |
| S02key | //--- command Keys  ----------------------------------------------------- | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:206 |
| S02chk | //--- check ------------------------------------------------------------- | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:219 |
| S02act | //--- Action ------------------------------------------------------------ | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:224 |
| pnl00 | //--------END SUBROUTINE ---------------------------------- | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:238 |

## Panel or step tests

Only the conditions written in this member are listed.

| Condition | Evidence |
| --- | --- |
| when panel = 1; | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:64 |
| when panel = 2; | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:66 |
| when step01 = prp ; | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:74 |
| when step01 = lod ; | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:76 |
| when step01 = dsp ; | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:78 |
| when step01 = key ; | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:80 |
| when step01 = chk ; | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:82 |
| when step01 = act ; | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:84 |
| when step02 = prp ; | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:182 |
| when step02 = dsp ; | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:184 |
| when step02 = key ; | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:186 |
| when step02 = chk ; | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:188 |
| when step02 = act ; | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:190 |

## Indicator declarations

| Declaration | Evidence |
| --- | --- |
| D  help                   1      1n | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:20 |
| D  exit                   3      3n | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:21 |
| D  prompt                 4      4n | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:22 |
| D  refresh                5      5n | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:23 |
| D  cancel                12     12n | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:24 |
| D  morekeys              24     24n | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:25 |
| D  pagedown              25     25n | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:26 |
| D  sflclr                30     30n | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:27 |
| D  sfldsp                31     31n | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:28 |
| D  sfldspctl             32     32n | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:29 |
| D  sflnxtchg             33     33n | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:30 |
| D  dspatr_ri             34     34n | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:31 |
| D  sflmsg                35     35n | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:32 |
| D  errFamilly            40     40n | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:33 |
| D  errDesc               41     41n | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:34 |
| D  sflend                80     80n | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:35 |

## Key tests

| Test | Evidence |
| --- | --- |
| when exit; | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:127 |
| when cancel; | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:130 |
| when refresh; | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:133 |
| when exit; | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:208 |
| when cancel; | `QRPGLESRC/ART201-Work_with_article.PGM.RPGLE`:211 |

No open question was raised from this page.

