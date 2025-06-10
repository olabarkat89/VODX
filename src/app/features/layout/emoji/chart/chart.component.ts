import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MyApiService } from '../../../service/my-api.service';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent {
  public chartOptions: any;
    public emotionData: any[] = []
 public chartOptions2: any;
 chartSeries:any
 xAxis:any
    constructor(private myApi: MyApiService) {
    }
  ngOnInit(): void {
   this.getData()
  }
 getData() {
    this.myApi.getAllEmoji().subscribe((res: any) => {
      this.emotionData = res
      this.creatChart()
      this.creatChart2()
    })

  }
  creatChart(){
 this.chartOptions = {
      series: this.getSeries(this.emotionData),
      chart: {
        type: 'area',
        stacked: true,
        height: 450
      },
      xaxis: {
        categories: this.emotionData.map(d => d.timestamp),
        title: { text: 'Time' }
      },
      yaxis: {
        title: { text: 'Emotion Intensity (%)' }
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.6,
          opacityTo: 0.9
        }
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
        colors: [
        '#ff4560', // angry
        '#775dd0', // disgust
        '#1f6feb', // fear
        '#00e396', // happy
        '#008ffb', // neutral
        'gray', // sad
        'orange'  // surprise
      ],
      dataLabels: {
        enabled: false
      },
      tooltip: {
        shared: true,
        intersect: false
      },
      legend: {
        position: 'bottom'
      },
      title: {
        text: 'Emotion Intensity Over Time',
        align: 'left'
      }
    };
  }
  creatChart2(){
    this.chartSeries = [
    { name: 'Angry', data: this.emotionData.map(d => d.angry) },
    { name: 'Disgust', data: this.emotionData.map(d => d.disgust) },
    { name: 'Fear', data: this.emotionData.map(d => d.fear) },
    { name: 'Happy', data: this.emotionData.map(d => d.happy) },
    { name: 'Neutral', data: this.emotionData.map(d => d.neutral) },
    { name: 'Sad', data: this.emotionData.map(d => d.sad) },
    { name: 'Surprise', data: this.emotionData.map(d => d.surprise) }
  ];

  this.chartOptions2 = {
    type: 'line',
    height: 350,
    toolbar: {
      show: true
    }
  };

  this.xAxis = {
    categories: this.emotionData.map(d => `t${d.time}s`),
    title: {
      text: 'Time (seconds)'
    }
  };
  }
  getSeries(data: any[]): ApexAxisChartSeries {
    const emotions = ['angry', 'disgust', 'fear', 'happy', 'neutral', 'sad', 'surprise'];
    return emotions.map(emotion => ({
      name: emotion.charAt(0).toUpperCase() + emotion.slice(1),
      data: data.map(d => Number(d[emotion].toFixed(2)))
    }));
  }
}
