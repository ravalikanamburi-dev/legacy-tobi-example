---
name: tobi-makei
description: >-
  Build and extend the tobi-example IBM i project with makei, iproj.json, and
  Rules.mk. Use when adding or compiling programs, modules, files, commands,
  service programs, SQL objects, or any source in this repository, or when the
  user mentions makei, Rules.mk, iproj.json, CCSID, or IBM i object dependencies.
---

# tobi-example makei build

This repo is a Code for IBM i / Bob / makei project. Object names are at most 10 characters. Build with `makei`, not hand-written compile commands.

## Project settings

`iproj.json` is the project root metadata:

- `includePath`: `includes`, `QPROTOSRC` (resolved by `/copy` and `/include`)
- `objlib` and `curlib`: `&lib1` (current library at build time)
- `preUsrlibl`: `&lib1`, `RPGUNIT`, `QDEVTOOLS`
- `tgtCcsid` in `.ibmi.json` overrides per directory. Do not change a directory CCSID to match a single member.

| Directory | tgtCcsid |
|-----------|----------|
| repository root | 37 |
| `QRPGLESRC`, `QSQLSRC`, `QSRVSRC`, `QPROTOSRC` | 297 |
| `QCLSRC`, `QCMDSRC`, `functionsVAT` | 500 |
| `QTESTSRC` (`testing.json`) | `*JOB` |

## Where source goes

Root `Rules.mk` lists buildable `SUBDIRS`. `QPROTOSRC` and `includes` are copy members only (no object). `QTESTSRC` is RPGUnit and is not a makei subdir.

| Directory | Contents |
|-----------|----------|
| `QRPGLESRC` | ILE RPG programs and `nomain` modules (`.rpgle`, `.sqlrpgle`) |
| `QRPGSRC` | OPM RPG (`.rpg`, `.sqlrpg`) |
| `QCLSRC` | CLLE / CLP |
| `QDDSSRC` | PF, LF, DSPF, PRTF |
| `QSQLSRC` | procedures, UDFs, triggers, tables, views, sequences |
| `QSRVSRC` | binder source (`*.bnd`) for service programs |
| `QILESRVSRC` | `CRTSRVPGM` scripts (`*.ilesrvpgm`) when not using a binder listing |
| `QILESRC` | `CRTPGM` scripts (`*.ilepgm`) for multi-module programs |
| `QBNDSRC` | `SAMPLE.BNDDIR` |
| `QCMDSRC` | commands |
| `QMSGSRC` | message files |
| `QPNLSRC` | menus and panel groups |
| `QTRGSRC` | `ADDPFTRG` scripts (`.systrg`) |
| `QDTASRC` | data areas and data queues |
| `common` | reference PF `SAMREF` |
| `functionsVAT` | VAT service program, module, and `VATDEF` together |
| `QCBLSRC`, `QCSRC`, `QCPPSRC`, `QSQLCSRC`, `QSQLCPPSRC` | COBOL, C, C++ |

## File names

makei derives the object from the file name. Prefer the existing shape in the same directory.

- `ORD100.PGM.RPGLE` — object `ORD100`, type from the middle token, language from the extension
- `ART200-Work_with_article.PGM.SQLRPGLE` — same, with a description between hyphens. The description is not the object name
- `CUS300.RPGLE` — object name is the stem; `Rules.mk` supplies the type (`CUS300.MODULE`)
- `CUSTOMER.RPGLEINC` — copy member, no object. Do not assign an object type

`QPROTOSRC` copy members stay `.rpgleinc`. Renaming them would break `/copy`.

## Rules.mk

One target per object. The first prerequisite is the source file; the rest are dependencies. List every file, service program, and binding directory the object needs so the build order is correct.

```
ORD100.PGM: ORD100.PGM.RPGLE TMPDETORD.FILE SAMPLE.BNDDIR VATDEF.FILE FVAT.SRVPGM ORDER.FILE ORD100D.FILE
ART300.MODULE: ART300-Function_Article.RPGLE ARTICLE1.FILE
FCOUNTRY.SRVPGM: FCOUNTRY.BND COU300.MODULE COU301.MODULE
```

Attributes use a second rule and do not add a dependency. `private` keeps the attribute off the public dependency graph. `:=` and `::=` are used for values that must not be expanded early.

```
FCOUNTRY.SRVPGM: TEXT = Functions Country
FVAT.SRVPGM: private TEXT = Functions VAT
VAT300.MODULE: private TEXT := bound into FVAT.SRVPGM
VAT300.MODULE: private DBGVIEW ::= *SOURCE
PUTIFSCHK.PGM: private ACTGRP := *CALLER
CUST.FILE: private MBR = *NONE
CRTORD.CMD: CMD_PGM=ORD100
```

A custom recipe is a tab-indented `cl` command under the target:

```
TMPDETORD.FILE: DETORD.FILE
	cl "CPYF FROMFILE($(OBJLIB)/DETORD) TOFILE($(OBJLIB)/TMPDETORD) CRTFILE(*YES) MBROPT(*ADD)"
```

`CRTPGM` / `CRTSRVPGM` scripts use `&O/&N` for library and object name (`QILESRC`, `QILESRVSRC`).

CL text and object type live in the member, not only in `Rules.mk`:

```
/*%%TEXT Create new order with parameter */
/*%%OBJECT-TYPE *PGM                     */
```

SQL text is a `LABEL ON` and is declared in the script header:

```
--%METADATA
-- %TEXT Update Customer Order Quantity
--%EMETADATA
```

Reference fields come from `common/SAMREF.PF`. Physical files use `REF(SAMREF)` and `REFFLD`. A file in another directory is written `$(d)/filename` only inside that directory's own `Rules.mk` (see `common/Rules.mk`).

## Build

From the project actions (PASE, deploy first, `err=*EVENTF`):

- Full build: `lib1=&CURLIB makei build`
- One member: `makei compile -f &BASENAME -e lib1=&CURLIB`

`iproj.json` equivalents are `makei build`, `makei b -t {object}`, and `makei c -f {filename}`. Event files and logs download to `.evfevent/` and `.logs/`.
