# SAMPLE (BNDDIR)

|  |  |
| --- | --- |
| Source | `QBNDSRC/SAMPLE.BNDDIR` |
| Language | BNDDIR |
| Class | binding-directory |
| Section | binding-directories |
| Object text | No TEXT value is stored on the build rule or in a source header. |
| CCSID | 37 from `.ibmi.json` |
| Build manifest | `QBNDSRC/Rules.mk` |
| Activation group |  |

No TEXT value is stored on the build rule or in a source header (`QBNDSRC/Rules.mk`).

## Purpose

Header comments in the source: /* Have to delete the BNDDIR, or it will always be older than the source */ /* because the CRTBNDDIR will fail the second time and only the ADDBNDDIRE is executed */

## Build

| Prerequisite | Resolved | Evidence |
| --- | --- | --- |
| SAMPLE.BNDDIR | `QBNDSRC/SAMPLE.BNDDIR` | `QBNDSRC/Rules.mk` |
| XML.SRVPGM | [XML.SRVPGM](../service-programs/XML-SRVPGM.md) | `QBNDSRC/Rules.mk` |
| TXT.SRVPGM | [TXT.SRVPGM](../service-programs/TXT-SRVPGM.md) | `QBNDSRC/Rules.mk` |
| FARTICLE.SRVPGM | [FARTICLE.SRVPGM](../service-programs/FARTICLE-SRVPGM.md) | `QBNDSRC/Rules.mk` |
| FCUSTOMER.SRVPGM | [FCUSTOMER.SRVPGM](../service-programs/FCUSTOMER-SRVPGM.md) | `QBNDSRC/Rules.mk` |
| FFAMILLY.SRVPGM | [FFAMILLY.SRVPGM](../service-programs/FFAMILLY-SRVPGM.md) | `QBNDSRC/Rules.mk` |
| FPARAMETER.SRVPGM | [FPARAMETER.SRVPGM](../service-programs/FPARAMETER-SRVPGM.md) | `QBNDSRC/Rules.mk` |
| FPROVIDER.SRVPGM | [FPROVIDER.SRVPGM](../service-programs/FPROVIDER-SRVPGM.md) | `QBNDSRC/Rules.mk` |
| LOG.SRVPGM | [LOG.SRVPGM](../service-programs/LOG-SRVPGM.md) | `QBNDSRC/Rules.mk` |

## Bound objects in the source

| Object | Type |
| --- | --- |
| XML | SRVPGM |
| ORDER | SRVPGM |
| TXT | SRVPGM |
| XSS | SRVPGM |
| FARTICLE | SRVPGM |
| FCUSTOMER | SRVPGM |
| FFAMILLY | SRVPGM |
| FPARAMETER | SRVPGM |
| FPROVIDER | SRVPGM |
| FVAT | SRVPGM |
| LOG | SRVPGM |

## Disagreement

These source entries are not prerequisite names on the build target.

| Object | Type |
| --- | --- |
| ORDER | SRVPGM |
| XSS | SRVPGM |
| FVAT | SRVPGM |

## Not evidenced

| Topic | What is missing |
| --- | --- |
| SAMPLE.BNDDIR binding directory | Binding directory source and build prerequisites do not list the same objects. |

