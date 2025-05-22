import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgApexchartsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'VODX';
}
