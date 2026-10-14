# Repository and build

## Project file

| Setting | Value | Source |
| --- | --- | --- |
| description | SAMPLE PROJECT | `iproj.json` |
| repository | https://github.com/edmundreinhardt/tobi-example.git | `iproj.json` |
| license | Apache 2.0 | `iproj.json` |
| objlib | &lib1 | `iproj.json` |
| curlib | &lib1 | `iproj.json` |
| preUsrlibl | &lib1, RPGUNIT, QDEVTOOLS | `iproj.json` |
| includePath | includes, QPROTOSRC | `iproj.json` |
| buildCommand | /QOpenSys/pkgs/bin/makei build | `iproj.json` |
| compileCommand | /QOpenSys/pkgs/bin/makei c -f {filename} | `iproj.json` |

`&lib1` is a build substitution. The concrete runtime library name is NOT EVIDENCED.

## How a build is started

Editor actions in the repository name these commands. They are build entry points, not a job schedule.

| Name | Command | Source |
| --- | --- | --- |
| tobi build | err=*EVENTF lib1=&CURLIB makei build | .vscode/actions.json |
| tobi compile | err=*EVENTF makei compile -f &BASENAME -e lib1=&CURLIB | .vscode/actions.json |
| test tobi build | err=*EVENTF lib1=&CURLIB ../ibmi-tobi/bin/makei build | .vscode/actions.json |
| test tobi compile | err=*EVENTF ../ibmi-tobi/bin/makei compile -f &BASENAME -e lib1=&CURLIB | .vscode/actions.json |

## Directories

| Directory | Subdirectories | Manifest |
| --- | --- | --- |
| common |  | common/Rules.mk |
| functionsVAT |  | functionsVAT/Rules.mk |
| globalization/CHS |  | globalization/CHS/Rules.mk |
| globalization/DEU |  | globalization/DEU/Rules.mk |
| globalization/HEB |  | globalization/HEB/Rules.mk |
| globalization | CHS, DEU, HEB | globalization/Rules.mk |
| QBNDSRC |  | QBNDSRC/Rules.mk |
| QCBLSRC |  | QCBLSRC/Rules.mk |
| QCLSRC |  | QCLSRC/Rules.mk |
| QCMDSRC |  | QCMDSRC/Rules.mk |
| QCPPSRC |  | QCPPSRC/Rules.mk |
| QCSRC |  | QCSRC/Rules.mk |
| QDDSSRC |  | QDDSSRC/Rules.mk |
| QDTASRC |  | QDTASRC/Rules.mk |
| QILESRC |  | QILESRC/Rules.mk |
| QILESRVSRC |  | QILESRVSRC/Rules.mk |
| QMSGSRC |  | QMSGSRC/Rules.mk |
| QPNLSRC |  | QPNLSRC/Rules.mk |
| QRPGLESRC |  | QRPGLESRC/Rules.mk |
| QRPGSRC |  | QRPGSRC/Rules.mk |
| QSQLCPPSRC |  | QSQLCPPSRC/Rules.mk |
| QSQLCSRC |  | QSQLCSRC/Rules.mk |
| QSQLSRC |  | QSQLSRC/Rules.mk |
| QSRVSRC |  | QSRVSRC/Rules.mk |
| QTRGSRC |  | QTRGSRC/Rules.mk |
| . | QBNDSRC, QCBLSRC, QCLSRC, QCMDSRC, QDDSSRC, QDTASRC, QILESRC, QILESRVSRC, QMSGSRC, QPNLSRC, QRPGLESRC, QRPGSRC, QSQLSRC, QSRVSRC, QCSRC, QCPPSRC, QSQLCSRC, QSQLCPPSRC, common, functionsVAT, globalization | Rules.mk |

## Outside the default build

These manifest directories exist, and the root subdirectory list does not include them. Their objects are documented. They are not part of the default build graph.

| Directory | Finding |
| --- | --- |
| QTRGSRC | manifest-not-reachable |

## Inactive targets

| Target | Manifest | Prerequisites |
| --- | --- | --- |
| ISOTODATE.SRVPGM | QSQLSRC/Rules.mk | ISOTODATE.SQLUDF |
| ISOTODATE4.SRVPGM | QSQLSRC/Rules.mk | ISOTODATE4.SQLUDF |

## Recipes

| Target | Recipe |
| --- | --- |
| ART301D.FILE |  |
| TMPDETORD.FILE | cl "CPYF FROMFILE($(OBJLIB)/DETORD) TOFILE($(OBJLIB)/TMPDETORD) CRTFILE(*YES) MBROPT(*ADD)" |

## Include path

Copy members are resolved from the source directory and from `includePath` in `iproj.json`: includes, QPROTOSRC.

## QPROTOSRC/README.md

By renaming to RPGLEINC file extension, there is not longer a need to specify and object-type of *NONE
The member text forces us to generate source-attributes
We could rename to include the text, but that would change all the including source files

## QSQLSRC/readme.md

Note that TEXT attribute is represented by LABEL ON SQL command

