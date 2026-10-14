# Open questions

Each row is a fact the repository does not establish, or a disagreement the inventory recorded. Nothing in this chapter is resolved by inference.

| Page | Topic | What is missing | Where |
| --- | --- | --- | --- |
| binding-directories/SAMPLE-BNDDIR.md | SAMPLE.BNDDIR binding directory | Binding directory source and build prerequisites do not list the same objects. | `QBNDSRC/SAMPLE.BNDDIR` |
| programs/ORD100-PGM.md | ORD500 | No source in this repository describes the called program ORD500. | `QRPGLESRC/ORD100.PGM.RPGLE`:27 |
| programs/ORD101-PGM.md | ORD500 | No source in this repository describes the called program ORD500. | `QRPGLESRC/ORD101.PGM.RPGLE`:24 |
| programs/ORD200-PGM.md | ORD500 | No source in this repository describes the called program ORD500. | `QRPGLESRC/ORD200.PGM.SQLRPGLE`:24 |
| programs/ORD201-PGM.md | ORD500 | No source in this repository describes the called program ORD500. | `QRPGLESRC/ORD201.PGM.SQLRPGLE`:21 |
| copy-members/APICALL-copy-member.md | QUSCRTUS | No source in this repository describes the called program QUSCRTUS. | `QPROTOSRC/APICALL-Prototypes_for_Ibm_API.RPGLEINC`:1 |
| copy-members/APICALL-copy-member.md | QUSPTRUS | No source in this repository describes the called program QUSPTRUS. | `QPROTOSRC/APICALL-Prototypes_for_Ibm_API.RPGLEINC`:11 |
| copy-members/APICALL-copy-member.md | QCMDEXC | No source in this repository describes the called program QCMDEXC. | `QPROTOSRC/APICALL-Prototypes_for_Ibm_API.RPGLEINC`:16 |
| copy-members/txt-copy-member.md | QCMDEXC | No source in this repository describes the called program QCMDEXC. | `QPROTOSRC/txt.rpgleinc`:129 |
| 07-open-questions.md | commented-target | {"severity":"info","type":"commented-target","manifest":"QSQLSRC/Rules.mk","target":"ISOTODATE.SRVPGM","prerequisites":["ISOTODATE.SQLUDF"]} | QSQLSRC/Rules.mk |
| 07-open-questions.md | commented-target | {"severity":"info","type":"commented-target","manifest":"QSQLSRC/Rules.mk","target":"ISOTODATE4.SRVPGM","prerequisites":["ISOTODATE4.SQLUDF"]} | QSQLSRC/Rules.mk |
| 07-open-questions.md | manifest-not-reachable | {"severity":"gap","type":"manifest-not-reachable","directory":"QTRGSRC"} | QTRGSRC |
| 02-repository-and-build.md | runtime library | iproj.json stores a substitution token, not a production library name. | `iproj.json` |
| 03-functional-areas.md | CUS200 | The menu calls a name that has no source in this repository. | `QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC` |
| 03-functional-areas.md | pro203 | The menu calls a name that has no source in this repository. | `QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC` |
| 06-globalization.md | CCSID language names | No repository file states which language a CCSID number represents. | `.ibmi.json` |

