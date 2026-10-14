# CUSSEQ (DTAARA)

|  |  |
| --- | --- |
| Source | `QSQLSRC/CUSSEQ.SQLSEQ` |
| Language | SQL |
| Class | sql-sequence |
| Section | data-stores |
| Object text | source text: Sequence by customer number; LABEL ON: Next customer Number |
| CCSID | 297 from `QSQLSRC/.ibmi.json` |
| Build manifest | `QSQLSRC/Rules.mk` |
| Activation group |  |

## Object text

These strings are descriptions stored with the object. They are not, by themselves, a description of runtime behavior.

| Kind | Text | Evidence |
| --- | --- | --- |
| source text | Sequence by customer number | `QSQLSRC/CUSSEQ.SQLSEQ` |
| LABEL ON | Next customer Number | `QSQLSRC/CUSSEQ.SQLSEQ` |

## Purpose

The stored description is "Sequence by customer number" (`QSQLSRC/CUSSEQ.SQLSEQ`). Header comments in the source: --%METADATA                                                      * -- %TEXT Sequence by customer number                             * --%EMETADATA                                                     *

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| CUSSEQ.SQLSEQ | `QSQLSRC/CUSSEQ.SQLSEQ` | `QSQLSRC/Rules.mk` |

## SQL source

| Line | Text |
| --- | --- |
| `QSQLSRC/CUSSEQ.SQLSEQ`:2 | -- %TEXT Sequence by customer number                             * |
| `QSQLSRC/CUSSEQ.SQLSEQ`:5 | CREATE OR REPLACE SEQUENCE CUSSEQ |
| `QSQLSRC/CUSSEQ.SQLSEQ`:11 | LABEL ON SEQUENCE CUSSEQ IS 'Next customer Number'; |

Labels and metadata text are descriptions, not a record of who updates the data.

| Text | Evidence |
| --- | --- |
| Sequence by customer number | `QSQLSRC/CUSSEQ.SQLSEQ`:2 |
| Next customer Number | `QSQLSRC/CUSSEQ.SQLSEQ`:11 |

No open question was raised from this page.

