---
name: tobi-rpgle
description: >-
  Write ILE RPG and SQLRPGLE in the tobi-example IBM i application using its
  display-program state machine, service-program exports, and copy members.
  Use when adding or changing RPGLE, SQLRPGLE, prototypes, binder source,
  display files, or service programs in this repository.
---

# tobi-example RPGLE

Match the style of the file you are editing. Interactive programs are fixed-form with a free-form calculation section. New RPGUnit tests are fully free (`**free`); do not convert existing fixed-form programs.

## Programs that show a display

Header and files:

```
h dftactgrp(*no) bnddir('SAMPLE')

farticle1  uf a e           k disk
fart200d   cf   e             workstn
F                                     indds(indds)
F                                     sfile(sfl01:rrn01)
F                                     Infds(Info)
```

Copy prototypes by member name (`/copy customer`). The include path is `QPROTOSRC` and `includes`.

Call another program with `extpgm` and `like` the database field:

```
d providers       pr                  extpgm('ART201')
d  id                                 like(arid)
```

### Indicator data structure

Use these positions. Application errors start at 40.

| Name | Position |
|------|----------|
| help | 1 |
| exit | 3 |
| prompt | 4 |
| refresh | 5 |
| create / Create | 6 |
| confirm | 8 |
| cancel | 12 |
| morekeys | 24 |
| pagedown | 25 |
| change | 27 |
| sflclr, sfldsp, sfldspctl, sflnxtchg, dspatr_ri, sflmsg, sflmsg2 | 30–36 |
| sflend | 80 |

Workstation feedback area: `lrrn` at `378`–`379i 0` in the file information data structure.

### Panel and step machine

`panel` selects the screen (`pnl01`, `pnl02`, …, `pnl00` for exit). Each panel has `step01` (or `step02`, …) and runs one subroutine:

| Step constant | Subroutine suffix | Role |
|---------------|-------------------|------|
| `prp` | `s01prp` | Clear the subfile (`sflclr`), reset totals, set step to `lod` |
| `lod` | `s01lod` | Read the file and `write` subfile records |
| `dsp` | `s01dsp` | `exfmt` the control record |
| `key` | `s01key` | Handle function keys |
| `chk` | `s01chk` | Validate |
| `act` | `s01act` | Update files |

Keep that order. A subfile relative record is `rrn01` (`5i 0`).

## Service programs

Business logic is a `nomain` module in `QRPGLESRC` (for example `CUS300.RPGLE`):

- `h nomain`
- `/copy` the prototype member
- One exported procedure per function, fixed-form `P`/`D` specs with `/free` inside
- Open files with `usropn` when the module shares them across procedures
- Export names match the prototype (`GetCusName`, `ExistCus`, `IsCusDeleted`)

Prototypes live in `QPROTOSRC/*.RPGLEINC` as fixed-form `PR` specs. Parameters are passed by `value`. Return lengths match the physical-file fields.

Binder source is `QSRVSRC/F*.BND`. Export the uppercase symbol and keep `SIGNATURE('V1')` unless the user asks for a new signature:

```
STRPGMEXP PGMLVL(*CURRENT) SIGNATURE('V1')
  EXPORT SYMBOL('GETCUSNAME')
ENDPGMEXP
```

Wire it in `QSRVSRC/Rules.mk` (`FCUSTOMER.SRVPGM: FCUSTOMER.BND CUS300.MODULE CUS301.MODULE`) and add the service program to `QBNDSRC` `SAMPLE.BNDDIR` if programs should find it through the binding directory.

`functionsVAT` is the exception: module, binder source, prototype, and `VATDEF` are built in that directory, and the module sets `DBGVIEW` to `*SOURCE`.

Programs that are more than one module use a `QILESRC/*.ILEPGM` `CRTPGM` with `ENTMOD`, `BNDSRVPGM`, and `ACTGRP(QILE)`. Service programs that export everything use `QILESRVSRC/*.ILESRVPGM` with `EXPORT(*ALL)` and `ACTGRP(*CALLER)` instead of a binder listing.

## Files

Physical files in `QDDSSRC` reference `SAMREF` (`REF(SAMREF)`, `REFFLD(...)`). Record and field prefixes are two letters of the entity (`OR` order header, `OD` order detail, `CU` customer, `AR` article). Deleted rows use a one-character delete flag (`CUDEL`, `VATDEL`) with `'X'` meaning deleted.

`ORDER` is an SQL reserved word. Quote it as `"ORDER"` in SQL statements.
