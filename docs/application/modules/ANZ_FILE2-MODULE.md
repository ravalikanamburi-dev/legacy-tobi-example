# ANZ_FILE2 (MODULE)

|  |  |
| --- | --- |
| Source | `QSQLCSRC/ANZ_FILE2.SQLC` |
| Language | SQLC |
| Class | c-sql |
| Section | modules |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 37 from `.ibmi.json` |
| Build manifest | `QSQLCSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QSQLCSRC/Rules.mk`).

## Purpose

Header comments in the source: /**********************************************************************/ /*                                                                    */ /*                    INCLUDE-SECTION                                 */

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| ANZ_FILE2.SQLC | `QSQLCSRC/ANZ_FILE2.SQLC` | `QSQLCSRC/Rules.mk` |

## Build attributes

| Key | Value | Private | Evidence |
| --- | --- | --- | --- |
| INLINE | *ON *AUTO *NOLIMIT *NOLIMIT *YES | yes | `QSQLCSRC/Rules.mk` |
| DBGVIEW | *NONE | yes | `QSQLCSRC/Rules.mk` |
| OPTIMIZE | 40 | yes | `QSQLCSRC/Rules.mk` |

Source form in this member: fixed-form (`QSQLCSRC/ANZ_FILE2.SQLC`).

## Files

| File | Declaration | Evidence |
| --- | --- | --- |
| d | fd = stdout; | `QSQLCSRC/ANZ_FILE2.SQLC`:175 |
| close(fd); | fclose(fd); | `QSQLCSRC/ANZ_FILE2.SQLC`:204 |

## Copies and includes

| Name | Evidence |
| --- | --- |
| stdio.h | `QSQLCSRC/ANZ_FILE2.SQLC`:8 |
| recio.h | `QSQLCSRC/ANZ_FILE2.SQLC`:9 |
| stdlib.h | `QSQLCSRC/ANZ_FILE2.SQLC`:10 |
| string.h | `QSQLCSRC/ANZ_FILE2.SQLC`:11 |
| ctype.h | `QSQLCSRC/ANZ_FILE2.SQLC`:12 |
| sys/errno.h | `QSQLCSRC/ANZ_FILE2.SQLC`:13 |
| stdarg.h | `QSQLCSRC/ANZ_FILE2.SQLC`:15 |
| qmhsndm.h | `QSQLCSRC/ANZ_FILE2.SQLC`:16 |
| qmhsndpm.h | `QSQLCSRC/ANZ_FILE2.SQLC`:17 |
| qusec.h | `QSQLCSRC/ANZ_FILE2.SQLC`:18 |

## Embedded SQL

