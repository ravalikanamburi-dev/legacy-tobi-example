# ART301 (MODULE)

|  |  |
| --- | --- |
| Source | `QRPGLESRC/ART301.SQLRPGLE` |
| Language | SQLRPGLE |
| Class | ile-rpg-sql |
| Section | modules |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 297 from `QRPGLESRC/.ibmi.json` |
| Build manifest | `QRPGLESRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QRPGLESRC/Rules.mk`).

## Purpose

The sources read for this object do not state a business purpose (`QRPGLESRC/ART301.SQLRPGLE`).

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| ART301.SQLRPGLE | `QRPGLESRC/ART301.SQLRPGLE` | `QRPGLESRC/Rules.mk` |
| ART301D.FILE | [ART301D.FILE](../screens/ART301D-FILE.md) | `QRPGLESRC/Rules.mk` |

Source form in this member: fixed-form (`QRPGLESRC/ART301.SQLRPGLE`).

## Control specifications

| Line | Text |
| --- | --- |
| `QRPGLESRC/ART301.SQLRPGLE` | h nomain |

## Files

| File | Declaration | Evidence |
| --- | --- | --- |
| art301d | Fart301d   CF   E             WORKSTN F                                     INFDS(INFO) F                                     SFILE(SFL01:RRN01) F                                     indds(indds) | `QRPGLESRC/ART301.SQLRPGLE`:3 |

## Copies and includes

| Name | Evidence |
| --- | --- |
| article | `QRPGLESRC/ART301.SQLRPGLE`:10 |
| familly | `QRPGLESRC/ART301.SQLRPGLE`:11 |

## Embedded SQL

| Statement start | Evidence |
| --- | --- |
| exec sql close c1; return dft; //--- Clear Subfile ----------------------------------------------------- | `QRPGLESRC/ART301.SQLRPGLE`:90 |
| exec sql prepare s1 from :stm; exec sql declare C1 cursor for s1; exec sql open c1; | `QRPGLESRC/ART301.SQLRPGLE`:116 |
| exec sql declare C1 cursor for s1; exec sql open c1; exec sql fetch c1 into :data; | `QRPGLESRC/ART301.SQLRPGLE`:117 |
| exec sql open c1; exec sql fetch c1 into :data; savData = data; | `QRPGLESRC/ART301.SQLRPGLE`:118 |
| exec sql fetch c1 into :data; savData = data; endsr; | `QRPGLESRC/ART301.SQLRPGLE`:119 |
| exec sql fetch c1 into :data; enddo; sflend = sqlcod <> 0; | `QRPGLESRC/ART301.SQLRPGLE`:135 |
| exec sql close c1; step01 = prp; other; | `QRPGLESRC/ART301.SQLRPGLE`:163 |
| exec sql close c1; other; readc(E) SFL01; | `QRPGLESRC/ART301.SQLRPGLE`:218 |
| exec sql close c1; return arid ; endif; | `QRPGLESRC/ART301.SQLRPGLE`:223 |

## Procedures

| Name | Export | Evidence |
| --- | --- | --- |
| sltarticle | export | `QRPGLESRC/ART301.SQLRPGLE`:51 |
| sltarticle |  | `QRPGLESRC/ART301.SQLRPGLE`:232 |

## Subroutines

Names appear in source order. That order is not an execution trace.

| Subroutine | Nearby comment | Evidence |
| --- | --- | --- |
| s01prp |  | `QRPGLESRC/ART301.SQLRPGLE`:94 |
| S01lod | //--- Load Subfile  ----------------------------------------------------- | `QRPGLESRC/ART301.SQLRPGLE`:123 |
| S01dsp | //--- Display Subfile  -------------------------------------------------- | `QRPGLESRC/ART301.SQLRPGLE`:143 |
| S01key | //--- Command Keys  ----------------------------------------------------- | `QRPGLESRC/ART301.SQLRPGLE`:152 |
| S01chk | //--- Check Subfile  ---------------------------------------------------- | `QRPGLESRC/ART301.SQLRPGLE`:170 |
| S01act | //--- Write Subfile  ---------------------------------------------------- | `QRPGLESRC/ART301.SQLRPGLE`:213 |

## Panel or step tests

Only the conditions written in this member are listed.

| Condition | Evidence |
| --- | --- |
| when step01 = prp ; | `QRPGLESRC/ART301.SQLRPGLE`:76 |
| when step01 = lod ; | `QRPGLESRC/ART301.SQLRPGLE`:78 |
| when step01 = dsp ; | `QRPGLESRC/ART301.SQLRPGLE`:80 |
| when step01 = key ; | `QRPGLESRC/ART301.SQLRPGLE`:82 |
| when step01 = chk ; | `QRPGLESRC/ART301.SQLRPGLE`:84 |
| when step01 = act ; | `QRPGLESRC/ART301.SQLRPGLE`:86 |

## Indicator declarations

| Declaration | Evidence |
| --- | --- |
| D  help                   1      1n | `QRPGLESRC/ART301.SQLRPGLE`:14 |
| D  exit                   3      3n | `QRPGLESRC/ART301.SQLRPGLE`:15 |
| D  prompt                 4      4n | `QRPGLESRC/ART301.SQLRPGLE`:16 |
| D  refresh                5      5n | `QRPGLESRC/ART301.SQLRPGLE`:17 |
| D  create                 6      6n | `QRPGLESRC/ART301.SQLRPGLE`:18 |
| D  cancel                12     12n | `QRPGLESRC/ART301.SQLRPGLE`:19 |
| D  morekeys              24     24n | `QRPGLESRC/ART301.SQLRPGLE`:20 |
| D  pagedown              25     25n | `QRPGLESRC/ART301.SQLRPGLE`:21 |
| D  sflclr                30     30n | `QRPGLESRC/ART301.SQLRPGLE`:22 |
| D  sfldsp                31     31n | `QRPGLESRC/ART301.SQLRPGLE`:23 |
| D  sfldspctl             32     32n | `QRPGLESRC/ART301.SQLRPGLE`:24 |
| D  sflnxtchg             33     33n | `QRPGLESRC/ART301.SQLRPGLE`:25 |
| D  dspatrri              34     34n | `QRPGLESRC/ART301.SQLRPGLE`:26 |
| D  InvalidOpt            35     35n | `QRPGLESRC/ART301.SQLRPGLE`:27 |
| D  OneSelect             36     36n | `QRPGLESRC/ART301.SQLRPGLE`:28 |
| D  bydesc                40     40n | `QRPGLESRC/ART301.SQLRPGLE`:29 |
| D  InvalidOptC           41     41n | `QRPGLESRC/ART301.SQLRPGLE`:30 |
| D  NotAvail              42     42n | `QRPGLESRC/ART301.SQLRPGLE`:31 |
| D  sflend                80     80n | `QRPGLESRC/ART301.SQLRPGLE`:32 |
| d   arsalePr                     7  2 | `QRPGLESRC/ART301.SQLRPGLE`:38 |

## Key tests

| Test | Evidence |
| --- | --- |
| when exit; | `QRPGLESRC/ART301.SQLRPGLE`:154 |
| when cancel ; | `QRPGLESRC/ART301.SQLRPGLE`:156 |
| when PageDown; | `QRPGLESRC/ART301.SQLRPGLE`:158 |
| when prompt; | `QRPGLESRC/ART301.SQLRPGLE`:160 |

No open question was raised from this page.

