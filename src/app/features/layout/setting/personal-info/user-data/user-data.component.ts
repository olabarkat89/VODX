import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-user-data',
  standalone: true,
    imports: [CommonModule,RouterModule,TranslateModule],
  
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.scss'
})
export class UserDataComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  
changePass() {
  this.router.navigate(['/Setting/personal/changePassword']);
}
}
