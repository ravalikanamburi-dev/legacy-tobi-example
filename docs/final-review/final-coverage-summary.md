# Final coverage summary

Counts are from the documentation generator and from `docs/audit/coverage-validation-report.md`.

| Item | Count |
| --- | --- |
| Inventory rows, including the `.git` directory row | 586 |
| On-disk files excluding the `.git` object store | 585 |
| Program specification pages | 76 |
| Business-rule rows | 23 |
| Dependency rows | 131 |
| Unresolved or missing dependency rows | 13 |
| Database field or statement rows | 814 |
| Tracker status Completed | 575 |
| Tracker status Partially Completed | 5 |
| Tracker status Not Applicable | 6 |

The five partially completed tracker rows are members whose extracted dependencies include a Confirmed Missing or Unresolved name. The six not-applicable rows are the `.git` store and binary IDE files.

`docs/application/` remains the earlier narrative package. This package adds the inventory, per-member specifications, rule catalog, dependency check, and coverage script.

The coverage script's structural checks are recorded in `docs/audit/coverage-validation-report.md`. Source gaps in `docs/final-review/unresolved-gaps-and-next-actions.md` remain open. Those gaps mean the package does not claim that every called program's behavior is known.
