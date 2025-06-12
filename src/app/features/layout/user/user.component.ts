import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserInfoComponent } from './user-info/user-info.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,UserInfoComponent,ProfileUserComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

}
