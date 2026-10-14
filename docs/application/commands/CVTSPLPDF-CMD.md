# CVTSPLPDF (CMD)

|  |  |
| --- | --- |
| Source | `QCMDSRC/CVTSPLPDF.CMDSRC` |
| Language | CMD |
| Class | command |
| Section | commands |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 500 from `QCMDSRC/.ibmi.json` |
| Build manifest | `QCMDSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QCMDSRC/Rules.mk`).

## Purpose

The sources read for this object do not state a business purpose (`QCMDSRC/CVTSPLPDF.CMDSRC`).

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| CVTSPLPDF.CMDSRC | `QCMDSRC/CVTSPLPDF.CMDSRC` | `QCMDSRC/Rules.mk` |

Prompt text: "Convert Spool to PDF" (`QCMDSRC/CVTSPLPDF.CMDSRC`).

## Parameters

| Keyword | Type | Length | Default | Prompt | Evidence |
| --- | --- | --- | --- | --- | --- |
| FROMFILE | *NAME | 10 |  |  | `QCMDSRC/CVTSPLPDF.CMDSRC`:3 |
| TOSTMF | *NAME | 64 |  |  | `QCMDSRC/CVTSPLPDF.CMDSRC`:6 |
| TODIR | *PNAME | 256 |  |  | `QCMDSRC/CVTSPLPDF.CMDSRC`:9 |
| JOB | JOB |  | * |  | `QCMDSRC/CVTSPLPDF.CMDSRC`:12 |
| SPLNBR | *DEC | 4 | *ONLY |  | `QCMDSRC/CVTSPLPDF.CMDSRC`:19 |
| STMFOPT | *CHAR | 8 |  |  | `QCMDSRC/CVTSPLPDF.CMDSRC`:23 |
| STMFCODPAG | *DEC | 5 0 | 1250 |  | `QCMDSRC/CVTSPLPDF.CMDSRC`:27 |
| TITLE | *CHAR | 50 |  |  | `QCMDSRC/CVTSPLPDF.CMDSRC`:31 |
| PAGESIZE | LIST3 |  | *SPLF |  | `QCMDSRC/CVTSPLPDF.CMDSRC`:35 |
| CUSTOMPAGE | LIST4 |  |  |  | `QCMDSRC/CVTSPLPDF.CMDSRC`:44 |
| FONT | LIST5 |  | *CONVERT |  | `QCMDSRC/CVTSPLPDF.CMDSRC`:54 |
| BOOKMARK | *CHAR | 7 |  |  | `QCMDSRC/CVTSPLPDF.CMDSRC`:64 |
| BMARKPOS | LIST1 |  |  |  | `QCMDSRC/CVTSPLPDF.CMDSRC`:68 |
| BMARKKEY | LIST2 |  |  |  | `QCMDSRC/CVTSPLPDF.CMDSRC`:77 |

No open question was raised from this page.

