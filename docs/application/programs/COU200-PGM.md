# COU200 (PGM)

|  |  |
| --- | --- |
| Source | `QRPGSRC/COU200.RPG` |
| Language | RPG |
| Class | opm-rpg |
| Section | programs |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 37 from `.ibmi.json` |
| Build manifest | `QRPGSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QRPGSRC/Rules.mk`).

## Purpose

Menu `QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC` option 21 labels this "Work with countries" and runs `cmd call cou200`.

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| COU200.RPG | `QRPGSRC/COU200.RPG` | `QRPGSRC/Rules.mk` |
| COUNTRY.FILE | [COUNTRY.FILE](../data-stores/COUNTRY-FILE.md) | `QRPGSRC/Rules.mk` |
| COU200D.FILE | [COU200D.FILE](../screens/COU200D-FILE.md) | `QRPGSRC/Rules.mk` |

Source form in this member: fixed-form (`QRPGSRC/COU200.RPG`).

## Files

| File | Declaration | Evidence |
| --- | --- | --- |
| COU200D | FCOU200D CF  E                    WORKSTN      KINFDS INFDS | `QRPGSRC/COU200.RPG`:1 |
| RRN01 | F                                        RRN01 KSFILE SFL01 | `QRPGSRC/COU200.RPG`:2 |
| COUNTRY | FCOUNTRY UF  E           K        DISK | `QRPGSRC/COU200.RPG`:4 |

No open question was raised from this page.

