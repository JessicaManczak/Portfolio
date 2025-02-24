import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslatePipe, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-scroll-down',
  imports: [TranslatePipe],
  templateUrl: './scroll-down.component.html',
  styleUrl: './scroll-down.component.scss'
})

export class ScrollDownComponent {
  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.translate.addLangs(['en', 'de']);
    this.translate.setDefaultLang('en');

    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('language') || 'en';
      this.translate.use(savedLang);
    }
  }
}
