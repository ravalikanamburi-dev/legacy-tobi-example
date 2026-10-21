# ANZ_FILE2

## Identity

| Item | Value |
| --- | --- |
| Object | ANZ_FILE2 |
| Source | `QSQLCSRC/ANZ_FILE2.SQLC` |
| Category | c-sql |
| Lines | 669 |

## Purpose

Header comments are claims, not proof of behavior:

- `QSQLCSRC/ANZ_FILE2.SQLC:67` ptr,
- `QSQLCSRC/ANZ_FILE2.SQLC:124` /

## Entry and calls

Unresolved. No parameter declaration was extracted.

Unresolved. The source member does not contain a statement of this kind.

## Files and interfaces

Unresolved. The source member does not contain a statement of this kind.

## Processing logic

Unresolved. No subroutine, procedure, data structure, or command sequence was extracted. Read the member before assuming an execution order.

## Business rules and branches

Conditions copied from the member. A condition is not a business-rule name.

| Line | Condition |
| --- | --- |
| 135 | if (output == 'S' \|\| output == 'I') |
| 153 | if (ptr != NULL) |
| 157 | if (ptr != NULL) |
| 161 | if (output == 'I') |
| 169 | if (output == 'I') |
| 171 | if ((fd = fopen((const char *) ifsFile, "w")) == NULL) |
| 181 | if (file_length == 'L') |
| 183 | if (inputfilename[0] == '"') |
| 192 | if (done == 'N')                 /* Must have been a 'good' name */ |
| 194 | if (strncmp((const char *) filetype,"VW",2) == 0) |
| 203 | if (output == 'I') |
| 211 | if (output == 'S') |
| 227 | if (SQLCODE == 0)                      /* Found the file name   */ |
| 229 | if (namequoted == 'Y') |
| 258 | if (SQLCODE == 0)                      /* Found the file name   */ |
| 260 | if (namequoted == 'Y') |
| 292 | if (SQLCODE == 0) |
| 308 | if (SQLCODE == 0) |
| 321 | if (SQLCODE == 0) |
| 328 | if (found_dep_files == 'N') |
| 329 | if (namequoted == 'Y') |
| 357 | if (SQLCODE == 0) |
| 364 | if (namequoted == 'Y') |
| 382 | if (SQLCODE == 0) |
| 387 | if (found_constraints == 'N') |

## Validations and calculations

Embedded SQL text. The calculation is the statement itself.

| Line | Statement |
| --- | --- |
| 31 | exec sql include SQLCA; |
| 33 | exec sql begin declare section; |
| 93 | exec sql end declare section; |
| 177 | EXEC SQL WHENEVER SQLERROR GO TO sql_error; |
| 208 | EXEC SQL WHENEVER SQLERROR CONTINUE; |
| 224 | EXEC SQL OPEN  GET_SHORT_NAME; |
| 225 | EXEC SQL FETCH GET_SHORT_NAME INTO :shortname,:namequoted,:filetype; |
| 246 | EXEC SQL CLOSE GET_SHORT_NAME; |
| 255 | EXEC SQL OPEN  GET_LONG_NAME; |
| 256 | EXEC SQL FETCH GET_LONG_NAME INTO :longname,:namequoted,:filetype; |
| 277 | EXEC SQL CLOSE GET_LONG_NAME; |
| 290 | EXEC SQL OPEN  GET_VIEW_DFN; |
| 291 | EXEC SQL FETCH GET_VIEW_DFN INTO :v_view_dfn; |
| 305 | EXEC SQL OPEN  GET_VIEW_DEP_FILES; |
| 306 | EXEC SQL FETCH GET_VIEW_DEP_FILES into |
| 319 | EXEC SQL FETCH GET_VIEW_DEP_FILES into |
| 340 | EXEC SQL CLOSE GET_VIEW_DEP_FILES; |
| 342 | EXEC SQL CLOSE GET_VIEW_DFN; |
| 353 | EXEC SQL OPEN  GET_CST_NAME; |
| 354 | EXEC SQL FETCH GET_CST_NAME INTO |
| 379 | EXEC SQL FETCH GET_CST_NAME INTO |
| 398 | EXEC SQL CLOSE GET_CST_NAME; |
| 408 | EXEC SQL OPEN  GET_CST_KEYS; |
| 409 | EXEC SQL FETCH GET_CST_KEYS INTO |
| 420 | EXEC SQL FETCH GET_CST_KEYS INTO |
| 432 | EXEC SQL CLOSE GET_CST_KEYS; |
| 443 | EXEC SQL OPEN  GET_IDX_NAME; |
| 444 | EXEC SQL FETCH GET_IDX_NAME INTO |
| 478 | EXEC SQL FETCH GET_IDX_NAME INTO |
| 496 | EXEC SQL CLOSE GET_IDX_NAME; |
| 506 | EXEC SQL OPEN  GET_IDX_KEYS; |
| 507 | EXEC SQL FETCH GET_IDX_KEYS INTO |
| 528 | EXEC SQL FETCH GET_IDX_KEYS INTO |
| 541 | EXEC SQL CLOSE GET_IDX_KEYS; |
| 552 | EXEC SQL OPEN  GET_VIEW_NAME; |
| 553 | EXEC SQL FETCH GET_VIEW_NAME INTO |
| 574 | EXEC SQL FETCH GET_VIEW_NAME INTO |
| 591 | EXEC SQL CLOSE GET_VIEW_NAME; |
| 600 | EXEC SQL declare GET_SHORT_NAME cursor for |
| 605 | EXEC SQL declare GET_LONG_NAME cursor for |
| 610 | EXEC SQL declare GET_VIEW_DFN cursor for |
| 616 | EXEC SQL declare GET_VIEW_DEP_FILES cursor for |
| 621 | EXEC SQL declare GET_CST_NAME cursor for |
| 627 | EXEC SQL declare GET_CST_KEYS cursor for |
| 638 | EXEC SQL declare GET_IDX_NAME cursor for |
| 647 | EXEC SQL declare GET_IDX_KEYS cursor for |
| 658 | EXEC SQL declare GET_VIEW_NAME cursor for |

## Data operations

SQL statements are listed under Validations and calculations. Status: Confirmed as statement text.

## Error handling

Unresolved. The source member does not contain a statement of this kind.

## Dependencies

Unresolved. No call, copy, or file name was extracted.

## Side effects

Unresolved. This member does not show an output, update, or SQL change statement in the extracted lines.

## Build assumptions

| Line | Control text |
| --- | --- |
| 213 | char dummy[10]; |
| 613 | WHERE DBXLIB = :libname |
| 619 | WHERE DBFFDP = :shortname; |
| 650 | WHERE DBILIB = :idx_lib |

## Traceability

Statements above cite `QSQLCSRC/ANZ_FILE2.SQLC` and a line number. Indicators extracted: none.

## Evidence status

Confirmed for the statements extracted below. Behavior that is not written in this member remains Unresolved.

