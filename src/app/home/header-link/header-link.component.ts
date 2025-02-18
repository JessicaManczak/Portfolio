import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header-link',
  imports: [CommonModule],
  templateUrl: './header-link.component.html',
  styleUrl: './header-link.component.scss'
})
export class HeaderLinkComponent {
  headerLinks: { name: string, link: string, class: string} [] = [
    { name: 'About me', link: 'aboutMe', class: ''},
    { name: 'Skills', link: 'skills', class: ''},
    { name: 'Portfolio', link: 'portfolio', class: ''},
    { name: 'Contact', link: 'contact', class: 'd-none-desktop'}
  ];
  

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
