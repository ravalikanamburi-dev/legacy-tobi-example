# ORD500C

## Identity

| Item | Value |
| --- | --- |
| Object | ORD500C (PGM) |
| Source | `QCLSRC/ORD500C.PGM.CLLE` |
| Category | clle |
| Lines | 12 |

## Purpose

Header comments are claims, not proof of behavior:

- `QCLSRC/ORD500C.PGM.CLLE:6` TCAT '.pdf')

## Entry and calls

Parameters written in the member. Status: Confirmed.

| Line | Name | Text |
| --- | --- | --- |
| 1 | ORD | PGM PARM(&ORD &PATH) |


Unresolved. The source member does not contain a statement of this kind.

## Files and interfaces

Unresolved. The source member does not contain a statement of this kind.

## Processing logic

CL commands below are in the order written in the member. That written order is Confirmed. It is not a claim about overrides that exist outside this member.

| Step | Line | Command |
| --- | --- | --- |
| 1 | 5 | CHGVAR     VAR(&FILENAME) VALUE('Custord' *CAT &ORD + |

## Business rules and branches

Unresolved. The source member does not contain a statement of this kind.

## Validations and calculations

Unresolved. The source member does not contain a statement of this kind.

## Data operations

Unresolved. No file declaration, file command, or SQL statement was extracted.

## Error handling

Unresolved. The source member does not contain a statement of this kind.

## Dependencies

Unresolved. No call, copy, or file name was extracted.

## Side effects

Unresolved. This member does not show an output, update, or SQL change statement in the extracted lines.

## Build assumptions

Unresolved. No control specification or binding directory was extracted from this member.

## Traceability

Statements above cite `QCLSRC/ORD500C.PGM.CLLE` and a line number. Indicators extracted: none.

## Evidence status

Confirmed for the statements extracted below. Behavior that is not written in this member remains Unresolved.

