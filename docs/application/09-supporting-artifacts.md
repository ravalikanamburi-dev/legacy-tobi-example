# Supporting artifacts

This page lists what supports the application outside the business programs. Two groups are included.

- Files in this repository that configure the build, supply copy members, bind service programs, or define the menu, help, messages, commands, and tests.
- Names the source uses for a tool, library, program, query, or user space that has no source file here.

Each path is a repository file. A name with no path is external to this repository. The concrete runtime library is the token `&lib1` in `iproj.json`.

## External support

These names appear in source. This repository does not contain their implementation.


| Name                 | Role                              | Where it is named                                                                                                      |
| -------------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| makei                | Build tool                        | `iproj.json` command `/QOpenSys/pkgs/bin/makei build`                                                                  |
| ibmi-tobi makei      | Alternate build tool path         | `.vscode/actions.json` commands `../ibmi-tobi/bin/makei build` and `../ibmi-tobi/bin/makei compile`                    |
| `&lib1`              | Build library token               | `iproj.json` fields `objlib`, `curlib`, and `preUsrlibl`                                                               |
| `RPGUNIT`            | Library on the build library list | `iproj.json` field `preUsrlibl`                                                                                        |
| `QDEVTOOLS`          | Library on the build library list | `iproj.json` field `preUsrlibl`                                                                                        |
| `ORD500`             | Called program                    | `QRPGLESRC/ORD100.PGM.RPGLE`, `ORD101.PGM.RPGLE`, `ORD200.PGM.SQLRPGLE`, `ORD201.PGM.SQLRPGLE`                         |
| `CUS200`             | Menu program                      | `QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC` option 2                                                         |
| `pro203`             | Menu program                      | `QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC` option 10                                                        |
| `CUSQRY`             | Query Manager query               | Menu option 11, `STRQMQRY QMQRY(CUSQRY) QMFORM(CUSQRYFMT)`                                                             |
| `CUSQRYFMT`          | Query Manager form                | Menu option 11                                                                                                         |
| `ARTQRY`             | Query Manager query               | Menu option 12, `STRQMQRY QMQRY(ARTQRY)`                                                                               |
| `SAMLOG`             | User space                        | Menu option 84, `ADSPUSRSPC SAMLOG`                                                                                    |
| `SIGNOFF`            | IBM i command                     | Menu option 90                                                                                                         |
| `QUSCRTUS`           | IBM API                           | `QPROTOSRC/APICALL-Prototypes_for_Ibm_API.RPGLEINC`                                                                    |
| `QUSPTRUS`           | IBM API                           | `QPROTOSRC/APICALL-Prototypes_for_Ibm_API.RPGLEINC`                                                                    |
| `QCMDEXC`            | IBM API                           | `QPROTOSRC/APICALL-Prototypes_for_Ibm_API.RPGLEINC` and `QPROTOSRC/txt.rpgleinc`                                       |
| `ORDER` as `*SRVPGM` | Binding-directory entry           | `QBNDSRC/SAMPLE.BNDDIR`. The file `ORDER` exists. A service program named `ORDER` does not.                            |
| `XSS` as `*SRVPGM`   | Binding-directory entry           | `QBNDSRC/SAMPLE.BNDDIR`. The prototype `QPROTOSRC/XSS.RPGLEINC` exists. A service program target named `XSS` does not. |


`QTESTSRC/testing.json` names RPGUnit procedure `rucrtrpg`. The RPGUnit product itself is the library `RPGUNIT` above.

## Project, build, and editor files


| Path                    | What it supports                                                                    |
| ----------------------- | ----------------------------------------------------------------------------------- |
| `iproj.json`            | Project description, include path, library list, and makei commands                 |
| `Rules.mk`              | Root build directory list                                                           |
| `.ibmi.json`            | Root compile CCSID 37                                                               |
| `.vscode/actions.json`  | Editor actions `tobi build`, `tobi compile`, `test tobi build`, `test tobi compile` |
| `.gitignore`            | Paths Git ignores, including `.logs` and `.evfevent`                                |
| `LICENSE`               | Apache License 2.0 text named by `iproj.json`                                       |
| `README.md`             | Repository description                                                              |
| `QTESTSRC/testing.json` | RPGUnit compile options for the tests                                               |


