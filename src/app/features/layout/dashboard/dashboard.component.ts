import { Component } from '@angular/core';
import { CallValueComponent } from './call-value/call-value.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CallValueComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
