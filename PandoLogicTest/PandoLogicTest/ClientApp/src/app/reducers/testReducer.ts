import { Action } from '@ngrx/store'
import * as TestActions from './../actions/testActions'
import { ChartData, DataPerDay } from '../models/testModel';

const initialState: ChartData = null;

export function reducer(state: ChartData = initialState, action: TestActions.Actions) {

  switch (action.type) {
    case TestActions.UPDATE_DATA:
      state = action.payload;
      return state;
    default:
      return state;
  }
}
