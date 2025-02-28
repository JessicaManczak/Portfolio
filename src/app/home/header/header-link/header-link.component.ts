import { CommonModule } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslatePipe, TranslateService } from "@ngx-translate/core";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-link',
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './header-link.component.html',
  styleUrl: './header-link.component.scss'
})
export class HeaderLinkComponent {
  headerLinks: { name: string, link: string, class: string} [] = [
    { name: 'HEADERLINK.ABOUTME', link: 'aboutMe', class: ''},
    { name: 'HEADERLINK.SKILLS', link: 'skills', class: ''},
    { name: 'HEADERLINK.PORTFOLIO', link: 'portfolio', class: ''},
    { name: 'HEADERLINK.CONTACT', link: 'contact', class: 'd-none-desktop'}
  ];

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: object, // Injectiert die aktuelle Plattform (Browser oder Server)
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

  scrollWithRedirect(sectionId: string) {
    if (this.router.url !== '') {
      this.router.navigate(['']);
      setTimeout(() => 
        {
          this.scrollToSection(sectionId);
        },
        500);   
    } else {
      this.scrollToSection(sectionId);
    }
  }
}
