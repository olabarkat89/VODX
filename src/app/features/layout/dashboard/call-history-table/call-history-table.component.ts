import { Component, inject, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MyApiService } from '../../../service/my-api.service';
import {  call, callInterface } from '../../../modules/interface';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-call-history-table',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './call-history-table.component.html',
  styleUrl: './call-history-table.component.scss'
})
export class CallHistoryTableComponent {
  myApi = inject(MyApiService)
  calls !:callInterface[];
    private subscription!: Subscription;

  ngOnInit() {
    this.myApi.getData().subscribe((res:call) => {
      this.calls=res.data
    })
  
  }
 ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
