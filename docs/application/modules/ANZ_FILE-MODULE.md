# ANZ_FILE (MODULE)

|  |  |
| --- | --- |
| Source | `QSQLCPPSRC/ANZ_FILE.SQLCPP` |
| Language | SQLCPP |
| Class | cpp-sql |
| Section | modules |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 37 from `.ibmi.json` |
| Build manifest | `QSQLCPPSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QSQLCPPSRC/Rules.mk`).

## Purpose

Header comments in the source: /**********************************************************************/ /*                                                                    */ /*                    INCLUDE-SECTION                                 */

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| ANZ_FILE.SQLCPP | `QSQLCPPSRC/ANZ_FILE.SQLCPP` | `QSQLCPPSRC/Rules.mk` |

## Build attributes

| Key | Value | Private | Evidence |
| --- | --- | --- | --- |
| OPTION | *SYS *EVENTF | yes | `QSQLCPPSRC/Rules.mk` |

Source form in this member: fixed-form (`QSQLCPPSRC/ANZ_FILE.SQLCPP`).

## Files

| File | Declaration | Evidence |
| --- | --- | --- |
| d | fd = stdout; | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:175 |
| close(fd); | fclose(fd); | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:204 |

## Copies and includes

| Name | Evidence |
| --- | --- |
| stdio.h | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:8 |
| recio.h | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:9 |
| stdlib.h | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:10 |
| string.h | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:11 |
| ctype.h | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:12 |
| sys/errno.h | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:13 |
| stdarg.h | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:15 |
| qmhsndm.h | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:16 |
| qmhsndpm.h | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:17 |
| qusec.h | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:18 |

## Embedded SQL

