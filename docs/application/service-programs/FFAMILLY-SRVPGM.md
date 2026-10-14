# FFAMILLY (SRVPGM)

|  |  |
| --- | --- |
| Source | `QSRVSRC/FFAMILLY.BND` |
| Language | BND |
| Class | binder-source |
| Section | service-programs |
| Object text | build TEXT: Functions Family |
| CCSID | 297 from `QSRVSRC/.ibmi.json` |
| Build manifest | `QSRVSRC/Rules.mk` |
| Activation group |  |

## Object text

These strings are descriptions stored with the object. They are not, by themselves, a description of runtime behavior.

| Kind | Text | Evidence |
| --- | --- | --- |
| build TEXT | Functions Family | `QSRVSRC/Rules.mk` |

## Purpose

The stored description is "Functions Family" (`QSRVSRC/Rules.mk`).

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| FFAMILLY.BND | `QSRVSRC/FFAMILLY.BND` | `QSRVSRC/Rules.mk` |
| FAM300.MODULE | [FAM300.MODULE](../modules/FAM300-MODULE.md) | `QSRVSRC/Rules.mk` |
| FAM301.MODULE | [FAM301.MODULE](../modules/FAM301-MODULE.md) | `QSRVSRC/Rules.mk` |

## Binder exports

| Symbol | Evidence |
| --- | --- |
| GETARTFAMDESC | `QSRVSRC/FFAMILLY.BND`:2 |
| EXISTARTFAM | `QSRVSRC/FFAMILLY.BND`:3 |
| ISARTFAMDELETED | `QSRVSRC/FFAMILLY.BND`:4 |
| SLTARTFAM | `QSRVSRC/FFAMILLY.BND`:5 |

Signature text: `V1` (`QSRVSRC/FFAMILLY.BND`).

No open question was raised from this page.

