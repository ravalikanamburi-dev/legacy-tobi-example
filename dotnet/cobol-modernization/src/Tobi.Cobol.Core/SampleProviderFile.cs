namespace Tobi.Cobol.Core;

/// <summary>
/// In-memory PROVIDE1. The repository has no PROVIDER data members.
/// These rows exist so PRO201 can be exercised; they are not live IBM i records.
/// </summary>
public sealed class SampleProviderFile : IProviderFile
{
    public IReadOnlyList<ProviderRecord> ReadSequential()
    {
        var rows = new List<ProviderRecord>();
        for (var id = 1; id <= 20; id++)
        {
            rows.Add(new ProviderRecord
            {
                PrId = id,
                ProvNm = "Sample provider " + id.ToString("00000"),
                PrCont = "Contact " + id,
                PrPhone = "555-01" + id.ToString("000"),
                PrVat = "VAT" + id.ToString("00000000"),
                PrMail = "provider" + id + "@example.invalid",
                PrLine1 = "Line 1 for " + id,
                PrLine2 = "Line 2",
                PrZip = (10000 + id).ToString(),
                PrCity = "City " + id,
                PrCoun = "US",
                PrCrea = new DateOnly(2016, 11, 4),
                PrDel = id % 7 == 0 ? "1" : " "
            });
        }

        return rows;
    }
}
