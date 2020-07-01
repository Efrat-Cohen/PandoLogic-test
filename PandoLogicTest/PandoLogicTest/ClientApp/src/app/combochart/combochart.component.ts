import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { error } from 'protractor';
import { DatePipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../appState';
import { ChartData } from '../models/testModel';

@Component({
  selector: 'app-combochart',
  templateUrl: './combochart.component.html',
  styleUrls: ['./combochart.component.css']
})
export class CombochartComponent implements OnInit {
  chartData: Observable<ChartData>;
  data: Array<any>;
  options: any;
  columnNames: Array<string>;
  chartWidth: number;

  constructor(public datepipe: DatePipe,
    private store: Store<AppState>) {
    this.chartData = store.select('chartData');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.chartWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.chartData.subscribe((res: ChartData) => {
      if (res) {
        this.data = new Array<any>();

        let that = this;
        res.listDataPerDay.forEach(function (item) {
          that.data.push([that.datepipe.transform(item.day, 'dd-MM'), item.activeJobs, item.comulativeJobViews, item.comulativePredictedJobView]);
        });
      }
    }, error => {
      console.log(error);
    });

    this.chartWidth = window.innerWidth;

    this.columnNames = ['Day', 'Active jobs', 'Comulative job views', 'Comulative predicted job views'];

    this.options = {
      title: 'Comulative job views vs. prediction',
      vAxis: { title: 'Job views' },
      series: {
        0: { color: '#dddddd', type: 'bars' },
        1: { color: '#00bdd2', type: 'line', lineDashStyle: [2, 2], pointShape: 'circle' },
        2: { color: '#8ac144', type: 'line' }
      },
      max: 100,
      selectionMode: 'multiple',
      tooltip: { trigger: 'focused', showColorCode: true },
      aggregationTarget: 'auto',
      focusTarget: 'category',
      legend: { position: 'bottom' }
    };
  }
}
