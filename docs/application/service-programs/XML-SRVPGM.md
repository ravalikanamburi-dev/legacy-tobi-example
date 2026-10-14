# XML (SRVPGM)

|  |  |
| --- | --- |
| Source | `QSRVSRC/XML.BND` |
| Language | BND |
| Class | binder-source |
| Section | service-programs |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 297 from `QSRVSRC/.ibmi.json` |
| Build manifest | `QSRVSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QSRVSRC/Rules.mk`).

## Purpose

Header comments in the source: /*%CSTD===========================================================*      */ /** Application. : ARC_DEMO   PRD:Tools used by Demo appli.       *      */ /** Composant. . : XML                           Type: BND        *      */

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| XML.BND | `QSRVSRC/XML.BND` | `QSRVSRC/Rules.mk` |
| XML001.MODULE | [XML001.MODULE](../modules/XML001-MODULE.md) | `QSRVSRC/Rules.mk` |
| TXT.SRVPGM | [TXT.SRVPGM](./TXT-SRVPGM.md) | `QSRVSRC/Rules.mk` |

## Binder exports

None are declared in the sources read for this page.

Signature text: `V1` (`QSRVSRC/XML.BND`).

No open question was raised from this page.

