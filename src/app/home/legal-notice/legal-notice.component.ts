import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-legal-notice',
  imports: [],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  constructor(private location: Location) {}

  ngOnInit() {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }

  goBack() {
    this.location.back();
  }
}
