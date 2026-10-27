namespace Tobi.Cobol.Core;

/// <summary>
/// COBOL CALL "ART202" USING PRID-WRK at QCBLSRC/PRO201.CBLLE:255.
/// ART202 is RPG (QRPGLESRC/ART202-Function_Article.PGM.RPGLE) and is not rewritten here.
/// </summary>
public interface IArt202Gateway
{
    void Call(decimal providerId);

    decimal? LastProviderId { get; }
}
