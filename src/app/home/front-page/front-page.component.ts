import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslatePipe, TranslateService } from "@ngx-translate/core";
import { FrontPageImgComponent } from '../front-page-img/front-page-img.component';
import { FrontPageInfoComponent } from '../front-page-info/front-page-info.component';
import { ButtonNavigateToContactComponent } from "../button-navigate-to-contact/button-navigate-to-contact.component";
import { FrontPageFooterComponent } from "../front-page-footer/front-page-footer.component";
import { ScrollDownComponent } from "../scroll-down/scroll-down.component";

@Component({
  selector: 'app-front-page',
  imports: [TranslatePipe, FrontPageImgComponent, FrontPageInfoComponent, ButtonNavigateToContactComponent, FrontPageFooterComponent, ScrollDownComponent],
  templateUrl: './front-page.component.html',
  styleUrl: './front-page.component.scss'
})
export class FrontPageComponent {

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
