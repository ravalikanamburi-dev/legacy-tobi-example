# Dependency validation

A name is Resolved when an object or member stem in this checkout matches it. IBM-supplied names in the fixed set (QUSCRTUS, QUSPTRUS, QCMDEXC, QCMD, SIGNOFF, STRQMQRY, ADSPUSRSPC) are External Dependency. A `CALL PGM` or copy name that matches neither is Confirmed Missing. A leading `&` is Dynamic Reference.

| Status | Count |
| --- | --- |
| Confirmed Missing | 6 |
| External Dependency | 5 |
| Resolved | 113 |
| Unresolved | 7 |

Confirmed Missing and Unresolved rows are listed in `missing-dependencies.csv`.
