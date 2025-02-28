import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SkillBubbleComponent } from '../skill-bubble/skill-bubble.component';

@Component({
  selector: 'app-skills-icons',
  imports: [CommonModule, SkillBubbleComponent],
  templateUrl: './skills-icons.component.html',
  styleUrl: './skills-icons.component.scss'
})
export class SkillsIconsComponent {
[x: string]: any;
skillIcons: {img: string, description: string} [] = [
  { img: 'assets/img/html.png', description: 'HTML'},
  { img: 'assets/img/css.png', description: 'CSS'},
  { img: 'assets/img/javascript.png', description: 'JavaScript'},
  { img: 'assets/img/typescript.png', description: 'TypeScript'},
  { img: 'assets/img/angular.png', description: 'Angular'},
  { img: 'assets/img/firebase.png', description: 'Firebase'},
  { img: 'assets/img/git.png', description: 'Git'},
  { img: 'assets/img/restapi.png', description: 'Rest Api'},
  { img: 'assets/img/scrum.png', description: 'Scrum'},
  { img: 'assets/img/materialdesign.png', description: 'Material Design'}
]

showSkillBubble: boolean = false;
}
