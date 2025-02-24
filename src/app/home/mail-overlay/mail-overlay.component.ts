import { Component, Inject, PLATFORM_ID,EventEmitter, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslatePipe, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-mail-overlay',
  imports: [TranslatePipe],
  templateUrl: './mail-overlay.component.html',
  styleUrl: './mail-overlay.component.scss'
})
export class MailOverlayComponent {
  @Output() closeOverlay = new EventEmitter<void>();
  
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
