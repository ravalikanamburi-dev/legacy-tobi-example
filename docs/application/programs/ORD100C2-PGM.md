# ORD100C2 (PGM)

|  |  |
| --- | --- |
| Source | `QCLSRC/ORD100C2.PGM.CLLE` |
| Language | CLLE |
| Class | clle |
| Section | programs |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 500 from `QCLSRC/.ibmi.json` |
| Build manifest | `QCLSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QCLSRC/Rules.mk`).

## Purpose

Menu `QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC` option 6 labels this "Create a Customer Order." and runs `cmd call ORD100C2`.

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| ORD100C2.PGM.CLLE | `QCLSRC/ORD100C2.PGM.CLLE` | `QCLSRC/Rules.mk` |

## Program calls

| Target | Kind | In this repository | Evidence |
| --- | --- | --- | --- |
| ORD100 | CALL | [ORD100.PGM](./ORD100-PGM.md) | `QCLSRC/ORD100C2.PGM.CLLE`:9 |

## Error handling

| Statement | Evidence |
| --- | --- |
| MONMSG     MSGID(CPF0000) | `QCLSRC/ORD100C2.PGM.CLLE`:4 |

No open question was raised from this page.

