# COBOL to .NET (this checkout)

The process that produced this slice, and how to continue it, is in [docs/knowledge-transfer/cursor-poc-knowledge-transfer.md](../../docs/knowledge-transfer/cursor-poc-knowledge-transfer.md).

This folder is a .NET 10 port of the **COBOL members only**. It is not a rewrite of the RPG/CL application.

| COBOL source | .NET |
| --- | --- |
| `QCBLSRC/PRO201.CBLLE` + `QDDSSRC/PRO201D.DSPF` + `PROVIDE1` | Web app `/Providers` |
| `QCBLSRC/verify.pgm.cblle`, `verifysql.sqlcblle`, `verifysqlp.pgm.sqlcblle` | `VerifyCobol` + tests |
| `QCBLSRC/SMPL.CBL` + `QPROTOSRC/DATACPY.CBL` | `SimpleCopybook` |

Not ported: RPG (including `ART202`), CL, DDS programs other than the provider display, SQL tables, menu `SAMMNU`.

`COPY DDS-*` books are not in the repository. Field lengths come from `PROVIDER.PF` and `common/SAMREF.PF`. Provider rows are sample in-memory data.

## Run

```bash
dotnet test tests/Tobi.Cobol.Tests/Tobi.Cobol.Tests.csproj
dotnet run --project src/Tobi.Cobol.Web/Tobi.Cobol.Web.csproj --urls http://127.0.0.1:5068
```

Open `http://127.0.0.1:5068/Providers`. Option 2 opens FMT02. Option 5 records `CALL ART202`. F3 exits. Page down loads the next 14 rows (`SFLPAG` in the COBOL).
