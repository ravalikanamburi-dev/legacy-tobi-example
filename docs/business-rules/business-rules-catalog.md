# Business rules catalog

Menu rows are Partially Confirmed because they quote menu text and the action string. SQL rows are Confirmed as source statements. They are not renamed into a business vocabulary.

| ID | Status | Description | Logic | Source |
| --- | --- | --- | --- | --- |
| BR-001 | Confirmed | SQL statement in ART200 | exec sql select ARTICLE_INFORMATION into :text | QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE:330 |
| BR-002 | Confirmed | SQL statement in ART200 | exec sql update artiinf | QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE:368 |
| BR-003 | Confirmed | SQL statement in ART200 | exec sql insert into artiinf | QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE:372 |
| BR-004 | Confirmed | SQL statement in ORD901 | exec sql select max(ordate)  into :LastDate from order; | QRPGLESRC/ORD901.PGM.SQLRPGLE:8 |
| BR-005 | Confirmed | SQL statement in ORD901 | exec sql Update detord d set odyear = (select oryear | QRPGLESRC/ORD901.PGM.SQLRPGLE:39 |
| BR-006 | Confirmed | SQL statement in ORD901 | exec sql  UPDATE CUSTOMER  C SET CULASTORD = | QRPGLESRC/ORD901.PGM.SQLRPGLE:43 |
| BR-007 | Partially Confirmed | Menu option 1 label: Work with Articles | cmd call ART200 | QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC:80 |
| BR-008 | Partially Confirmed | Menu option 2 label: Work with Customers | cmd call CUS200 | QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC:84 |
| BR-009 | Partially Confirmed | Menu option 3 label: Work with Customer Orders | cmd call ORD201 | QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC:88 |
| BR-010 | Partially Confirmed | Menu option 4 label: Work with Providers | cmd call pro200 | QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC:92 |
| BR-011 | Partially Confirmed | Menu option 5 label: Display Providers | cmd call pro201 | QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC:96 |
| BR-012 | Partially Confirmed | Menu option 6 label: Create a Customer Order. | cmd call ORD100C2 | QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC:100 |
| BR-013 | Partially Confirmed | Menu option 10 label: Article to purchase | cmd call pro203 | QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC:106 |
| BR-014 | Partially Confirmed | Menu option 11 label:  | cmd STRQMQRY QMQRY(ARTQRY)  | QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC:110 |
| BR-015 | Partially Confirmed | Menu option 12 label:  | cmd call par200 | QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC:114 |
| BR-016 | Partially Confirmed | Menu option 20 label: Work with Parameters | cmd call par200 | QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC:120 |
| BR-017 | Partially Confirmed | Menu option 21 label: Work with countries | cmd call cou200 | QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC:124 |
| BR-018 | Partially Confirmed | Menu option 80 label: Reset LASTORDNO | cmd call ord900 | QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC:128 |
| BR-019 | Partially Confirmed | Menu option 81 label: Reset Order dates to current | cmd call ord901 | QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC:132 |
| BR-020 | Partially Confirmed | Menu option 82 label: Work with IFS output | cmd call par201 | QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC:136 |
| BR-021 | Partially Confirmed | Menu option 83 label: Work with IFS output | cmd call par201 | QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC:140 |
| BR-022 | Partially Confirmed | Menu option 84 label: Display Application log | cmd adspusrspc samlog | QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC:144 |
| BR-023 | Partially Confirmed | Menu option 90 label: Signoff | cmd signoff | QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC:149 |
