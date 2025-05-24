import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgApexchartsModule,TranslateModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'VODX';
  constructor(public translate: TranslateService) {
    const savedLang = localStorage.getItem('lang') || 'en';
    this.translate.setDefaultLang(savedLang);
    this.translate.use(savedLang);
      document.documentElement.lang = savedLang;
      document.documentElement.dir= savedLang == 'en'? 'ltr': 'rtl'

    
  }
}
