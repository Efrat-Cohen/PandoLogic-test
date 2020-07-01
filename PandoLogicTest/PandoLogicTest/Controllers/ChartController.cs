using Microsoft.AspNetCore.Mvc;
using PandoLogicTest.Models;
using PandoLogicTest.Models.Interfaces;
using PandoLogicTest.Models.Requests;

namespace PandoLogicTest.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class ChartController : ControllerBase
    {
        private readonly IChartManager _chartManager;

        public ChartController(IChartManager chartManager)
        {
            _chartManager = chartManager;
        }

        [HttpPost]
        public ActionResult<ChartData> GetChartData(GetChartDataRequest request)
        {
            var data = _chartManager.GetChartData(request);
            return data;
        }
    }
}