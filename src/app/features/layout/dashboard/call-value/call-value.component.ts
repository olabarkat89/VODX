import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MyApiService } from '../../../service/my-api.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { callType, calltypeInterface } from '../../../modules/interface';

@Component({
  selector: 'app-call-value',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './call-value.component.html',
  styleUrl: './call-value.component.scss'
})
export class CallValueComponent {

myApi = inject(MyApiService)
  callValue !:calltypeInterface[];
  showAll = false;


    private subscription!: Subscription;

  ngOnInit() {
    this.myApi.callValues().subscribe((res:callType) => {
      this.callValue=res.data
    })
  
  }
 
 ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

