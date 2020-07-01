import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Store } from '@ngrx/store';
import { AppState } from '../appState';
import * as TestActions from './../actions/testActions'
import { Data } from '@angular/router';
import { ChartData } from '../models/testModel';


@Component({
  selector: 'app-select-range',
  templateUrl: './select-range.component.html',
  styleUrls: ['./select-range.component.css']
})
export class SelectRangeComponent implements OnInit {

  constructor(public appService: AppService,
    private store: Store<AppState>) { }

  fromRange: Data;
  toRange: Date;

  ngOnInit() {

  }

  updateData() {
    this.appService.getChartData(this.fromRange, this.toRange).subscribe((res: ChartData) => {
      this.store.dispatch(new TestActions.UpdateData(res));

    }, error => {
      console.log(error);
    });
  }

}
