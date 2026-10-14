# FVAT (SRVPGM)

|  |  |
| --- | --- |
| Source | `functionsVAT/fvat.bnd` |
| Language | BND |
| Class | binder-source |
| Section | service-programs |
| Object text | build TEXT: Functions VAT |
| CCSID | 500 from `functionsVAT/.ibmi.json` |
| Build manifest | `functionsVAT/Rules.mk` |
| Activation group |  |

## Object text

These strings are descriptions stored with the object. They are not, by themselves, a description of runtime behavior.

| Kind | Text | Evidence |
| --- | --- | --- |
| build TEXT | Functions VAT | `functionsVAT/Rules.mk` |

## Purpose

The stored description is "Functions VAT" (`functionsVAT/Rules.mk`).

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| fvat.bnd | `functionsVAT/fvat.bnd` | `functionsVAT/Rules.mk` |
| VAT300.MODULE | [VAT300.MODULE](../modules/VAT300-MODULE.md) | `functionsVAT/Rules.mk` |

## Binder exports

| Symbol | Evidence |
| --- | --- |
| CLCVAT | `functionsVAT/fvat.bnd`:2 |
| EXISTVATRATE | `functionsVAT/fvat.bnd`:3 |
| GETVATDESC | `functionsVAT/fvat.bnd`:4 |
| GETVATRATE | `functionsVAT/fvat.bnd`:5 |

Signature text: `V1` (`functionsVAT/fvat.bnd`).

No open question was raised from this page.

