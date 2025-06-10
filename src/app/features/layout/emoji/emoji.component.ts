import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MyApiService } from '../../service/my-api.service';

import {
  Chart,
  registerables,
  ChartEvent,
  PointElement,
  LineController,
  LineElement,
  LinearScale,
  CategoryScale,
  Tooltip,
} from 'chart.js';
import { ChartComponent } from './chart/chart.component';

Chart.register(...registerables);
@Component({
  selector: 'app-emoji',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule, ChartComponent],
  templateUrl: './emoji.component.html',
  styleUrl: './emoji.component.scss'
})
export class EmojiComponent {
  @ViewChild('videoPlayer', { static: false }) videoPlayer: any;
  @ViewChild('myChart', { static: true }) chartRef!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;
  donutSeries: ApexNonAxisChartSeries = [];
  donutChart: any;
  public emotionData: any[] = []
  constructor(private myApi: MyApiService) {
    this.getData()


  }
  getData() {
    this.myApi.getAllEmoji().subscribe((res: any) => {
      this.emotionData = res
      this.creatChart()
      this.createCircule()
    })

  }



  createCircule() {
    const emotionSums: Record<string, number> = {
      angry: 0,
      disgust: 0,
      fear: 0,
      happy: 0,
      neutral: 0,
      sad: 0,
      surprise: 0
    };

    for (const item of this.emotionData) {
      for (const key in emotionSums) {
        emotionSums[key] += item[key] ?? 0;
      }
    }

    this.donutSeries = Object.values(emotionSums);
    this.donutChart = {
      chart: {
        type: 'donut',
        width: 380,
        height: 400,
        offsetY: 20
      },
      labels: Object.keys(emotionSums),
      colors: [
        '#ff4560', // angry
        '#775dd0', // disgust
        '#1f6feb', // fear
        '#00e396', // happy
        '#008ffb', // neutral
        'gray', // sad
        'orange'  // surprise
      ],
      legend: {
        position: 'right'
      },
      stroke: {
        show: false,
        width: 0,
        colors: undefined
      },
      plotOptions: {
        pie: {
          donut: {
            size: '65%'
          }
        }
      },
      dataLabels: {
        enabled: true
      },


    };

  }


  creatChart() {
    Chart.register(...registerables);

    const labels = this.emotionData.map(d => d.timestamp || d.time.toString());

    this.chart = new Chart(this.chartRef.nativeElement.getContext('2d')!, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Angry',
            data: this.emotionData.map(d => d.angry),
            borderColor: '#ff4560',
            backgroundColor: '#ff4560',
            fill: false,
            tension: 0.1,
          },
          {
            label: 'Disgust',
            data: this.emotionData.map(d => d.disgust),
            borderColor: '#775dd0',
            backgroundColor: '#775dd0',
            fill: false,
            tension: 0.1,
          },
          {
            label: 'Fear',
            data: this.emotionData.map(d => d.fear),
            borderColor: '#1f6feb',
            backgroundColor: '#1f6feb',
            fill: false,
            tension: 0.1,
          },
          {
            label: 'Happy',
            data: this.emotionData.map(d => d.happy),
            borderColor: '#00e396',
            backgroundColor: '#00e396',
            fill: false,
            tension: 0.1,
          },
          {
            label: 'Neutral',
            data: this.emotionData.map(d => d.neutral),
            borderColor: '#008ffb',
            backgroundColor: '#008ffb',
            fill: false,
            tension: 0.1,
          },
          {
            label: 'Sad',
            data: this.emotionData.map(d => d.sad),
            borderColor: 'gray',
            backgroundColor: 'gray',
            fill: false,
            tension: 0.1,
          },
          {
            label: 'Surprise',
            data: this.emotionData.map(d => d.surprise),
            borderColor: 'orange',
            backgroundColor: 'orange',
            fill: false,
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        interaction: {
          mode: 'nearest',
          intersect: false,
        },
        plugins: {
          legend: {
            position: 'bottom',
          },

        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Time (seconds)',
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Value',
            },
            min: 0,
            max: 100,
          },
        },
        onClick: (event, elements) => {
          if (elements.length > 0) {
            const firstPoint = elements[0];
            const index = firstPoint.index;

            const timeString = this.chart.data.labels![index] as string;

            const seconds = this.parseTimestampToSeconds(timeString);

            this.videoPlayer.nativeElement.currentTime = seconds;
            this.videoPlayer.nativeElement.play();
          }
        }
      },
    });
  }
  parseTimestampToSeconds(timeString: string): number {
    const parts = timeString.split(':').map(Number);
    let seconds = 0;
    if (parts.length === 3) {
      seconds = parts[0] * 3600 + parts[1] * 60 + parts[2];
    } else if (parts.length === 2) {
      seconds = parts[0] * 60 + parts[1];
    } else if (parts.length === 1) {
      seconds = parts[0];
    }
    return seconds;
  }
}

