# Application architecture

`README.md` calls this repository a sample IBM i application with multiple source types. `iproj.json` describes it as "SAMPLE PROJECT".

Verified structure:

- Operator entry in source is menu `SAMMNU` (`QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC`).
- Build entry is `/QOpenSys/pkgs/bin/makei build` (`iproj.json`).
- Include path is `includes` and `QPROTOSRC`.
- Library list token is `&lib1`, then `RPGUNIT` and `QDEVTOOLS`. The concrete library name is Unresolved.
- ILE programs that name `bnddir('SAMPLE')` use `QBNDSRC/SAMPLE.BNDDIR`. The binder source and `QBNDSRC/Rules.mk` do not list the same service programs. Status: Partially Confirmed, both lists recorded in `docs/application/09-supporting-artifacts.md`.

Counts in this run are in `docs/inventory/file-type-summary.md`.
