import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MyApiService } from '../../../service/my-api.service';
import { call, callInterface } from '../../../modules/interface';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emergency-call',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './emergency-call.component.html',
  styleUrl: './emergency-call.component.scss'
})
export class EmergencyCallComponent {
 myApi = inject(MyApiService)
  calls !:callInterface[];
  showAll = false;


    private subscription!: Subscription;

  ngOnInit() {
    this.myApi.getData().subscribe((res:call) => {
      this.calls=res.data
    })
  
  }
  get displayedCalls() {
  return this.showAll ? this.calls : this.calls.slice(0, 5);
}
 ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
