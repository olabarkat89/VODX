import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-satisfaction',
  standalone: true,
  imports: [CommonModule,NgApexchartsModule,TranslateModule],
  templateUrl: './satisfaction.component.html',
  styleUrl: './satisfaction.component.scss'
})
export class SatisfactionComponent {
    @ViewChild("chart") chart!: ChartComponent;
    public chartOptions:any
   score=55

 constructor() {
  this.chartOptions = {
    series: [33.3, 33.3, 33.3], 
    chart: {
      type: 'donut',
      height: 200,
       offsetY: -20
    },
    labels: ['Low', 'Medium', 'High'],
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 10,
        donut: {
          size: '80%'
        }
      }
    },
    fill: {
      colors: ['#e74c3c', '#f1c40f', '#2ecc71'] 
    },
    stroke: {
      width: 0
    },
    legend: {
      show: false
    }
  };

 }
}