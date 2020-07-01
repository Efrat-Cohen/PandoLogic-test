using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PandoLogicTest.Models.Requests
{
    public class GetChartDataRequest
    {
        public DateTime From { get; set; }
        public DateTime To { get; set; }
    }
}