| Statement start | Evidence |
| --- | --- |
| exec sql include SQLCA; exec sql begin declare section; | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:31 |
| exec sql begin declare section; static unsigned char shortname[10], | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:33 |
| exec sql end declare section; | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:93 |
| EXEC SQL WHENEVER SQLERROR GO TO sql_error; declare_cursors(); | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:177 |
| EXEC SQL WHENEVER SQLERROR CONTINUE; } | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:208 |
| EXEC SQL OPEN GET_SHORT_NAME; EXEC SQL FETCH GET_SHORT_NAME INTO :shortname,:namequoted,:filetype; myPrintf("===============================================================\n"); | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:224 |
| EXEC SQL FETCH GET_SHORT_NAME INTO :shortname,:namequoted,:filetype; myPrintf("===============================================================\n"); if (SQLCODE == 0) /* Found the file name */ | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:225 |
| EXEC SQL CLOSE GET_SHORT_NAME; } | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:246 |
| EXEC SQL OPEN GET_LONG_NAME; EXEC SQL FETCH GET_LONG_NAME INTO :longname,:namequoted,:filetype; myPrintf("===============================================================\n"); | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:255 |
| EXEC SQL FETCH GET_LONG_NAME INTO :longname,:namequoted,:filetype; myPrintf("===============================================================\n"); if (SQLCODE == 0) /* Found the file name */ | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:256 |
| EXEC SQL CLOSE GET_LONG_NAME; memcpy(shortname, inputfilename, 10); | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:277 |
| EXEC SQL OPEN GET_VIEW_DFN; EXEC SQL FETCH GET_VIEW_DFN INTO :v_view_dfn; if (SQLCODE == 0) | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:290 |
| EXEC SQL FETCH GET_VIEW_DFN INTO :v_view_dfn; if (SQLCODE == 0) { | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:291 |
| EXEC SQL OPEN GET_VIEW_DEP_FILES; EXEC SQL FETCH GET_VIEW_DEP_FILES into :inputfilename,:libname; | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:305 |
| EXEC SQL FETCH GET_VIEW_DEP_FILES into :inputfilename,:libname; if (SQLCODE == 0) | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:306 |
| EXEC SQL FETCH GET_VIEW_DEP_FILES into :inputfilename,:libname; if (SQLCODE == 0) | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:319 |
| EXEC SQL CLOSE GET_VIEW_DEP_FILES; } EXEC SQL CLOSE GET_VIEW_DFN; | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:340 |
| EXEC SQL CLOSE GET_VIEW_DFN; } | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:342 |
| EXEC SQL OPEN GET_CST_NAME; EXEC SQL FETCH GET_CST_NAME INTO :cst_long_lib, :cst_long_name, :cst_lib, :cst_name, :namequoted, | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:353 |
| EXEC SQL FETCH GET_CST_NAME INTO :cst_long_lib, :cst_long_name, :cst_lib, :cst_name, :namequoted, :cst_type; | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:354 |
| EXEC SQL FETCH GET_CST_NAME INTO :cst_long_lib, :cst_long_name, :cst_lib, :cst_name, :namequoted, :cst_type; | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:379 |
| EXEC SQL CLOSE GET_CST_NAME; } | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:398 |
| EXEC SQL OPEN GET_CST_KEYS; EXEC SQL FETCH GET_CST_KEYS INTO :cst_key_order, :cst_key_name, :cst_key_long_name; | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:408 |
| EXEC SQL FETCH GET_CST_KEYS INTO :cst_key_order, :cst_key_name, :cst_key_long_name; if (SQLCODE == 0) | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:409 |
| EXEC SQL FETCH GET_CST_KEYS INTO :cst_key_order, :cst_key_name, :cst_key_long_name; if (SQLCODE == 0) | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:420 |
| EXEC SQL CLOSE GET_CST_KEYS; } | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:432 |
| EXEC SQL OPEN GET_IDX_NAME; EXEC SQL FETCH GET_IDX_NAME INTO :idx_name, :idx_lib, :idx_long_name, :idx_quoted, :idx_unq,:idx_key_flds; | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:443 |
| EXEC SQL FETCH GET_IDX_NAME INTO :idx_name, :idx_lib, :idx_long_name, :idx_quoted, :idx_unq,:idx_key_flds; if (SQLCODE == 0) | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:444 |
| EXEC SQL FETCH GET_IDX_NAME INTO :idx_name, :idx_lib, :idx_long_name, :idx_quoted, :idx_unq, :idx_key_flds; | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:478 |
| EXEC SQL CLOSE GET_IDX_NAME; } | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:496 |
| EXEC SQL OPEN GET_IDX_KEYS; EXEC SQL FETCH GET_IDX_KEYS INTO :idx_key_order, :idx_key_name, :idx_key_long_name, | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:506 |
| EXEC SQL FETCH GET_IDX_KEYS INTO :idx_key_order, :idx_key_name, :idx_key_long_name, :idx_key_quoted, :idx_key_pos, :idx_key_ord_seq; | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:507 |
| EXEC SQL FETCH GET_IDX_KEYS INTO :idx_key_order, :idx_key_name, :idx_key_long_name, :idx_key_quoted, :idx_key_pos, :idx_key_ord_seq; | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:528 |
| EXEC SQL CLOSE GET_IDX_KEYS; } | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:541 |
| EXEC SQL OPEN GET_VIEW_NAME; EXEC SQL FETCH GET_VIEW_NAME INTO :view_name, :view_lib, :view_long_name, :view_quoted; | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:552 |
| EXEC SQL FETCH GET_VIEW_NAME INTO :view_name, :view_lib, :view_long_name, :view_quoted; if (SQLCODE == 0) | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:553 |
| EXEC SQL FETCH GET_VIEW_NAME INTO :view_name, :view_lib, :view_long_name, :view_quoted; if (SQLCODE == 0) | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:574 |
| EXEC SQL CLOSE GET_VIEW_NAME; } | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:591 |
| EXEC SQL declare GET_SHORT_NAME cursor for SELECT DBXFIL,DBXLFQ, DBXATR FROM QSYS/QADBXREF WHERE DBXLIB = :libname | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:600 |
| EXEC SQL declare GET_LONG_NAME cursor for SELECT DBXLFI,DBXLFQ, DBXATR FROM QSYS/QADBXREF WHERE DBXLIB = :libname | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:605 |

## Procedures

| Name | Export | Evidence |
| --- | --- | --- |
| tr[0] |  | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:154 |
| tr[0] |  | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:158 |

## Error handling

| Statement | Evidence |
| --- | --- |
| if (SQLCODE == 0)                      /* Found the file name   */ | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:227 |
| if (SQLCODE == 0)                      /* Found the file name   */ | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:258 |
| if (SQLCODE == 0) | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:292 |
| if (SQLCODE == 0) | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:308 |
| if (SQLCODE == 0) | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:321 |
| if (SQLCODE == 0) | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:357 |
| if (SQLCODE == 0) | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:382 |
| if (SQLCODE == 0) | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:411 |
| if (SQLCODE == 0) | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:422 |
| if (SQLCODE == 0) | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:446 |
| if (SQLCODE == 0) | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:481 |
| if (SQLCODE == 0) | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:510 |
| if (SQLCODE == 0) | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:531 |
| if (SQLCODE == 0) | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:555 |
| if (SQLCODE == 0) | `QSQLCPPSRC/ANZ_FILE.SQLCPP`:576 |

No open question was raised from this page.

