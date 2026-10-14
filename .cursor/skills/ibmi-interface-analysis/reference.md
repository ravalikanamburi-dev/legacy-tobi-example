# What to extract from an interface

## Display file

File level: size, indicator area, attention and function keys, print, message location, reference file.

Each record:

- Name and role written in the source: subfile, subfile control, window, or other record.
- Fields: name, usage, position, edit code, reference, indicator conditioning.
- Constants and their positions.
- Subfile size, page, fold, drop, next-change, display, clear, and end keywords.
- Record-level keys and overlay.
- Message id or message text keywords and the indicators that show them.

## Printer file

Records, fields, literals, skip and space keywords, and indicators. Note referenced files. A literal address or title is text from the source, not a confirmed company fact beyond that source.

## Command

Prompt text, each parameter's keyword, type, length, default, choices, and required flag. The command-processing program is the one named in source or in the build attribute `CMD_PGM` or equivalent. Cite the place it is named.

## Menu

Options, the command or program each option runs, and help or panel imports. Keys and their actions.

## Panel group

Help names, imported panels, key lists, and the text of each help panel. An empty or placeholder help body stays a placeholder.

## Message file

For each message: id, severity, first-level text, second-level text if present, and CCSID. Also the file-level CCSID. Do not merge two message files that happen to share an id; document each file.

## Workstation customizing object

List the transforms and the data strings in the source. Do not add device behavior that the source does not contain.
