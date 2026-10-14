# FAMILLY (FILE)

|  |  |
| --- | --- |
| Source | `QDDSSRC/FAMILLY.PF` |
| Language | DDS |
| Class | physical-file |
| Section | data-stores |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 37 from `.ibmi.json` |
| Build manifest | `QDDSSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QDDSSRC/Rules.mk`).

## Purpose

The source defines record `FFAMI`.

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| FAMILLY.PF | `QDDSSRC/FAMILLY.PF` | `QDDSSRC/Rules.mk` |
| SAMREF.FILE | [SAMREF.FILE](./SAMREF-FILE.md) | `QDDSSRC/Rules.mk` |

## Layouts

### File-level source

| Source line | Evidence |
| --- | --- |
| REF(SAMREF) | `QDDSSRC/FAMILLY.PF`:1 |
| UNIQUE | `QDDSSRC/FAMILLY.PF`:2 |

### FFAMI

Record `FFAMI` at `QDDSSRC/FAMILLY.PF`:3. Keywords: `TEXT('DFT VAT CODE') COLHDG('DFT' 'VAT' 'CD') COLHDG('CREAETION' 'DATE') COLHDG('LAST' 'MODIFICATION') COLHDG('LAST' 'MODIF.' 'BY')`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| FAID | R |  | `QDDSSRC/FAMILLY.PF`:4 |
| FADESC | R |  | `QDDSSRC/FAMILLY.PF`:5 |
| FAVATCD | VATCODE |  | `QDDSSRC/FAMILLY.PF`:6 |
| FACREA | L         TEXT('CREATION DATE') | CREATION DATE | `QDDSSRC/FAMILLY.PF`:9 |
| FAMOD | Z         TEXT('LAST MODIFICATION') | LAST MODIFICATION | `QDDSSRC/FAMILLY.PF`:11 |
| FAMODID | 10          TEXT('LAS MOD BY') | LAS MOD BY | `QDDSSRC/FAMILLY.PF`:13 |
| FADEL | DLCODE |  | `QDDSSRC/FAMILLY.PF`:15 |
| K | FAID |  | `QDDSSRC/FAMILLY.PF`:16 |

No open question was raised from this page.

