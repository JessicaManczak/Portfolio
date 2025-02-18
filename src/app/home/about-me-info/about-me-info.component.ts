import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me-info',
  imports: [CommonModule],
  templateUrl: './about-me-info.component.html',
  styleUrl: './about-me-info.component.scss'
})
export class AboutMeInfoComponent {
  aboutMeFeatures: { img: string, info: string }[] = [
    { img: 'assets/img/about_me_icon1.png', info: 'Flexible in terms of working environments, I can<br>work effectively both on-site Aachen and<br>remotely.' },
    { img: 'assets/img/about_me_icon2.png', info: 'I am open-minded and always looking for<br>personal challenges to constantly improve my<br>knowledge and skills.' },
    { img: 'assets/img/about_me_icon3.png', info: 'In my profession, programming isn\'t just about<br>writing code; it\'s a creative form of problem-<br>solving. I take pride in my ability to distill complex<br>technical challenges into simple, user-friendly<br>solutions. This way, I help you achieve your goals<br>and bring your visions to life.' }
  ];
}
