using PandoLogicTest.Models;
using PandoLogicTest.Models.Interfaces;
using PandoLogicTest.Models.Requests;

namespace PandoLogicTest.Managers
{
    public class ChartManager : IChartManager
    {
        private readonly IDalManager _dalManager;

        public ChartManager(IDalManager dalManager)
        {
            _dalManager = dalManager;
        }

        public ChartData GetChartData(GetChartDataRequest request)
        {
            var res = _dalManager.GetChartData(request);
            return res;
        }
    }
}