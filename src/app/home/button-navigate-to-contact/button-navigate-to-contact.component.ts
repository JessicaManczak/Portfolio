import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button-navigate-to-contact',
  imports: [MatButtonModule, CommonModule],
  templateUrl: './button-navigate-to-contact.component.html',
  styleUrl: './button-navigate-to-contact.component.scss'
})
export class ButtonNavigateToContactComponent {
  @Input() buttonText: string = '';
  
  scrollToContact() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
