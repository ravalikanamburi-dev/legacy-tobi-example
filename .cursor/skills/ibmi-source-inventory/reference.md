# Inventory fields

`schemaVersion` 1. Paths use forward slashes and are relative to the repository root.

## summary and counts

`files`, `manifests`, `activeTargets`, `commentedTargets`, `unclassified`, `unassigned`, `errors`. `counts.byClass` and `counts.bySection` are the catalog totals. Render these instead of counting by hand.

## build

- `projectFiles`: project JSON as stored, including library tokens.
- `includePath`: copy search path from the project file. It may be empty.
- `settings`: only keys that exist in the project file. Do not fill missing keys.
- `ccsid`: one row per CCSID file. `tgtCcsid` null with `parseError` true is an open question.
- `actions`: editor or build actions as stored. A command in an action is a build entry point, not proof of a scheduled job.

## manifests

`path`, `directory`, `subdirs`, `variables`, `comments`. Variables such as a list of physical files are build inputs. Quote them; do not expand them into behavior.

## targets

| Field | Meaning |
|-------|---------|
| `token` | Target as written |
| `objectName`, `objectType` | Split on a configured object-type suffix |
| `active` | False when the rule is commented out |
| `prerequisites` | Tokens as written |
| `resolvedPrerequisites` | `file`, `target`, `ambiguous`, or `unresolved` |
| `primarySource` | First prerequisite that is a file |
| `composedFrom` | Prerequisite targets, such as modules bound into a program |
| `derived` | No primary file, and a recipe creates the object |
| `attributes` | `private`, key, operator, value |
| `recipes` | Custom commands, verbatim |
| `class`, `language`, `role` | Inherited from source |
| `section`, `template`, `skill` | Page assignment |

## files

`class`, `language`, `role`, `classifiedBy`, parsed name and description, `objectName`, `objectType`, `ccsid`, `lineCount`, `encoding`, `primaryOf`, `prerequisiteOf`, `inactiveTargets`, `section`, `pageOwner`.

`encoding` `not-utf-8` means the working-tree bytes were not read as UTF-8. Do not transcode unless the user asks.

## findings

| type | What to document |
|------|------------------|
| `unresolved-prerequisite` | Build input with no file and no target |
| `ambiguous-prerequisite` | More than one file matches |
| `duplicate-object` | Same name and type in more than one active target |
| `commented-target` | Inactive rule; still document the source |
| `object-name-length` | Longer than `platform.objectNameMaxLength` |
| `parsed-name-differs-from-target` | File-name parse and target disagree; the target wins |
| `subdir-missing` | Manifest lists a directory that is not there |
| `manifest-not-reachable` | Manifest exists but the root build does not include it |
| `unclassified`, `unassigned`, `unassigned-target` | Package cannot be finished until resolved |

Severity `error` fails `--check`. Severity `gap` and `info` are written into open questions.
