import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslatePipe, TranslateService } from "@ngx-translate/core";
import { ButtonNavigateToContactComponent } from "../button-navigate-to-contact/button-navigate-to-contact.component";

@Component({
  selector: 'app-skills-information',
  imports: [TranslatePipe, ButtonNavigateToContactComponent],
  templateUrl: './skills-information.component.html',
  styleUrl: './skills-information.component.scss'
})
export class SkillsInformationComponent {
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
