import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-workhours',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workhours.component.html',
  styleUrl: './workhours.component.scss'
})
export class WORKHOURSComponent {
  days: any[] = [
    { name: 'Sunday', hours: [{ from: '07:00 AM', to: '03:00 AM' }] },
    { name: 'Monday', hours: [{ from: '07:00 AM', to: '03:00 AM' }] },
    { name: 'Tuesday', hours: [{ from: '07:00 AM', to: '03:00 AM' }] },
    { name: 'Wednesday', hours: [{ from: '07:00 AM', to: '03:00 AM' }] },
    { name: 'Thursday', hours: [{ from: '07:00 AM', to: '03:00 AM' }] },
    { name: 'Friday', hours: [{ from: '07:00 AM', to: '03:00 AM' }] },
    { name: 'Saturday', hours: [{ from: '07:00 AM', to: '03:00 AM' }] },
  ];

  addTimeRange(day: any) {
    day.hours.push({ from: '07:00 AM', to: '03:00 AM' });
  }

  removeTimeRange(day: any, index: number) {
    if (day.hours.length > 1) {
      day.hours.splice(index, 1);
    }
  }

  updateTimeRange(day: any, index: number, field: 'from' | 'to', value: string) {
    day.hours[index][field] = value;
  }

  saveWorkingHours() {
    console.log('Saved working hours:', this.days);
    // هنا تقدر تبعت البيانات للباك إند
  }
}
