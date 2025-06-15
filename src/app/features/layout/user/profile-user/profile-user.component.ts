import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-profile-user',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './profile-user.component.html',
  styleUrl: './profile-user.component.scss'
})
export class ProfileUserComponent {
 tabs = ['Profile', 'Calls', 'Documents', 'Dropped messages'];
  activeTab = 'Profile';

  selectTab(tab: string) {
    this.activeTab = tab;
  }
}
