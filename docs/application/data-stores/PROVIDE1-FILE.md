# PROVIDE1 (FILE)

|  |  |
| --- | --- |
| Source | `QDDSSRC/PROVIDE1.LF` |
| Language | DDS |
| Class | logical-file |
| Section | data-stores |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 37 from `.ibmi.json` |
| Build manifest | `QDDSSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QDDSSRC/Rules.mk`).

## Purpose

The source defines record `FPROV`.

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| PROVIDE1.LF | `QDDSSRC/PROVIDE1.LF` | `QDDSSRC/Rules.mk` |
| PROVIDER.FILE | [PROVIDER.FILE](./PROVIDER-FILE.md) | `QDDSSRC/Rules.mk` |

## Layouts

### File-level source

| Source line | Evidence |
| --- | --- |
| UNIQUE | `QDDSSRC/PROVIDE1.LF`:1 |

### FPROV

Record `FPROV` at `QDDSSRC/PROVIDE1.LF`:2. Keywords: `PFILE(PROVIDER)`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| K | PRID |  | `QDDSSRC/PROVIDE1.LF`:3 |

No open question was raised from this page.

