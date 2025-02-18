import { Component } from '@angular/core';
import { SkillsIconsComponent } from '../skills-icons/skills-icons.component';
import { SkillsInformationComponent } from '../skills-information/skills-information.component';

@Component({
  selector: 'app-skills',
  imports: [SkillsIconsComponent, SkillsInformationComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
