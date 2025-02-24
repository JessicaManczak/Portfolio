import { CommonModule } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslatePipe, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-header-link',
  imports: [CommonModule,TranslatePipe],
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
    @Inject(PLATFORM_ID) private platformId: object // Injectiert die aktuelle Plattform (Browser oder Server)
  ) {
    this.translate.addLangs(['en', 'de']);
    this.translate.setDefaultLang('en');

    // Prüfen, ob die App im Browser läuft (nicht auf dem Server)
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
      section.scrollIntoView({ behavior: 'smooth' });
    }};


   /*  selectedLink: string | null = null;

  selectLink(link: string) {
    this.selectedLink = link;
  }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    let body = document.body;
  
    if (section) {
      body.classList.remove("no-scroll");
      section.scrollIntoView({ behavior: 'smooth' });
  
      // Aktuellen Link als aktiv markieren
      this.selectedLink = sectionId;
    }
  }  */
}
