import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { ChartData } from '../models/testModel'

export const UPDATE_DATA = '[Test] Refresh'

export class UpdateData implements Action {
  readonly type = UPDATE_DATA

  constructor(public payload: ChartData) { }
}

export type Actions = UpdateData
