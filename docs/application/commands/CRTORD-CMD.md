# CRTORD (CMD)

|  |  |
| --- | --- |
| Source | `QCMDSRC/CRTORD.CMD` |
| Language | CMD |
| Class | command |
| Section | commands |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 500 from `QCMDSRC/.ibmi.json` |
| Build manifest | `QCMDSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QCMDSRC/Rules.mk`).

## Purpose

The sources read for this object do not state a business purpose (`QCMDSRC/CRTORD.CMD`).

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| CRTORD.CMD | `QCMDSRC/CRTORD.CMD` | `QCMDSRC/Rules.mk` |
| ORD100.PGM | [ORD100.PGM](../programs/ORD100-PGM.md) | `QCMDSRC/Rules.mk` |

## Build attributes

| Key | Value | Private | Evidence |
| --- | --- | --- | --- |
| CMD_PGM | ORD100 | no | `QCMDSRC/Rules.mk` |

Prompt text: "Create an Order" (`QCMDSRC/CRTORD.CMD`).

Build attribute `CMD_PGM` names `ORD100` (`QCMDSRC/Rules.mk`).

## Parameters

| Keyword | Type | Length | Default | Prompt | Evidence |
| --- | --- | --- | --- | --- | --- |
| CUID | *DEC | 5 | 0 |  | `QCMDSRC/CRTORD.CMD`:2 |

No open question was raised from this page.

