# txt (copy-member)

|  |  |
| --- | --- |
| Source | `QPROTOSRC/txt.rpgleinc` |
| Language | RPGLE |
| Class | copy-member |
| Role | include |
| Build target | No active build target |
| Inactive targets |  |
| CCSID | 297 from `QPROTOSRC/.ibmi.json` |

## Purpose

The sources read for this member do not state a business purpose (`QPROTOSRC/txt.rpgleinc`).

Source form in this member: fixed-form (`QPROTOSRC/txt.rpgleinc`).

## Program calls

| Target | Kind | In this repository | Evidence |
| --- | --- | --- | --- |
| QCMDEXC | extpgm | external | `QPROTOSRC/txt.rpgleinc`:129 |

## Prototypes and declarations

| Name | Declaration | Evidence |
| --- | --- | --- |
| txtcrtfile | d txtcrtfile      pr              n | `QPROTOSRC/txt.rpgleinc`:23 |
| txtcrtpath | d txtcrtpath      pr | `QPROTOSRC/txt.rpgleinc`:27 |
| txtdltfile | d txtdltfile      pr              n | `QPROTOSRC/txt.rpgleinc`:34 |
| txtfileexist | d txtfileexist    pr              n | `QPROTOSRC/txt.rpgleinc`:41 |
| txtwrite | d txtwrite        pr | `QPROTOSRC/txt.rpgleinc`:44 |
| txtGets | d txtGets         pr            10u 0 | `QPROTOSRC/txt.rpgleinc`:48 |
| txtRead | d txtRead         pr              n | `QPROTOSRC/txt.rpgleinc`:51 |
| txtopnfile | d txtopnfile      pr              n | `QPROTOSRC/txt.rpgleinc`:55 |
| txtopnfile2 | d txtopnfile2     pr              n | `QPROTOSRC/txt.rpgleinc`:59 |
| txtclofile | d txtclofile      pr | `QPROTOSRC/txt.rpgleinc`:63 |
| DltIfsFile | d DltIfsFile      pr              n | `QPROTOSRC/txt.rpgleinc`:68 |
| CpyIfsFile | d CpyIfsFile      pr              n | `QPROTOSRC/txt.rpgleinc`:73 |
| MoveIfsFile | d MoveIfsFile     pr              n | `QPROTOSRC/txt.rpgleinc`:79 |
| OpnIfsDir | d OpnIfsDir       pr              n | `QPROTOSRC/txt.rpgleinc`:85 |
| ExistIfsDir | d ExistIfsDir     pr              n | `QPROTOSRC/txt.rpgleinc`:90 |
| CloIfsDir | d CloIfsDir       pr              n | `QPROTOSRC/txt.rpgleinc`:95 |
| ReadIfsDir | d ReadIfsDir      pr              n | `QPROTOSRC/txt.rpgleinc`:99 |
| GetIfsObjType | d GetIfsObjType   pr            10 | `QPROTOSRC/txt.rpgleinc`:104 |
| GetIfsObjSize | d GetIfsObjSize   pr            10i 0 | `QPROTOSRC/txt.rpgleinc`:109 |
| GetIfsObjCrtZ | d GetIfsObjCrtZ   pr              z | `QPROTOSRC/txt.rpgleinc`:120 |
| GetIfsObjModZ | d GetIfsObjModZ   pr              z | `QPROTOSRC/txt.rpgleinc`:126 |
| exec | D exec            pr                  extpgm('QCMDEXC') | `QPROTOSRC/txt.rpgleinc`:129 |

## Included from

| Source |
| --- |
| QRPGLESRC/XML001.RPGLE |

## Not evidenced

| Topic | What is missing |
| --- | --- |
| QCMDEXC | No source in this repository describes the called program QCMDEXC. |

