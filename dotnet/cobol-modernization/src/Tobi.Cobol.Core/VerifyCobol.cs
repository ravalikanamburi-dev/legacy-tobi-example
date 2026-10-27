namespace Tobi.Cobol.Core;

/// <summary>
/// Arithmetic from QCBLSRC/verify.pgm.cblle and the SQL COBOL members.
/// EXEC SQL SET :A = 5 in those members assigns 5; it is not a table read.
/// </summary>
public static class VerifyCobol
{
    public const string SuccessLine = "ILE COBOL INSTALLATION IS VERIFIED.";
    public const string SqlSuccessLine = "ILE SQL COBOL PROGRAM SUCCESS.";

    public static int CountErrors()
    {
        int a = 5;
        int b = 2;
        int d = -5;
        int errors = 0;

        int c = a * b + d;
        if (a != 5 || b != 2 || d != -5 || c != 5)
        {
            errors++;
        }

        c = a + b + a + b;
        if (c != 14)
        {
            errors++;
        }

        c = a - b - d;
        if (c != 8)
        {
            errors++;
        }

        c = a / b;
        if (c != 2)
        {
            errors++;
        }

        return errors;
    }
}
