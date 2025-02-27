import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
/* import { routes } from './app.routes'; */

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'portfolio';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');

    if (typeof window !== 'undefined' && window.localStorage) {
      const savedLang = localStorage.getItem('language') || 'en';
      this.translate.use(savedLang);
    }
  }

  switchLanguage() {
    const newLang = this.translate.currentLang === 'en' ? 'de' : 'en';
    this.translate.use(newLang);
    
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('language', newLang);
    }
  }
}
