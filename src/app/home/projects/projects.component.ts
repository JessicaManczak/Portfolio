import { Component } from '@angular/core';
import { SingleProjectComponent } from '../single-project/single-project.component';


@Component({
  selector: 'app-projects',
  imports: [SingleProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
