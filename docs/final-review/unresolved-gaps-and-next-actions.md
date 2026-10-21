# Unresolved gaps and next actions

These items are still open after the source search. Do not treat them as implemented behavior.

| Item | Status | Next action |
| --- | --- | --- |
| `ORD500` called from `ORD100`, `ORD101`, `ORD200`, and `ORD201` | Confirmed Missing | Recover the program source before documenting what the call does. `ORD500O` is a printer file and `ORD500C` is a different CL program. |
| Menu option 2 calls `CUS200` | Confirmed Missing | Recover the program. Display file `CUS200D` is not that program. |
| Menu option 10 calls `pro203` | Confirmed Missing | Recover the program. |
| Menu options 11 and 12 name `CUSQRY`, `CUSQRYFMT`, and `ARTQRY` | Confirmed Missing | Those Query Manager objects are not in this checkout. |
| Menu option 84 names user space `SAMLOG` | Confirmed Missing | No user-space source is in the checkout. |
| COBOL `COPY DDS-FPROV` and the other `DDS-` copybooks in `QCBLSRC/PRO201.CBLLE` | Unresolved | Confirm whether the compiler generates them from `PRO201D`. They are not stored as members. |
| `&lib1` in `iproj.json` | Unresolved | The production library name is not in the repository. Editor actions pass `lib1=&CURLIB`. |
| `SAMPLE.BNDDIR` versus `QBNDSRC/Rules.mk` | Partially Confirmed | The two lists differ (`ORDER`, `XSS`, and `FVAT` appear in the binder source). Reconcile them on the system before changing service programs. |
| `QTRGSRC` | Confirmed | The directory has `Rules.mk` and is not in the root subdirectory list, so a default `makei build` does not compile `ORD700A`, `ORD700D`, or `ORD700U`. |
| RPGUnit `QTESTSRC` | Confirmed | Two tests exist. The directory has no `Rules.mk` and is not in the root build list. |
| PDF | Outstanding | No PDF was generated. The Markdown package is the delivered form. |

Manual follow-up is required for `ORD500`, `CUS200`, `pro203`, the Query Manager objects, and `SAMLOG` before those paths can be specified from source.
