import { Component } from '@angular/core';
import { CallValueComponent } from './call-value/call-value.component';
import { PropensityCallComponent } from './propensity-call/propensity-call.component';
import { SatisfactionComponent } from "./satisfaction/satisfaction.component";
import { LimitComponent } from './limit/limit.component';
import { CallHistoryTableComponent } from './call-history-table/call-history-table.component';
import { GeographyComponent } from '../geography/geography.component';
import { CallQueComponent } from './call-que/call-que.component';
import { EmergencyCallComponent } from './emergency-call/emergency-call.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CallValueComponent, PropensityCallComponent, SatisfactionComponent,LimitComponent,CallHistoryTableComponent,GeographyComponent,CallQueComponent,EmergencyCallComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
