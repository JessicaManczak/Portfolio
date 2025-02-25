import { Component } from '@angular/core';
import { SkillsInformationTopComponent } from './skills-information-top/skills-information-top.component';
import { SkillsIconsComponent } from './skills-icons/skills-icons.component';
import { SkillsInformationBottomComponent } from './skills-information-bottom/skills-information-bottom.component';


@Component({
  selector: 'app-skills',
  imports: [SkillsIconsComponent, SkillsInformationBottomComponent, SkillsInformationTopComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
