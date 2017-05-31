import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';




//----------------material
import {
  MdButtonModule,
  MdCheckboxModule,
  MdGridListModule,
  MdToolbarModule
} from '@angular/material';

//-----------------highcharts
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import * as highcharts from 'highcharts';

import { HomeComponent } from './home/home.component';
import { Test1Component } from './test1/test1.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'test1', component: Test1Component },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Test1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdGridListModule,
    ChartModule,
    MdToolbarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: HighchartsStatic, useValue: highcharts }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
