namespace Tobi.Cobol.Core;

/// <summary>
/// Interactive replacement for QCBLSRC/PRO201.CBLLE.
/// Panel and step letters match that member: P/L/D/F/C/A and LOAD.
/// </summary>
public sealed class Pro201Program
{
    public const int SubfilePage = 14;
    public const char Prp = 'P';
    public const char Load = 'L';
    public const char Dsp = 'D';
    public const char Fkey = 'F';
    public const char Chk = 'C';
    public const char Act = 'A';

    private readonly IArt202Gateway _art202;
    private readonly List<ProviderRecord> _provide1;
    private readonly List<SubfileRow> _subfile = new();
    private int _fileIndex;
    private FunctionKey _key;
    private bool _awaiting;

    public Pro201Program(IProviderFile providerFile, IArt202Gateway art202)
    {
        _art202 = art202;
        _provide1 = providerFile.ReadSequential().OrderBy(p => p.PrId).ToList();
    }

    public int Panel { get; private set; } = 1;
    public char Step01 { get; private set; } = Prp;
    public char Step02 { get; private set; } = Prp;
    public int SavedRrn { get; private set; }
    public int Rrb01 { get; private set; }
    public bool EndOfFile { get; private set; }
    public bool InvalidOption { get; private set; }
    public bool DisplaySubfile { get; private set; }
    public bool Exited { get; private set; }
    public decimal? LastArt202ProviderId { get; private set; }
    public SubfileRow? Detail { get; private set; }

    public IReadOnlyList<SubfileRow> Subfile => _subfile;

    public IReadOnlyList<SubfileRow> VisiblePage
    {
        get
        {
            if (_subfile.Count == 0)
            {
                return _subfile;
            }

            var start = Math.Max(Rrb01 - 1, 0);
            return _subfile.Skip(start).Take(SubfilePage).ToList();
        }
    }

    public void Start()
    {
        PgmInit();
        RunUntilWait();
    }

    public void Submit(FunctionKey key, IReadOnlyDictionary<int, int> optionsByRrn)
    {
        if (Exited)
        {
            return;
        }

        LastArt202ProviderId = null;
        _key = key;
        foreach (var pair in optionsByRrn)
        {
            var row = _subfile.FirstOrDefault(r => r.Rrn == pair.Key);
            if (row is null)
            {
                continue;
            }

            row.Opt01 = pair.Value;
            row.Modified = true;
        }

        if (Panel == 1 && Step01 == Dsp)
        {
            InvalidOption = false;
            Step01 = Fkey;
        }
        else if (Panel == 2 && Step02 == Dsp)
        {
            Step02 = Fkey;
        }

        _awaiting = false;
        RunUntilWait();
    }

    private void RunUntilWait()
    {
        var guard = 0;
        while (!Exited && !_awaiting && Panel != 0 && guard++ < 200)
        {
            switch (Panel)
            {
                case 1:
                    Pnl01();
                    break;
                case 2:
                    Pnl02();
                    break;
                default:
                    PgmEnd();
                    break;
            }
        }

        if (Panel == 0)
        {
            PgmEnd();
        }
    }

    private void Pnl01()
    {
        switch (Step01)
        {
            case Prp:
                Prp01();
                break;
            case Load:
                Lod01();
                break;
            case Dsp:
                Dsp01();
                break;
            case Fkey:
                Fkey01();
                break;
            case Chk:
                Chk01();
                break;
            case Act:
                Act01();
                break;
        }
    }

    private void Prp01()
    {
        _subfile.Clear();
        SavedRrn = 0;
        EndOfFile = false;
        _fileIndex = 0;
        ReadProvide1();
        Step01 = Load;
    }

    private void Lod01()
    {
        var rrn01 = SavedRrn;
        Rrb01 = rrn01 + 1;
        var teller = 0;
        while (!EndOfFile && teller < SubfilePage)
        {
            rrn01++;
            teller++;
            var row = SubfileRow.FromProvider(_provide1[_fileIndex - 1], rrn01);
            _subfile.Add(row);
            ReadProvide1();
        }

        SavedRrn = rrn01;
        Step01 = Dsp;
    }

    private void Dsp01()
    {
        DisplaySubfile = SavedRrn != 0;
        _awaiting = true;
    }

    private void Fkey01()
    {
        switch (_key)
        {
            case FunctionKey.F3:
                Panel = 0;
                Step01 = Prp;
                break;
            case FunctionKey.F12:
                Panel -= 1;
                Step01 = Prp;
                break;
            case FunctionKey.PageDown:
                Step01 = Load;
                break;
            default:
                Step01 = Chk;
                break;
        }
    }

    private void Chk01()
    {
        Step01 = Act;
        foreach (var row in _subfile.Where(r => r.Modified).ToList())
        {
            if (row.Opt01 != 0 && row.Opt01 != 2 && row.Opt01 != 5)
            {
                InvalidOption = true;
                Step01 = Dsp;
            }

            row.Modified = row.Opt01 != 0;
        }
    }

    private void Act01()
    {
        var row = _subfile.FirstOrDefault(r => r.Modified && (r.Opt01 == 2 || r.Opt01 == 5));
        if (row is null)
        {
            Step01 = Dsp;
            return;
        }

        if (row.Opt01 == 2)
        {
            Panel = 2;
            Detail = row;
            row.Opt01 = 0;
            row.Modified = false;
            return;
        }

        LastArt202ProviderId = row.PrId;
        _art202.Call(row.PrId);
        row.Opt01 = 0;
        row.Modified = false;
    }

    private void Pnl02()
    {
        switch (Step02)
        {
            case Prp:
                Prp02();
                break;
            case Dsp:
                Dsp02();
                break;
            case Fkey:
                Fkey02();
                break;
        }
    }

    private void Prp02()
    {
        Step02 = Dsp;
    }

    private void Dsp02()
    {
        _awaiting = true;
    }

    private void Fkey02()
    {
        switch (_key)
        {
            case FunctionKey.F3:
                Panel = 1;
                Step02 = Prp;
                Step01 = Prp;
                break;
            case FunctionKey.F12:
                Panel -= 1;
                Step02 = Prp;
                Step01 = Dsp;
                break;
            default:
                Panel -= 1;
                Step02 = Prp;
                break;
        }
    }

    private void PgmInit()
    {
        Panel = 1;
        Step01 = Prp;
        Step02 = Prp;
        Exited = false;
        InvalidOption = false;
        LastArt202ProviderId = null;
        Detail = null;
        _fileIndex = 0;
        EndOfFile = false;
        _subfile.Clear();
    }

    private void PgmEnd()
    {
        Exited = true;
        Panel = 0;
        _awaiting = false;
    }

    private void ReadProvide1()
    {
        if (_fileIndex >= _provide1.Count)
        {
            EndOfFile = true;
            return;
        }

        _fileIndex++;
    }
}
