import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChartData } from './models/testModel';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private baseUrl = `Chart`;

  constructor(private httpClient: HttpClient) { }

  getChartData(fromRange, toRange): Observable<ChartData> {

    let request = {
      from: fromRange,
      to: toRange
    }

    return this.httpClient.post<ChartData>(`${this.baseUrl}/GetChartData`, request);
  }
}
