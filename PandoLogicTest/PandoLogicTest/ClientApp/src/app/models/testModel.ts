export interface ChartData {
  listDataPerDay: Array<DataPerDay>;
}

export interface DataPerDay {
  day: Date;
  activeJobs: number;
  comulativeJobViews: number;
  comulativePredictedJobView: number;
}
