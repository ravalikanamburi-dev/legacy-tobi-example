# Functional areas

Areas start from the menu groups in `QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC`. A name prefix is not used as a business area. Objects are attached only when a menu option calls them, when their build rule lists them under that program, or when that program copies a prototype those service programs export.

## Master files

This heading is the menu group text.

### Option 1 — Work with Articles

Action `cmd call ART200`, help name `srt200` (`QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC`).

| Object | Why it is in this option | Page |
| --- | --- | --- |
| ART200.PGM | menu program | [ART200.PGM](./programs/ART200-PGM.md) |
| ART201.PGM | called from source | [ART201.PGM](./programs/ART201-PGM.md) |
| ARTICLE2.FILE | declared in source | [ARTICLE2.FILE](./data-stores/ARTICLE2-FILE.md) |
| ARTICLE1.FILE | declared in source | [ARTICLE1.FILE](./data-stores/ARTICLE1-FILE.md) |
| ART200D.FILE | declared in source | [ART200D.FILE](./screens/ART200D-FILE.md) |

### Option 2 — Work with Customers

Action `cmd call CUS200`, help name `cus200` (`QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC`).

No build target is named `CUS200`. Behavior of that call is NOT EVIDENCED.

Targets whose names start with `CUS200` are listed so they can be compared with the menu. They are not proof that the menu runs them.

| Object | Type | Page |
| --- | --- | --- |
| CUS200D.FILE | FILE | [CUS200D.FILE](./screens/CUS200D-FILE.md) |

### Option 3 — Work with Customer Orders

Action `cmd call ORD201`, help name `cus200` (`QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC`).

| Object | Why it is in this option | Page |
| --- | --- | --- |
| ORD201.PGM | menu program | [ORD201.PGM](./programs/ORD201-PGM.md) |
| ORD100C2.PGM | called from source | [ORD100C2.PGM](./programs/ORD100C2-PGM.md) |
| ORD101.PGM | called from source | [ORD101.PGM](./programs/ORD101-PGM.md) |
| ORD202.PGM | called from source | [ORD202.PGM](./programs/ORD202-PGM.md) |
| ORDER1.FILE | declared in source | [ORDER1.FILE](./data-stores/ORDER1-FILE.md) |
| CUSTOME1.FILE | declared in source | [CUSTOME1.FILE](./data-stores/CUSTOME1-FILE.md) |
| ARTICLE1.FILE | declared in source | [ARTICLE1.FILE](./data-stores/ARTICLE1-FILE.md) |
| DETORD1.FILE | declared in source | [DETORD1.FILE](./data-stores/DETORD1-FILE.md) |
| ORD201D.FILE | declared in source | [ORD201D.FILE](./screens/ORD201D-FILE.md) |

### Option 4 — Work with Providers

Action `cmd call pro200`, help name `pro200` (`QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC`).

| Object | Why it is in this option | Page |
| --- | --- | --- |
| PRO200.PGM | menu program | [PRO200.PGM](./programs/PRO200-PGM.md) |
| PRO200.MODULE | build prerequisite | [PRO200.MODULE](./modules/PRO200-MODULE.md) |
| XML.SRVPGM | build prerequisite | [XML.SRVPGM](./service-programs/XML-SRVPGM.md) |

### Option 5 — Display Providers

Action `cmd call pro201`, help name `pro200` (`QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC`).

| Object | Why it is in this option | Page |
| --- | --- | --- |
| PRO201.MODULE | menu program | [PRO201.MODULE](./modules/PRO201-MODULE.md) |
| PRO201D.FILE | build prerequisite | [PRO201D.FILE](./screens/PRO201D-FILE.md) |
| ART202.PGM | called from source | [ART202.PGM](./programs/ART202-PGM.md) |

### Option 6 — Create a Customer Order.

Action `cmd call ORD100C2`, help name `ord100` (`QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC`).

| Object | Why it is in this option | Page |
| --- | --- | --- |
| ORD100C2.PGM | menu program | [ORD100C2.PGM](./programs/ORD100C2-PGM.md) |
| ORD100.PGM | called from source | [ORD100.PGM](./programs/ORD100-PGM.md) |
| TMPDETORD.FILE | prerequisite of called program | [TMPDETORD.FILE](./data-stores/TMPDETORD-FILE.md) |
| VATDEF.FILE | prerequisite of called program | [VATDEF.FILE](./data-stores/VATDEF-FILE.md) |
| FVAT.SRVPGM | prerequisite of called program | [FVAT.SRVPGM](./service-programs/FVAT-SRVPGM.md) |
| ORDER.FILE | prerequisite of called program | [ORDER.FILE](./data-stores/ORDER-FILE.md) |
| ORD100D.FILE | prerequisite of called program | [ORD100D.FILE](./screens/ORD100D-FILE.md) |

