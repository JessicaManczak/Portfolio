import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shared-info-icons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-info-icons.component.html',
  styleUrl: './shared-info-icons.component.scss'
})

export class SharedInfoIconsComponent {
  socialMediaLinks: {img: string, link: string} [] = [
    { img: 'assets/img/github.png', link: 'https://github.com/JessicaManczak' },
    { img: 'assets/img/mail.png', link: 'mailto:manczakjessica@gmail.com' },
    { img: 'assets/img/linkedin.png', link: 'https://www.linkedin.com/in/jessica-manczak-b77a09352/' }
  ]
}
