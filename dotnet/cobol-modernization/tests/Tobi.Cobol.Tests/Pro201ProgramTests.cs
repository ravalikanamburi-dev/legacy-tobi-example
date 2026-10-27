using Tobi.Cobol.Core;

namespace Tobi.Cobol.Tests;

public sealed class Pro201ProgramTests
{
    [Fact]
    public void StartLoadsFirstPageOfFourteen()
    {
        var program = NewProgram();
        program.Start();
        Assert.Equal(1, program.Panel);
        Assert.Equal(Pro201Program.Dsp, program.Step01);
        Assert.Equal(14, program.VisiblePage.Count);
        Assert.Equal(1m, program.VisiblePage[0].PrId);
        Assert.False(program.EndOfFile);
    }

    [Fact]
    public void PageDownLoadsNextProviders()
    {
        var program = NewProgram();
        program.Start();
        program.Submit(FunctionKey.PageDown, new Dictionary<int, int>());
        Assert.Equal(20, program.Subfile.Count);
        Assert.Equal(15m, program.VisiblePage[0].PrId);
        Assert.True(program.EndOfFile);
    }

    [Fact]
    public void Option2OpensPanel2FromSubfileRow()
    {
        var program = NewProgram();
        program.Start();
        var rrn = program.VisiblePage[2].Rrn;
        program.Submit(FunctionKey.Enter, new Dictionary<int, int> { [rrn] = 2 });
        Assert.Equal(2, program.Panel);
        Assert.NotNull(program.Detail);
        Assert.Equal(3m, program.Detail!.PrId);
    }

    [Fact]
    public void Option5CallsArt202WithProviderId()
    {
        var art202 = new RecordingArt202Gateway();
        var program = new Pro201Program(new SampleProviderFile(), art202);
        program.Start();
        var rrn = program.VisiblePage[0].Rrn;
        program.Submit(FunctionKey.Enter, new Dictionary<int, int> { [rrn] = 5 });
        Assert.Equal(1, program.Panel);
        Assert.Equal(1m, art202.LastProviderId);
        Assert.Equal(0, program.Subfile.First(r => r.Rrn == rrn).Opt01);
    }

    [Fact]
    public void InvalidOptionStaysOnPanel1()
    {
        var program = NewProgram();
        program.Start();
        var rrn = program.VisiblePage[0].Rrn;
        program.Submit(FunctionKey.Enter, new Dictionary<int, int> { [rrn] = 9 });
        Assert.Equal(1, program.Panel);
        Assert.True(program.InvalidOption);
    }

    [Fact]
    public void F3EndsTheProgram()
    {
        var program = NewProgram();
        program.Start();
        program.Submit(FunctionKey.F3, new Dictionary<int, int>());
        Assert.True(program.Exited);
        Assert.Equal(0, program.Panel);
    }

    [Fact]
    public void F12OnPanel2ReturnsToListWithoutReload()
    {
        var program = NewProgram();
        program.Start();
        var rrn = program.VisiblePage[0].Rrn;
        program.Submit(FunctionKey.Enter, new Dictionary<int, int> { [rrn] = 2 });
        program.Submit(FunctionKey.F12, new Dictionary<int, int>());
        Assert.Equal(1, program.Panel);
        Assert.Equal(Pro201Program.Dsp, program.Step01);
        Assert.Equal(14, program.Subfile.Count);
    }

    private static Pro201Program NewProgram()
    {
        return new Pro201Program(new SampleProviderFile(), new RecordingArt202Gateway());
    }
}
