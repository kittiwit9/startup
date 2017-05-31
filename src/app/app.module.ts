import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

//----------------material
import {
  MdButtonModule, 
  MdCheckboxModule,
  MdGridListModule
} from '@angular/material';

//-----------------highcharts
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import * as highcharts from 'highcharts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule, 
    MdCheckboxModule,
    MdGridListModule,
    ChartModule
  ],
  providers: [
    { provide: HighchartsStatic, useValue: highcharts }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
