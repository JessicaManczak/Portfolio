import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslatePipe, TranslateService } from "@ngx-translate/core";
import { Location } from '@angular/common';

@Component({
  selector: 'app-legal-notice',
  imports: [TranslatePipe],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})

export class LegalNoticeComponent {
  constructor(
    private location: Location,
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
  
  ngOnInit() {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }
  
  goBack() {
    this.location.back();
  }
}
