namespace Tobi.Cobol.Core;

public sealed class RecordingArt202Gateway : IArt202Gateway
{
    public decimal? LastProviderId { get; private set; }

    public void Call(decimal providerId)
    {
        LastProviderId = providerId;
    }
}
