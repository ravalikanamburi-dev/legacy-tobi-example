# PRO202 (MODULE)

|  |  |
| --- | --- |
| Source | `QRPGLESRC/PRO202.SQLRPGLE` |
| Language | SQLRPGLE |
| Class | ile-rpg-sql |
| Section | modules |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 297 from `QRPGLESRC/.ibmi.json` |
| Build manifest | `QRPGLESRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QRPGLESRC/Rules.mk`).

## Purpose

The sources read for this object do not state a business purpose (`QRPGLESRC/PRO202.SQLRPGLE`).

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| PRO202.SQLRPGLE | `QRPGLESRC/PRO202.SQLRPGLE` | `QRPGLESRC/Rules.mk` |

Source form in this member: fixed-form (`QRPGLESRC/PRO202.SQLRPGLE`).

## Files

| File | Declaration | Evidence |
| --- | --- | --- |
| provide1 | fprovide1  if   e           k disk | `QRPGLESRC/PRO202.SQLRPGLE`:2 |
| pro202d | fpro202d   cf   e             workstn F                                     indds(indds) F                                     sfile(sfl01:rrn01) F                                     Infds(Info) | `QRPGLESRC/PRO202.SQLRPGLE`:3 |

## Copies and includes

| Name | Evidence |
| --- | --- |
| xml | `QRPGLESRC/PRO202.SQLRPGLE`:8 |
| parameter | `QRPGLESRC/PRO202.SQLRPGLE`:9 |

## Embedded SQL

| Statement start | Evidence |
| --- | --- |
| exec sql declare c2 cursor for SELECT ARID, ARDESC, arstock, ARMINQTY, ARCUSQTY, ARPURQTY, APPRICE, apref | `QRPGLESRC/PRO202.SQLRPGLE`:82 |
| exec sql open c2; step01 = lod; rrs01 = 0; | `QRPGLESRC/PRO202.SQLRPGLE`:90 |
| exec sql fetch c2 into :arid, :ardesc, :arstock, :arminqty, :ARCUSQTY, :ARPURQTY, :APPRICE, :APREF; dow sqlcod = 0; | `QRPGLESRC/PRO202.SQLRPGLE`:98 |
| exec sql fetch c2 into :arid, :ardesc, :arstock, :arminqty, :ARCUSQTY, :ARPURQTY, :APPRICE, :APREF; enddo; | `QRPGLESRC/PRO202.SQLRPGLE`:105 |
| exec sql close c2; *inlr = *on; endsr; | `QRPGLESRC/PRO202.SQLRPGLE`:186 |

## Subroutines

Names appear in source order. That order is not an execution trace.

| Subroutine | Nearby comment | Evidence |
| --- | --- | --- |
| pnl01 | //- Subfiles  01 Subroutines --------------------------------------  --- | `QRPGLESRC/PRO202.SQLRPGLE`:60 |
| s01prp | //--- Clear Subfile  ---------------------------------------------------- | `QRPGLESRC/PRO202.SQLRPGLE`:77 |
| s01lod | //--- Load Subfile  ----------------------------------------------------- | `QRPGLESRC/PRO202.SQLRPGLE`:95 |
| s01dsp | //--- Display Subfile  -------------------------------------------------- | `QRPGLESRC/PRO202.SQLRPGLE`:113 |
| s01key | //--- Command Keys  ----------------------------------------------------- | `QRPGLESRC/PRO202.SQLRPGLE`:125 |
| s01chk | //--- Check Subfile  ---------------------------------------------------- | `QRPGLESRC/PRO202.SQLRPGLE`:140 |
| s01act | //--- action Subfile  --------------------------------------------------- | `QRPGLESRC/PRO202.SQLRPGLE`:144 |
| pnl00 | //--------END SUBROUTINE ---------------------------------- | `QRPGLESRC/PRO202.SQLRPGLE`:185 |

## Panel or step tests

Only the conditions written in this member are listed.

| Condition | Evidence |
| --- | --- |
| when panel = 1; | `QRPGLESRC/PRO202.SQLRPGLE`:54 |
| when step01 = prp ; | `QRPGLESRC/PRO202.SQLRPGLE`:62 |
| when step01 = lod ; | `QRPGLESRC/PRO202.SQLRPGLE`:64 |
| when step01 = dsp ; | `QRPGLESRC/PRO202.SQLRPGLE`:66 |
| when step01 = key ; | `QRPGLESRC/PRO202.SQLRPGLE`:68 |
| when step01 = chk ; | `QRPGLESRC/PRO202.SQLRPGLE`:70 |
| when step01 = act ; | `QRPGLESRC/PRO202.SQLRPGLE`:72 |

## Indicator declarations

| Declaration | Evidence |
| --- | --- |
| D  help                   1      1n | `QRPGLESRC/PRO202.SQLRPGLE`:17 |
| D  exit                   3      3n | `QRPGLESRC/PRO202.SQLRPGLE`:18 |
| D  prompt                 4      4n | `QRPGLESRC/PRO202.SQLRPGLE`:19 |
| D  refresh                5      5n | `QRPGLESRC/PRO202.SQLRPGLE`:20 |
| D  confirm                8      8n | `QRPGLESRC/PRO202.SQLRPGLE`:21 |
| D  cancel                12     12n | `QRPGLESRC/PRO202.SQLRPGLE`:22 |
| D  morekeys              24     24n | `QRPGLESRC/PRO202.SQLRPGLE`:23 |
| D  pagedown              25     25n | `QRPGLESRC/PRO202.SQLRPGLE`:24 |
| D  sflclr                30     30n | `QRPGLESRC/PRO202.SQLRPGLE`:25 |
| D  sfldsp                31     31n | `QRPGLESRC/PRO202.SQLRPGLE`:26 |
| D  sfldspctl             32     32n | `QRPGLESRC/PRO202.SQLRPGLE`:27 |
| D  sflnxtchg             33     33n | `QRPGLESRC/PRO202.SQLRPGLE`:28 |
| D  dspatr_ri             34     34n | `QRPGLESRC/PRO202.SQLRPGLE`:29 |
| D  sflmsg                35     35n | `QRPGLESRC/PRO202.SQLRPGLE`:30 |
| D  sflend                80     80n | `QRPGLESRC/PRO202.SQLRPGLE`:31 |

## Key tests

| Test | Evidence |
| --- | --- |
| when exit; | `QRPGLESRC/PRO202.SQLRPGLE`:127 |
| when cancel; | `QRPGLESRC/PRO202.SQLRPGLE`:130 |
| when pagedown; | `QRPGLESRC/PRO202.SQLRPGLE`:133 |
| if confirm; | `QRPGLESRC/PRO202.SQLRPGLE`:145 |

No open question was raised from this page.

