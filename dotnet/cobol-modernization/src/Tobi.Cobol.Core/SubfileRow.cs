namespace Tobi.Cobol.Core;

/// <summary>One SFL01 row from QDDSSRC/PRO201D.DSPF.</summary>
public sealed class SubfileRow
{
    public int Rrn { get; set; }
    public int Opt01 { get; set; }
    public decimal PrId { get; set; }
    public string ProvNm { get; set; } = "";
    public string PrCity { get; set; } = "";
    public string PrDel { get; set; } = "";
    public string PrCont { get; set; } = "";
    public string PrPhone { get; set; } = "";
    public string PrVat { get; set; } = "";
    public string PrMail { get; set; } = "";
    public string PrLine1 { get; set; } = "";
    public string PrLine2 { get; set; } = "";
    public string PrLine3 { get; set; } = "";
    public string PrZip { get; set; } = "";
    public DateOnly? PrCrea { get; set; }
    public bool Modified { get; set; }

    public static SubfileRow FromProvider(ProviderRecord provider, int rrn)
    {
        return new SubfileRow
        {
            Rrn = rrn,
            Opt01 = 0,
            PrId = provider.PrId,
            ProvNm = provider.ProvNm,
            PrCity = provider.PrCity,
            PrDel = provider.PrDel,
            PrCont = provider.PrCont,
            PrPhone = provider.PrPhone,
            PrVat = provider.PrVat,
            PrMail = provider.PrMail,
            PrLine1 = provider.PrLine1,
            PrLine2 = provider.PrLine2,
            PrLine3 = provider.PrLine3,
            PrZip = provider.PrZip,
            PrCrea = provider.PrCrea
        };
    }
}
