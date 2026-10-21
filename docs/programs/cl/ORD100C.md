# ORD100C

## Identity

| Item | Value |
| --- | --- |
| Object | ORD100C (PGM) |
| Source | `QCLSRC/ORD100C.PGM.CLLE` |
| Category | clle |
| Lines | 13 |

## Purpose

Unresolved. No menu label and no header comment state a purpose for this member.

## Entry and calls

Unresolved. The source member does not contain a statement of this kind.

## Files and interfaces

Unresolved. The source member does not contain a statement of this kind.

## Processing logic

Commands written in the member:

| Line | Command |
| --- | --- |
| 4 | INCLUDE    SRCSTMF('included.clle') |
| 5 | DLTF       FILE(QTEMP/DETORD) |
| 6 | MONMSG     MSGID(CPF0000) |
| 7 | CRTDUPOBJ  OBJ(DETORD) FROMLIB(*LIBL) OBJTYPE(*FILE) + |
| 10 | OVRDBF     FILE(TMPDETORD) TOFILE(QTEMP/DETORD) |
| 11 | CRTORD     CUID(&CUID) |

## Business rules and branches

Unresolved. The source member does not contain a statement of this kind.

## Validations and calculations

Unresolved. The source member does not contain a statement of this kind.

## Data operations

Unresolved. No file declaration or SQL statement was extracted.

## Error handling

| Line | Statement |
| --- | --- |
| 6 | MONMSG     MSGID(CPF0000) |

## Dependencies

Unresolved. No call, copy, or file name was extracted.

## Side effects

Unresolved. This member does not show an output, update, or SQL change statement in the extracted lines.

## Build assumptions

Unresolved. No control specification or binding directory was extracted from this member.

## Traceability

Statements above cite `QCLSRC/ORD100C.PGM.CLLE` and a line number. Indicators extracted: none.

## Evidence status

Confirmed for the statements extracted below. Behavior that is not written in this member remains Unresolved.

