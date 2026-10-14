# ORD901 (PGM)

|  |  |
| --- | --- |
| Source | `QRPGLESRC/ORD901.PGM.SQLRPGLE` |
| Language | SQLRPGLE |
| Class | ile-rpg-sql |
| Section | programs |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 297 from `QRPGLESRC/.ibmi.json` |
| Build manifest | `QRPGLESRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QRPGLESRC/Rules.mk`).

## Purpose

Menu `QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC` option 81 labels this "Reset Order dates to current" and runs `cmd call ord901`.

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| ORD901.PGM.SQLRPGLE | `QRPGLESRC/ORD901.PGM.SQLRPGLE` | `QRPGLESRC/Rules.mk` |

Source form in this member: fixed-form (`QRPGLESRC/ORD901.PGM.SQLRPGLE`).

## Files

| File | Declaration | Evidence |
| --- | --- | --- |
| order | forder     UF   E             DISK | `QRPGLESRC/ORD901.PGM.SQLRPGLE`:1 |

## Embedded SQL

| Statement start | Evidence |
| --- | --- |
| exec sql select max(ordate) into :LastDate from order; if lastdate = 0; *inlr = *on; | `QRPGLESRC/ORD901.PGM.SQLRPGLE`:8 |
| exec sql Update detord d set odyear = (select oryear from order where d.odorid = orid) where odyear <> (select oryear | `QRPGLESRC/ORD901.PGM.SQLRPGLE`:39 |
| exec sql UPDATE CUSTOMER C SET CULASTORD = ( SELECT MAX ( ORDATE ) FROM "ORDER" WHERE C.CUID = ORCUID ) | `QRPGLESRC/ORD901.PGM.SQLRPGLE`:43 |

## Indicator declarations

| Declaration | Evidence |
| --- | --- |
| d lastdate        s              8  0 | `QRPGLESRC/ORD901.PGM.SQLRPGLE`:3 |
| d today           s              8  0 | `QRPGLESRC/ORD901.PGM.SQLRPGLE`:4 |
| d days            s              5  0 | `QRPGLESRC/ORD901.PGM.SQLRPGLE`:5 |

No open question was raised from this page.

