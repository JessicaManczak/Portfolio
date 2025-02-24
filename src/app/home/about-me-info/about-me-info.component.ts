import { CommonModule } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslatePipe, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-about-me-info',
  imports: [TranslatePipe, CommonModule],
  templateUrl: './about-me-info.component.html',
  styleUrl: './about-me-info.component.scss'
})
export class AboutMeInfoComponent {
  aboutMeFeatures: { img: string, info: string }[] = [
    { img: 'assets/img/about_me_icon1.png', info: 'ABOUT_ME_SKILLS.INFO_1' },
    { img: 'assets/img/about_me_icon2.png', info: 'ABOUT_ME_SKILLS.INFO_2' },
    { img: 'assets/img/about_me_icon3.png', info: 'ABOUT_ME_SKILLS.INFO_3' }
  ];

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
