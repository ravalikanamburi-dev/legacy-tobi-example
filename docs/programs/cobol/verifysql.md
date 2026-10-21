# verifysql

## Identity

| Item | Value |
| --- | --- |
| Object | verifysql |
| Source | `QCBLSRC/verifysql.sqlcblle` |
| Category | cobol-sql |
| Lines | 64 |

## Purpose

Header comments are claims, not proof of behavior:

- `QCBLSRC/verifysql.sqlcblle:22` 
- `QCBLSRC/verifysql.sqlcblle:26` 

## Entry and calls

Unresolved. The source member does not contain a statement of this kind.

## Files and interfaces

Unresolved. The source member does not contain a statement of this kind.

## Processing logic

Commands written in the member:

| Line | Command |
| --- | --- |
| 24 | INCLUDE SQLCA |

## Business rules and branches

Conditions copied from the member. A condition is not a business-rule name.

| Line | Condition |
| --- | --- |
| 34 | IF A NOT = 5 OR B NOT = 2 OR D NOT = -5 OR C NOT = 5 |
| 43 | IF C NOT = 14 |
| 49 | IF C NOT = 8 |
| 55 | IF C NOT = 2 THEN |
| 60 | IF ERROR-COUNT = 0 THEN |

## Validations and calculations

Embedded SQL text. The calculation is the statement itself.

| Line | Statement |
| --- | --- |
| 23 | EXEC SQL |
| 29 | EXEC SQL SET :A = 5 END-EXEC. |
| 30 | EXEC SQL SET :B = 2 END-EXEC. |
| 31 | EXEC SQL SET :D = -5 END-EXEC. |

## Data operations

SQL statements are listed under Validations and calculations.

## Error handling

Unresolved. The source member does not contain a statement of this kind.

## Dependencies

Unresolved. No call, copy, or file name was extracted.

## Side effects

Unresolved. This member does not show an output, update, or SQL change statement in the extracted lines.

## Build assumptions

Unresolved. No control specification or binding directory was extracted from this member.

## Traceability

Statements above cite `QCBLSRC/verifysql.sqlcblle` and a line number. Indicators extracted: none.

## Evidence status

Confirmed for the statements extracted below. Behavior that is not written in this member remains Unresolved.

