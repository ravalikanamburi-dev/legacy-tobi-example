using System.Collections.Concurrent;
using Tobi.Cobol.Core;

namespace Tobi.Cobol.Web;

public sealed class Pro201SessionStore
{
    private readonly ConcurrentDictionary<string, Pro201Program> _sessions = new();
    private readonly IProviderFile _providers;

    public Pro201SessionStore(IProviderFile providers)
    {
        _providers = providers;
    }

    public Pro201Program GetOrStart(string sessionId)
    {
        return _sessions.GetOrAdd(sessionId, _ =>
        {
            var program = new Pro201Program(_providers, new RecordingArt202Gateway());
            program.Start();
            return program;
        });
    }

    public Pro201Program Restart(string sessionId)
    {
        var program = new Pro201Program(_providers, new RecordingArt202Gateway());
        program.Start();
        _sessions[sessionId] = program;
        return program;
    }
}
