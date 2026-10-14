# OPM (PGM)

|  |  |
| --- | --- |
| Source | `QCLSRC/OPM.CLP` |
| Language | CLP |
| Class | clp |
| Section | programs |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 500 from `QCLSRC/.ibmi.json` |
| Build manifest | `QCLSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QCLSRC/Rules.mk`).

## Purpose

Header comments in the source: /* this is OPM CL for completeness of example */ /* in practice you should just use ILE CL     */

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| OPM.CLP | `QCLSRC/OPM.CLP` | `QCLSRC/Rules.mk` |

## Program calls

| Target | Kind | In this repository | Evidence |
| --- | --- | --- | --- |
| ORD100C | CALL | [ORD100C.PGM](./ORD100C-PGM.md) | `QCLSRC/OPM.CLP`:6 |

## CL parameters

| Declaration | Evidence |
| --- | --- |
| PGM        PARM(&CUID) | `QCLSRC/OPM.CLP` |
| CALL ORD100C PARM(&CUID) | `QCLSRC/OPM.CLP` |

No open question was raised from this page.

