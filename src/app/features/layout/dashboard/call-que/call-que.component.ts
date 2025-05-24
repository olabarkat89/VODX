import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import ApexCharts from 'apexcharts';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ApexStroke,
  ApexDataLabels,
  ApexResponsive,
  NgApexchartsModule
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
  labels: string[];
  dataLabels: ApexDataLabels;
  responsive: ApexResponsive[];
};
@Component({
  selector: 'app-call-que',
  standalone: true,
  imports: [CommonModule,NgApexchartsModule],
  templateUrl: './call-que.component.html',
  styleUrl: './call-que.component.scss'
})
export class CallQueComponent {
public chartOptions: any;
  constructor() {
this.chartOptions = {
  series: [24],
  chart: {
    type: 'radialBar',
    height: 150
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '60%'
      },
      dataLabels: {
        name: {
          show: false
        },
        value: {
          show: true,
          fontSize: '22px',
          fontWeight: 600,
          color: '#282E39'
        }
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      type: 'horizontal',
      gradientToColors: ['#F27121'],
      stops: [0, 100]
    },
    colors: ['#7C3AED']
  },
  stroke: {
    lineCap: 'round'
  },
  labels: ['Progress'],
  dataLabels: { // ✅ يجب تعريفها دائماً حتى لا تكون undefined
    enabled: true
  },
  responsive: []
};


  }
}