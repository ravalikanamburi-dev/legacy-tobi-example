# FCOUNTRY (SRVPGM)

|  |  |
| --- | --- |
| Source | `QSRVSRC/FCOUNTRY.BND` |
| Language | BND |
| Class | binder-source |
| Section | service-programs |
| Object text | build TEXT: Functions Country |
| CCSID | 297 from `QSRVSRC/.ibmi.json` |
| Build manifest | `QSRVSRC/Rules.mk` |
| Activation group |  |

## Object text

These strings are descriptions stored with the object. They are not, by themselves, a description of runtime behavior.

| Kind | Text | Evidence |
| --- | --- | --- |
| build TEXT | Functions Country | `QSRVSRC/Rules.mk` |

## Purpose

The stored description is "Functions Country" (`QSRVSRC/Rules.mk`).

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| FCOUNTRY.BND | `QSRVSRC/FCOUNTRY.BND` | `QSRVSRC/Rules.mk` |
| COU300.MODULE | [COU300.MODULE](../modules/COU300-MODULE.md) | `QSRVSRC/Rules.mk` |
| COU301.MODULE | [COU301.MODULE](../modules/COU301-MODULE.md) | `QSRVSRC/Rules.mk` |

## Binder exports

| Symbol | Evidence |
| --- | --- |
| EXISTCOUNTRY | `QSRVSRC/FCOUNTRY.BND`:2 |
| GETCOUNTRYISO3 | `QSRVSRC/FCOUNTRY.BND`:3 |
| GETCOUNTRYNAME | `QSRVSRC/FCOUNTRY.BND`:4 |
| SLTCOUNTRY | `QSRVSRC/FCOUNTRY.BND`:5 |

Signature text: `V1` (`QSRVSRC/FCOUNTRY.BND`).

No open question was raised from this page.

