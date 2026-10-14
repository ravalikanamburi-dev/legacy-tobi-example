# ORD700U (TRG)

|  |  |
| --- | --- |
| Source | `QTRGSRC/ORD700U.SYSTRG` |
| Language | CL |
| Class | system-trigger |
| Section | triggers |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 297 from `QTRGSRC/.ibmi.json` |
| Build manifest | `QTRGSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QTRGSRC/Rules.mk`).

## Purpose

The sources read for this object do not state a business purpose (`QTRGSRC/ORD700U.SYSTRG`).

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| ORD700U.SYSTRG | `QTRGSRC/ORD700U.SYSTRG` | `QTRGSRC/Rules.mk` |
| ORD700.PGM | [ORD700.PGM](../programs/ORD700-PGM.md) | `QTRGSRC/Rules.mk` |

## Trigger source

`ADDPFTRG   FILE(DETORD) TRGTIME(*AFTER) +`

`TRGEVENT(*UPDATE) PGM(ORD700) +`

`RPLTRG(*YES) +`

`TRG(ORD700_DETORD_ARTICLE_UPDATE) +`

`TRGUPDCND(*CHANGE)`

No open question was raised from this page.

