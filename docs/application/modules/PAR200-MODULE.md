# PAR200 (MODULE)

|  |  |
| --- | --- |
| Source | `QRPGLESRC/PAR200.RPGLE` |
| Language | RPGLE |
| Class | ile-rpg |
| Section | modules |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 297 from `QRPGLESRC/.ibmi.json` |
| Build manifest | `QRPGLESRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QRPGLESRC/Rules.mk`).

## Purpose

Menu `QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC` option 20 labels this "Work with Parameters" and runs `cmd call par200`.

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| PAR200.RPGLE | `QRPGLESRC/PAR200.RPGLE` | `QRPGLESRC/Rules.mk` |

Source form in this member: fixed-form (`QRPGLESRC/PAR200.RPGLE`).

## Files

| File | Declaration | Evidence |
| --- | --- | --- |
| parameter | fparameter uf a e           k disk | `QRPGLESRC/PAR200.RPGLE`:2 |
| par200d | fpar200d   cf   e             workstn F                                     indds(indds) F                                     sfile(sfl01:rrn01) F                                     Infds(Info) | `QRPGLESRC/PAR200.RPGLE`:3 |

## Subroutines

Names appear in source order. That order is not an execution trace.

| Subroutine | Nearby comment | Evidence |
| --- | --- | --- |
| pnl01 | //- Subfiles  01 Subroutines --------------------------------------  --- | `QRPGLESRC/PAR200.RPGLE`:61 |
| s01prp | //--- Clear Subfile  ---------------------------------------------------- | `QRPGLESRC/PAR200.RPGLE`:78 |
| s01lod | //--- Load Subfile  ----------------------------------------------------- | `QRPGLESRC/PAR200.RPGLE`:89 |
| s01rst | //--- restore last read ------------------------------------------------- | `QRPGLESRC/PAR200.RPGLE`:107 |
| s01sav | //--- Save last read ------------------------------------------------- | `QRPGLESRC/PAR200.RPGLE`:112 |
| s01dsp | //--- Display Subfile  -------------------------------------------------- | `QRPGLESRC/PAR200.RPGLE`:118 |
| s01key | //--- Command Keys  ----------------------------------------------------- | `QRPGLESRC/PAR200.RPGLE`:130 |
| s01chk | //--- Check Subfile  ---------------------------------------------------- | `QRPGLESRC/PAR200.RPGLE`:150 |
| s01act | //--- action Subfile  --------------------------------------------------- | `QRPGLESRC/PAR200.RPGLE`:172 |
| pnl02 | //--- Format 02 Subroutines ------------------------------------     --- | `QRPGLESRC/PAR200.RPGLE`:197 |
| S02prp | //--- clear & Load ------------------------------------------------------ | `QRPGLESRC/PAR200.RPGLE`:213 |
| S02dsp | //--- Display  ---------------------------------------------------------- | `QRPGLESRC/PAR200.RPGLE`:218 |
| S02key | //--- command Keys  ----------------------------------------------------- | `QRPGLESRC/PAR200.RPGLE`:223 |
| S02chk | //--- check ------------------------------------------------------------- | `QRPGLESRC/PAR200.RPGLE`:236 |
| S02act | //--- Action ------------------------------------------------------------ | `QRPGLESRC/PAR200.RPGLE`:241 |
| pnl03 | //--- Format 03 Subroutines ------------------------------------     --- | `QRPGLESRC/PAR200.RPGLE`:249 |
| S03prp | //--- clear & Load ------------------------------------------------------ | `QRPGLESRC/PAR200.RPGLE`:265 |
| S03dsp | //--- Display  ---------------------------------------------------------- | `QRPGLESRC/PAR200.RPGLE`:270 |
| S03key | //--- command Keys  ----------------------------------------------------- | `QRPGLESRC/PAR200.RPGLE`:275 |
| S03chk | //--- check ------------------------------------------------------------- | `QRPGLESRC/PAR200.RPGLE`:288 |
| S03act | //--- Action ------------------------------------------------------------ | `QRPGLESRC/PAR200.RPGLE`:298 |
| pnl00 | //--------END SUBROUTINE ---------------------------------- | `QRPGLESRC/PAR200.RPGLE`:308 |

## Panel or step tests