Directory manifests. Each file tells makei what to build in that directory.


| Path                         |
| ---------------------------- |
| `common/Rules.mk`            |
| `functionsVAT/Rules.mk`      |
| `globalization/Rules.mk`     |
| `globalization/CHS/Rules.mk` |
| `globalization/DEU/Rules.mk` |
| `globalization/HEB/Rules.mk` |
| `QBNDSRC/Rules.mk`           |
| `QCBLSRC/Rules.mk`           |
| `QCLSRC/Rules.mk`            |
| `QCMDSRC/Rules.mk`           |
| `QCPPSRC/Rules.mk`           |
| `QCSRC/Rules.mk`             |
| `QDDSSRC/Rules.mk`           |
| `QDTASRC/Rules.mk`           |
| `QILESRC/Rules.mk`           |
| `QILESRVSRC/Rules.mk`        |
| `QMSGSRC/Rules.mk`           |
| `QPNLSRC/Rules.mk`           |
| `QRPGLESRC/Rules.mk`         |
| `QRPGSRC/Rules.mk`           |
| `QSQLCPPSRC/Rules.mk`        |
| `QSQLCSRC/Rules.mk`          |
| `QSQLSRC/Rules.mk`           |
| `QSRVSRC/Rules.mk`           |
| `QTRGSRC/Rules.mk`           |


`QTRGSRC/Rules.mk` exists. The root `Rules.mk` subdirectory list does not include `QTRGSRC`.

CCSID overrides. A directory uses its own file when one is present.


| Path                           | tgtCcsid |
| ------------------------------ | -------- |
| `functionsVAT/.ibmi.json`      | 500      |
| `globalization/CHS/.ibmi.json` | 935      |
| `globalization/DEU/.ibmi.json` | 273      |
| `globalization/HEB/.ibmi.json` | 424      |
| `QCBLSRC/.ibmi.json`           | 500      |
| `QCLSRC/.ibmi.json`            | 500      |
| `QCMDSRC/.ibmi.json`           | 500      |
| `QPROTOSRC/.ibmi.json`         | 297      |
| `QRPGLESRC/.ibmi.json`         | 297      |
| `QSQLSRC/.ibmi.json`           | 297      |
| `QSRVSRC/.ibmi.json`           | 297      |
| `QTRGSRC/.ibmi.json`           | 297      |




## Copy members and includes

`iproj.json` sets `includePath` to `includes` and `QPROTOSRC`.


| Path                                                | Kind                                                    |
| --------------------------------------------------- | ------------------------------------------------------- |
| `includes/included.clle`                            | CL include used by `ORD100C`                            |
| `QPROTOSRC/APICALL-Prototypes_for_Ibm_API.RPGLEINC` | Prototypes for IBM APIs                                 |
| `QPROTOSRC/ARTICLE.RPGLEINC`                        | Article prototype                                       |
| `QPROTOSRC/COUNTRY.RPGLEINC`                        | Country prototype                                       |
| `QPROTOSRC/CPY01.RPGINC`                            | RPG include                                             |
| `QPROTOSRC/CPYBK1.RPG`                              | OPM RPG copy                                            |
| `QPROTOSRC/CPYBK2.RPG`                              | OPM RPG copy                                            |
| `QPROTOSRC/CUSTOMER.RPGLEINC`                       | Customer prototype                                      |
| `QPROTOSRC/DATACPY.CBL`                             | COBOL copy                                              |
| `QPROTOSRC/FAMILLY.RPGLEINC`                        | Family prototype                                        |
| `QPROTOSRC/LOG_functions.RPGLEINC`                  | Log prototype                                           |
| `QPROTOSRC/PARAMETER.RPGLEINC`                      | Parameter prototype                                     |
| `QPROTOSRC/PROVIDER.RPGLEINC`                       | Provider prototype                                      |
| `QPROTOSRC/txt.rpgleinc`                            | Text prototype; references `QCMDEXC`                    |
| `QPROTOSRC/VAR1.RPG`                                | OPM RPG copy                                            |
| `QPROTOSRC/VAT.RPGLEINC`                            | VAT prototype                                           |
| `QPROTOSRC/XML.RPGLEINC`                            | XML prototype                                           |
| `QPROTOSRC/XSS.RPGLEINC`                            | XSS prototype                                           |
| `QPROTOSRC/README.md`                               | Note on the `RPGLEINC` extension                        |
| `common/SAMREF.PF`                                  | Field-reference file. Physical files use `REF(SAMREF)`. |




