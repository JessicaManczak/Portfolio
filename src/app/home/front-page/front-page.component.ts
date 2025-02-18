import { Component } from '@angular/core';
import { FrontPageImgComponent } from '../front-page-img/front-page-img.component';
import { FrontPageInfoComponent } from '../front-page-info/front-page-info.component';
import { ButtonNavigateToContactComponent } from "../button-navigate-to-contact/button-navigate-to-contact.component";
import { FrontPageFooterComponent } from "../front-page-footer/front-page-footer.component";
import { ScrollDownComponent } from "../scroll-down/scroll-down.component";

@Component({
  selector: 'app-front-page',
  imports: [FrontPageImgComponent, FrontPageInfoComponent, ButtonNavigateToContactComponent, FrontPageFooterComponent, ScrollDownComponent],
  templateUrl: './front-page.component.html',
  styleUrl: './front-page.component.scss'
})
export class FrontPageComponent {

}
