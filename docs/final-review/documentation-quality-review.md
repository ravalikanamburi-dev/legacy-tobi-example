# Documentation quality review

This review compares the generated package with the source checkout of `legacy-tobi-example`. Application source files were not renamed, deleted, or edited.

## What was checked

- Inventory rows cover the working tree, with `.git` recorded once and not expanded.
- Each file whose requirement is `program-spec` has a specification with the 14 required sections.
- Database DDS and SQL members have field or statement extracts in `docs/database/`.
- Menu actions, calls, copies, and file declarations were searched against object names, member stems, and `Rules.mk` targets before a name was marked missing.
- Local Markdown links under `docs/` were checked by `scripts/validate_documentation_coverage.py`.
- The earlier package in `docs/application/` was left in place and linked from `docs/README.md`.

## Evidence labels

Confirmed statements are source lines or build entries. Menu labels and comments are Partially Confirmed. Names with no member and no build target, after that search, are Confirmed Missing. COBOL `COPY DDS-...` names are Unresolved because those copybooks are often generated and are not stored as members here. No finding is labeled Inferred. Where an execution order is not written in the member, the page says Unresolved.

## Limits of the specifications

Program pages list file declarations, calls, subroutines, embedded SQL, and branches that the extractor found. Subroutine order is source order, not a proven call sequence. A file specification shows the declared mode. It does not prove every runtime read or write.

PDF output was not produced. No PDF tool was required for the Markdown package, and none was run.
