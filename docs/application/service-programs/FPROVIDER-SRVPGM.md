# FPROVIDER (SRVPGM)

|  |  |
| --- | --- |
| Source | `QSRVSRC/FPROVIDER.BND` |
| Language | BND |
| Class | binder-source |
| Section | service-programs |
| Object text | build TEXT: Functions Provider |
| CCSID | 297 from `QSRVSRC/.ibmi.json` |
| Build manifest | `QSRVSRC/Rules.mk` |
| Activation group |  |

## Object text

These strings are descriptions stored with the object. They are not, by themselves, a description of runtime behavior.

| Kind | Text | Evidence |
| --- | --- | --- |
| build TEXT | Functions Provider | `QSRVSRC/Rules.mk` |

## Purpose

The stored description is "Functions Provider" (`QSRVSRC/Rules.mk`).

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| FPROVIDER.BND | `QSRVSRC/FPROVIDER.BND` | `QSRVSRC/Rules.mk` |
| PRO300.MODULE | [PRO300.MODULE](../modules/PRO300-MODULE.md) | `QSRVSRC/Rules.mk` |

## Binder exports

| Symbol | Evidence |
| --- | --- |
| EXISTPROVIDER | `QSRVSRC/FPROVIDER.BND`:5 |
| GETPROADR1 | `QSRVSRC/FPROVIDER.BND`:6 |
| GETPROADR2 | `QSRVSRC/FPROVIDER.BND`:7 |
| GETPROADR3 | `QSRVSRC/FPROVIDER.BND`:8 |
| GETPROCITY | `QSRVSRC/FPROVIDER.BND`:9 |
| GETPROCONT | `QSRVSRC/FPROVIDER.BND`:10 |
| GETPROCOUNTRY | `QSRVSRC/FPROVIDER.BND`:11 |
| GETPROMAIL | `QSRVSRC/FPROVIDER.BND`:12 |
| GETPRONAME | `QSRVSRC/FPROVIDER.BND`:13 |
| GETPROPHONE | `QSRVSRC/FPROVIDER.BND`:14 |
| GETPROVAT | `QSRVSRC/FPROVIDER.BND`:15 |
| GETPROZIP | `QSRVSRC/FPROVIDER.BND`:16 |
| ISPRODELETED | `QSRVSRC/FPROVIDER.BND`:17 |

No open question was raised from this page.

