# SAMMNU (MENU)

|  |  |
| --- | --- |
| Source | `QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC` |
| Language | UIM |
| Class | menu |
| Section | menus |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 37 from `.ibmi.json` |
| Build manifest | `QPNLSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QPNLSRC/Rules.mk`).

## Purpose

The sources read for this object do not state a business purpose (`QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC`).

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| SAMMNU-Main_menu_application_SAMPLE.MENUSRC | `QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC` | `QPNLSRC/Rules.mk` |

Panel title text: "Arcad Sample Application" (`QPNLSRC/SAMMNU-Main_menu_application_SAMPLE.MENUSRC`).

## Options

| Option | Group | Label | Action | Help |
| --- | --- | --- | --- | --- |
| 1 | Master files | Work with Articles | cmd call ART200 | srt200 |
| 2 | Master files | Work with Customers | cmd call CUS200 | cus200 |
| 3 | Master files | Work with Customer Orders | cmd call ORD201 | cus200 |
| 4 | Master files | Work with Providers | cmd call pro200 | pro200 |
| 5 | Master files | Display Providers | cmd call pro201 | pro200 |
| 6 | Master files | Create a Customer Order. | cmd call ORD100C2 | ord100 |
| 10 | Reports | Article to purchase | cmd call pro203 | nohelp |
| 11 | Reports | Customer with Open Order | cmd STRQMQRY QMQRY(CUSQRY) QMFORM(CUSQRYFMT) | nohelp |
| 12 | Reports | Article by Last Order Date | cmd STRQMQRY QMQRY(ARTQRY) | nohelp |
| 20 | Utilities | Work with Parameters | cmd call par200 | nohelp |
| 21 | Utilities | Work with countries | cmd call cou200 | nohelp |
| 80 | Utilities | Reset LASTORDNO | cmd call ord900 | nohelp |
| 81 | Utilities | Reset Order dates to current | cmd call ord901 | nohelp |
| 82 | Utilities | Reset Summary Fields | cmd call art801 | nohelp |
| 83 | Utilities | Work with IFS output | cmd call par201 | nohelp |
| 84 | Utilities | Display Application log | cmd adspusrspc samlog | nohelp |
| 90 | Utilities | Signoff | cmd signoff | nohelp |

## Keys

| Key | Action | Text |
| --- | --- | --- |
| F1 | HELP. | HELP=help |
| F3 | exit set | HELP=help |
| F4 | PROMPT. | HELP=help |
| F6 | cmd dspmsg | HELP=help |
| F9 | retrieve | help=help |
| F10 | cmd dspjoblog | help=help |
| F12 | cancel set | help=help |
| F14 | cmd wrksbmjob *user | help=help |
| F24 | MOREKEYS. | help=help |
| ENTER | ENTER. | help=help |
| HELP | HELP. | HELP=help |
| PAGEDOWN | PAGEDOWN. | help=help |
| PAGEUP | PAGEUP. | help=help |
| PRINT | PRINT. | help=help |

No open question was raised from this page.

