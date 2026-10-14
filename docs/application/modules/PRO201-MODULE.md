# PRO201 (MODULE)

|  |  |
| --- | --- |
| Source | `QCBLSRC/PRO201.CBLLE` |
| Language | CBLLE |
| Class | cobol |
| Section | modules |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 500 from `QCBLSRC/.ibmi.json` |
| Build manifest | `QCBLSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QCBLSRC/Rules.mk`).

## Purpose

Menu `QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC` option 5 labels this "Display Providers" and runs `cmd call pro201`.

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| PRO201.CBLLE | `QCBLSRC/PRO201.CBLLE` | `QCBLSRC/Rules.mk` |
| PRO201D.FILE | [PRO201D.FILE](../screens/PRO201D-FILE.md) | `QCBLSRC/Rules.mk` |

## Program calls

| Target | Kind | In this repository | Evidence |
| --- | --- | --- | --- |
| ART202 | CALL | [ART202.PGM](../programs/ART202-PGM.md) | `QCBLSRC/PRO201.CBLLE`:255 |

## Key tests

| Test | Evidence |
| --- | --- |
| WHEN PAGEDOWN | `QCBLSRC/PRO201.CBLLE`:204 |

COBOL `PROGRAM-ID` is `PRO201` (`QCBLSRC/PRO201.CBLLE`).

No open question was raised from this page.

