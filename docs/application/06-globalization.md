# Globalization and CCSID

Compile CCSID comes from the nearest `.ibmi.json`. The root file supplies the default. A nearer file overrides it for that directory. A directory name is not treated as a language.

## CCSID files

| Directory | tgtCcsid | Source |
| --- | --- | --- |
| . | 37 | .ibmi.json |
| functionsVAT | 500 | functionsVAT/.ibmi.json |
| globalization/CHS | 935 | globalization/CHS/.ibmi.json |
| globalization/DEU | 273 | globalization/DEU/.ibmi.json |
| globalization/HEB | 424 | globalization/HEB/.ibmi.json |
| QCBLSRC | 500 | QCBLSRC/.ibmi.json |
| QCLSRC | 500 | QCLSRC/.ibmi.json |
| QCMDSRC | 500 | QCMDSRC/.ibmi.json |
| QPROTOSRC | 297 | QPROTOSRC/.ibmi.json |
| QRPGLESRC | 297 | QRPGLESRC/.ibmi.json |
| QSQLSRC | 297 | QSQLSRC/.ibmi.json |
| QSRVSRC | 297 | QSRVSRC/.ibmi.json |
| QTRGSRC | 297 | QTRGSRC/.ibmi.json |

## Files whose CCSID is not the root default

