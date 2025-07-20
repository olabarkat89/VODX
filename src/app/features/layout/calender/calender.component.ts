import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CalendarDayViewComponent, CalendarEvent, CalendarModule, CalendarMonthViewComponent, CalendarView, CalendarWeekViewComponent } from 'angular-calendar';
import { addMonths, format, subMonths } from 'date-fns';
import { CalendarModule as PrimeNGCalendarModule } from 'primeng/calendar';
import { MyApiService } from '../../service/my-api.service';
import { Subject } from 'rxjs';
import { EventService } from './event.service';
@Component({
  selector: 'app-calender',
  standalone: true,
  imports: [CommonModule, CalendarModule, PrimeNGCalendarModule, NgSelectModule, ReactiveFormsModule
  ],
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.scss'
})
export class CalenderComponent {
  CalendarView = CalendarView;
  view: any = 'month'
  showCreateEvent: boolean = false
  viewDate: Date = new Date();
  selectedUsers: any[] = [];
  type: string = 'add'
  selectValue: any
  events !: any[]
  userList = [
    { id: 1, name: 'أحمد' },
    { id: 2, name: 'فاطمة' },
    { id: 3, name: 'محمد' },
  ];
  form!: FormGroup
  constructor(private fb: FormBuilder, private myApi: MyApiService, private eventService: EventService) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      users: [[], Validators.required],
      start: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.getEvent()
  }
  getEvent() {
    this.eventService.events$.subscribe(events => {
      this.events = [...events];
    });
  }
  next(): void {
    this.viewDate = addMonths(this.viewDate, 1);
  }

  prev(): void {
    this.viewDate = subMonths(this.viewDate, 1);
  }

  formatMonth(date: Date): string {
    return format(date, 'MMMM yyyy');
  }
  onDayClick(date?: any): void {
    this.form.reset()
    this.selectValue = date
    if (date?.events?.length > 0) {
      this.type = 'edit'
      this.form.get('title')?.setValue(date.events[0]?.title)
      this.form.get('users')?.setValue(date.events[0]?.users)
      this.form.get('start')?.setValue(date.events[0]?.start)
      this.updateEvent()
    }
    else {
      this.type = 'add'
      if (this.selectValue) {
        this.form.get('start')?.setValue(new Date(this.selectValue.date))
      }
      this.addEvent()
    }
    this.showCreateEvent = !this.showCreateEvent

  }
  addEvent() {

    if (this.form.valid) {
      this.eventService.addEvent(this.form.value)
      this.getEvent()
      this.showCreateEvent = false
    }
  }
  updateEvent() {
    this.eventService.updateEvent(this.selectValue.events[0].id, this.form.value)
    this.getEvent()
    this.showCreateEvent = false
  }

}