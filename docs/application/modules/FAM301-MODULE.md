# FAM301 (MODULE)

|  |  |
| --- | --- |
| Source | `QRPGLESRC/FAM301.RPGLE` |
| Language | RPGLE |
| Class | ile-rpg |
| Section | modules |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 297 from `QRPGLESRC/.ibmi.json` |
| Build manifest | `QRPGLESRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QRPGLESRC/Rules.mk`).

## Purpose

The sources read for this object do not state a business purpose (`QRPGLESRC/FAM301.RPGLE`).

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| FAM301.RPGLE | `QRPGLESRC/FAM301.RPGLE` | `QRPGLESRC/Rules.mk` |
| FAMILL1.FILE | [FAMILL1.FILE](../data-stores/FAMILL1-FILE.md) | `QRPGLESRC/Rules.mk` |
| FAM301D.FILE | [FAM301D.FILE](../screens/FAM301D-FILE.md) | `QRPGLESRC/Rules.mk` |

Source form in this member: fixed-form (`QRPGLESRC/FAM301.RPGLE`).

## Control specifications

| Line | Text |
| --- | --- |
| `QRPGLESRC/FAM301.RPGLE` | h nomain |

## Files

| File | Declaration | Evidence |
| --- | --- | --- |
| familly | Ffamilly   IF   E           K DISK | `QRPGLESRC/FAM301.RPGLE`:3 |
| famill1 | Ffamill1   IF   E           K DISK F                                     RENAME(ffami   :REC52) | `QRPGLESRC/FAM301.RPGLE`:4 |
| fam301d | Ffam301d   CF   E             WORKSTN F                                     INFDS(INFO) F                                     SFILE(SFL01:RRN01) F                                     indds(indds) | `QRPGLESRC/FAM301.RPGLE`:6 |

## Copies and includes

| Name | Evidence |
| --- | --- |
| familly | `QRPGLESRC/FAM301.RPGLE`:13 |

## Procedures

| Name | Export | Evidence |
| --- | --- | --- |
| sltArtFam | export | `QRPGLESRC/FAM301.RPGLE`:50 |
| sltArtFam |  | `QRPGLESRC/FAM301.RPGLE`:249 |

## Subroutines

Names appear in source order. That order is not an execution trace.

| Subroutine | Nearby comment | Evidence |
| --- | --- | --- |
| s01prp |  | `QRPGLESRC/FAM301.RPGLE`:92 |
| S01lod | //--- Load Subfile  ----------------------------------------------------- | `QRPGLESRC/FAM301.RPGLE`:114 |
| S01dsp | //--- Display Subfile  -------------------------------------------------- | `QRPGLESRC/FAM301.RPGLE`:140 |
| S01key | //--- Command Keys  ----------------------------------------------------- | `QRPGLESRC/FAM301.RPGLE`:150 |
| S01chk | //--- Check Subfile  ---------------------------------------------------- | `QRPGLESRC/FAM301.RPGLE`:163 |
| S01act | //--- Write Subfile  ---------------------------------------------------- | `QRPGLESRC/FAM301.RPGLE`:219 |

## Panel or step tests

Only the conditions written in this member are listed.

| Condition | Evidence |
| --- | --- |
| when step01 = prp ; | `QRPGLESRC/FAM301.RPGLE`:75 |
| when step01 = lod ; | `QRPGLESRC/FAM301.RPGLE`:77 |
| when step01 = dsp ; | `QRPGLESRC/FAM301.RPGLE`:79 |
| when step01 = key ; | `QRPGLESRC/FAM301.RPGLE`:81 |
| when step01 = chk ; | `QRPGLESRC/FAM301.RPGLE`:83 |
| when step01 = act ; | `QRPGLESRC/FAM301.RPGLE`:85 |

## Indicator declarations

| Declaration | Evidence |
| --- | --- |
| D  help                   1      1n | `QRPGLESRC/FAM301.RPGLE`:16 |
| D  exit                   3      3n | `QRPGLESRC/FAM301.RPGLE`:17 |
| D  prompt                 4      4n | `QRPGLESRC/FAM301.RPGLE`:18 |
| D  refresh                5      5n | `QRPGLESRC/FAM301.RPGLE`:19 |
| D  create                 6      6n | `QRPGLESRC/FAM301.RPGLE`:20 |
| D  cf08                   8      8n | `QRPGLESRC/FAM301.RPGLE`:21 |
| D  cancel                12     12n | `QRPGLESRC/FAM301.RPGLE`:22 |
| D  morekeys              24     24n | `QRPGLESRC/FAM301.RPGLE`:23 |
| D  pagedown              25     25n | `QRPGLESRC/FAM301.RPGLE`:24 |
| D  sflclr                30     30n | `QRPGLESRC/FAM301.RPGLE`:25 |
| D  sfldsp                31     31n | `QRPGLESRC/FAM301.RPGLE`:26 |
| D  sfldspctl             32     32n | `QRPGLESRC/FAM301.RPGLE`:27 |
| D  sflnxtchg             33     33n | `QRPGLESRC/FAM301.RPGLE`:28 |
| D  dspatrri              34     34n | `QRPGLESRC/FAM301.RPGLE`:29 |
| D  InvalidOpt            35     35n | `QRPGLESRC/FAM301.RPGLE`:30 |
| D  OneSelect             36     36n | `QRPGLESRC/FAM301.RPGLE`:31 |
| D  bydesc                40     40n | `QRPGLESRC/FAM301.RPGLE`:32 |
| D  InvalidOptC           41     41n | `QRPGLESRC/FAM301.RPGLE`:33 |
| D  NotAvail              42     42n | `QRPGLESRC/FAM301.RPGLE`:34 |
| D  sflend                80     80n | `QRPGLESRC/FAM301.RPGLE`:35 |

## Key tests

| Test | Evidence |
| --- | --- |
| when exit; | `QRPGLESRC/FAM301.RPGLE`:152 |
| when cancel ; | `QRPGLESRC/FAM301.RPGLE`:154 |
| when PageDown; | `QRPGLESRC/FAM301.RPGLE`:156 |

No open question was raised from this page.

