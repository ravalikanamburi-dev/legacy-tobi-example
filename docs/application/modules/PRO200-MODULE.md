# PRO200 (MODULE)

|  |  |
| --- | --- |
| Source | `QRPGLESRC/PRO200.RPGLE` |
| Language | RPGLE |
| Class | ile-rpg |
| Section | modules |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 297 from `QRPGLESRC/.ibmi.json` |
| Build manifest | `QRPGLESRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QRPGLESRC/Rules.mk`).

## Purpose

Menu `QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC` option 4 labels this "Work with Providers" and runs `cmd call pro200`.

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| PRO200.RPGLE | `QRPGLESRC/PRO200.RPGLE` | `QRPGLESRC/Rules.mk` |
| FCOUNTRY.SRVPGM | [FCOUNTRY.SRVPGM](../service-programs/FCOUNTRY-SRVPGM.md) | `QRPGLESRC/Rules.mk` |
| FPARAMETER.SRVPGM | [FPARAMETER.SRVPGM](../service-programs/FPARAMETER-SRVPGM.md) | `QRPGLESRC/Rules.mk` |
| PRO202.MODULE | [PRO202.MODULE](./PRO202-MODULE.md) | `QRPGLESRC/Rules.mk` |

Source form in this member: fixed-form (`QRPGLESRC/PRO200.RPGLE`).

## Files

| File | Declaration | Evidence |
| --- | --- | --- |
| provide1 | fprovide1  uf a e           k disk | `QRPGLESRC/PRO200.RPGLE`:2 |
| pro200d | fpro200d   cf   e             workstn F                                     indds(indds) F                                     sfile(sfl01:rrn01) F                                     Infds(Info) | `QRPGLESRC/PRO200.RPGLE`:3 |

## Copies and includes

| Name | Evidence |
| --- | --- |
| country | `QRPGLESRC/PRO200.RPGLE`:8 |

## Program calls

| Target | Kind | In this repository | Evidence |
| --- | --- | --- | --- |
| ART202 | extpgm | [ART202.PGM](../programs/ART202-PGM.md) | `QRPGLESRC/PRO200.RPGLE`:10 |

## Subroutines

Names appear in source order. That order is not an execution trace.

| Subroutine | Nearby comment | Evidence |
| --- | --- | --- |
| pnl01 | //- Subfiles  01 Subroutines --------------------------------------  --- | `QRPGLESRC/PRO200.RPGLE`:68 |
| s01prp | //--- Clear Subfile  ---------------------------------------------------- | `QRPGLESRC/PRO200.RPGLE`:85 |
| s01lod | //--- Load Subfile  ----------------------------------------------------- | `QRPGLESRC/PRO200.RPGLE`:95 |
| s01rst | //--- restore last read ------------------------------------------------- | `QRPGLESRC/PRO200.RPGLE`:112 |
| s01sav | //--- Save last read ------------------------------------------------- | `QRPGLESRC/PRO200.RPGLE`:117 |
| s01dsp | //--- Display Subfile  -------------------------------------------------- | `QRPGLESRC/PRO200.RPGLE`:122 |
| s01key | //--- Command Keys  ----------------------------------------------------- | `QRPGLESRC/PRO200.RPGLE`:134 |
| s01chk | //--- Check Subfile  ---------------------------------------------------- | `QRPGLESRC/PRO200.RPGLE`:149 |
| s01act | //--- action Subfile  --------------------------------------------------- | `QRPGLESRC/PRO200.RPGLE`:171 |
| pnl02 | //--- Format 02 Subroutines ------------------------------------     --- | `QRPGLESRC/PRO200.RPGLE`:198 |
| S02prp | //--- clear & Load ------------------------------------------------------ | `QRPGLESRC/PRO200.RPGLE`:214 |
| S02dsp | //--- Display  ---------------------------------------------------------- | `QRPGLESRC/PRO200.RPGLE`:220 |
| S02key | //--- command Keys  ----------------------------------------------------- | `QRPGLESRC/PRO200.RPGLE`:225 |
| S02chk | //--- check ------------------------------------------------------------- | `QRPGLESRC/PRO200.RPGLE`:242 |
| S02act | //--- Action ------------------------------------------------------------ | `QRPGLESRC/PRO200.RPGLE`:255 |
| pnl00 | //--------END SUBROUTINE ---------------------------------- | `QRPGLESRC/PRO200.RPGLE`:269 |

