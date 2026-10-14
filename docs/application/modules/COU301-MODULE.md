# COU301 (MODULE)

|  |  |
| --- | --- |
| Source | `QRPGLESRC/COU301.RPGLE` |
| Language | RPGLE |
| Class | ile-rpg |
| Section | modules |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 297 from `QRPGLESRC/.ibmi.json` |
| Build manifest | `QRPGLESRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QRPGLESRC/Rules.mk`).

## Purpose

The sources read for this object do not state a business purpose (`QRPGLESRC/COU301.RPGLE`).

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| COU301.RPGLE | `QRPGLESRC/COU301.RPGLE` | `QRPGLESRC/Rules.mk` |
| COUNTRY.FILE | [COUNTRY.FILE](../data-stores/COUNTRY-FILE.md) | `QRPGLESRC/Rules.mk` |
| COUNTR1.FILE | [COUNTR1.FILE](../data-stores/COUNTR1-FILE.md) | `QRPGLESRC/Rules.mk` |

Source form in this member: fixed-form (`QRPGLESRC/COU301.RPGLE`).

## Control specifications

| Line | Text |
| --- | --- |
| `QRPGLESRC/COU301.RPGLE` | h nomain |

## Files

| File | Declaration | Evidence |
| --- | --- | --- |
| country | Fcountry   IF   E           K DISK | `QRPGLESRC/COU301.RPGLE`:3 |
| countr1 | Fcountr1   IF   E           K DISK F                                     RENAME(fcoun   :REC52) | `QRPGLESRC/COU301.RPGLE`:4 |
| cou301d | Fcou301d   CF   E             WORKSTN F                                     INFDS(INFO) F                                     SFILE(SFL01:RRN01) F                                     indds(indds) | `QRPGLESRC/COU301.RPGLE`:6 |

## Copies and includes

| Name | Evidence |
| --- | --- |
| country | `QRPGLESRC/COU301.RPGLE`:13 |

## Procedures

| Name | Export | Evidence |
| --- | --- | --- |
| sltcountry | export | `QRPGLESRC/COU301.RPGLE`:50 |
| sltcountry |  | `QRPGLESRC/COU301.RPGLE`:249 |

## Subroutines

Names appear in source order. That order is not an execution trace.

| Subroutine | Nearby comment | Evidence |
| --- | --- | --- |
| s01prp |  | `QRPGLESRC/COU301.RPGLE`:92 |
| S01lod | //--- Load Subfile  ----------------------------------------------------- | `QRPGLESRC/COU301.RPGLE`:114 |
| S01dsp | //--- Display Subfile  -------------------------------------------------- | `QRPGLESRC/COU301.RPGLE`:140 |
| S01key | //--- Command Keys  ----------------------------------------------------- | `QRPGLESRC/COU301.RPGLE`:150 |
| S01chk | //--- Check Subfile  ---------------------------------------------------- | `QRPGLESRC/COU301.RPGLE`:163 |
| S01act | //--- Write Subfile  ---------------------------------------------------- | `QRPGLESRC/COU301.RPGLE`:219 |

## Panel or step tests

Only the conditions written in this member are listed.

| Condition | Evidence |
| --- | --- |
| when step01 = prp ; | `QRPGLESRC/COU301.RPGLE`:75 |
| when step01 = lod ; | `QRPGLESRC/COU301.RPGLE`:77 |
| when step01 = dsp ; | `QRPGLESRC/COU301.RPGLE`:79 |
| when step01 = key ; | `QRPGLESRC/COU301.RPGLE`:81 |
| when step01 = chk ; | `QRPGLESRC/COU301.RPGLE`:83 |
| when step01 = act ; | `QRPGLESRC/COU301.RPGLE`:85 |

## Indicator declarations

| Declaration | Evidence |
| --- | --- |
| D  help                   1      1n | `QRPGLESRC/COU301.RPGLE`:16 |
| D  exit                   3      3n | `QRPGLESRC/COU301.RPGLE`:17 |
| D  prompt                 4      4n | `QRPGLESRC/COU301.RPGLE`:18 |
| D  refresh                5      5n | `QRPGLESRC/COU301.RPGLE`:19 |
| D  create                 6      6n | `QRPGLESRC/COU301.RPGLE`:20 |
| D  cf08                   8      8n | `QRPGLESRC/COU301.RPGLE`:21 |
| D  cancel                12     12n | `QRPGLESRC/COU301.RPGLE`:22 |
| D  morekeys              24     24n | `QRPGLESRC/COU301.RPGLE`:23 |
| D  pagedown              25     25n | `QRPGLESRC/COU301.RPGLE`:24 |
| D  sflclr                30     30n | `QRPGLESRC/COU301.RPGLE`:25 |
| D  sfldsp                31     31n | `QRPGLESRC/COU301.RPGLE`:26 |
| D  sfldspctl             32     32n | `QRPGLESRC/COU301.RPGLE`:27 |
| D  sflnxtchg             33     33n | `QRPGLESRC/COU301.RPGLE`:28 |
| D  dspatrri              34     34n | `QRPGLESRC/COU301.RPGLE`:29 |
| D  InvalidOpt            35     35n | `QRPGLESRC/COU301.RPGLE`:30 |
| D  OneSelect             36     36n | `QRPGLESRC/COU301.RPGLE`:31 |
| D  bydesc                40     40n | `QRPGLESRC/COU301.RPGLE`:32 |
| D  InvalidOptC           41     41n | `QRPGLESRC/COU301.RPGLE`:33 |
| D  NotAvail              42     42n | `QRPGLESRC/COU301.RPGLE`:34 |
| D  sflend                80     80n | `QRPGLESRC/COU301.RPGLE`:35 |

## Key tests

| Test | Evidence |
| --- | --- |
| when exit; | `QRPGLESRC/COU301.RPGLE`:152 |
| when cancel ; | `QRPGLESRC/COU301.RPGLE`:154 |
| when PageDown; | `QRPGLESRC/COU301.RPGLE`:156 |

No open question was raised from this page.