## Binding and export lists


| Path                    | What it supports                                                                                               |
| ----------------------- | -------------------------------------------------------------------------------------------------------------- |
| `QBNDSRC/SAMPLE.BNDDIR` | Binding directory named by ILE programs that specify `bnddir('SAMPLE')`                                        |
| `functionsVAT/fvat.bnd` | Export list for `FVAT`                                                                                         |
| `QSRVSRC/FCOUNTRY.BND`  | Export list for `FCOUNTRY`                                                                                     |
| `QSRVSRC/FCUSTOMER.BND` | Export list for `FCUSTOMER`                                                                                    |
| `QSRVSRC/FFAMILLY.BND`  | Export list for `FFAMILLY`                                                                                     |
| `QSRVSRC/FPROVIDER.BND` | Export list for `FPROVIDER`                                                                                    |
| `QSRVSRC/TXT.BND`       | Export list for `TXT`                                                                                          |
| `QSRVSRC/XML.BND`       | Export list for `XML`                                                                                          |
| `QSRVSRC/FARTICLE.BND`  | Binder listing with no active build target. `FARTICLE` is built from `FARTICLE.ILESRVPGM` with `EXPORT(*ALL)`. |


`QBNDSRC/Rules.mk` builds `SAMPLE` from `XML`, `TXT`, `FARTICLE`, `FCUSTOMER`, `FFAMILLY`, `FPARAMETER`, `FPROVIDER`, and `LOG`. The binder source also names `ORDER`, `XSS`, and `FVAT`. Both lists are recorded. The repository does not say which list is created on the system.

## Operator support files


| Path                                                  | What it supports                                                   |
| ----------------------------------------------------- | ------------------------------------------------------------------ |
| `QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC` | Menu `SAMMNU`                                                      |
| `QPNLSRC/SAMHELP-Help_Application_Sam.PNLGRPSRC`      | Help panel group `SAMHELP`                                         |
| `QPNLSRC/wstrig.wscstsrc`                             | Workstation customizing source                                     |
| `QMSGSRC/SAMMSGF.MSGF`                                | Message file `SAMMSGF`                                             |
| `QMSGSRC/SGSMSGF.MSGF`                                | Message file `SGSMSGF`                                             |
| `QCMDSRC/CRTORD.CMD`                                  | Command `CRTORD`, prompt "Create an Order", built to call `ORD100` |
| `QCMDSRC/CVTSPLPDF.CMDSRC`                            | Command `CVTSPLPDF`                                                |
| `QDTASRC/LASTORDNO.DTAARA`                            | Data area used by order entry. Stored text: "Last customer Order"  |
| `QDTASRC/STREAMDTA.DTAQ`                              | Data queue source                                                  |




## Tests

`QTESTSRC` has no `Rules.mk`, and the root subdirectory list does not include it. A default `makei build` does not compile these members.


| Path                            | What it supports                             |
| ------------------------------- | -------------------------------------------- |
| `QTESTSRC/cus300.test.sqlrpgle` | RPGUnit test for customer procedure `CUS300` |
| `QTESTSRC/vat300.test.sqlrpgle` | RPGUnit test for VAT procedure `VAT300`      |
| `QTESTSRC/testing.json`         | RPGUnit compile options                      |




## Notes stored with the source


| Path                           | What it says                                                                   |
| ------------------------------ | ------------------------------------------------------------------------------ |
| `README.md`                    | Sample IBM i application with multiple source types, changed for a COMMON demo |
| `QPROTOSRC/README.md`          | Renaming to `RPGLEINC` removes the need for object type `*NONE`                |
| `QSQLSRC/readme.md`            | SQL object text is represented by `LABEL ON`                                   |
| `globalization/DEU/Däöü.RPGLE` | RPG member with no active build target                                         |


