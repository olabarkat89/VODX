import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sidbar',
  standalone: true,
  imports: [CommonModule,RouterModule,TranslateModule],
  templateUrl: './sidbar.component.html',
  styleUrl: './sidbar.component.scss'
})
export class SidbarComponent {

}
