# TXT (SRVPGM)

|  |  |
| --- | --- |
| Source | `QSRVSRC/TXT.BND` |
| Language | BND |
| Class | binder-source |
| Section | service-programs |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 297 from `QSRVSRC/.ibmi.json` |
| Build manifest | `QSRVSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QSRVSRC/Rules.mk`).

## Purpose

Header comments in the source: /*%CSTD===========================================================*      */ /** Application. : ARC_DEMO   PRD:Tools used by Demo appli.       *      */ /** Composant. . : TXT                           Type: BND        *      */

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| TXT.BND | `QSRVSRC/TXT.BND` | `QSRVSRC/Rules.mk` |
| TXT001.MODULE | [TXT001.MODULE](../modules/TXT001-MODULE.md) | `QSRVSRC/Rules.mk` |

## Binder exports

None are declared in the sources read for this page.

Signature text: `V1` (`QSRVSRC/TXT.BND`).

No open question was raised from this page.

