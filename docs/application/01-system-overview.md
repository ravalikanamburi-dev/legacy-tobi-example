# System overview

## What the repository says it is

The readable explanation of this repository is the guide at the top of [README.md](README.md). This chapter is the source-cited list of entry points.

`README.md` says:

> Sample IBM i application with multiple source types using project metadata defined in iproj.json.
> Changed for COMMON Demo

`iproj.json` describes the project as "SAMPLE PROJECT" and names the license "Apache 2.0".

## Entry points

The menu source is the operator entry point that this repository defines. Each row quotes that source. A called name with no build target is external: this package does not describe that program's behavior.

| Option | Group | Label | Action | Resolved |
| --- | --- | --- | --- | --- |
| 1 | Master files | Work with Articles | cmd call ART200 | [ART200.PGM](./programs/ART200-PGM.md) |
| 2 | Master files | Work with Customers | cmd call CUS200 | no program target in this repository |
| 3 | Master files | Work with Customer Orders | cmd call ORD201 | [ORD201.PGM](./programs/ORD201-PGM.md) |
| 4 | Master files | Work with Providers | cmd call pro200 | [PRO200.PGM](./programs/PRO200-PGM.md) |
| 5 | Master files | Display Providers | cmd call pro201 | [PRO201.MODULE](./modules/PRO201-MODULE.md) |
| 6 | Master files | Create a Customer Order. | cmd call ORD100C2 | [ORD100C2.PGM](./programs/ORD100C2-PGM.md) |
| 10 | Reports | Article to purchase | cmd call pro203 | no program target in this repository |
| 11 | Reports | Customer with Open Order | cmd STRQMQRY QMQRY(CUSQRY) QMFORM(CUSQRYFMT) | cmd STRQMQRY QMQRY(CUSQRY) QMFORM(CUSQRYFMT) |
| 12 | Reports | Article by Last Order Date | cmd STRQMQRY QMQRY(ARTQRY) | cmd STRQMQRY QMQRY(ARTQRY) |
| 20 | Utilities | Work with Parameters | cmd call par200 | [PAR200.MODULE](./modules/PAR200-MODULE.md) |
| 21 | Utilities | Work with countries | cmd call cou200 | [COU200.PGM](./programs/COU200-PGM.md) |
| 80 | Utilities | Reset LASTORDNO | cmd call ord900 | [ORD900.PGM](./programs/ORD900-PGM.md) |
| 81 | Utilities | Reset Order dates to current | cmd call ord901 | [ORD901.PGM](./programs/ORD901-PGM.md) |
| 82 | Utilities | Reset Summary Fields | cmd call art801 | [ART801.PGM](./programs/ART801-PGM.md) |
| 83 | Utilities | Work with IFS output | cmd call par201 | [PAR201.PGM](./programs/PAR201-PGM.md) |
| 84 | Utilities | Display Application log | cmd adspusrspc samlog | cmd adspusrspc samlog |
| 90 | Utilities | Signoff | cmd signoff | cmd signoff |

## Commands

| Command | Page |
| --- | --- |
| CRTORD.CMD | [CRTORD.CMD](./commands/CRTORD-CMD.md) |
| CVTSPLPDF.CMD | [CVTSPLPDF.CMD](./commands/CVTSPLPDF-CMD.md) |

## Areas

The menu groups are the user-visible areas. Detail and the objects reached from each option are in [03-functional-areas.md](03-functional-areas.md).

## Repository prose

| Path | What the file contains |
| --- | --- |
| LICENSE | Apache License                            Version 2.0, January 2004                         http://www.apache.org/licenses/ |
| QPROTOSRC/README.md | By renaming to RPGLEINC file extension, there is not longer a need to specify and object-type of *NONE The member text forces us to generate source-attributes We could rename to include the text, but that would change all the including sour |
| QSQLSRC/readme.md | Note that TEXT attribute is represented by LABEL ON SQL command |
| README.md | Sample IBM i application with multiple source types using project metadata defined in iproj.json. Changed for COMMON Demo |

