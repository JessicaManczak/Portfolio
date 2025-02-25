import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from "@ngx-translate/core";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { HeaderLinkComponent } from './header-link/header-link.component';

@Component({
  selector: 'app-header',
  imports: [HeaderLinkComponent, MatButtonToggleModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('slideInOut', [
      state('*', style({transform: 'translateX(100%)', 'opacity': '0', 'visibility': 'hidden'})),
      state('in', style({
        transform: 'translateX(0%)', 'opacity': '1', 'visibility': 'visible'
      })),
      state('out', style({
        transform: 'translateX(100%)', 'opacity': '0', 'visibility': 'hidden'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('* => in', animate('400ms ease-in-out'))
    ]),
  ]
})

export class HeaderComponent {
  menuState: string = 'out';
  isEnglish = true;

  constructor(
    public translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.translate.addLangs(['en', 'de']);
    this.translate.setDefaultLang('en');

    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('language') || 'en';
      this.translate.use(savedLang);
    }
  }

  selectLanguage(lang: string): void {
    console.log(lang);
    this.translate.use(lang);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('language', lang);
    }
  }

  toggleMenu() {
    if (isPlatformBrowser(this.platformId)) {
      this.menuState = this.menuState === 'out' ? 'in' : 'out';
  
      const closeMenu = document.getElementById('burgerMenuImg') as HTMLImageElement;
      const body = document.body;
  
      if (closeMenu) {
        if (closeMenu.src.includes("burger-bar.png")) {
          closeMenu.src = "assets/img/close-burger.png";
          body.classList.add("no-scroll");
        } else {
          closeMenu.src = "assets/img/burger-bar.png";
          body.classList.remove("no-scroll");
        }
      }
    }
  }
}