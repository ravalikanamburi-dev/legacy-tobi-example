---
name: ibmi-data-definition-analysis
description: >-
  Extracts record layouts and relationships from DDS physical and logical
  files, SQL tables, views, sequences, variables, and data areas or data
  queues in an IBM i repository. Use when documenting the data model for an
  application documentation package.
---

# Data definition analysis

Use this skill for `data-stores`, `data-areas`, `data-queues`, and `sql-routines`. Read [reference.md](reference.md). Fill the template named on the inventory section.

## Procedure

1. Read the source that defines the object. For a derived target, the definition is the build recipe plus the object it is copied or built from.
2. List formats or columns, keys, defaults, labels, and null or length attributes that are written in the source.
3. Record references (`REF`, `REFFLD`, joins, constraints) as declared relationships and link to the referenced object.
4. Same field name in two files is a name match, not a foreign key, unless a constraint or join says so.
5. A status or delete flag has a meaning only when this source's text, heading, or comment states it. Do not copy another file's meaning onto a similar name.
6. List programs and files that reference this object by reading inventory prerequisites and source declarations. Do not claim a reference that is not written.

## Reference files

A field-reference file is documented once. Other files cite the referenced field. Do not paste the reference file's full layout into every dependent file.

## SQL

Keep the SQL name and the system name when both appear (`FOR COLUMN`, specific name, quoted identifier). `LABEL ON` and metadata text are descriptions, not proof of who updates the table.
