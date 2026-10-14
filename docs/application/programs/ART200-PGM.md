# ART200 (PGM)

|  |  |
| --- | --- |
| Source | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE` |
| Language | SQLRPGLE |
| Class | ile-rpg-sql |
| Section | programs |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 297 from `QRPGLESRC/.ibmi.json` |
| Build manifest | `QRPGLESRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QRPGLESRC/Rules.mk`).

## Purpose

Menu `QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC` option 1 labels this "Work with Articles" and runs `cmd call ART200`.

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| ART200-Work_with_article.PGM.SQLRPGLE | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE` | `QRPGLESRC/Rules.mk` |
| SAMPLE.BNDDIR | [SAMPLE.BNDDIR](../binding-directories/SAMPLE-BNDDIR.md) | `QRPGLESRC/Rules.mk` |

Source form in this member: fixed-form (`QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`).

## Control specifications

| Line | Text |
| --- | --- |
| `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE` | h dftactgrp(*no) bnddir('SAMPLE') |

## Files

| File | Declaration | Evidence |
| --- | --- | --- |
| article2 | farticle2  if   e           k disk    rename(farti:farti2) | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:4 |
| article1 | farticle1  uf a e           k disk | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:5 |
| art200d | fart200d   cf   e             workstn F                                     indds(indds) F                                     sfile(sfl01:rrn01) F                                     Infds(Info) | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:6 |

## Copies and includes

| Name | Evidence |
| --- | --- |
| familly | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:11 |

## Program calls

| Target | Kind | In this repository | Evidence |
| --- | --- | --- | --- |
| ART201 | extpgm | [ART201.PGM](./ART201-PGM.md) | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:13 |

## Embedded SQL

| Statement start | Evidence |
| --- | --- |
| exec sql set option commit = *none; exec sql select ARTICLE_INFORMATION into :text FROM artiinf | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:329 |
| exec sql select ARTICLE_INFORMATION into :text FROM artiinf WHERE ARTICLE_INFO_ID = :arid; | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:330 |
| exec sql update artiinf set ARTICLE_INFORMATION = trim(:text) WHERE ARTICLE_INFO_ID = :arid; | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:368 |
| exec sql insert into artiinf Values(:arid, trim(:text)); endif; | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:372 |

## Subroutines

Names appear in source order. That order is not an execution trace.

| Subroutine | Nearby comment | Evidence |
| --- | --- | --- |
| pnl01 | //- Subfiles  01 Subroutines --------------------------------------  --- | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:74 |
| s01prp | //--- Clear Subfile  ---------------------------------------------------- | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:91 |
| s01lod | //--- Load Subfile  ----------------------------------------------------- | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:103 |
| s01rst | //--- restore last read ------------------------------------------------- | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:120 |
| s01sav | //--- Save last read ------------------------------------------------- | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:125 |
| s01dsp | //--- Display Subfile  -------------------------------------------------- | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:131 |
| s01key | //--- Command Keys  ----------------------------------------------------- | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:143 |
| s01chk | //--- Check Subfile  ---------------------------------------------------- | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:163 |
| s01act | //--- action Subfile  --------------------------------------------------- | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:185 |
| pnl02 | //--- Format 02 Subroutines ------------------------------------     --- | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:225 |
| S02prp | //--- clear & Load ------------------------------------------------------ | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:241 |
| S02dsp | //--- Display  ---------------------------------------------------------- | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:255 |
| S02key | //--- command Keys  ----------------------------------------------------- | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:260 |
| S02chk | //--- check ------------------------------------------------------------- | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:277 |
| S02act | //--- Action ------------------------------------------------------------ | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:290 |
| pnl03 | //--- Format 03 Subroutines ------------------------------------     --- | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:312 |
| S03prp | //--- clear & Load ------------------------------------------------------ | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:328 |
| S03dsp | //--- Display  ---------------------------------------------------------- | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:342 |
| S03key | //--- command Keys  ----------------------------------------------------- | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:347 |
| S03chk | //--- check ------------------------------------------------------------- | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:360 |
| S03act | //--- Action ------------------------------------------------------------ | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:364 |
| pnl00 | //--------END SUBROUTINE ---------------------------------- | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:380 |

## Panel or step tests

Only the conditions written in this member are listed.

| Condition | Evidence |
| --- | --- |
| when panel = 1; | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:64 |
| when panel = 2; | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:66 |
| when panel = 3; | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:68 |
| when step01 = prp ; | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:76 |
| when step01 = lod ; | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:78 |
| when step01 = dsp ; | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:80 |
| when step01 = key ; | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:82 |
| when step01 = chk ; | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:84 |
| when step01 = act ; | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:86 |
| when step02 = prp ; | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:227 |
| when step02 = dsp ; | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:229 |
| when step02 = key ; | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:231 |
| when step02 = chk ; | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:233 |
| when step02 = act ; | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:235 |
| when step03 = prp ; | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:314 |
| when step03 = dsp ; | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:316 |
| when step03 = key ; | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:318 |
| when step03 = chk ; | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:320 |
| when step03 = act ; | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:322 |

## Indicator declarations

| Declaration | Evidence |
| --- | --- |
| D  help                   1      1n | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:17 |
| D  exit                   3      3n | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:18 |
| D  prompt                 4      4n | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:19 |
| D  refresh                5      5n | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:20 |
| D  Create                 6      6n | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:21 |
| D  cancel                12     12n | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:22 |
| D  morekeys              24     24n | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:23 |
| D  pagedown              25     25n | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:24 |
| D  sflclr                30     30n | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:25 |
| D  sfldsp                31     31n | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:26 |
| D  sfldspctl             32     32n | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:27 |
| D  sflnxtchg             33     33n | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:28 |
| D  dspatr_ri             34     34n | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:29 |
| D  sflmsg                35     35n | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:30 |
| D  errFamilly            40     40n | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:31 |
| D  errDesc               41     41n | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:32 |
| D  sflend                80     80n | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:33 |
| d NewId           s              6  0 | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:48 |

## Key tests

| Test | Evidence |
| --- | --- |
| when exit; | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:145 |
| when cancel; | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:148 |
| when pagedown; | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:156 |
| when exit; | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:262 |
| when cancel; | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:265 |
| when prompt; | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:268 |
| when exit; | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:349 |
| when cancel; | `QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE`:352 |

No open question was raised from this page.

