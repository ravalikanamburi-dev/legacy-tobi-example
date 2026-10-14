# ORD500O (FILE)

|  |  |
| --- | --- |
| Source | `QDDSSRC/ORD500O.PRTF` |
| Language | DDS |
| Class | printer-file |
| Section | reports |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 37 from `.ibmi.json` |
| Build manifest | `QDDSSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QDDSSRC/Rules.mk`).

## Purpose

A literal in the source reads "Company Sample".

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| ORD500O.PRTF | `QDDSSRC/ORD500O.PRTF` | `QDDSSRC/Rules.mk` |
| ORDER.FILE | [ORDER.FILE](../data-stores/ORDER-FILE.md) | `QDDSSRC/Rules.mk` |
| CUSTOMER.FILE | [CUSTOMER.FILE](../data-stores/CUSTOMER-FILE.md) | `QDDSSRC/Rules.mk` |
| DETORD.FILE | [DETORD.FILE](../data-stores/DETORD-FILE.md) | `QDDSSRC/Rules.mk` |
| ARTICLE.FILE | [ARTICLE.FILE](../data-stores/ARTICLE-FILE.md) | `QDDSSRC/Rules.mk` |

## Records

### HEADER

Record `HEADER` at `QDDSSRC/ORD500O.PRTF`:6. Keywords: `3 'Company Sample' +28 'Customer Order' 3 '55, rue Adrastee' 3 'F-74650 Chavanod'`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| SKIPB | (005) |  | `QDDSSRC/ORD500O.PRTF`:11 |
| SPACEB | (001) |  | `QDDSSRC/ORD500O.PRTF`:18 |
| SPACEB | (001) |  | `QDDSSRC/ORD500O.PRTF`:21 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| Company Sample | `QDDSSRC/ORD500O.PRTF`:13 |
| Customer Order | `QDDSSRC/ORD500O.PRTF`:15 |
| 55, rue Adrastee | `QDDSSRC/ORD500O.PRTF`:17 |
| F-74650 Chavanod | `QDDSSRC/ORD500O.PRTF`:20 |

### HEADER2

Record `HEADER2` at `QDDSSRC/ORD500O.PRTF`:27. Keywords: `41 'Customer' REFFLD(FORDE/ORCUID *LIBL/ORDER) REFFLD(FCUST/CUSTNM *LIBL/CUSTOMER) REFFLD(FCUST/CULINE1 *LIBL/CUSTOMER) REFFLD(FCUST/CULINE2 *LIBL/CUSTOMER) REFFLD(FCUST/CULINE3 *L`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| SPACEB | (001) |  | `QDDSSRC/ORD500O.PRTF`:31 |
| ORCUID | R        O    +1 |  | `QDDSSRC/ORD500O.PRTF`:34 |
| CUSTNM | R        O    41 |  | `QDDSSRC/ORD500O.PRTF`:36 |
| SPACEB | (001) |  | `QDDSSRC/ORD500O.PRTF`:38 |
| CULINE1 | R        O    41 |  | `QDDSSRC/ORD500O.PRTF`:39 |
| SPACEB | (001) |  | `QDDSSRC/ORD500O.PRTF`:41 |
| CULINE2 | R        O    41 |  | `QDDSSRC/ORD500O.PRTF`:42 |
| SPACEB | (001) |  | `QDDSSRC/ORD500O.PRTF`:44 |
| CULINE3 | R        O    41 |  | `QDDSSRC/ORD500O.PRTF`:45 |
| SPACEB | (001) |  | `QDDSSRC/ORD500O.PRTF`:47 |
| CUCOUN | R        O    41 |  | `QDDSSRC/ORD500O.PRTF`:48 |
| SPACEB | (001) |  | `QDDSSRC/ORD500O.PRTF`:50 |
| CUZIP | R        O    +1 |  | `QDDSSRC/ORD500O.PRTF`:51 |
| CUCITY | R        O    +1 |  | `QDDSSRC/ORD500O.PRTF`:53 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| Customer | `QDDSSRC/ORD500O.PRTF`:33 |

### HEADER3

