# VATDEF (FILE)

|  |  |
| --- | --- |
| Source | `functionsVAT/vatdef.pf` |
| Language | DDS |
| Class | physical-file |
| Section | data-stores |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 500 from `functionsVAT/.ibmi.json` |
| Build manifest | `functionsVAT/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`functionsVAT/Rules.mk`).

## Purpose

The source defines record `FVAT`.

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| vatdef.pf | `functionsVAT/vatdef.pf` | `functionsVAT/Rules.mk` |
| SAMREF.FILE | [SAMREF.FILE](./SAMREF-FILE.md) | `functionsVAT/Rules.mk` |

## Layouts

### File-level source

| Source line | Evidence |
| --- | --- |
| REF(SAMREF) | `functionsVAT/vatdef.pf`:1 |

### FVAT

Record `FVAT` at `functionsVAT/vatdef.pf`:2. Keywords: `COLHDG('CREAETION' 'DATE') COLHDG('LAST' 'MODIFICATION') COLHDG('LAST' 'MODIF.' 'BY')`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| VATCODE | R |  | `functionsVAT/vatdef.pf`:3 |
| VATRATE | R |  | `functionsVAT/vatdef.pf`:4 |
| VATDESC | 20 |  | `functionsVAT/vatdef.pf`:5 |
| VATCREA | L         TEXT('CREATION DATE') | CREATION DATE | `functionsVAT/vatdef.pf`:6 |
| VATMOD | Z         TEXT('LAST MODIFICATION') | LAST MODIFICATION | `functionsVAT/vatdef.pf`:8 |
| VATMODID | 10          TEXT('LAS MOD BY') | LAS MOD BY | `functionsVAT/vatdef.pf`:10 |
| VATDEL | DLCODE |  | `functionsVAT/vatdef.pf`:12 |
| K | VATCODE |  | `functionsVAT/vatdef.pf`:13 |

No open question was raised from this page.

