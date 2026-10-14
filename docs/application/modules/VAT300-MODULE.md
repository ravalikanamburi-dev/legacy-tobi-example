# VAT300 (MODULE)

|  |  |
| --- | --- |
| Source | `functionsVAT/vat300.rpgle` |
| Language | RPGLE |
| Class | ile-rpg |
| Section | modules |
| Object text | build TEXT: bound into FVAT.SRVPGM |
| CCSID | 500 from `functionsVAT/.ibmi.json` |
| Build manifest | `functionsVAT/Rules.mk` |
| Activation group |  |

## Object text

These strings are descriptions stored with the object. They are not, by themselves, a description of runtime behavior.

| Kind | Text | Evidence |
| --- | --- | --- |
| build TEXT | bound into FVAT.SRVPGM | `functionsVAT/Rules.mk` |

## Purpose

The stored description is "bound into FVAT.SRVPGM" (`functionsVAT/Rules.mk`). Header comments in the source: **FREE // ---------------------------------------------------------------------- // Example conversion of source to RPG Free form

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| vat300.rpgle | `functionsVAT/vat300.rpgle` | `functionsVAT/Rules.mk` |
| QPROTOSRC/vat.rpgleinc | [QPROTOSRC/VAT.RPGLEINC](../copy-members/VAT-copy-member.md) | `functionsVAT/Rules.mk` |
| VATDEF.FILE | [VATDEF.FILE](../data-stores/VATDEF-FILE.md) | `functionsVAT/Rules.mk` |

## Build attributes

| Key | Value | Private | Evidence |
| --- | --- | --- | --- |
| DBGVIEW | *SOURCE | yes | `functionsVAT/Rules.mk` |

Source form in this member: free-form (`functionsVAT/vat300.rpgle`).

## Control specifications

| Line | Text |
| --- | --- |
| `functionsVAT/vat300.rpgle` | Ctl-Opt nomain; |

## Files

| File | Declaration | Evidence |
| --- | --- | --- |
| VATDEF | Dcl-F VATDEF     Keyed usropn; | `functionsVAT/vat300.rpgle`:12 |

## Copies and includes

| Name | Evidence |
| --- | --- |
| VAT | `functionsVAT/vat300.rpgle`:14 |

## Procedures

| Name | Export | Evidence |
| --- | --- | --- |
| GetVATRate | export | `functionsVAT/vat300.rpgle`:23 |
| GetVATDesc | export | `functionsVAT/vat300.rpgle`:31 |
| ClcVAT | export | `functionsVAT/vat300.rpgle`:40 |
| ExistVATRate | export | `functionsVAT/vat300.rpgle`:53 |
| chainVATDEF |  | `functionsVAT/vat300.rpgle`:61 |
| closeVATDEF |  | `functionsVAT/vat300.rpgle`:75 |

No open question was raised from this page.

