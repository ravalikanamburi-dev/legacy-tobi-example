namespace Tobi.Cobol.Core;

/// <summary>
/// Record FPROV from QDDSSRC/PROVIDER.PF, with lengths from common/SAMREF.PF.
/// COPY DDS-FPROV is not stored in the checkout; this type is the .NET stand-in.
/// </summary>
public sealed class ProviderRecord
{
    /// <summary>PRID 5P 0. SAMREF line 37.</summary>
    public decimal PrId { get; init; }

    /// <summary>PROVNM 30. SAMREF line 40.</summary>
    public string ProvNm { get; init; } = "";

    /// <summary>PRCONT 30. PROVIDER.PF line 5.</summary>
    public string PrCont { get; init; } = "";

    /// <summary>PRPHONE REFFLD(PHONE) 15. SAMREF line 42.</summary>
    public string PrPhone { get; init; } = "";

    /// <summary>PRVAT REFFLD(VATNUM) 12. SAMREF line 61.</summary>
    public string PrVat { get; init; } = "";

    /// <summary>PRMAIL REFFLD(EMAIL) 50. SAMREF line 29.</summary>
    public string PrMail { get; init; } = "";

    /// <summary>PRLINE1-3 REFFLD(ADRLINE) 50. SAMREF line 6.</summary>
    public string PrLine1 { get; init; } = "";

    public string PrLine2 { get; init; } = "";

    public string PrLine3 { get; init; } = "";

    /// <summary>PRZIP REFFLD(ZIPCOD) 10. SAMREF line 67.</summary>
    public string PrZip { get; init; } = "";

    /// <summary>PRCITY REFFLD(CITY) 30. SAMREF line 19.</summary>
    public string PrCity { get; init; } = "";

    /// <summary>PRCOUN REFFLD(COID) 2. SAMREF line 15.</summary>
    public string PrCoun { get; init; } = "";

    /// <summary>PRCREA L. PROVIDER.PF line 15.</summary>
    public DateOnly? PrCrea { get; init; }

    /// <summary>PRMOD Z. PROVIDER.PF line 17.</summary>
    public DateTimeOffset? PrMod { get; init; }

    /// <summary>PRMODID 10. PROVIDER.PF line 19.</summary>
    public string PrModId { get; init; } = "";

    /// <summary>PRDEL REFFLD(DLCODE) 1. SAMREF line 23.</summary>
    public string PrDel { get; init; } = "";
}
