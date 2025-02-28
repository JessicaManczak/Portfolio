import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslatePipe, TranslateService } from "@ngx-translate/core";
import { SharedInfoIconsComponent } from "../shared-info-icons/shared-info-icons.component";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe, RouterModule, SharedInfoIconsComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: object,
    private router: Router
  ) {
    this.translate.addLangs(['en', 'de']);
    this.translate.setDefaultLang('en');

    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('language') || 'en';
      this.translate.use(savedLang);
    }
  }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    let body = document.body;

    if (section) {
      body.classList.remove("no-scroll");
      section.scrollIntoView({behavior: 'smooth' });     
    }
  };

  scrollWithRedirect() {
    if (this.router.url !== '') {
      this.router.navigate(['']);
      setTimeout(() => 
        {
          this.scrollToSection('home');
        },
        500);   
      } else {
        this.scrollToSection('home');
      }
  }
}