## Reports

This heading is the menu group text.

### Option 10 — Article to purchase

Action `cmd call pro203`, help name `nohelp` (`QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC`).

No build target is named `pro203`. Behavior of that call is NOT EVIDENCED.

### Option 11 — Customer with Open Order

Action `cmd STRQMQRY QMQRY(CUSQRY) QMFORM(CUSQRYFMT)`, help name `nohelp` (`QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC`).

The action is not a `CALL`. This repository does not include the query or command definition named in the action.

### Option 12 — Article by Last Order Date

Action `cmd STRQMQRY QMQRY(ARTQRY) `, help name `nohelp` (`QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC`).

The action is not a `CALL`. This repository does not include the query or command definition named in the action.

## Utilities

This heading is the menu group text.

### Option 20 — Work with Parameters

Action `cmd call par200`, help name `nohelp` (`QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC`).

| Object | Why it is in this option | Page |
| --- | --- | --- |
| PAR200.MODULE | menu program | [PAR200.MODULE](./modules/PAR200-MODULE.md) |
| PARAMETER.FILE | declared in source | [PARAMETER.FILE](./data-stores/PARAMETER-FILE.md) |
| PAR200D.FILE | declared in source | [PAR200D.FILE](./screens/PAR200D-FILE.md) |

### Option 21 — Work with countries

Action `cmd call cou200`, help name `nohelp` (`QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC`).

| Object | Why it is in this option | Page |
| --- | --- | --- |
| COU200.PGM | menu program | [COU200.PGM](./programs/COU200-PGM.md) |
| COUNTRY.FILE | build prerequisite | [COUNTRY.FILE](./data-stores/COUNTRY-FILE.md) |
| COU200D.FILE | build prerequisite | [COU200D.FILE](./screens/COU200D-FILE.md) |

### Option 80 — Reset LASTORDNO

Action `cmd call ord900`, help name `nohelp` (`QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC`).

| Object | Why it is in this option | Page |
| --- | --- | --- |
| ORD900.PGM | menu program | [ORD900.PGM](./programs/ORD900-PGM.md) |
| ORDER1.FILE | declared in source | [ORDER1.FILE](./data-stores/ORDER1-FILE.md) |

### Option 81 — Reset Order dates to current

Action `cmd call ord901`, help name `nohelp` (`QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC`).

| Object | Why it is in this option | Page |
| --- | --- | --- |
| ORD901.PGM | menu program | [ORD901.PGM](./programs/ORD901-PGM.md) |
| ORDER.FILE | declared in source | [ORDER.FILE](./data-stores/ORDER-FILE.md) |

### Option 82 — Reset Summary Fields

Action `cmd call art801`, help name `nohelp` (`QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC`).

| Object | Why it is in this option | Page |
| --- | --- | --- |
| ART801.PGM | menu program | [ART801.PGM](./programs/ART801-PGM.md) |

### Option 83 — Work with IFS output

Action `cmd call par201`, help name `nohelp` (`QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC`).

| Object | Why it is in this option | Page |
| --- | --- | --- |
| PAR201.PGM | menu program | [PAR201.PGM](./programs/PAR201-PGM.md) |
| PAR201.MODULE | build prerequisite | [PAR201.MODULE](./modules/PAR201-MODULE.md) |
| FPARAMETER.SRVPGM | build prerequisite | [FPARAMETER.SRVPGM](./service-programs/FPARAMETER-SRVPGM.md) |

### Option 84 — Display Application log

Action `cmd adspusrspc samlog`, help name `nohelp` (`QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC`).

The action is not a `CALL`. This repository does not include the query or command definition named in the action.

### Option 90 — Signoff

Action `cmd signoff`, help name `nohelp` (`QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC`).

The action is not a `CALL`. This repository does not include the query or command definition named in the action.

## Not reached from the menu