Only the conditions written in this member are listed.

| Condition | Evidence |
| --- | --- |
| when panel = 1; | `QRPGLESRC/PAR200.RPGLE`:51 |
| when panel = 2; | `QRPGLESRC/PAR200.RPGLE`:53 |
| when panel = 3; | `QRPGLESRC/PAR200.RPGLE`:55 |
| when step01 = prp ; | `QRPGLESRC/PAR200.RPGLE`:63 |
| when step01 = lod ; | `QRPGLESRC/PAR200.RPGLE`:65 |
| when step01 = dsp ; | `QRPGLESRC/PAR200.RPGLE`:67 |
| when step01 = key ; | `QRPGLESRC/PAR200.RPGLE`:69 |
| when step01 = chk ; | `QRPGLESRC/PAR200.RPGLE`:71 |
| when step01 = act ; | `QRPGLESRC/PAR200.RPGLE`:73 |
| when step02 = prp ; | `QRPGLESRC/PAR200.RPGLE`:199 |
| when step02 = dsp ; | `QRPGLESRC/PAR200.RPGLE`:201 |
| when step02 = key ; | `QRPGLESRC/PAR200.RPGLE`:203 |
| when step02 = chk ; | `QRPGLESRC/PAR200.RPGLE`:205 |
| when step02 = act ; | `QRPGLESRC/PAR200.RPGLE`:207 |
| when step03 = prp ; | `QRPGLESRC/PAR200.RPGLE`:251 |
| when step03 = dsp ; | `QRPGLESRC/PAR200.RPGLE`:253 |
| when step03 = key ; | `QRPGLESRC/PAR200.RPGLE`:255 |
| when step03 = chk ; | `QRPGLESRC/PAR200.RPGLE`:257 |
| when step03 = act ; | `QRPGLESRC/PAR200.RPGLE`:259 |

## Indicator declarations

| Declaration | Evidence |
| --- | --- |
| D  help                   1      1n | `QRPGLESRC/PAR200.RPGLE`:9 |
| D  exit                   3      3n | `QRPGLESRC/PAR200.RPGLE`:10 |
| D  prompt                 4      4n | `QRPGLESRC/PAR200.RPGLE`:11 |
| D  refresh                5      5n | `QRPGLESRC/PAR200.RPGLE`:12 |
| D  create                 6      6n | `QRPGLESRC/PAR200.RPGLE`:13 |
| D  cancel                12     12n | `QRPGLESRC/PAR200.RPGLE`:14 |
| D  morekeys              24     24n | `QRPGLESRC/PAR200.RPGLE`:15 |
| D  pagedown              25     25n | `QRPGLESRC/PAR200.RPGLE`:16 |
| D  sflclr                30     30n | `QRPGLESRC/PAR200.RPGLE`:17 |
| D  sfldsp                31     31n | `QRPGLESRC/PAR200.RPGLE`:18 |
| D  sfldspctl             32     32n | `QRPGLESRC/PAR200.RPGLE`:19 |
| D  sflnxtchg             33     33n | `QRPGLESRC/PAR200.RPGLE`:20 |
| D  dspatr_ri             34     34n | `QRPGLESRC/PAR200.RPGLE`:21 |
| D  sflmsg                35     35n | `QRPGLESRC/PAR200.RPGLE`:22 |
| D  ErrDuplicate          40     40n | `QRPGLESRC/PAR200.RPGLE`:23 |
| D  sflend                80     80n | `QRPGLESRC/PAR200.RPGLE`:24 |

## Key tests

| Test | Evidence |
| --- | --- |
| when exit; | `QRPGLESRC/PAR200.RPGLE`:132 |
| when cancel; | `QRPGLESRC/PAR200.RPGLE`:135 |
| when pagedown; | `QRPGLESRC/PAR200.RPGLE`:138 |
| when refresh; | `QRPGLESRC/PAR200.RPGLE`:140 |
| when exit; | `QRPGLESRC/PAR200.RPGLE`:225 |
| when cancel; | `QRPGLESRC/PAR200.RPGLE`:228 |
| when exit; | `QRPGLESRC/PAR200.RPGLE`:277 |
| when cancel; | `QRPGLESRC/PAR200.RPGLE`:280 |

No open question was raised from this page.

