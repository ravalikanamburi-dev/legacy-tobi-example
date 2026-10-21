# Data mappings

A mapping is listed only when a source statement writes it. The statement is Confirmed. A business name for that statement is Unresolved unless the statement text already contains it.

| Rule | Source | Statement |
| --- | --- | --- |
| BR-001 | QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE:330 | exec sql select ARTICLE_INFORMATION into :text |
| BR-002 | QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE:368 | exec sql update artiinf |
| BR-003 | QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE:372 | exec sql insert into artiinf |
| BR-004 | QRPGLESRC/ORD901.PGM.SQLRPGLE:8 | exec sql select max(ordate)  into :LastDate from order; |
| BR-005 | QRPGLESRC/ORD901.PGM.SQLRPGLE:39 | exec sql Update detord d set odyear = (select oryear |
| BR-006 | QRPGLESRC/ORD901.PGM.SQLRPGLE:43 | exec sql  UPDATE CUSTOMER  C SET CULASTORD = |
