# ORD202 (PGM)

|  |  |
| --- | --- |
| Source | `QRPGLESRC/ORD202.PGM.RPGLE` |
| Language | RPGLE |
| Class | ile-rpg |
| Section | programs |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 297 from `QRPGLESRC/.ibmi.json` |
| Build manifest | `QRPGLESRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QRPGLESRC/Rules.mk`).

## Purpose

The sources read for this object do not state a business purpose (`QRPGLESRC/ORD202.PGM.RPGLE`).

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| ORD202.PGM.RPGLE | `QRPGLESRC/ORD202.PGM.RPGLE` | `QRPGLESRC/Rules.mk` |

Source form in this member: fixed-form (`QRPGLESRC/ORD202.PGM.RPGLE`).

## Control specifications

| Line | Text |
| --- | --- |
| `QRPGLESRC/ORD202.PGM.RPGLE` | h dftactgrp(*no) bnddir('SAMPLE') |

## Files

| File | Declaration | Evidence |
| --- | --- | --- |
| custome1 | fcustome1  if   e           k disk | `QRPGLESRC/ORD202.PGM.RPGLE`:4 |
| article1 | farticle1  if   e           k disk | `QRPGLESRC/ORD202.PGM.RPGLE`:5 |
| detord1 | fdetord1   if   e           k disk | `QRPGLESRC/ORD202.PGM.RPGLE`:6 |
| order1 | forder1    if   e           k disk | `QRPGLESRC/ORD202.PGM.RPGLE`:7 |
| ord202d | ford202d   cf   e             workstn F                                     indds(indds) F                                     sfile(sfl01:rrn01) F                                     Infds(Info) | `QRPGLESRC/ORD202.PGM.RPGLE`:8 |

## Subroutines

Names appear in source order. That order is not an execution trace.

| Subroutine | Nearby comment | Evidence |
| --- | --- | --- |
| pnl01 | //- Subfiles  01 Subroutines --------------------------------------  --- | `QRPGLESRC/ORD202.PGM.RPGLE`:64 |
| s01prp | //--- Clear Subfile  ---------------------------------------------------- | `QRPGLESRC/ORD202.PGM.RPGLE`:79 |
| s01lod | //--- Load Subfile  ----------------------------------------------------- | `QRPGLESRC/ORD202.PGM.RPGLE`:96 |
| s01dsp | //--- Display Subfile  -------------------------------------------------- | `QRPGLESRC/ORD202.PGM.RPGLE`:114 |
| s01key | //--- Command Keys  ----------------------------------------------------- | `QRPGLESRC/ORD202.PGM.RPGLE`:126 |
| s01act | //--- action Subfile  --------------------------------------------------- | `QRPGLESRC/ORD202.PGM.RPGLE`:139 |
| pnl00 | //--------END SUBROUTINE ---------------------------------- | `QRPGLESRC/ORD202.PGM.RPGLE`:150 |

## Panel or step tests

Only the conditions written in this member are listed.

| Condition | Evidence |
| --- | --- |
| when panel = 1; | `QRPGLESRC/ORD202.PGM.RPGLE`:58 |
| when step01 = prp ; | `QRPGLESRC/ORD202.PGM.RPGLE`:66 |
| when step01 = lod ; | `QRPGLESRC/ORD202.PGM.RPGLE`:68 |
| when step01 = dsp ; | `QRPGLESRC/ORD202.PGM.RPGLE`:70 |
| when step01 = key ; | `QRPGLESRC/ORD202.PGM.RPGLE`:72 |
| when step01 = act ; | `QRPGLESRC/ORD202.PGM.RPGLE`:74 |

## Indicator declarations

| Declaration | Evidence |
| --- | --- |
| D  help                   1      1n | `QRPGLESRC/ORD202.PGM.RPGLE`:18 |
| D  exit                   3      3n | `QRPGLESRC/ORD202.PGM.RPGLE`:19 |
| D  prompt                 4      4n | `QRPGLESRC/ORD202.PGM.RPGLE`:20 |
| D  refresh                5      5n | `QRPGLESRC/ORD202.PGM.RPGLE`:21 |
| D  create                 6      6n | `QRPGLESRC/ORD202.PGM.RPGLE`:22 |
| D  cancel                12     12n | `QRPGLESRC/ORD202.PGM.RPGLE`:23 |
| D  morekeys              24     24n | `QRPGLESRC/ORD202.PGM.RPGLE`:24 |
| D  pagedown              25     25n | `QRPGLESRC/ORD202.PGM.RPGLE`:25 |
| D  sflclr                30     30n | `QRPGLESRC/ORD202.PGM.RPGLE`:26 |
| D  sfldsp                31     31n | `QRPGLESRC/ORD202.PGM.RPGLE`:27 |
| D  sfldspctl             32     32n | `QRPGLESRC/ORD202.PGM.RPGLE`:28 |
| D  sflnxtchg             33     33n | `QRPGLESRC/ORD202.PGM.RPGLE`:29 |
| D  dspatr_ri             34     34n | `QRPGLESRC/ORD202.PGM.RPGLE`:30 |
| D  sflmsg                35     35n | `QRPGLESRC/ORD202.PGM.RPGLE`:31 |
| D  sflend                80     80n | `QRPGLESRC/ORD202.PGM.RPGLE`:32 |

## Key tests

| Test | Evidence |
| --- | --- |
| when exit; | `QRPGLESRC/ORD202.PGM.RPGLE`:128 |
| when cancel; | `QRPGLESRC/ORD202.PGM.RPGLE`:131 |

No open question was raised from this page.

