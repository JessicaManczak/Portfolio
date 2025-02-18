import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  imports: [],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
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
