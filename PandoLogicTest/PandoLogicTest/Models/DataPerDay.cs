using System;

namespace PandoLogicTest.Models
{
    public class DataPerDay
    {
        public DateTime Day { get; set; }
        public int ActiveJobs { get; set; }
        public int ComulativeJobViews { get; set; }
        public int ComulativePredictedJobView { get; set; }
    }
}