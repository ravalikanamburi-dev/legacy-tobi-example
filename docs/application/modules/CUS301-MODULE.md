# CUS301 (MODULE)

|  |  |
| --- | --- |
| Source | `QRPGLESRC/CUS301.SQLRPGLE` |
| Language | SQLRPGLE |
| Class | ile-rpg-sql |
| Section | modules |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 297 from `QRPGLESRC/.ibmi.json` |
| Build manifest | `QRPGLESRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QRPGLESRC/Rules.mk`).

## Purpose

The sources read for this object do not state a business purpose (`QRPGLESRC/CUS301.SQLRPGLE`).

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| CUS301.SQLRPGLE | `QRPGLESRC/CUS301.SQLRPGLE` | `QRPGLESRC/Rules.mk` |
| CUS301D.FILE | [CUS301D.FILE](../screens/CUS301D-FILE.md) | `QRPGLESRC/Rules.mk` |

Source form in this member: fixed-form (`QRPGLESRC/CUS301.SQLRPGLE`).

## Control specifications

| Line | Text |
| --- | --- |
| `QRPGLESRC/CUS301.SQLRPGLE` | h nomain |

## Files

| File | Declaration | Evidence |
| --- | --- | --- |
| cus301d | Fcus301d   CF   E             WORKSTN F                                     INFDS(INFO) F                                     SFILE(SFL01:RRN01) F                                     indds(indds) | `QRPGLESRC/CUS301.SQLRPGLE`:3 |

## Copies and includes

| Name | Evidence |
| --- | --- |
| customer | `QRPGLESRC/CUS301.SQLRPGLE`:10 |

## Embedded SQL

| Statement start | Evidence |
| --- | --- |
| exec sql close c1; return dft; //--- Clear Subfile ----------------------------------------------------- | `QRPGLESRC/CUS301.SQLRPGLE`:89 |
| exec sql prepare s1 from :stm; exec sql declare C1 cursor for s1; exec sql open c1; | `QRPGLESRC/CUS301.SQLRPGLE`:116 |
| exec sql declare C1 cursor for s1; exec sql open c1; exec sql fetch c1 into :data; | `QRPGLESRC/CUS301.SQLRPGLE`:117 |
| exec sql open c1; exec sql fetch c1 into :data; savData = data; | `QRPGLESRC/CUS301.SQLRPGLE`:118 |
| exec sql fetch c1 into :data; savData = data; endsr; | `QRPGLESRC/CUS301.SQLRPGLE`:119 |
| exec sql fetch c1 into :data; enddo; sflend = sqlcod <> 0; | `QRPGLESRC/CUS301.SQLRPGLE`:135 |
| exec sql close c1; other; readc(E) SFL01; | `QRPGLESRC/CUS301.SQLRPGLE`:213 |
| exec sql close c1; return cuid ; endif; | `QRPGLESRC/CUS301.SQLRPGLE`:218 |

## Procedures

| Name | Export | Evidence |
| --- | --- | --- |
| sltcustomer | export | `QRPGLESRC/CUS301.SQLRPGLE`:51 |
| sltcustomer |  | `QRPGLESRC/CUS301.SQLRPGLE`:227 |

## Subroutines

Names appear in source order. That order is not an execution trace.

| Subroutine | Nearby comment | Evidence |
| --- | --- | --- |
| s01prp |  | `QRPGLESRC/CUS301.SQLRPGLE`:93 |
| S01lod | //--- Load Subfile  ----------------------------------------------------- | `QRPGLESRC/CUS301.SQLRPGLE`:123 |
| S01dsp | //--- Display Subfile  -------------------------------------------------- | `QRPGLESRC/CUS301.SQLRPGLE`:143 |
| S01key | //--- Command Keys  ----------------------------------------------------- | `QRPGLESRC/CUS301.SQLRPGLE`:152 |
| S01chk | //--- Check Subfile  ---------------------------------------------------- | `QRPGLESRC/CUS301.SQLRPGLE`:165 |
| S01act | //--- Write Subfile  ---------------------------------------------------- | `QRPGLESRC/CUS301.SQLRPGLE`:208 |

## Panel or step tests

Only the conditions written in this member are listed.

| Condition | Evidence |
| --- | --- |
| when step01 = prp ; | `QRPGLESRC/CUS301.SQLRPGLE`:75 |
| when step01 = lod ; | `QRPGLESRC/CUS301.SQLRPGLE`:77 |
| when step01 = dsp ; | `QRPGLESRC/CUS301.SQLRPGLE`:79 |
| when step01 = key ; | `QRPGLESRC/CUS301.SQLRPGLE`:81 |
| when step01 = chk ; | `QRPGLESRC/CUS301.SQLRPGLE`:83 |
| when step01 = act ; | `QRPGLESRC/CUS301.SQLRPGLE`:85 |

## Indicator declarations

| Declaration | Evidence |
| --- | --- |
| D  help                   1      1n | `QRPGLESRC/CUS301.SQLRPGLE`:13 |
| D  exit                   3      3n | `QRPGLESRC/CUS301.SQLRPGLE`:14 |
| D  prompt                 4      4n | `QRPGLESRC/CUS301.SQLRPGLE`:15 |
| D  refresh                5      5n | `QRPGLESRC/CUS301.SQLRPGLE`:16 |
| D  create                 6      6n | `QRPGLESRC/CUS301.SQLRPGLE`:17 |
| D  cf08                   8      8n | `QRPGLESRC/CUS301.SQLRPGLE`:18 |
| D  cancel                12     12n | `QRPGLESRC/CUS301.SQLRPGLE`:19 |
| D  morekeys              24     24n | `QRPGLESRC/CUS301.SQLRPGLE`:20 |
| D  pagedown              25     25n | `QRPGLESRC/CUS301.SQLRPGLE`:21 |
| D  sflclr                30     30n | `QRPGLESRC/CUS301.SQLRPGLE`:22 |
| D  sfldsp                31     31n | `QRPGLESRC/CUS301.SQLRPGLE`:23 |
| D  sfldspctl             32     32n | `QRPGLESRC/CUS301.SQLRPGLE`:24 |
| D  sflnxtchg             33     33n | `QRPGLESRC/CUS301.SQLRPGLE`:25 |
| D  dspatrri              34     34n | `QRPGLESRC/CUS301.SQLRPGLE`:26 |
| D  InvalidOpt            35     35n | `QRPGLESRC/CUS301.SQLRPGLE`:27 |
| D  OneSelect             36     36n | `QRPGLESRC/CUS301.SQLRPGLE`:28 |
| D  bydesc                40     40n | `QRPGLESRC/CUS301.SQLRPGLE`:29 |
| D  InvalidOptC           41     41n | `QRPGLESRC/CUS301.SQLRPGLE`:30 |
| D  NotAvail              42     42n | `QRPGLESRC/CUS301.SQLRPGLE`:31 |
| D  sflend                80     80n | `QRPGLESRC/CUS301.SQLRPGLE`:32 |
| d   cuid                         5  0 | `QRPGLESRC/CUS301.SQLRPGLE`:35 |
| D sltcustomer     PI             5  0 | `QRPGLESRC/CUS301.SQLRPGLE`:52 |
| d pcod                           5  0 value | `QRPGLESRC/CUS301.SQLRPGLE`:53 |

## Key tests

| Test | Evidence |
| --- | --- |
| when exit; | `QRPGLESRC/CUS301.SQLRPGLE`:154 |
| when cancel ; | `QRPGLESRC/CUS301.SQLRPGLE`:156 |
| when PageDown; | `QRPGLESRC/CUS301.SQLRPGLE`:158 |

No open question was raised from this page.

