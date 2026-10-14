# ORD701 (PGM)

|  |  |
| --- | --- |
| Source | `QSQLSRC/ORD701.SQLTRG` |
| Language | SQL |
| Class | sql-trigger |
| Section | triggers |
| Object text | source text: Trigger inserting order date |
| CCSID | 297 from `QSQLSRC/.ibmi.json` |
| Build manifest | `QSQLSRC/Rules.mk` |
| Activation group |  |

## Object text

These strings are descriptions stored with the object. They are not, by themselves, a description of runtime behavior.

| Kind | Text | Evidence |
| --- | --- | --- |
| source text | Trigger inserting order date | `QSQLSRC/ORD701.SQLTRG` |

## Purpose

The stored description is "Trigger inserting order date" (`QSQLSRC/ORD701.SQLTRG`). Header comments in the source: --%METADATA                                                      * -- %TEXT Trigger inserting order date                            * --%EMETADATA                                                     *

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| ORD701.SQLTRG | `QSQLSRC/ORD701.SQLTRG` | `QSQLSRC/Rules.mk` |

## SQL source

| Line | Text |
| --- | --- |
| `QSQLSRC/ORD701.SQLTRG`:2 | -- %TEXT Trigger inserting order date                            * |
| `QSQLSRC/ORD701.SQLTRG`:5 | Create Or Replace Trigger ORD701_Insert_order |

Labels and metadata text are descriptions, not a record of who updates the data.

| Text | Evidence |
| --- | --- |
| Trigger inserting order date | `QSQLSRC/ORD701.SQLTRG`:2 |

## Trigger source

`-- %TEXT Trigger inserting order date                            *`

`Create Or Replace Trigger ORD701_Insert_order`

`After Insert  on order`

`Referencing  New As N`

`For Each Row`

`Program Name ORD701`

`set option sqlPath = *LIBL`

`Begin`

`Update Customer set culastord = n.ordate`

`where cuid = N.orcuid;`

`End`

No open question was raised from this page.

