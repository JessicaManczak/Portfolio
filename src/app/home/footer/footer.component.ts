import { Component } from '@angular/core';
import { SharedInfoIconsComponent } from "../shared-info-icons/shared-info-icons.component";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-footer',
  imports: [RouterModule, SharedInfoIconsComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
}