## Panel or step tests

Only the conditions written in this member are listed.

| Condition | Evidence |
| --- | --- |
| when panel = 1; | `QRPGLESRC/PRO200.RPGLE`:60 |
| when panel = 2; | `QRPGLESRC/PRO200.RPGLE`:62 |
| when step01 = prp ; | `QRPGLESRC/PRO200.RPGLE`:70 |
| when step01 = lod ; | `QRPGLESRC/PRO200.RPGLE`:72 |
| when step01 = dsp ; | `QRPGLESRC/PRO200.RPGLE`:74 |
| when step01 = key ; | `QRPGLESRC/PRO200.RPGLE`:76 |
| when step01 = chk ; | `QRPGLESRC/PRO200.RPGLE`:78 |
| when step01 = act ; | `QRPGLESRC/PRO200.RPGLE`:80 |
| when step02 = prp ; | `QRPGLESRC/PRO200.RPGLE`:200 |
| when step02 = dsp ; | `QRPGLESRC/PRO200.RPGLE`:202 |
| when step02 = key ; | `QRPGLESRC/PRO200.RPGLE`:204 |
| when step02 = chk ; | `QRPGLESRC/PRO200.RPGLE`:206 |
| when step02 = act ; | `QRPGLESRC/PRO200.RPGLE`:208 |

## Indicator declarations

| Declaration | Evidence |
| --- | --- |
| D  help                   1      1n | `QRPGLESRC/PRO200.RPGLE`:17 |
| D  exit                   3      3n | `QRPGLESRC/PRO200.RPGLE`:18 |
| D  prompt                 4      4n | `QRPGLESRC/PRO200.RPGLE`:19 |
| D  refresh                5      5n | `QRPGLESRC/PRO200.RPGLE`:20 |
| D  cancel                12     12n | `QRPGLESRC/PRO200.RPGLE`:21 |
| D  morekeys              24     24n | `QRPGLESRC/PRO200.RPGLE`:22 |
| D  pagedown              25     25n | `QRPGLESRC/PRO200.RPGLE`:23 |
| D  sflclr                30     30n | `QRPGLESRC/PRO200.RPGLE`:24 |
| D  sfldsp                31     31n | `QRPGLESRC/PRO200.RPGLE`:25 |
| D  sfldspctl             32     32n | `QRPGLESRC/PRO200.RPGLE`:26 |
| D  sflnxtchg             33     33n | `QRPGLESRC/PRO200.RPGLE`:27 |
| D  dspatr_ri             34     34n | `QRPGLESRC/PRO200.RPGLE`:28 |
| D  sflmsg                35     35n | `QRPGLESRC/PRO200.RPGLE`:29 |
| D  ErrCountry            40     40n | `QRPGLESRC/PRO200.RPGLE`:30 |
| D  ErrName               41     41n | `QRPGLESRC/PRO200.RPGLE`:31 |
| D  sflend                80     80n | `QRPGLESRC/PRO200.RPGLE`:32 |

## Key tests

| Test | Evidence |
| --- | --- |
| when exit; | `QRPGLESRC/PRO200.RPGLE`:136 |
| when cancel; | `QRPGLESRC/PRO200.RPGLE`:139 |
| when pagedown; | `QRPGLESRC/PRO200.RPGLE`:142 |
| when exit; | `QRPGLESRC/PRO200.RPGLE`:227 |
| when cancel; | `QRPGLESRC/PRO200.RPGLE`:230 |
| when prompt; | `QRPGLESRC/PRO200.RPGLE`:233 |

No open question was raised from this page.

