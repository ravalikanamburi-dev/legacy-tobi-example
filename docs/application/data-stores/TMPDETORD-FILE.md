# TMPDETORD (FILE)

|  |  |
| --- | --- |
| Source | No primary source file. Built from DETORD.FILE |
| Language | DDS |
| Class | physical-file |
| Section | data-stores |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | NOT EVIDENCED |
| Build manifest | `QDDSSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QDDSSRC/Rules.mk`).

## Purpose

The sources read for this object do not state a business purpose (`QDDSSRC/Rules.mk`).

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| DETORD.FILE | [DETORD.FILE](./DETORD-FILE.md) | `QDDSSRC/Rules.mk` |

## Recipe

`cl "CPYF FROMFILE($(OBJLIB)/DETORD) TOFILE($(OBJLIB)/TMPDETORD) CRTFILE(*YES) MBROPT(*ADD)"`

## Composed from

This target has no source member of its own. The modules or programs below hold the logic.

| Target | Page |
| --- | --- |
| DETORD.FILE | [DETORD.FILE](./DETORD-FILE.md) |

No open question was raised from this page.