Record `HEADER3` at `QDDSSRC/ORD500O.PRTF`:63. Keywords: `3 'Order Number' REFFLD(FORDE/ORYEAR *LIBL/ORDER) +0 '/' REFFLD(FORDE/ORID *LIBL/ORDER) 66'Order Date' 3 'Line' +3 'Article' +34 'Quantity' +2 'U.Price'`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| SPACEB | (001) |  | `QDDSSRC/ORD500O.PRTF`:68 |
| SKIPB | (018) |  | `QDDSSRC/ORD500O.PRTF`:69 |
| ORYEAR | R        O    +2 |  | `QDDSSRC/ORD500O.PRTF`:72 |
| ORID | R        O    +0 |  | `QDDSSRC/ORD500O.PRTF`:76 |
| DATORD | L       79DATFMT(*JOB) |  | `QDDSSRC/ORD500O.PRTF`:79 |
| SPACEB | (002) |  | `QDDSSRC/ORD500O.PRTF`:82 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| Order Number | `QDDSSRC/ORD500O.PRTF`:71 |
| / | `QDDSSRC/ORD500O.PRTF`:75 |
| Order Date | `QDDSSRC/ORD500O.PRTF`:78 |
| Line | `QDDSSRC/ORD500O.PRTF`:81 |
| Article | `QDDSSRC/ORD500O.PRTF`:84 |
| Quantity | `QDDSSRC/ORD500O.PRTF`:86 |
| U.Price | `QDDSSRC/ORD500O.PRTF`:88 |

### DETAIL

Record `DETAIL` at `QDDSSRC/ORD500O.PRTF`:93. Keywords: `REFFLD(FDETO/ODLINE *LIBL/DETORD) REFFLD(FDETO/ODQTY *LIBL/DETORD) REFFLD(FDETO/ODPRICE *LIBL/DETORD) REFFLD(FDETO/ODTOT *LIBL/DETORD) REFFLD(FDETO/ODARID *LIBL/DETORD) REFFLD(FART`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| SPACEB | (001) |  | `QDDSSRC/ORD500O.PRTF`:97 |
| ODLINE | R        O     3 |  | `QDDSSRC/ORD500O.PRTF`:98 |
| ODQTY | R        O   +46 |  | `QDDSSRC/ORD500O.PRTF`:100 |
| ODPRICE | R        O    +2 |  | `QDDSSRC/ORD500O.PRTF`:102 |
| ODTOT | R        O    +2 |  | `QDDSSRC/ORD500O.PRTF`:104 |
| ODARID | R        O     3 |  | `QDDSSRC/ORD500O.PRTF`:106 |
| SPACEB | (001) |  | `QDDSSRC/ORD500O.PRTF`:108 |
| ARDESC | R        O    10 |  | `QDDSSRC/ORD500O.PRTF`:109 |
| ODTOTVAT | R        O   +12 |  | `QDDSSRC/ORD500O.PRTF`:111 |
| HIGHLIGHT |  |  | `QDDSSRC/ORD500O.PRTF`:113 |

### TOTAL

Record `TOTAL` at `QDDSSRC/ORD500O.PRTF`:118. Keywords: `72 '============' 66 'Net' REFFLD(FDETO/ODTOTVAT *LIBL/DETORD) 66 'VAT' REFFLD(FDETO/ODTOTVAT *LIBL/DETORD) 64 'Total' REFFLD(FDETO/ODTOTVAT *LIBL/DETORD)`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| SPACEB | (002) |  | `QDDSSRC/ORD500O.PRTF`:123 |
| SKIPB | (052) |  | `QDDSSRC/ORD500O.PRTF`:124 |
| SPACEB | (001) |  | `QDDSSRC/ORD500O.PRTF`:128 |
| TOTNET | R        O    +3 |  | `QDDSSRC/ORD500O.PRTF`:130 |
| HIGHLIGHT |  |  | `QDDSSRC/ORD500O.PRTF`:132 |
| SPACEB | (001) |  | `QDDSSRC/ORD500O.PRTF`:134 |
| TOTVAT | R        O    +3 |  | `QDDSSRC/ORD500O.PRTF`:136 |
| HIGHLIGHT |  |  | `QDDSSRC/ORD500O.PRTF`:138 |
| SPACEB | (001) |  | `QDDSSRC/ORD500O.PRTF`:140 |
| TOTTOT | R        O    +3 |  | `QDDSSRC/ORD500O.PRTF`:142 |
| HIGHLIGHT |  |  | `QDDSSRC/ORD500O.PRTF`:144 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| ============ | `QDDSSRC/ORD500O.PRTF`:126 |
| Net | `QDDSSRC/ORD500O.PRTF`:129 |
| VAT | `QDDSSRC/ORD500O.PRTF`:135 |
| Total | `QDDSSRC/ORD500O.PRTF`:141 |

### FOOTER

Record `FOOTER` at `QDDSSRC/ORD500O.PRTF`:151. Keywords: `37 'This is the footer' +35 '.'`.

| Field | Reference or definition | Text | Evidence |
| --- | --- | --- | --- |
| SPACEB | (002) |  | `QDDSSRC/ORD500O.PRTF`:156 |
| SKIPB | (058) |  | `QDDSSRC/ORD500O.PRTF`:157 |

User-visible literals, quoted from the source:

| Literal | Evidence |
| --- | --- |
| This is the footer | `QDDSSRC/ORD500O.PRTF`:159 |
| . | `QDDSSRC/ORD500O.PRTF`:161 |

No open question was raised from this page.

