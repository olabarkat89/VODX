import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidbarComponent } from '../sidbar/sidbar.component';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,SidbarComponent,HeaderComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