| Path | tgtCcsid | CCSID file |
| --- | --- | --- |
| functionsVAT/.ibmi.json | 500 | functionsVAT/.ibmi.json |
| functionsVAT/fvat.bnd | 500 | functionsVAT/.ibmi.json |
| functionsVAT/Rules.mk | 500 | functionsVAT/.ibmi.json |
| functionsVAT/vat300.rpgle | 500 | functionsVAT/.ibmi.json |
| functionsVAT/vatdef.pf | 500 | functionsVAT/.ibmi.json |
| globalization/CHS/.ibmi.json | 935 | globalization/CHS/.ibmi.json |
| globalization/CHS/CHS.RPGLE | 935 | globalization/CHS/.ibmi.json |
| globalization/CHS/Rules.mk | 935 | globalization/CHS/.ibmi.json |
| globalization/DEU/.ibmi.json | 273 | globalization/DEU/.ibmi.json |
| globalization/DEU/Däöü.RPGLE | 273 | globalization/DEU/.ibmi.json |
| globalization/DEU/DEU.RPGLE | 273 | globalization/DEU/.ibmi.json |
| globalization/DEU/Rules.mk | 273 | globalization/DEU/.ibmi.json |
| globalization/HEB/.ibmi.json | 424 | globalization/HEB/.ibmi.json |
| globalization/HEB/heb.pgm.rpgle | 424 | globalization/HEB/.ibmi.json |
| globalization/HEB/Rules.mk | 424 | globalization/HEB/.ibmi.json |
| QCBLSRC/.ibmi.json | 500 | QCBLSRC/.ibmi.json |
| QCBLSRC/PRO201.CBLLE | 500 | QCBLSRC/.ibmi.json |
| QCBLSRC/Rules.mk | 500 | QCBLSRC/.ibmi.json |
| QCBLSRC/SMPL.CBL | 500 | QCBLSRC/.ibmi.json |
| QCBLSRC/verify.pgm.cblle | 500 | QCBLSRC/.ibmi.json |
| QCBLSRC/verifysql.sqlcblle | 500 | QCBLSRC/.ibmi.json |
| QCBLSRC/verifysqlp.pgm.sqlcblle | 500 | QCBLSRC/.ibmi.json |
| QCLSRC/.ibmi.json | 500 | QCLSRC/.ibmi.json |
| QCLSRC/OPM.CLP | 500 | QCLSRC/.ibmi.json |
| QCLSRC/ORD100C.PGM.CLLE | 500 | QCLSRC/.ibmi.json |
| QCLSRC/ORD100C2.PGM.CLLE | 500 | QCLSRC/.ibmi.json |
| QCLSRC/ORD500C.PGM.CLLE | 500 | QCLSRC/.ibmi.json |
| QCLSRC/PAR201.CLLE | 500 | QCLSRC/.ibmi.json |
| QCLSRC/Rules.mk | 500 | QCLSRC/.ibmi.json |
| QCMDSRC/.ibmi.json | 500 | QCMDSRC/.ibmi.json |
| QCMDSRC/CRTORD.CMD | 500 | QCMDSRC/.ibmi.json |
| QCMDSRC/CVTSPLPDF.CMDSRC | 500 | QCMDSRC/.ibmi.json |
| QCMDSRC/Rules.mk | 500 | QCMDSRC/.ibmi.json |
| QPROTOSRC/.ibmi.json | 297 | QPROTOSRC/.ibmi.json |
| QPROTOSRC/APICALL-Prototypes_for_Ibm_API.RPGLEINC | 297 | QPROTOSRC/.ibmi.json |
| QPROTOSRC/ARTICLE.RPGLEINC | 297 | QPROTOSRC/.ibmi.json |
| QPROTOSRC/COUNTRY.RPGLEINC | 297 | QPROTOSRC/.ibmi.json |
| QPROTOSRC/CPY01.RPGINC | 297 | QPROTOSRC/.ibmi.json |
| QPROTOSRC/CPYBK1.RPG | 297 | QPROTOSRC/.ibmi.json |
| QPROTOSRC/CPYBK2.RPG | 297 | QPROTOSRC/.ibmi.json |
| QPROTOSRC/CUSTOMER.RPGLEINC | 297 | QPROTOSRC/.ibmi.json |
| QPROTOSRC/DATACPY.CBL | 297 | QPROTOSRC/.ibmi.json |
| QPROTOSRC/FAMILLY.RPGLEINC | 297 | QPROTOSRC/.ibmi.json |
| QPROTOSRC/LOG_functions.RPGLEINC | 297 | QPROTOSRC/.ibmi.json |
| QPROTOSRC/PARAMETER.RPGLEINC | 297 | QPROTOSRC/.ibmi.json |
| QPROTOSRC/PROVIDER.RPGLEINC | 297 | QPROTOSRC/.ibmi.json |
| QPROTOSRC/README.md | 297 | QPROTOSRC/.ibmi.json |
| QPROTOSRC/txt.rpgleinc | 297 | QPROTOSRC/.ibmi.json |
| QPROTOSRC/VAR1.RPG | 297 | QPROTOSRC/.ibmi.json |
| QPROTOSRC/VAT.RPGLEINC | 297 | QPROTOSRC/.ibmi.json |
| QPROTOSRC/XML.RPGLEINC | 297 | QPROTOSRC/.ibmi.json |
| QPROTOSRC/XSS.RPGLEINC | 297 | QPROTOSRC/.ibmi.json |
| QRPGLESRC/.ibmi.json | 297 | QRPGLESRC/.ibmi.json |
| QRPGLESRC/ADDNUM.RPGLE | 297 | QRPGLESRC/.ibmi.json |
| QRPGLESRC/ART200-Work_with_article.PGM.SQLRPGLE | 297 | QRPGLESRC/.ibmi.json |
| QRPGLESRC/ART201-Work_with_article.PGM.RPGLE | 297 | QRPGLESRC/.ibmi.json |
| QRPGLESRC/ART202-Function_Article.PGM.RPGLE | 297 | QRPGLESRC/.ibmi.json |
| QRPGLESRC/ART300-Function_Article.RPGLE | 297 | QRPGLESRC/.ibmi.json |
| QRPGLESRC/ART301.SQLRPGLE | 297 | QRPGLESRC/.ibmi.json |
| QRPGLESRC/ART302.SQLRPGLE | 297 | QRPGLESRC/.ibmi.json |
| QRPGLESRC/COU300.RPGLE | 297 | QRPGLESRC/.ibmi.json |
| QRPGLESRC/COU301.RPGLE | 297 | QRPGLESRC/.ibmi.json |
| QRPGLESRC/CUS300.RPGLE | 297 | QRPGLESRC/.ibmi.json |
| QRPGLESRC/CUS301.SQLRPGLE | 297 | QRPGLESRC/.ibmi.json |
| QRPGLESRC/DAT001.RPGLE | 297 | QRPGLESRC/.ibmi.json |
| QRPGLESRC/DAT002.RPGLE | 297 | QRPGLESRC/.ibmi.json |
| QRPGLESRC/FAM300.RPGLE | 297 | QRPGLESRC/.ibmi.json |
| QRPGLESRC/FAM301.RPGLE | 297 | QRPGLESRC/.ibmi.json |
| QRPGLESRC/LOG100.PGM.RPGLE | 297 | QRPGLESRC/.ibmi.json |
| QRPGLESRC/LOG300.RPGLE | 297 | QRPGLESRC/.ibmi.json |
| QRPGLESRC/ORD100.PGM.RPGLE | 297 | QRPGLESRC/.ibmi.json |
| QRPGLESRC/ORD101.PGM.RPGLE | 297 | QRPGLESRC/.ibmi.json |
| QRPGLESRC/ORD200.PGM.SQLRPGLE | 297 | QRPGLESRC/.ibmi.json |
| QRPGLESRC/ORD201.PGM.SQLRPGLE | 297 | QRPGLESRC/.ibmi.json |
| QRPGLESRC/ORD202.PGM.RPGLE | 297 | QRPGLESRC/.ibmi.json |
| QRPGLESRC/ORD700.PGM.RPGLE | 297 | QRPGLESRC/.ibmi.json |
| QRPGLESRC/ORD900.PGM.RPGLE | 297 | QRPGLESRC/.ibmi.json |
| QRPGLESRC/ORD901.PGM.SQLRPGLE | 297 | QRPGLESRC/.ibmi.json |
| QRPGLESRC/PAR200.RPGLE | 297 | QRPGLESRC/.ibmi.json |
| QRPGLESRC/PAR300.RPGLE | 297 | QRPGLESRC/.ibmi.json |
| QRPGLESRC/PRO200.RPGLE | 297 | QRPGLESRC/.ibmi.json |
| QRPGLESRC/PRO202.SQLRPGLE | 297 | QRPGLESRC/.ibmi.json |
| QRPGLESRC/PRO300.RPGLE | 297 | QRPGLESRC/.ibmi.json |
| QRPGLESRC/Rules.mk | 297 | QRPGLESRC/.ibmi.json |
| QRPGLESRC/TXT001.RPGLE | 297 | QRPGLESRC/.ibmi.json |
| QRPGLESRC/XML001.RPGLE | 297 | QRPGLESRC/.ibmi.json |
| QSQLSRC/.ibmi.json | 297 | QSQLSRC/.ibmi.json |
| QSQLSRC/ART801.SQLPRC | 297 | QSQLSRC/.ibmi.json |
| QSQLSRC/ARTIINF.TABLE | 297 | QSQLSRC/.ibmi.json |
| QSQLSRC/ARTLSTDAT.VIEW | 297 | QSQLSRC/.ibmi.json |
| QSQLSRC/CUSSEQ.SQLSEQ | 297 | QSQLSRC/.ibmi.json |
| QSQLSRC/CUSTINFO1.PFSQL | 297 | QSQLSRC/.ibmi.json |
| QSQLSRC/CUSTTBL.TABLE | 297 | QSQLSRC/.ibmi.json |
| QSQLSRC/ISOTODATE.SQLUDF | 297 | QSQLSRC/.ibmi.json |
| QSQLSRC/ISOTODATE4.SQLUDF | 297 | QSQLSRC/.ibmi.json |
| QSQLSRC/ORD701.SQLTRG | 297 | QSQLSRC/.ibmi.json |
| QSQLSRC/ORDERCUS.VIEW | 297 | QSQLSRC/.ibmi.json |
| QSQLSRC/readme.md | 297 | QSQLSRC/.ibmi.json |
| QSQLSRC/Rules.mk | 297 | QSQLSRC/.ibmi.json |
| QSQLSRC/valuse.sqlvar | 297 | QSQLSRC/.ibmi.json |
| QSRVSRC/.ibmi.json | 297 | QSRVSRC/.ibmi.json |
| QSRVSRC/FARTICLE.BND | 297 | QSRVSRC/.ibmi.json |
| QSRVSRC/FCOUNTRY.BND | 297 | QSRVSRC/.ibmi.json |
| QSRVSRC/FCUSTOMER.BND | 297 | QSRVSRC/.ibmi.json |
| QSRVSRC/FFAMILLY.BND | 297 | QSRVSRC/.ibmi.json |
| QSRVSRC/FPROVIDER.BND | 297 | QSRVSRC/.ibmi.json |
| QSRVSRC/Rules.mk | 297 | QSRVSRC/.ibmi.json |
| QSRVSRC/TXT.BND | 297 | QSRVSRC/.ibmi.json |
| QSRVSRC/XML.BND | 297 | QSRVSRC/.ibmi.json |
| QTRGSRC/.ibmi.json | 297 | QTRGSRC/.ibmi.json |
| QTRGSRC/ORD700A.SYSTRG | 297 | QTRGSRC/.ibmi.json |
| QTRGSRC/ORD700D.SYSTRG | 297 | QTRGSRC/.ibmi.json |
| QTRGSRC/ORD700U.SYSTRG | 297 | QTRGSRC/.ibmi.json |
| QTRGSRC/Rules.mk | 297 | QTRGSRC/.ibmi.json |

The national language of each CCSID value is NOT EVIDENCED.

## Not read as UTF-8

Every inventoried file was read as UTF-8 from the working tree. That is the editor encoding, not the IBM i compile CCSID.

