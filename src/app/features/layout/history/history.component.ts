import { Component, ElementRef, ViewChild } from '@angular/core';
import { VideoComponent } from './video/video.component';
import { ChatsComponent } from './chats/chats.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [VideoComponent,ChatsComponent,UserInfoComponent,TranslateModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {
  
}
