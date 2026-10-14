# ARTIPROV (FILE)

|  |  |
| --- | --- |
| Source | `QDDSSRC/ARTIPROV.PF` |
| Language | DDS |
| Class | physical-file |
| Section | data-stores |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 37 from `.ibmi.json` |
| Build manifest | `QDDSSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QDDSSRC/Rules.mk`).

## Purpose

The source defines record `FARPR`.

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| ARTIPROV.PF | `QDDSSRC/ARTIPROV.PF` | `QDDSSRC/Rules.mk` |
| SAMREF.FILE | [SAMREF.FILE](./SAMREF-FILE.md) | `QDDSSRC/Rules.mk` |

## Layouts

### File-level source

| Source line | Evidence |
| --- | --- |
| UNIQUE | `QDDSSRC/ARTIPROV.PF`:1 |
| REF(SAMREF) | `QDDSSRC/ARTIPROV.PF`:2 |

### FARPR

Record `FARPR` at `QDDSSRC/ARTIPROV.PF`:3. Keywords: `COLHDG('BUY PRICE') COLHDG('CREAETION' 'DATE') COLHDG('LAST' 'MODIFICATION') COLHDG('LAST' 'MODIF.' 'BY')`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| APARID | ARID |  | `QDDSSRC/ARTIPROV.PF`:4 |
| APPRID | PRID |  | `QDDSSRC/ARTIPROV.PF`:5 |
| APPRICE | UNITPRICE |  | `QDDSSRC/ARTIPROV.PF`:6 |
| APREF | 10          TEXT('PROVIDER REFERENCE') | PROVIDER REFERENCE | `QDDSSRC/ARTIPROV.PF`:8 |
| APCREA | L         TEXT('CREATION DATE') | CREATION DATE | `QDDSSRC/ARTIPROV.PF`:9 |
| APMOD | Z         TEXT('LAST MODIFICATION') | LAST MODIFICATION | `QDDSSRC/ARTIPROV.PF`:11 |
| APMODID | 10          TEXT('LAS MOD BY') | LAS MOD BY | `QDDSSRC/ARTIPROV.PF`:13 |
| APDEL | DLCODE |  | `QDDSSRC/ARTIPROV.PF`:15 |
| K | APPRID |  | `QDDSSRC/ARTIPROV.PF`:16 |
| K | APARID |  | `QDDSSRC/ARTIPROV.PF`:17 |

No open question was raised from this page.

