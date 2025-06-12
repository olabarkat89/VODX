import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-user',
  standalone: true,
  imports: [CommonModule],
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
