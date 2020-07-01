using PandoLogicTest.Models.Requests;

namespace PandoLogicTest.Models.Interfaces
{
    public interface IDalManager
    {
        public ChartData GetChartData(GetChartDataRequest request);
    }
}