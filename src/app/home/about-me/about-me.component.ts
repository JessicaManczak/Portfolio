import { Component } from '@angular/core';
import { AboutMeInfoComponent } from "./about-me-info/about-me-info.component";
import { AboutMeImgComponent } from './about-me-img/about-me-img.component';

@Component({
  selector: 'app-about-me',
  imports: [AboutMeInfoComponent, AboutMeImgComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
