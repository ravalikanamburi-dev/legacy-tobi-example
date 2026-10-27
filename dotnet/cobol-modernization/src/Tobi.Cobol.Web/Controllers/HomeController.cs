using Microsoft.AspNetCore.Mvc;
using Tobi.Cobol.Core;

namespace Tobi.Cobol.Web.Controllers;

public sealed class HomeController : Controller
{
    public IActionResult Index()
    {
        ViewBag.VerifyErrors = VerifyCobol.CountErrors();
        ViewBag.Copybook = SimpleCopybook.WsMessage;
        return View();
    }
}
