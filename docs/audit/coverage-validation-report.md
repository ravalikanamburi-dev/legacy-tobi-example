# Coverage validation report

Command: `python scripts/validate_documentation_coverage.py`

Counting method for on-disk files: `os.walk` from the repository root, skipping `.git` and `node_modules`.

## Counts

| Item | Count |
| --- | --- |
| inventoried | 551 |
| on_disk_excluding_git_objects | 550 |
| program_specs_required | 76 |
| tracker_rows | 551 |
| unresolved_dependency_rows | 13 |

## Tracker status

| Status | Files |
| --- | --- |
| Completed | 540 |
| Not Applicable | 6 |
| Partially Completed | 5 |

## Failures

No validation failures.

## Unresolved dependencies

13 rows are listed in `docs/dependencies/missing-dependencies.csv`. They are recorded gaps, not silent omissions.

Overall result: **passed**, with unresolved dependencies still listed.
