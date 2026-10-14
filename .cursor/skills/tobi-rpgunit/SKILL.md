---
name: tobi-rpgunit
description: >-
  Add or change RPGUnit tests in QTESTSRC for tobi-example service procedures.
  Use when the user asks for a unit test, RPGUnit case, or test of an exported
  RPG procedure such as GetCusName or GetVATRate.
---

# tobi-example RPGUnit

Tests are fully free RPG in `QTESTSRC`, named `entity.test.sqlrpgle` (for example `cus300.test.sqlrpgle`, `vat300.test.sqlrpgle`). They are not listed in the root `Rules.mk` `SUBDIRS`. Compile options are in `QTESTSRC/testing.json`: `tgtCcsid` `*JOB`, `dbgView` `*SOURCE`, `rpgPpOpt` `*LVL2`, `cOption` `*EVENTF`.

## Skeleton

```rpgle
**free

ctl-opt nomain ccsidcvt(*excp) ccsid(*char : *jobrun) BNDDIR('SAMPLE');

/include qinclude,TESTCASE
/include 'qprotosrc/customer.rpgleinc'

dcl-s gCusIdValid packed(5:0) inz(10001);

exec sql
  set option commit = *none;

dcl-proc setUpSuite export;
  exec sql
    DELETE FROM CUSTOMER WHERE CUID IN (10001);
  exec sql
    INSERT INTO CUSTOMER (CUID, CUSTNM, /* remaining columns from the PF */)
    VALUES (:gCusIdValid, 'Test Customer', /* ... */);
  if (sqlcode <> 0);
    fail('Failed to insert test data with SQL code: ' + %char(sqlcode));
  endif;
end-proc;

dcl-proc tearDownSuite export;
  exec sql
    DELETE FROM CUSTOMER WHERE CUID IN (10001);
end-proc;

dcl-proc test_GetCusName export;
  dcl-pi *n extproc(*dclcase) end-pi;
  assert(GetCusName(gCusIdValid) = 'Test Customer'
    : 'Should retrieve name for valid customer');
end-proc;
```

## Rules that the existing tests follow

- Include the prototype with a relative path: `/include 'qprotosrc/customer.rpgleinc'`.
- `setUpSuite` deletes the fixture keys, inserts them, and calls `fail` when `sqlcode <> 0`. `tearDownSuite` deletes the same keys. Both are `export`.
- Each test is `dcl-proc test_ProcedureName export` with `extproc(*dclcase)`.
- Use `assert` for character and numeric results and `nEqual` for indicators (`nEqual(*on : ExistCus(id) : 'message')`).
- Cover three cases when the procedure distinguishes them: a valid row, a missing key, and a row whose delete flag is `'X'`. Deleted rows still return stored values from the getters; existence checks treat them as absent.
- Messages say what the procedure should do (`'Should retrieve name for valid customer'`).
- Copy the full insert column list from the physical file or from `cus300.test.sqlrpgle` / `vat300.test.sqlrpgle`. The skeleton above omits columns.
- `commit = *none`. Do not add commitment control.
- Quote the `"ORDER"` table name in any SQL that touches it.
