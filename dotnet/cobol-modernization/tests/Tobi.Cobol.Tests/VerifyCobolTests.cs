using Tobi.Cobol.Core;

namespace Tobi.Cobol.Tests;

public sealed class VerifyCobolTests
{
    [Fact]
    public void ArithmeticMatchesVerifyProgram()
    {
        Assert.Equal(0, VerifyCobol.CountErrors());
    }

    [Fact]
    public void SimpleCopybookMessage()
    {
        Assert.Equal("HELLO FROM COPYBOOK", SimpleCopybook.WsMessage);
    }
}
