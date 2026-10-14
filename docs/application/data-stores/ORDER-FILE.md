# ORDER (FILE)

|  |  |
| --- | --- |
| Source | `QDDSSRC/ORDER.PF` |
| Language | DDS |
| Class | physical-file |
| Section | data-stores |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 37 from `.ibmi.json` |
| Build manifest | `QDDSSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QDDSSRC/Rules.mk`).

## Purpose

The source defines record `FORDE`.

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| ORDER.PF | `QDDSSRC/ORDER.PF` | `QDDSSRC/Rules.mk` |
| SAMREF.FILE | [SAMREF.FILE](./SAMREF-FILE.md) | `QDDSSRC/Rules.mk` |

## Layouts

### File-level source

| Source line | Evidence |
| --- | --- |
| REF(SAMREF) | `QDDSSRC/ORDER.PF`:1 |

### FORDE

Record `FORDE` at `QDDSSRC/ORDER.PF`:2. Keywords: `COLHDG('ORDER' 'DATE') COLHDG('DELIVERY' 'DATE') COLHDG('CLOSE' 'DATE')`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| ORID | R |  | `QDDSSRC/ORDER.PF`:3 |
| ORYEAR | YEAR |  | `QDDSSRC/ORDER.PF`:4 |
| ORCUID | CUID |  | `QDDSSRC/ORDER.PF`:5 |
| ORDATE | 8  0       TEXT('ORDER DATE') | ORDER DATE | `QDDSSRC/ORDER.PF`:6 |
| ORDATDEL | 8  0       TEXT('DELIVERY DATE') | DELIVERY DATE | `QDDSSRC/ORDER.PF`:8 |
| ORDATCLO | 8  0       TEXT('CLOSE DATE') | CLOSE DATE | `QDDSSRC/ORDER.PF`:10 |

No open question was raised from this page.

