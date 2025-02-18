import { Component } from '@angular/core';
import { HeaderLinkComponent } from "../header-link/header-link.component";
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  imports: [HeaderLinkComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateX(0%)'
      })),
      state('out', style({
        transform: 'translateX(100%)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})

export class HeaderComponent {
  menuState:string = 'out';

  toggleMenu(){
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    let closeMenu: HTMLImageElement | null = document.getElementById('burgerMenuImg') as HTMLImageElement;
    let body = document.body;

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