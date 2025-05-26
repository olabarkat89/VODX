import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { EChartsOption } from 'echarts';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-propensity-call',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule,TranslateModule],
  templateUrl: './propensity-call.component.html',
  styleUrl: './propensity-call.component.scss',
})
export class PropensityCallComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: any;

constructor(public translate: TranslateService) {
    this.chartOptions = {
      series: [
        {
          name: 'Calls',
          data: [40, 65, 70, 110, 134, 120, 100, 90, 80, 85, 95, 100], // Sample monthly data
        },
      ],
      chart: {
        type: 'area',
        height: 350,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 3,
        colors: ['#7C3AED'], // Purple
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0,
          stops: [0, 90, 100],
          colorStops: [
            {
              offset: 0,
              color: '#7C3AED',
              opacity: 0.2,
            },
            {
              offset: 100,
              color: '#fff',
              opacity: 0,
            },
          ],
        },
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        labels: {
          style: {
            colors: '#888',
            fontSize: '12px',
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
      grid: {
        show: false,
      },
      tooltip: {
        y: {
          formatter: (val: number) => `${val} Calls`,
        },
      },
     
      legend: {
        show: false,
      },
    };
  }
}
