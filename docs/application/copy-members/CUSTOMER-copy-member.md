# CUSTOMER (copy-member)

|  |  |
| --- | --- |
| Source | `QPROTOSRC/CUSTOMER.RPGLEINC` |
| Language | RPGLE |
| Class | copy-member |
| Role | include |
| Build target | No active build target |
| Inactive targets |  |
| CCSID | 297 from `QPROTOSRC/.ibmi.json` |

## Purpose

The sources read for this member do not state a business purpose (`QPROTOSRC/CUSTOMER.RPGLEINC`).

## Prototypes and declarations

| Name | Declaration | Evidence |
| --- | --- | --- |
| GetCusName | DGetCusName       PR            30 | `QPROTOSRC/CUSTOMER.RPGLEINC`:4 |
| GetCusPhone | DGetCusPhone      PR            15 | `QPROTOSRC/CUSTOMER.RPGLEINC`:9 |
| GetCusVat | DGetCusVat        PR            12 | `QPROTOSRC/CUSTOMER.RPGLEINC`:14 |
| GetCusMail | DGetCusMail       PR            50 | `QPROTOSRC/CUSTOMER.RPGLEINC`:19 |
| GetCusAdrline1 | DGetCusAdrline1   PR            50 | `QPROTOSRC/CUSTOMER.RPGLEINC`:24 |
| GetCusAdrline2 | DGetCusAdrline2   PR            50 | `QPROTOSRC/CUSTOMER.RPGLEINC`:29 |
| GetCusAdrline3 | DGetCusAdrline3   PR            50 | `QPROTOSRC/CUSTOMER.RPGLEINC`:34 |
| GetCusZip | DGetCusZip        PR            10 | `QPROTOSRC/CUSTOMER.RPGLEINC`:39 |
| GetCusCity | DGetCusCity       PR            30 | `QPROTOSRC/CUSTOMER.RPGLEINC`:44 |
| GetCusCountry | DGetCusCountry    PR             2 | `QPROTOSRC/CUSTOMER.RPGLEINC`:49 |
| GetCusLimCredit | DGetCusLimCredit  PR             9  2 | `QPROTOSRC/CUSTOMER.RPGLEINC`:54 |
| GetCusCredit | DGetCusCredit     PR             9  2 | `QPROTOSRC/CUSTOMER.RPGLEINC`:59 |
| ExistCus | D ExistCus        Pr              n | `QPROTOSRC/CUSTOMER.RPGLEINC`:68 |
| IsCusDeleted | DIsCusDeleted     PR              n | `QPROTOSRC/CUSTOMER.RPGLEINC`:73 |
| sltcustomer | D sltcustomer     PR             5p 0 | `QPROTOSRC/CUSTOMER.RPGLEINC`:76 |
| CloseCUSTOME1 | D CloseCUSTOME1   PR | `QPROTOSRC/CUSTOMER.RPGLEINC`:81 |

## Included from

| Source |
| --- |
| QRPGLESRC/CUS300.RPGLE |
| QRPGLESRC/CUS301.SQLRPGLE |
| QRPGLESRC/ORD100.PGM.RPGLE |
| QRPGLESRC/ORD101.PGM.RPGLE |
| QTESTSRC/cus300.test.sqlrpgle |

No open question was raised from this page.

