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
  chartSeries: any
  xAxis: any
 emotionCharts:any[] = [];
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
  creatChart() {
    this.chartOptions = {
      series: this.getSeries(this.emotionData),
      chart: {
        type: 'area',
        stacked: true,
        height: 450
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

    };
  }
  emotionColors: { [key: string]: string } = {
    angry: '#ff4560', // Red
    disgust: '#775dd0', // Purple
    fear: '#1f6feb', // Orange
    happy: '#00e396', // Green
    neutral: '#008ffb', // Grey
    sad: 'gray', // Blue
    surprise: 'orange', // Pink
  };
  creatChart2() {
     const emotions = [
      'angry',
      'disgust',
      'fear',
      'happy',
      'neutral',
      'sad',
      'surprise',
    ];

 // Initialize or clear the array

    emotions.forEach((emotion) => {
      // Prepare the data series for the current emotion
      const seriesData = this.emotionData.map((d) => ({
        x: d.timestamp, // Using 'timestamp' for x-axis labels
        y: Number(d[emotion].toFixed(2)), // Ensure number and two decimal places
      }));

      this.emotionCharts.push({
        series: [
          {
            name: emotion.charAt(0).toUpperCase() + emotion.slice(1), // Capitalize for display
            data: seriesData,
          },
        ],
        chart: {
          type: 'area',
          stacked: false, // Essential for individual charts
          height: 200, // Make charts a bit smaller for multiple views
          toolbar: {
            show: false, // Often hidden for a cleaner look with many small charts
          },
        },
        fill: {
          type: 'gradient',
          gradient: {
            opacityFrom: 0.6,
            opacityTo: 0.9,
          },
        },
        stroke: {
          curve: 'smooth',
          width: 2,
        },
        colors: [this.emotionColors[emotion]], // Apply the specific color for this emotion
        dataLabels: {
          enabled: false,
        },
        tooltip: {
          shared: false, // Tooltip only for the current chart
          intersect: true,
          x: {
            formatter: function (val:any) {
              return `Time: ${val}`; // Customize tooltip X-axis label
            },
          },
          y: {
            formatter: function (val:any) {
              return `${val.toFixed(2)}%`; // Format y-axis value as percentage
            },
          },
        },
        legend: {
          show: false, // No need for a legend when the title indicates the emotion
        },
       
        yaxis: {
          title: {
            text: `${emotion.charAt(0).toUpperCase() + emotion.slice(1)} (%)`, // Dynamic Y-axis title
          },
          min: 0,
          max: 100, // Assuming emotion values are percentages or max 100
        }
      });
    });
  }
  getSeries(data: any[]): ApexAxisChartSeries {
    const emotions = ['angry', 'disgust', 'fear', 'happy', 'neutral', 'sad', 'surprise'];
    return emotions.map(emotion => ({
      name: emotion.charAt(0).toUpperCase() + emotion.slice(1),
      data: data.map(d => Number(d[emotion].toFixed(2)))
    }));
  }
  getSeriesEmoji(data: any[], emotions: any[]): ApexAxisChartSeries {
    return emotions.map(emotion => ({
      name: emotion.charAt(0).toUpperCase() + emotion.slice(1),
      data: data.map(d => Number(d[emotion].toFixed(2)))
    }));
  }
}
