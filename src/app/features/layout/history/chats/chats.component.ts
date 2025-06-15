import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './chats.component.html',
  styleUrl: './chats.component.scss'
})
export class ChatsComponent {
 tabs = ['Chats', 'Documents', 'Chat Notes'];
  activeTab = 'Chats';
messages: any[] = [
    {
      sender: 'Magdy Hassan',
      avatar: '../../../../assets/images/icons/user.png',
      content:
        "Hi, I tried calling but couldn’t reach anyone. I just had a quick question about my request—I’d appreciate a call back when someone’s available. Thanks!",
      timestamp: '12-05-2025, 09:00 am',
      isMe: false,
    },
    {
      sender: 'Ahmed Mohsen',
      avatar: '../../../../assets/images/icons/user.png',
      content:
        "Hi, I tried calling but couldn’t reach anyone. I just had a quick question about my request—I’d appreciate a call back when someone’s available. Thanks!",
      timestamp: '12-05-2025, 09:00 am',
      isMe: true,
    },
    {
      sender: 'Magdy Hassan',
      avatar: '../../../../assets/images/icons/user.png',
      content:
        "Hi, I tried calling but couldn’t reach anyone. I just had a quick question about my request—I’d appreciate a call back when someone’s available. Thanks!",
      timestamp: '12-05-2025, 09:01 am',
      isMe: false,
    },
  ];
  documents = [
    { name: 'Passport.pdf', date: '12-05-2025' },
    { name: 'National ID.png', date: '12-05-2025' },
    { name: 'Image.jpg', date: '12-05-2025' },
    { name: 'Workpaper.pdf', date: '12-05-2025' },
    { name: 'Bank statement.pdf', date: '12-05-2025' },
  ];
  selectTab(tab: string) {
    this.activeTab = tab;
  }

}
