# STREAMDTA (DTAQ)

|  |  |
| --- | --- |
| Source | `QDTASRC/STREAMDTA.DTAQ` |
| Language | CL |
| Class | data-queue |
| Section | data-queues |
| Object text | TEXT keyword: Stream Text Dta |
| CCSID | 37 from `.ibmi.json` |
| Build manifest | `QDTASRC/Rules.mk` |
| Activation group |  |

## Object text

These strings are descriptions stored with the object. They are not, by themselves, a description of runtime behavior.

| Kind | Text | Evidence |
| --- | --- | --- |
| TEXT keyword | Stream Text Dta | `QDTASRC/STREAMDTA.DTAQ` |

## Purpose

The stored description is "Stream Text Dta" (`QDTASRC/STREAMDTA.DTAQ`). Header comments in the source: /* STREAMDTA Data Queue Object */

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| STREAMDTA.DTAQ | `QDTASRC/STREAMDTA.DTAQ` | `QDTASRC/Rules.mk` |

## Definition

The create command or source is cited below.

`/* STREAMDTA Data Queue Object */`

`!CRTDTAQ DTAQ(STREAMDTA) MAXLEN(64512) SIZE(*MAX2GB) AUTORCL(*YES) TEXT('Stream Text Dta')`

No open question was raised from this page.

