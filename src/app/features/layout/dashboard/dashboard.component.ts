import { Component } from '@angular/core';
import { CallValueComponent } from './call-value/call-value.component';
import { PropensityCallComponent } from './propensity-call/propensity-call.component';
import { SatisfactionComponent } from "./satisfaction/satisfaction.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CallValueComponent, PropensityCallComponent, SatisfactionComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
