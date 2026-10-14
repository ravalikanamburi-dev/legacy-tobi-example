# What to extract from a data definition

## Physical file or SQL table

For each field or column: name, alias, type, length, decimals, nullability, default, edit code, text, column heading, and CCSID keyword if present. Then keys, uniqueness, and order.

Also record `REF` / `REFFLD`, select/omit on a logical file, and SQL constraints, grants, identities, and sequences.

## Logical file or view

- Based-on file or join inputs.
- Join fields and type when written.
- Select, omit, where, and group expressions.
- Key fields and uniqueness.
- Whether the format is renamed.

## Sequence, variable, data area, data queue

- Type, length, start, increment, cycle, and default when the source states them.
- Initial value in the source is an authored value, not proof of the current production value.
- Data queue maximum length, size, and text when present.
- Quote the create command. A command prefix whose meaning is not defined in the repository stays quoted and is marked unknown.

## Derived file

Quote the recipe. Name the input object. Say which attributes the recipe copies and which it changes. If the recipe does not say, mark those attributes unknown.

## Relationships

| Kind | Evidence required |
|------|-------------------|
| Field reference | `REF` or `REFFLD` |
| Join | DDS join or SQL `JOIN` / `WHERE` |
| Constraint | `PRIMARY KEY`, `UNIQUE`, `FOREIGN KEY`, or DDS unique key |
| Name match | Same name only. Label it as a name match |

## Usage

Search declarations and build prerequisites for this object name. Separate read, add, update, and delete only when the declaration or SQL says so. An unqualified usage is "referenced".
