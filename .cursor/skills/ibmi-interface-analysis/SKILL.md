---
name: ibmi-interface-analysis
description: >-
  Extracts user and operator interfaces from display files, printer files,
  commands, menus, panel groups, message files, and workstation customizing
  source in an IBM i repository. Use when documenting screens, reports,
  commands, help, and messages for an application documentation package.
---

# Interface analysis

Use this skill for `screens`, `reports`, `commands`, `menus`, `panels`, `messages`, and `workstation-customizing`. Read [reference.md](reference.md).

## Procedure

1. Read the interface source. Quote constants, prompts, and message text.
2. List records or options, fields, indicators, and function keys that the source defines.
3. Link each field that uses a reference to the data-store page. Do not restate the whole database field.
4. Connect the interface to a program only when that program declares the file, runs the command, or displays the menu. Cite that declaration.
5. Message text lives on the message-file page. Screens and programs cite the message id.

## User-visible text

Literals in the source are the text operators see. Keep the spelling from the source, including incomplete words. Do not invent a cleaner label.

## Help

A panel group and a menu may import each other. Document the import and the help names that exist. If the help body says help is not available, write that.
