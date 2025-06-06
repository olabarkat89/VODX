import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
 currentLang = this.translate.currentLang;

  constructor(private translate: TranslateService) {
    this.currentLang =  localStorage.getItem('lang') || 'en';
    this.translate.use(this.currentLang);
  }

  switchLang(): void {
    this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.translate.use(this.currentLang);
 localStorage.setItem('lang', this.currentLang);
   document.documentElement.lang = this.currentLang;
  document.documentElement.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
}

}
