using PandoLogicTest.Models.Requests;

namespace PandoLogicTest.Models.Interfaces
{
    public interface IChartManager
    {
        public ChartData GetChartData(GetChartDataRequest request);
    }
}