These active build targets were not reached by the menu rules above. They remain part of the application. Grouping them by name prefix would be a guess, so they are listed without a business label.

| Object | Type | Source | Page |
| --- | --- | --- | --- |
| SAMREF.FILE | FILE | common/SAMREF.PF | [SAMREF.FILE](./data-stores/SAMREF-FILE.md) |
| VAT300.MODULE | MODULE | functionsVAT/vat300.rpgle | [VAT300.MODULE](./modules/VAT300-MODULE.md) |
| CHS.MODULE | MODULE | globalization/CHS/CHS.RPGLE | [CHS.MODULE](./modules/CHS-MODULE.md) |
| CHS.PGM | PGM |  | [CHS.PGM](./programs/CHS-PGM.md) |
| DEU.MODULE | MODULE | globalization/DEU/DEU.RPGLE | [DEU.MODULE](./modules/DEU-MODULE.md) |
| DEU.PGM | PGM |  | [DEU.PGM](./programs/DEU-PGM.md) |
| HEB.PGM | PGM | globalization/HEB/heb.pgm.rpgle | [HEB.PGM](./programs/HEB-PGM.md) |
| SAMPLE.BNDDIR | BNDDIR | QBNDSRC/SAMPLE.BNDDIR | [SAMPLE.BNDDIR](./binding-directories/SAMPLE-BNDDIR.md) |
| VERIFY.PGM | PGM | QCBLSRC/verify.pgm.cblle | [VERIFY.PGM](./programs/VERIFY-PGM.md) |
| VERIFYSQL.MODULE | MODULE | QCBLSRC/verifysql.sqlcblle | [VERIFYSQL.MODULE](./modules/VERIFYSQL-MODULE.md) |
| VERIFYSQLP.PGM | PGM | QCBLSRC/verifysqlp.pgm.sqlcblle | [VERIFYSQLP.PGM](./programs/VERIFYSQLP-PGM.md) |
| SMPL.PGM | PGM | QCBLSRC/SMPL.CBL | [SMPL.PGM](./programs/SMPL-PGM.md) |
| ORD100C.PGM | PGM | QCLSRC/ORD100C.PGM.CLLE | [ORD100C.PGM](./programs/ORD100C-PGM.md) |
| ORD500C.PGM | PGM | QCLSRC/ORD500C.PGM.CLLE | [ORD500C.PGM](./programs/ORD500C-PGM.md) |
| OPM.PGM | PGM | QCLSRC/OPM.CLP | [OPM.PGM](./programs/OPM-PGM.md) |
| CRTORD.CMD | CMD | QCMDSRC/CRTORD.CMD | [CRTORD.CMD](./commands/CRTORD-CMD.md) |
| CVTSPLPDF.CMD | CMD | QCMDSRC/CVTSPLPDF.CMDSRC | [CVTSPLPDF.CMD](./commands/CVTSPLPDF-CMD.md) |
| PWD.MODULE | MODULE | QCPPSRC/PWD.CPP | [PWD.MODULE](./modules/PWD-MODULE.md) |
| PWD.PGM | PGM |  | [PWD.PGM](./programs/PWD-PGM.md) |
| PUTIFSCHK.MODULE | MODULE | QCSRC/PUTIFSCHK.C | [PUTIFSCHK.MODULE](./modules/PUTIFSCHK-MODULE.md) |
| PUTIFSCHK.PGM | PGM |  | [PUTIFSCHK.PGM](./programs/PUTIFSCHK-PGM.md) |
| PUTIFS.PGM | PGM | QCSRC/PUTIFS.PGM.C | [PUTIFS.PGM](./programs/PUTIFS-PGM.md) |
| ARTICLE.FILE | FILE | QDDSSRC/ARTICLE-Article_File.PF | [ARTICLE.FILE](./data-stores/ARTICLE-FILE.md) |
| ART301D.FILE | FILE | QDDSSRC/ART301D-Function_Select_an_article.DSPF | [ART301D.FILE](./screens/ART301D-FILE.md) |
| CUSTOMER.FILE | FILE | QDDSSRC/CUSTOMER.PF | [CUSTOMER.FILE](./data-stores/CUSTOMER-FILE.md) |
| CUSTOME2.FILE | FILE | QDDSSRC/CUSTOME2.LF | [CUSTOME2.FILE](./data-stores/CUSTOME2-FILE.md) |
| CUS200D.FILE | FILE | QDDSSRC/CUS200D.DSPF | [CUS200D.FILE](./screens/CUS200D-FILE.md) |
| CUS301D.FILE | FILE | QDDSSRC/CUS301D.DSPF | [CUS301D.FILE](./screens/CUS301D-FILE.md) |
| COUNTR1.FILE | FILE | QDDSSRC/COUNTR1.LF | [COUNTR1.FILE](./data-stores/COUNTR1-FILE.md) |
| COU301D.FILE | FILE | QDDSSRC/COU301D.DSPF | [COU301D.FILE](./screens/COU301D-FILE.md) |
| ORDER2.FILE | FILE | QDDSSRC/ORDER2.LF | [ORDER2.FILE](./data-stores/ORDER2-FILE.md) |
| ORDER3.FILE | FILE | QDDSSRC/ORDER3.LF | [ORDER3.FILE](./data-stores/ORDER3-FILE.md) |
| DETORD.FILE | FILE | QDDSSRC/DETORD.PF | [DETORD.FILE](./data-stores/DETORD-FILE.md) |
| ORD101D.FILE | FILE | QDDSSRC/ORD101D.DSPF | [ORD101D.FILE](./screens/ORD101D-FILE.md) |
| ORD200D.FILE | FILE | QDDSSRC/ORD200D.DSPF | [ORD200D.FILE](./screens/ORD200D-FILE.md) |
| ORD202D.FILE | FILE | QDDSSRC/ORD202D.DSPF | [ORD202D.FILE](./screens/ORD202D-FILE.md) |
| ORD500O.FILE | FILE | QDDSSRC/ORD500O.PRTF | [ORD500O.FILE](./reports/ORD500O-FILE.md) |
| FAMILLY.FILE | FILE | QDDSSRC/FAMILLY.PF | [FAMILLY.FILE](./data-stores/FAMILLY-FILE.md) |
| FAMILL1.FILE | FILE | QDDSSRC/FAMILL1.LF | [FAMILL1.FILE](./data-stores/FAMILL1-FILE.md) |
| FAM301D.FILE | FILE | QDDSSRC/FAM301D.DSPF | [FAM301D.FILE](./screens/FAM301D-FILE.md) |
| PROVIDER.FILE | FILE | QDDSSRC/PROVIDER.PF | [PROVIDER.FILE](./data-stores/PROVIDER-FILE.md) |
| PROVIDE1.FILE | FILE | QDDSSRC/PROVIDE1.LF | [PROVIDE1.FILE](./data-stores/PROVIDE1-FILE.md) |
| PRO200D.FILE | FILE | QDDSSRC/PRO200D.DSPF | [PRO200D.FILE](./screens/PRO200D-FILE.md) |
| ARTIPROV.FILE | FILE | QDDSSRC/ARTIPROV.PF | [ARTIPROV.FILE](./data-stores/ARTIPROV-FILE.md) |
| ARTIPRO1.FILE | FILE | QDDSSRC/ARTIPRO1.LF | [ARTIPRO1.FILE](./data-stores/ARTIPRO1-FILE.md) |
| ART201D.FILE | FILE | QDDSSRC/ART201D-Work_with_Article.DSPF | [ART201D.FILE](./screens/ART201D-FILE.md) |
| ART202D.FILE | FILE | QDDSSRC/ART202D-Work_with_Article.DSPF | [ART202D.FILE](./screens/ART202D-FILE.md) |
| PRO202D.FILE | FILE | QDDSSRC/PRO202D.DSPF | [PRO202D.FILE](./screens/PRO202D-FILE.md) |
| CUST.FILE | FILE | QDDSSRC/CUST.PF | [CUST.FILE](./data-stores/CUST-FILE.md) |
| CUST1.FILE | FILE | QDDSSRC/CUST1.LF | [CUST1.FILE](./data-stores/CUST1-FILE.md) |
| LASTORDNO.DTAARA | DTAARA | QDTASRC/LASTORDNO.DTAARA | [LASTORDNO.DTAARA](./data-areas/LASTORDNO-DTAARA.md) |
| STREAMDTA.DTAQ | DTAQ | QDTASRC/STREAMDTA.DTAQ | [STREAMDTA.DTAQ](./data-queues/STREAMDTA-DTAQ.md) |
| FARTICLE.SRVPGM | SRVPGM | QILESRVSRC/FARTICLE.ILESRVPGM | [FARTICLE.SRVPGM](./service-programs/FARTICLE-SRVPGM.md) |
| LOG.SRVPGM | SRVPGM | QILESRVSRC/LOG.ILESRVPGM | [LOG.SRVPGM](./service-programs/LOG-SRVPGM.md) |
| SAMMSGF.MSGF | MSGF | QMSGSRC/SAMMSGF.MSGF | [SAMMSGF.MSGF](./messages/SAMMSGF-MSGF.md) |
| SGSMSGF.MSGF | MSGF | QMSGSRC/SGSMSGF.MSGF | [SGSMSGF.MSGF](./messages/SGSMSGF-MSGF.md) |
| SAMHELP.PNLGRP | PNLGRP | QPNLSRC/SAMHELP-Help_Application_Sam.PNLGRPSRC | [SAMHELP.PNLGRP](./panels/SAMHELP-PNLGRP.md) |
| SAMMNU.MENU | MENU | QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC | [SAMMNU.MENU](./menus/SAMMNU-MENU.md) |
| ADDNUM.PGM | PGM | QRPGLESRC/ADDNUM.RPGLE | [ADDNUM.PGM](./programs/ADDNUM-PGM.md) |
| LOG100.PGM | PGM | QRPGLESRC/LOG100.PGM.RPGLE | [LOG100.PGM](./programs/LOG100-PGM.md) |
| ORD200.PGM | PGM | QRPGLESRC/ORD200.PGM.SQLRPGLE | [ORD200.PGM](./programs/ORD200-PGM.md) |
| ORD700.PGM | PGM | QRPGLESRC/ORD700.PGM.RPGLE | [ORD700.PGM](./programs/ORD700-PGM.md) |
| ART300.MODULE | MODULE | QRPGLESRC/ART300-Function_Article.RPGLE | [ART300.MODULE](./modules/ART300-MODULE.md) |
| ART301.MODULE | MODULE | QRPGLESRC/ART301.SQLRPGLE | [ART301.MODULE](./modules/ART301-MODULE.md) |
| ART302.MODULE | MODULE | QRPGLESRC/ART302.SQLRPGLE | [ART302.MODULE](./modules/ART302-MODULE.md) |
| COU300.MODULE | MODULE | QRPGLESRC/COU300.RPGLE | [COU300.MODULE](./modules/COU300-MODULE.md) |
| COU301.MODULE | MODULE | QRPGLESRC/COU301.RPGLE | [COU301.MODULE](./modules/COU301-MODULE.md) |
| CUS300.MODULE | MODULE | QRPGLESRC/CUS300.RPGLE | [CUS300.MODULE](./modules/CUS300-MODULE.md) |
| CUS301.MODULE | MODULE | QRPGLESRC/CUS301.SQLRPGLE | [CUS301.MODULE](./modules/CUS301-MODULE.md) |
| DAT001.MODULE | MODULE | QRPGLESRC/DAT001.RPGLE | [DAT001.MODULE](./modules/DAT001-MODULE.md) |
| DAT002.MODULE | MODULE | QRPGLESRC/DAT002.RPGLE | [DAT002.MODULE](./modules/DAT002-MODULE.md) |
| FAM300.MODULE | MODULE | QRPGLESRC/FAM300.RPGLE | [FAM300.MODULE](./modules/FAM300-MODULE.md) |
| FAM301.MODULE | MODULE | QRPGLESRC/FAM301.RPGLE | [FAM301.MODULE](./modules/FAM301-MODULE.md) |
| LOG300.MODULE | MODULE | QRPGLESRC/LOG300.RPGLE | [LOG300.MODULE](./modules/LOG300-MODULE.md) |
| PAR300.MODULE | MODULE | QRPGLESRC/PAR300.RPGLE | [PAR300.MODULE](./modules/PAR300-MODULE.md) |
| PRO202.MODULE | MODULE | QRPGLESRC/PRO202.SQLRPGLE | [PRO202.MODULE](./modules/PRO202-MODULE.md) |
| PRO300.MODULE | MODULE | QRPGLESRC/PRO300.RPGLE | [PRO300.MODULE](./modules/PRO300-MODULE.md) |
| XML001.MODULE | MODULE | QRPGLESRC/XML001.RPGLE | [XML001.MODULE](./modules/XML001-MODULE.md) |
| TXT001.MODULE | MODULE | QRPGLESRC/TXT001.RPGLE | [TXT001.MODULE](./modules/TXT001-MODULE.md) |
| CSTNAME.PGM | PGM | QRPGSRC/CSTNAME.SQLRPG | [CSTNAME.PGM](./programs/CSTNAME-PGM.md) |
| CUSTINFO.PGM | PGM | QRPGSRC/CUSTINFO.RPG | [CUSTINFO.PGM](./programs/CUSTINFO-PGM.md) |
| ADDN.PGM | PGM | QRPGSRC/ADDN.RPG | [ADDN.PGM](./programs/ADDN-PGM.md) |
| ANZ_FILE.MODULE | MODULE | QSQLCPPSRC/ANZ_FILE.SQLCPP | [ANZ_FILE.MODULE](./modules/ANZ_FILE-MODULE.md) |
| ANZ_FILE.PGM | PGM |  | [ANZ_FILE.PGM](./programs/ANZ_FILE-PGM.md) |
| ANZ_FILE2.MODULE | MODULE | QSQLCSRC/ANZ_FILE2.SQLC | [ANZ_FILE2.MODULE](./modules/ANZ_FILE2-MODULE.md) |
| ANZ_FILE2.PGM | PGM |  | [ANZ_FILE2.PGM](./programs/ANZ_FILE2-PGM.md) |
| ARTLSTDAT.FILE | FILE | QSQLSRC/ARTLSTDAT.VIEW | [ARTLSTDAT.FILE](./data-stores/ARTLSTDAT-FILE.md) |
| ORD701.PGM | PGM | QSQLSRC/ORD701.SQLTRG | [ORD701.PGM](./triggers/ORD701-PGM.md) |
| ARTIINF.FILE | FILE | QSQLSRC/ARTIINF.TABLE | [ARTIINF.FILE](./data-stores/ARTIINF-FILE.md) |
| CUSSEQ.DTAARA | DTAARA | QSQLSRC/CUSSEQ.SQLSEQ | [CUSSEQ.DTAARA](./data-stores/CUSSEQ-DTAARA.md) |
| ORDERCUS.FILE | FILE | QSQLSRC/ORDERCUS.VIEW | [ORDERCUS.FILE](./data-stores/ORDERCUS-FILE.md) |
| CUSTINFO1.FILE | FILE | QSQLSRC/CUSTINFO1.PFSQL | [CUSTINFO1.FILE](./data-stores/CUSTINFO1-FILE.md) |
| VALUSE.SRVPGM | SRVPGM | QSQLSRC/valuse.sqlvar | [VALUSE.SRVPGM](./service-programs/VALUSE-SRVPGM.md) |
| CUSTTBL.FILE | FILE | QSQLSRC/CUSTTBL.TABLE | [CUSTTBL.FILE](./data-stores/CUSTTBL-FILE.md) |
| FCOUNTRY.SRVPGM | SRVPGM | QSRVSRC/FCOUNTRY.BND | [FCOUNTRY.SRVPGM](./service-programs/FCOUNTRY-SRVPGM.md) |
| FCUSTOMER.SRVPGM | SRVPGM | QSRVSRC/FCUSTOMER.BND | [FCUSTOMER.SRVPGM](./service-programs/FCUSTOMER-SRVPGM.md) |
| FFAMILLY.SRVPGM | SRVPGM | QSRVSRC/FFAMILLY.BND | [FFAMILLY.SRVPGM](./service-programs/FFAMILLY-SRVPGM.md) |
| FPROVIDER.SRVPGM | SRVPGM | QSRVSRC/FPROVIDER.BND | [FPROVIDER.SRVPGM](./service-programs/FPROVIDER-SRVPGM.md) |
| TXT.SRVPGM | SRVPGM | QSRVSRC/TXT.BND | [TXT.SRVPGM](./service-programs/TXT-SRVPGM.md) |
| ORD700A.TRG | TRG | QTRGSRC/ORD700A.SYSTRG | [ORD700A.TRG](./triggers/ORD700A-TRG.md) |
| ORD700D.TRG | TRG | QTRGSRC/ORD700D.SYSTRG | [ORD700D.TRG](./triggers/ORD700D-TRG.md) |
| ORD700U.TRG | TRG | QTRGSRC/ORD700U.SYSTRG | [ORD700U.TRG](./triggers/ORD700U-TRG.md) |

