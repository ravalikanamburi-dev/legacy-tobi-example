# VALUSE (SRVPGM)

|  |  |
| --- | --- |
| Source | `QSQLSRC/valuse.sqlvar` |
| Language | SQL |
| Class | sql-variable |
| Section | service-programs |
| Object text | LABEL ON: VALUSE indicator |
| CCSID | 297 from `QSQLSRC/.ibmi.json` |
| Build manifest | `QSQLSRC/Rules.mk` |
| Activation group |  |

## Object text

These strings are descriptions stored with the object. They are not, by themselves, a description of runtime behavior.

| Kind | Text | Evidence |
| --- | --- | --- |
| LABEL ON | VALUSE indicator | `QSQLSRC/valuse.sqlvar` |

## Purpose

The stored description is "VALUSE indicator" (`QSQLSRC/valuse.sqlvar`).

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| valuse.sqlvar | `QSQLSRC/valuse.sqlvar` | `QSQLSRC/Rules.mk` |

## SQL source

| Line | Text |
| --- | --- |
| `QSQLSRC/valuse.sqlvar`:1 | CREATE OR REPLACE VARIABLE VALUSE |
| `QSQLSRC/valuse.sqlvar`:5 | LABEL ON VARIABLE VALUSE IS 'VALUSE indicator' ; |

Labels and metadata text are descriptions, not a record of who updates the data.

| Text | Evidence |
| --- | --- |
| VALUSE indicator | `QSQLSRC/valuse.sqlvar`:5 |

No open question was raised from this page.

