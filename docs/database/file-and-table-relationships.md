# File and table relationships

A row exists only where the member writes `REF`, `PFILE`, or `JFILE`.

| From | Kind | Target | Line | Status | Resolved |
| --- | --- | --- | --- | --- | --- |
| functionsVAT/vatdef.pf | REF | SAMREF | 1 | Resolved | common/SAMREF.PF |
| QDDSSRC/ARTICLE-Article_File.PF | REF | SAMREF | 1 | Resolved | common/SAMREF.PF |
| QDDSSRC/ARTICLE1-Article_File.LF | PFILE | ARTICLE | 2 | Resolved | docs/application/copy-members/ARTICLE-copy-member.md |
| QDDSSRC/ARTICLE2.LF | PFILE | ARTICLE | 1 | Resolved | docs/application/copy-members/ARTICLE-copy-member.md |
| QDDSSRC/ARTIPRO1.LF | PFILE | ARTIPROV | 2 | Resolved | docs/application/data-stores/ARTIPROV-FILE.md |
| QDDSSRC/ARTIPROV.PF | REF | SAMREF | 2 | Resolved | common/SAMREF.PF |
| QDDSSRC/COUNTR1.LF | PFILE | COUNTRY | 1 | Resolved | docs/application/copy-members/COUNTRY-copy-member.md |
| QDDSSRC/COUNTRY.PF | REF | SAMREF | 2 | Resolved | common/SAMREF.PF |
| QDDSSRC/CUST1.LF | PFILE | CUST | 1 | Resolved | docs/application/data-stores/CUST-FILE.md |
| QDDSSRC/CUSTOME1.LF | PFILE | CUSTOMER | 2 | Resolved | docs/application/copy-members/CUSTOMER-copy-member.md |
| QDDSSRC/CUSTOME2.LF | PFILE | CUSTOMER | 1 | Resolved | docs/application/copy-members/CUSTOMER-copy-member.md |
| QDDSSRC/CUSTOMER.PF | REF | SAMREF | 1 | Resolved | common/SAMREF.PF |
| QDDSSRC/DETORD.PF | REF | SAMREF | 1 | Resolved | common/SAMREF.PF |
| QDDSSRC/DETORD1.LF | PFILE | DETORD | 2 | Resolved | docs/application/data-stores/DETORD-FILE.md |
| QDDSSRC/FAMILL1.LF | PFILE | FAMILLY | 1 | Resolved | docs/application/copy-members/FAMILLY-copy-member.md |
| QDDSSRC/FAMILLY.PF | REF | SAMREF | 1 | Resolved | common/SAMREF.PF |
| QDDSSRC/ORDER.PF | REF | SAMREF | 1 | Resolved | common/SAMREF.PF |
| QDDSSRC/ORDER1.LF | PFILE | ORDER | 2 | Resolved | docs/application/data-stores/ORDER-FILE.md |
| QDDSSRC/ORDER2.LF | PFILE | ORDER | 1 | Resolved | docs/application/data-stores/ORDER-FILE.md |
| QDDSSRC/ORDER3.LF | PFILE | ORDER | 1 | Resolved | docs/application/data-stores/ORDER-FILE.md |
| QDDSSRC/PROVIDE1.LF | PFILE | PROVIDER | 2 | Resolved | docs/application/copy-members/PROVIDER-copy-member.md |
| QDDSSRC/PROVIDER.PF | REF | SAMREF | 1 | Resolved | common/SAMREF.PF |
