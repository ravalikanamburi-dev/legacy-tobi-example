---
name: ibmi-app-documentation
description: >-
  Produces a source-evidenced application documentation package for an IBM i
  or similar legacy repository. Use when the user asks to document the
  application, reverse engineer it into documentation, or refresh the
  application documentation package. Do not use for ordinary code edits,
  compiles, or unit tests.
---

# IBM i application documentation

Generate the package only when the user explicitly asks to create, write, or refresh it. Preparing this skill is not that request.

## Before writing

1. Read `.cursor/ibmi-documentation.json`.
2. If `doNotGenerateUntilAsked` is true, stop unless the user asked for the package.
3. Run the inventory and require a clean check:

```bash
node .cursor/skills/ibmi-source-inventory/scripts/inventory.js --root . --check
```

4. Write the inventory JSON to `package.inventoryFile` only as part of this requested run.
5. Read the skill named on each chapter and section before writing it. Read [reference.md](reference.md) for the package rules.

## Write the package

Output root is `package.outputDirectory`. Create it during this run. Do not modify application source, manifests, or CCSID files.

1. Write each chapter in `chapters` once.
2. For every active target with a section, write one page from that section's template. The target's primary source does not get a second page.
3. For every other file whose `pageOwner` starts with `file:`, write one page.
4. Files owned by a chapter are cited from that chapter, not copied in full.
5. Remove HTML comments. Replace `{{tokens}}`. Delete a `data-when` block when it has no evidence rows.
6. Use `evidence.unknownMarker` for anything the source does not establish.
7. Copy every inventory finding into the open-questions chapter.

Page path: `<output>/<section-id>/<objectName>-<objectType>.md`. If there is no object name, use the source file name. If two pages would collide, append a short hash of the repository path.

## After writing

Complete the quality gate in [reference.md](reference.md). Fix documentation gaps. Do not "fix" the application to make the narrative cleaner.

## Skills by concern

| Concern | Skill |
|---------|--------|
| Inventory and classification | `ibmi-source-inventory` |
| Programs, modules, copy members, tests | `ibmi-program-analysis` |
| Files, SQL data, data areas, data queues | `ibmi-data-definition-analysis` |
| Screens, reports, commands, menus, help, messages | `ibmi-interface-analysis` |
| Build, binds, triggers, dependencies, CCSID | `ibmi-build-dependency-analysis` |

If the repository has project skills that describe local coding conventions, treat them as claims. Confirm each claim in source before writing it. Do not copy skill examples into the package as application facts.