| Statement start | Evidence |
| --- | --- |
| exec sql include SQLCA; exec sql begin declare section; | `QSQLCSRC/ANZ_FILE2.SQLC`:31 |
| exec sql begin declare section; static unsigned char shortname[10], | `QSQLCSRC/ANZ_FILE2.SQLC`:33 |
| exec sql end declare section; | `QSQLCSRC/ANZ_FILE2.SQLC`:93 |
| EXEC SQL WHENEVER SQLERROR GO TO sql_error; declare_cursors(); | `QSQLCSRC/ANZ_FILE2.SQLC`:177 |
| EXEC SQL WHENEVER SQLERROR CONTINUE; } | `QSQLCSRC/ANZ_FILE2.SQLC`:208 |
| EXEC SQL OPEN GET_SHORT_NAME; EXEC SQL FETCH GET_SHORT_NAME INTO :shortname,:namequoted,:filetype; myPrintf("===============================================================\n"); | `QSQLCSRC/ANZ_FILE2.SQLC`:224 |
| EXEC SQL FETCH GET_SHORT_NAME INTO :shortname,:namequoted,:filetype; myPrintf("===============================================================\n"); if (SQLCODE == 0) /* Found the file name */ | `QSQLCSRC/ANZ_FILE2.SQLC`:225 |
| EXEC SQL CLOSE GET_SHORT_NAME; } | `QSQLCSRC/ANZ_FILE2.SQLC`:246 |
| EXEC SQL OPEN GET_LONG_NAME; EXEC SQL FETCH GET_LONG_NAME INTO :longname,:namequoted,:filetype; myPrintf("===============================================================\n"); | `QSQLCSRC/ANZ_FILE2.SQLC`:255 |
| EXEC SQL FETCH GET_LONG_NAME INTO :longname,:namequoted,:filetype; myPrintf("===============================================================\n"); if (SQLCODE == 0) /* Found the file name */ | `QSQLCSRC/ANZ_FILE2.SQLC`:256 |
| EXEC SQL CLOSE GET_LONG_NAME; memcpy(shortname, inputfilename, 10); | `QSQLCSRC/ANZ_FILE2.SQLC`:277 |
| EXEC SQL OPEN GET_VIEW_DFN; EXEC SQL FETCH GET_VIEW_DFN INTO :v_view_dfn; if (SQLCODE == 0) | `QSQLCSRC/ANZ_FILE2.SQLC`:290 |
| EXEC SQL FETCH GET_VIEW_DFN INTO :v_view_dfn; if (SQLCODE == 0) { | `QSQLCSRC/ANZ_FILE2.SQLC`:291 |
| EXEC SQL OPEN GET_VIEW_DEP_FILES; EXEC SQL FETCH GET_VIEW_DEP_FILES into :inputfilename,:libname; | `QSQLCSRC/ANZ_FILE2.SQLC`:305 |
| EXEC SQL FETCH GET_VIEW_DEP_FILES into :inputfilename,:libname; if (SQLCODE == 0) | `QSQLCSRC/ANZ_FILE2.SQLC`:306 |
| EXEC SQL FETCH GET_VIEW_DEP_FILES into :inputfilename,:libname; if (SQLCODE == 0) | `QSQLCSRC/ANZ_FILE2.SQLC`:319 |
| EXEC SQL CLOSE GET_VIEW_DEP_FILES; } EXEC SQL CLOSE GET_VIEW_DFN; | `QSQLCSRC/ANZ_FILE2.SQLC`:340 |
| EXEC SQL CLOSE GET_VIEW_DFN; } | `QSQLCSRC/ANZ_FILE2.SQLC`:342 |
| EXEC SQL OPEN GET_CST_NAME; EXEC SQL FETCH GET_CST_NAME INTO :cst_long_lib, :cst_long_name, :cst_lib, :cst_name, :namequoted, | `QSQLCSRC/ANZ_FILE2.SQLC`:353 |
| EXEC SQL FETCH GET_CST_NAME INTO :cst_long_lib, :cst_long_name, :cst_lib, :cst_name, :namequoted, :cst_type; | `QSQLCSRC/ANZ_FILE2.SQLC`:354 |
| EXEC SQL FETCH GET_CST_NAME INTO :cst_long_lib, :cst_long_name, :cst_lib, :cst_name, :namequoted, :cst_type; | `QSQLCSRC/ANZ_FILE2.SQLC`:379 |
| EXEC SQL CLOSE GET_CST_NAME; } | `QSQLCSRC/ANZ_FILE2.SQLC`:398 |
| EXEC SQL OPEN GET_CST_KEYS; EXEC SQL FETCH GET_CST_KEYS INTO :cst_key_order, :cst_key_name, :cst_key_long_name; | `QSQLCSRC/ANZ_FILE2.SQLC`:408 |
| EXEC SQL FETCH GET_CST_KEYS INTO :cst_key_order, :cst_key_name, :cst_key_long_name; if (SQLCODE == 0) | `QSQLCSRC/ANZ_FILE2.SQLC`:409 |
| EXEC SQL FETCH GET_CST_KEYS INTO :cst_key_order, :cst_key_name, :cst_key_long_name; if (SQLCODE == 0) | `QSQLCSRC/ANZ_FILE2.SQLC`:420 |
| EXEC SQL CLOSE GET_CST_KEYS; } | `QSQLCSRC/ANZ_FILE2.SQLC`:432 |
| EXEC SQL OPEN GET_IDX_NAME; EXEC SQL FETCH GET_IDX_NAME INTO :idx_name, :idx_lib, :idx_long_name, :idx_quoted, :idx_unq,:idx_key_flds; | `QSQLCSRC/ANZ_FILE2.SQLC`:443 |
| EXEC SQL FETCH GET_IDX_NAME INTO :idx_name, :idx_lib, :idx_long_name, :idx_quoted, :idx_unq,:idx_key_flds; if (SQLCODE == 0) | `QSQLCSRC/ANZ_FILE2.SQLC`:444 |
| EXEC SQL FETCH GET_IDX_NAME INTO :idx_name, :idx_lib, :idx_long_name, :idx_quoted, :idx_unq, :idx_key_flds; | `QSQLCSRC/ANZ_FILE2.SQLC`:478 |
| EXEC SQL CLOSE GET_IDX_NAME; } | `QSQLCSRC/ANZ_FILE2.SQLC`:496 |
| EXEC SQL OPEN GET_IDX_KEYS; EXEC SQL FETCH GET_IDX_KEYS INTO :idx_key_order, :idx_key_name, :idx_key_long_name, | `QSQLCSRC/ANZ_FILE2.SQLC`:506 |
| EXEC SQL FETCH GET_IDX_KEYS INTO :idx_key_order, :idx_key_name, :idx_key_long_name, :idx_key_quoted, :idx_key_pos, :idx_key_ord_seq; | `QSQLCSRC/ANZ_FILE2.SQLC`:507 |
| EXEC SQL FETCH GET_IDX_KEYS INTO :idx_key_order, :idx_key_name, :idx_key_long_name, :idx_key_quoted, :idx_key_pos, :idx_key_ord_seq; | `QSQLCSRC/ANZ_FILE2.SQLC`:528 |
| EXEC SQL CLOSE GET_IDX_KEYS; } | `QSQLCSRC/ANZ_FILE2.SQLC`:541 |
| EXEC SQL OPEN GET_VIEW_NAME; EXEC SQL FETCH GET_VIEW_NAME INTO :view_name, :view_lib, :view_long_name, :view_quoted; | `QSQLCSRC/ANZ_FILE2.SQLC`:552 |
| EXEC SQL FETCH GET_VIEW_NAME INTO :view_name, :view_lib, :view_long_name, :view_quoted; if (SQLCODE == 0) | `QSQLCSRC/ANZ_FILE2.SQLC`:553 |
| EXEC SQL FETCH GET_VIEW_NAME INTO :view_name, :view_lib, :view_long_name, :view_quoted; if (SQLCODE == 0) | `QSQLCSRC/ANZ_FILE2.SQLC`:574 |
| EXEC SQL CLOSE GET_VIEW_NAME; } | `QSQLCSRC/ANZ_FILE2.SQLC`:591 |
| EXEC SQL declare GET_SHORT_NAME cursor for SELECT DBXFIL,DBXLFQ, DBXATR FROM QSYS/QADBXREF WHERE DBXLIB = :libname | `QSQLCSRC/ANZ_FILE2.SQLC`:600 |
| EXEC SQL declare GET_LONG_NAME cursor for SELECT DBXLFI,DBXLFQ, DBXATR FROM QSYS/QADBXREF WHERE DBXLIB = :libname | `QSQLCSRC/ANZ_FILE2.SQLC`:605 |

