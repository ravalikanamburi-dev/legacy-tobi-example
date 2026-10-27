using Microsoft.AspNetCore.Mvc;
using Tobi.Cobol.Core;

namespace Tobi.Cobol.Web.Controllers;

public sealed class ProvidersController : Controller
{
    private readonly Pro201SessionStore _sessions;

    public ProvidersController(Pro201SessionStore sessions)
    {
        _sessions = sessions;
    }

    [HttpGet]
    public IActionResult Index()
    {
        var program = _sessions.GetOrStart(SessionKey());
        return ViewFor(program);
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public IActionResult Index(string command, Dictionary<int, int>? options)
    {
        var program = _sessions.GetOrStart(SessionKey());
        var key = command switch
        {
            "F3" => FunctionKey.F3,
            "F12" => FunctionKey.F12,
            "PageDown" => FunctionKey.PageDown,
            _ => FunctionKey.Enter
        };
        program.Submit(key, options ?? new Dictionary<int, int>());
        return ViewFor(program);
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public IActionResult Restart()
    {
        _sessions.Restart(SessionKey());
        return RedirectToAction(nameof(Index));
    }

    private IActionResult ViewFor(Pro201Program program)
    {
        if (program.Exited)
        {
            return View("Exited", program);
        }

        if (program.Panel == 2)
        {
            return View("Detail", program);
        }

        return View("Index", program);
    }

    private string SessionKey()
    {
        const string name = "pro201";
        var id = HttpContext.Session.GetString(name);
        if (string.IsNullOrEmpty(id))
        {
            id = Guid.NewGuid().ToString("N");
            HttpContext.Session.SetString(name, id);
        }

        return id;
    }
}
