# ART801 (PGM)

|  |  |
| --- | --- |
| Source | `QSQLSRC/ART801.SQLPRC` |
| Language | SQL |
| Class | sql-procedure |
| Section | programs |
| Object text | source text: Update Customer Order Quantity |
| CCSID | 297 from `QSQLSRC/.ibmi.json` |
| Build manifest | `QSQLSRC/Rules.mk` |
| Activation group |  |

## Object text

These strings are descriptions stored with the object. They are not, by themselves, a description of runtime behavior.

| Kind | Text | Evidence |
| --- | --- | --- |
| source text | Update Customer Order Quantity | `QSQLSRC/ART801.SQLPRC` |

## Purpose

The stored description is "Update Customer Order Quantity" (`QSQLSRC/ART801.SQLPRC`). Menu `QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC` option 82 labels this "Reset Summary Fields" and runs `cmd call art801`. Header comments in the source: --%METADATA                                                      * -- %TEXT Update Customer Order Quantity                          * --%EMETADATA                                                     *

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| ART801.SQLPRC | `QSQLSRC/ART801.SQLPRC` | `QSQLSRC/Rules.mk` |

## SQL source

| Line | Text |
| --- | --- |
| `QSQLSRC/ART801.SQLPRC`:2 | -- %TEXT Update Customer Order Quantity                          * |
| `QSQLSRC/ART801.SQLPRC`:7 | CREATE OR REPLACE PROCEDURE UPDATE_ON_CUS_ORD_QTY ( ) |

Labels and metadata text are descriptions, not a record of who updates the data.

| Text | Evidence |
| --- | --- |
| Update Customer Order Quantity | `QSQLSRC/ART801.SQLPRC`:2 |

No open question was raised from this page.