## Procedures

| Name | Export | Evidence |
| --- | --- | --- |
| tr[0] |  | `QSQLCSRC/ANZ_FILE2.SQLC`:154 |
| tr[0] |  | `QSQLCSRC/ANZ_FILE2.SQLC`:158 |

## Error handling

| Statement | Evidence |
| --- | --- |
| if (SQLCODE == 0)                      /* Found the file name   */ | `QSQLCSRC/ANZ_FILE2.SQLC`:227 |
| if (SQLCODE == 0)                      /* Found the file name   */ | `QSQLCSRC/ANZ_FILE2.SQLC`:258 |
| if (SQLCODE == 0) | `QSQLCSRC/ANZ_FILE2.SQLC`:292 |
| if (SQLCODE == 0) | `QSQLCSRC/ANZ_FILE2.SQLC`:308 |
| if (SQLCODE == 0) | `QSQLCSRC/ANZ_FILE2.SQLC`:321 |
| if (SQLCODE == 0) | `QSQLCSRC/ANZ_FILE2.SQLC`:357 |
| if (SQLCODE == 0) | `QSQLCSRC/ANZ_FILE2.SQLC`:382 |
| if (SQLCODE == 0) | `QSQLCSRC/ANZ_FILE2.SQLC`:411 |
| if (SQLCODE == 0) | `QSQLCSRC/ANZ_FILE2.SQLC`:422 |
| if (SQLCODE == 0) | `QSQLCSRC/ANZ_FILE2.SQLC`:446 |
| if (SQLCODE == 0) | `QSQLCSRC/ANZ_FILE2.SQLC`:481 |
| if (SQLCODE == 0) | `QSQLCSRC/ANZ_FILE2.SQLC`:510 |
| if (SQLCODE == 0) | `QSQLCSRC/ANZ_FILE2.SQLC`:531 |
| if (SQLCODE == 0) | `QSQLCSRC/ANZ_FILE2.SQLC`:555 |
| if (SQLCODE == 0) | `QSQLCSRC/ANZ_FILE2.SQLC`:576 |

No open question was raised from this page.

