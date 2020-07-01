import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { CombochartComponent } from './combochart/combochart.component';
import { DatePipe } from '@angular/common';
import { SelectRangeComponent } from './select-range/select-range.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/testReducer';

@NgModule({
  declarations: [
    AppComponent,
    CombochartComponent,
    SelectRangeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    GoogleChartsModule,
    RouterModule.forRoot([
    ]),
    StoreModule.forRoot({
      chartData: reducer
    })
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
