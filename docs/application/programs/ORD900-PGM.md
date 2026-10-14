# ORD900 (PGM)

|  |  |
| --- | --- |
| Source | `QRPGLESRC/ORD900.PGM.RPGLE` |
| Language | RPGLE |
| Class | ile-rpg |
| Section | programs |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 297 from `QRPGLESRC/.ibmi.json` |
| Build manifest | `QRPGLESRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QRPGLESRC/Rules.mk`).

## Purpose

Menu `QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC` option 80 labels this "Reset LASTORDNO" and runs `cmd call ord900`.

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| ORD900.PGM.RPGLE | `QRPGLESRC/ORD900.PGM.RPGLE` | `QRPGLESRC/Rules.mk` |

Source form in this member: fixed-form (`QRPGLESRC/ORD900.PGM.RPGLE`).

## Files

| File | Declaration | Evidence |
| --- | --- | --- |
| order1 | forder1    if   e           k disk | `QRPGLESRC/ORD900.PGM.RPGLE`:1 |

## Data areas

| Name | Evidence |
| --- | --- |
| LASTORDNO | `QRPGLESRC/ORD900.PGM.RPGLE`:2 |

No open question was raised from this page.

