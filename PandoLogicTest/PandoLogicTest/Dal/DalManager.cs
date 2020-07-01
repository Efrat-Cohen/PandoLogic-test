using PandoLogicTest.Models;
using PandoLogicTest.Models.Interfaces;
using PandoLogicTest.Models.Requests;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;

namespace PandoLogicTest.Dal
{
    public class DalManager : IDalManager
    {
        public ChartData GetChartData(GetChartDataRequest request)
        {
            
            var stringData = File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "dal/data.txt"));
            var data = JsonSerializer.Deserialize<ChartData>(stringData);

            data.ListDataPerDay = data.ListDataPerDay.Where(x => x.Day.Date >= request.From.Date && x.Day.Date <= request.To.Date);

            return data;
        }
    }
}