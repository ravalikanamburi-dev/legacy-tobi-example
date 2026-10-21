# File and table relationships

A row exists only where the member writes `REF`, `PFILE`, or `JFILE`.

| From | Kind | Target | Line | Status | Resolved |
| --- | --- | --- | --- | --- | --- |
| functionsVAT/vatdef.pf | REF | SAMREF | 1 | Resolved | common/SAMREF.PF |
| QDDSSRC/ARTICLE-Article_File.PF | REF | SAMREF | 1 | Resolved | common/SAMREF.PF |
| QDDSSRC/ARTICLE1-Article_File.LF | PFILE | ARTICLE | 2 | Resolved | QDDSSRC/ARTICLE-Article_File.PF |
| QDDSSRC/ARTICLE2.LF | PFILE | ARTICLE | 1 | Resolved | QDDSSRC/ARTICLE-Article_File.PF |
| QDDSSRC/ARTIPRO1.LF | PFILE | ARTIPROV | 2 | Resolved | QDDSSRC/ARTIPROV.PF |
| QDDSSRC/ARTIPROV.PF | REF | SAMREF | 2 | Resolved | common/SAMREF.PF |
| QDDSSRC/COUNTR1.LF | PFILE | COUNTRY | 1 | Resolved | QDDSSRC/COUNTRY.PF |
| QDDSSRC/COUNTRY.PF | REF | SAMREF | 2 | Resolved | common/SAMREF.PF |
| QDDSSRC/CUST1.LF | PFILE | CUST | 1 | Resolved | QDDSSRC/CUST.PF |
| QDDSSRC/CUSTOME1.LF | PFILE | CUSTOMER | 2 | Resolved | QDDSSRC/CUSTOMER.PF |
| QDDSSRC/CUSTOME2.LF | PFILE | CUSTOMER | 1 | Resolved | QDDSSRC/CUSTOMER.PF |
| QDDSSRC/CUSTOMER.PF | REF | SAMREF | 1 | Resolved | common/SAMREF.PF |
| QDDSSRC/DETORD.PF | REF | SAMREF | 1 | Resolved | common/SAMREF.PF |
| QDDSSRC/DETORD1.LF | PFILE | DETORD | 2 | Resolved | QDDSSRC/DETORD.PF |
| QDDSSRC/FAMILL1.LF | PFILE | FAMILLY | 1 | Resolved | QDDSSRC/FAMILLY.PF |
| QDDSSRC/FAMILLY.PF | REF | SAMREF | 1 | Resolved | common/SAMREF.PF |
| QDDSSRC/ORDER.PF | REF | SAMREF | 1 | Resolved | common/SAMREF.PF |
| QDDSSRC/ORDER1.LF | PFILE | ORDER | 2 | Resolved | QDDSSRC/ORDER.PF |
| QDDSSRC/ORDER2.LF | PFILE | ORDER | 1 | Resolved | QDDSSRC/ORDER.PF |
| QDDSSRC/ORDER3.LF | PFILE | ORDER | 1 | Resolved | QDDSSRC/ORDER.PF |
| QDDSSRC/PROVIDE1.LF | PFILE | PROVIDER | 2 | Resolved | QDDSSRC/PROVIDER.PF |
| QDDSSRC/PROVIDER.PF | REF | SAMREF | 1 | Resolved | common/SAMREF.PF |
