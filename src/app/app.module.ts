import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { Routes, RouterModule } from '@angular/router';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';

const routes: Routes = [
  {path: 'bar-chart', component: MyBarChartComponent},
  {path: '**', component: MyLineChartComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyBarChartComponent,
    MyLineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
