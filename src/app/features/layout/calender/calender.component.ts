import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CalendarDayViewComponent, CalendarEvent, CalendarModule, CalendarMonthViewComponent, CalendarView, CalendarWeekViewComponent} from 'angular-calendar';
import { addMonths, format, subMonths } from 'date-fns';
@Component({
  selector: 'app-calender',
  standalone: true,
  imports: [ CommonModule,CalendarModule ],
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.scss'
})
export class CalenderComponent {
 CalendarView = CalendarView;
  view :any = 'month' 
showCreateEvent:boolean=false
 viewDate: Date = new Date();

  events: CalendarEvent[] = [
    {
      start: new Date(),
      title: 'Sample Event',
    },
  ];

  next(): void {
    this.viewDate = addMonths(this.viewDate, 1);
  }

  prev(): void {
    this.viewDate = subMonths(this.viewDate, 1);
  }

  formatMonth(date: Date): string {
    return format(date, 'MMMM yyyy'); // e.g., "July 2025"
  }
  onDayClick(date?: Date): void {
    console.log("data",date)
    this.showCreateEvent = !this.showCreateEvent
    // this.activeDate = date;
    // this.showSlider = true;
  }
}