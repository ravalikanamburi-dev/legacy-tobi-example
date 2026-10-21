# File type summary

Counting method: recursive walk of the working tree from the repository root. The `.git` object store is not expanded. One inventory row records that directory. Every other file, including hidden project files and IDE binaries, is one row. Size is `stat` size in bytes. Classification uses the file name and extension. It does not infer a language from a directory name.

Files counted in the first walk: **549** plus the `.git` directory row.

## Counts by category

| Category | Files |
| --- | --- |
| binary | 5 |
| binder-source | 8 |
| binding-directory | 1 |
| build-manifest | 26 |
| build-metadata | 14 |
| c | 2 |
| c-sql | 1 |
| clle | 5 |
| clp | 1 |
| cobol | 4 |
| cobol-sql | 2 |
| command | 2 |
| config | 3 |
| copy-member | 13 |
| cpp | 1 |
| cpp-sql | 1 |
| cursor-rule | 4 |
| data-area | 1 |
| data-queue | 1 |
| display-file | 18 |
| ile-program-script | 2 |
| ile-rpg | 29 |
| ile-rpg-sql | 10 |
| ile-service-program-script | 3 |
| license | 1 |
| logical-file | 13 |
| menu | 1 |
| message-file | 2 |
| opm-rpg | 6 |
| opm-rpg-sql | 1 |
| panel-group | 1 |
| physical-file | 12 |
| printer-file | 1 |
| project-metadata | 1 |
| prose | 321 |
| sql-file | 1 |
| sql-function | 2 |
| sql-procedure | 1 |
| sql-sequence | 1 |
| sql-table | 2 |
| sql-trigger | 1 |
| sql-variable | 1 |
| sql-view | 2 |
| system-trigger | 3 |
| test-metadata | 1 |
| tooling | 4 |
| unclassified | 11 |
| vcs | 1 |
| workstation-customizing | 1 |

## Binary and generated

<a id="binary-and-generated"></a>

IDE state under `.vs` and other binary extensions are inventoried as `binary` with requirement `not-applicable`. They are not application source.
