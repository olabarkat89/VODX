import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
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
