# CUSTINFO1 (FILE)

|  |  |
| --- | --- |
| Source | `QSQLSRC/CUSTINFO1.PFSQL` |
| Language | SQL |
| Class | sql-file |
| Section | data-stores |
| Object text | LABEL ON: Custinfo1 Master Table |
| CCSID | 297 from `QSQLSRC/.ibmi.json` |
| Build manifest | `QSQLSRC/Rules.mk` |
| Activation group |  |

## Object text

These strings are descriptions stored with the object. They are not, by themselves, a description of runtime behavior.

| Kind | Text | Evidence |
| --- | --- | --- |
| LABEL ON | Custinfo1 Master Table | `QSQLSRC/CUSTINFO1.PFSQL` |

## Purpose

The stored description is "Custinfo1 Master Table" (`QSQLSRC/CUSTINFO1.PFSQL`).

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| CUSTINFO1.PFSQL | `QSQLSRC/CUSTINFO1.PFSQL` | `QSQLSRC/Rules.mk` |

## SQL source

| Line | Text |
| --- | --- |
| `QSQLSRC/CUSTINFO1.PFSQL`:1 | CREATE OR REPLACE TABLE Custinfo1( |
| `QSQLSRC/CUSTINFO1.PFSQL`:10 | LABEL ON TABLE Custinfo1 IS 'Custinfo1 Master Table'; |
| `QSQLSRC/CUSTINFO1.PFSQL`:12 | LABEL ON COLUMN Custinfo1( |

Labels and metadata text are descriptions, not a record of who updates the data.

| Text | Evidence |
| --- | --- |
| Custinfo1 Master Table | `QSQLSRC/CUSTINFO1.PFSQL`:10 |

No open question was raised from this page.

