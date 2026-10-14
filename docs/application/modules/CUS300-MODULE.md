# CUS300 (MODULE)

|  |  |
| --- | --- |
| Source | `QRPGLESRC/CUS300.RPGLE` |
| Language | RPGLE |
| Class | ile-rpg |
| Section | modules |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 297 from `QRPGLESRC/.ibmi.json` |
| Build manifest | `QRPGLESRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QRPGLESRC/Rules.mk`).

## Purpose

The sources read for this object do not state a business purpose (`QRPGLESRC/CUS300.RPGLE`).

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| CUS300.RPGLE | `QRPGLESRC/CUS300.RPGLE` | `QRPGLESRC/Rules.mk` |
| CUSTOME1.FILE | [CUSTOME1.FILE](../data-stores/CUSTOME1-FILE.md) | `QRPGLESRC/Rules.mk` |

Source form in this member: fixed-form (`QRPGLESRC/CUS300.RPGLE`).

## Control specifications

| Line | Text |
| --- | --- |
| `QRPGLESRC/CUS300.RPGLE` | h nomain |

## Files

| File | Declaration | Evidence |
| --- | --- | --- |
| CUSTOME1 | FCUSTOME1  if   e           k disk    usropn | `QRPGLESRC/CUS300.RPGLE`:3 |

## Copies and includes

| Name | Evidence |
| --- | --- |
| customer | `QRPGLESRC/CUS300.RPGLE`:5 |

## Procedures

| Name | Export | Evidence |
| --- | --- | --- |
| GetCusName | export | `QRPGLESRC/CUS300.RPGLE`:16 |
| GetCusName |  | `QRPGLESRC/CUS300.RPGLE`:24 |
| GetCusPhone | export | `QRPGLESRC/CUS300.RPGLE`:26 |
| GetCusPhone |  | `QRPGLESRC/CUS300.RPGLE`:34 |
| GetCusVat | export | `QRPGLESRC/CUS300.RPGLE`:36 |
| GetCusVat |  | `QRPGLESRC/CUS300.RPGLE`:44 |
| GetCusMail | export | `QRPGLESRC/CUS300.RPGLE`:46 |
| GetCusMail |  | `QRPGLESRC/CUS300.RPGLE`:54 |
| GetCusAdrline1 | export | `QRPGLESRC/CUS300.RPGLE`:56 |
| GetCusAdrline1 |  | `QRPGLESRC/CUS300.RPGLE`:64 |
| GetCusAdrline2 | export | `QRPGLESRC/CUS300.RPGLE`:66 |
| GetCusAdrline2 |  | `QRPGLESRC/CUS300.RPGLE`:74 |
| GetCusAdrline3 | export | `QRPGLESRC/CUS300.RPGLE`:76 |
| GetCusAdrline3 |  | `QRPGLESRC/CUS300.RPGLE`:84 |
| GetCusZip | export | `QRPGLESRC/CUS300.RPGLE`:86 |
| GetCusZip |  | `QRPGLESRC/CUS300.RPGLE`:94 |
| GetCusCity | export | `QRPGLESRC/CUS300.RPGLE`:96 |
| GetCusCity |  | `QRPGLESRC/CUS300.RPGLE`:104 |
| GetCusCountry | export | `QRPGLESRC/CUS300.RPGLE`:106 |
| GetCusCountry |  | `QRPGLESRC/CUS300.RPGLE`:114 |
| GetCusLimCredit | export | `QRPGLESRC/CUS300.RPGLE`:116 |
| GetCusLimCredit |  | `QRPGLESRC/CUS300.RPGLE`:124 |
| GetCusCredit | export | `QRPGLESRC/CUS300.RPGLE`:126 |
| GetCusCredit |  | `QRPGLESRC/CUS300.RPGLE`:134 |
| ExistCus | export | `QRPGLESRC/CUS300.RPGLE`:149 |
| ExistCus |  | `QRPGLESRC/CUS300.RPGLE`:157 |
| IsCusDeleted | export | `QRPGLESRC/CUS300.RPGLE`:160 |
| IsCusDeleted |  | `QRPGLESRC/CUS300.RPGLE`:168 |
| chainCUSTOME1 |  | `QRPGLESRC/CUS300.RPGLE`:170 |
| chainCUSTOME1 |  | `QRPGLESRC/CUS300.RPGLE`:183 |
| closeCUSTOME1 |  | `QRPGLESRC/CUS300.RPGLE`:185 |
| closeCUSTOME1 |  | `QRPGLESRC/CUS300.RPGLE`:192 |

## Indicator declarations

| Declaration | Evidence |
| --- | --- |
| D P_CUID                         5  0  value | `QRPGLESRC/CUS300.RPGLE`:8 |
| D P_CUID                         5  0  value | `QRPGLESRC/CUS300.RPGLE`:18 |
| D P_CUID                         5  0  value | `QRPGLESRC/CUS300.RPGLE`:28 |
| D P_CUID                         5  0  value | `QRPGLESRC/CUS300.RPGLE`:38 |
| D P_CUID                         5  0  value | `QRPGLESRC/CUS300.RPGLE`:48 |
| D P_CUID                         5  0  value | `QRPGLESRC/CUS300.RPGLE`:58 |
| D P_CUID                         5  0  value | `QRPGLESRC/CUS300.RPGLE`:68 |
| D P_CUID                         5  0  value | `QRPGLESRC/CUS300.RPGLE`:78 |
| D P_CUID                         5  0  value | `QRPGLESRC/CUS300.RPGLE`:88 |
| D P_CUID                         5  0  value | `QRPGLESRC/CUS300.RPGLE`:98 |
| D P_CUID                         5  0  value | `QRPGLESRC/CUS300.RPGLE`:108 |
| D P_CUID                         5  0  value | `QRPGLESRC/CUS300.RPGLE`:118 |
| D P_CUID                         5  0  value | `QRPGLESRC/CUS300.RPGLE`:128 |
| D P_CUID                         5  0  value | `QRPGLESRC/CUS300.RPGLE`:151 |
| D P_CUID                         5  0  value | `QRPGLESRC/CUS300.RPGLE`:162 |
| D P_CUID                         5  0  value | `QRPGLESRC/CUS300.RPGLE`:172 |

No open question was raised from this page.

