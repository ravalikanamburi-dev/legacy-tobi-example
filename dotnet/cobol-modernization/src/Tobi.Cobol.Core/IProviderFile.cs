namespace Tobi.Cobol.Core;

/// <summary>
/// Sequential indexed read of PROVIDE1 (QDDSSRC/PROVIDE1.LF, unique key PRID).
/// </summary>
public interface IProviderFile
{
    IReadOnlyList<ProviderRecord> ReadSequential();
}
