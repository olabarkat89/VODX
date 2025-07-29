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
import { PrimeNGConfig } from 'primeng/api';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-calender',
  standalone: true,
  imports: [CommonModule,TranslateModule ,CalendarModule, PrimeNGCalendarModule, NgSelectModule, ReactiveFormsModule
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
  calendarTranslations = {
  ar: {
    firstDayOfWeek: 6,
    dayNames: ['السبت','الأحد','الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة'],
    dayNamesShort: ['سبت','أحد','إثن','ثلاث','أربع','خميس','جمعة'],
    dayNamesMin: ['س','ح','ن','ث','ر','خ','ج'],
    monthNames: ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'],
    monthNamesShort: ['ينا','فبر','مار','أبر','ماي','يون','يول','أغس','سبت','أكت','نوف','ديس'],
    today: 'اليوم',
    clear: 'مسح',
    dateFormat: 'dd/mm/yy',
    weekHeader: 'الأسبوع'
  },
  en: {
    firstDayOfWeek: 0,
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    monthNamesShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    today: 'Today',
    clear: 'Clear',
    dateFormat: 'mm/dd/yy',
    weekHeader: 'Wk'
  }
};
  form!: FormGroup
  constructor(private fb: FormBuilder, private myApi: MyApiService, private eventService: EventService , private primengConfig: PrimeNGConfig,
  protected translate: TranslateService) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      users: [[], Validators.required],
      start: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.getEvent()
this.changeLangCalender

  }
  changeLangCalender(){
 const lang = (this.translate.currentLang || this.translate.getDefaultLang() || 'ar').split('-')[0];
const translation = this.calendarTranslations[lang as 'ar' | 'en'] || this.calendarTranslations.ar;
this.primengConfig.setTranslation(translation);
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
    console.log("lang",this.translate.currentLang )
    this.changeLangCalender()
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