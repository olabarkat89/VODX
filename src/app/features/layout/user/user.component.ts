import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserInfoComponent } from './user-info/user-info.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,UserInfoComponent,ProfileUserComponent,TranslateModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

}
