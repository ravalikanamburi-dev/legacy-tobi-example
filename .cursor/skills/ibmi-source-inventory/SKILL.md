---
name: ibmi-source-inventory
description: >-
  Builds a machine-readable inventory of an IBM i or makei-style repository,
  including source files, build targets, copy members, CCSID, and unresolved
  prerequisites. Use when documenting an IBM i application, refreshing its
  object catalog, or classifying source before analysis. Do not use to change
  application source.
---

# IBM i source inventory

The inventory is the object list for the documentation package. Do not replace it with a hand-written list of familiar programs.

## Run

From the repository root, with Node.js 18 or newer and no extra packages:

```bash
node .cursor/skills/ibmi-source-inventory/scripts/inventory.js --root . --check
```

Write JSON only when a documentation run needs `package.inventoryFile`:

```bash
node .cursor/skills/ibmi-source-inventory/scripts/inventory.js --root . --output <inventoryFile> --check
```

`--check` fails when a file is unclassified, a file or active target has no section, or a template named by the config is missing. Gaps such as an unresolved prerequisite are reported and do not fail the check. They still belong in the open questions.

The parser reads the make manifest named in the config (`Rules.mk` for makei-style projects): targets, assignments, tab recipes, and `#` comments. If the config names another build system, do not force this parser. Inventory files by the extension catalog and record that the manifest parser does not apply.

## How a file is classified

1. Configured file name, matched case-insensitively.
2. Otherwise the extension catalog in the config.
3. A `program-source` file that is only a build prerequisite, not a target's primary source, is an include.
4. A file under a directory that contains the configured test config, or whose name contains `.test.`, is a test. Metadata files keep their own role.
5. The first matching `packageSections` entry owns the page. Chapter sections then absorb build files and prose.
6. A target inherits class and language from its primary source. A derived target with no source file inherits them from the target it is built from.

Extend the catalog in `.cursor/ibmi-documentation.json` when a new extension appears. Decide the class by reading the file. Do not guess from the directory name.

## Use the result

- Active targets with `section` become pages.
- `pageOwner` of `primary-source` means the file is documented on its target's page.
- `inactiveTargets` and findings of type `commented-target` stay visible.
- `manifest-not-reachable` means a manifest directory is not in the root build's subdirectory list. Document the source as outside the default build.

Field definitions are in [reference.md](reference.md).
