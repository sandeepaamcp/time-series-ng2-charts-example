import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { Chart } from 'chart.js';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.css']
})
export class MyLineChartComponent implements OnInit {

  @ViewChild(BaseChartDirective)
  public chart: BaseChartDirective; // Now you can reference your chart via `this.chart`

  constructor() { }
  ngOnInit() {
    let timer = Observable.timer(2000, 150);

    timer.subscribe(tick => {
      let num = Math.floor(Math.random() * 60 + 1);
      let num2 = Math.floor(Math.random() * 60 + 1);
      let data = JSON.stringify(this.lineChartData);
      let dataJSON: any = JSON.parse(data);
      let dataList: number[] = dataJSON[0].data;
      dataList.splice(0, 1);
      // dataList.splice(0,1);
      dataList.push(num);
      // dataList.push(num2);
      // console.log(dataList);
      this.lineChartData = [
        { data: dataList, label: "Heart Rate Data", fill: false, lineTension: 0 },
      ];
      this.updateChart();
    });
  }

  updateChart() {
    this.chart.chart.update(); // This re-renders the canvas element.
  }

  public lineChartData: any[] = [
    { data: [32, 14, 46, 23, 38, 56, 39, 30, 40, 45, 18, 30, 35, 10, 34, 63, 28, 59, 28, 72], label: "Heart Rate Data", fill: false, lineTension: 0 },
  ];
  public lineChartLabels: string[] = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
  public lineChartOptions: any = {
    animation: {
      duration: 0
    },
    responsive: true
  };
  public lineChartLegend = true;
  public lineChartType = "line";
}