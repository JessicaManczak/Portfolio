import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Component, inject, Inject, PLATFORM_ID } from '@angular/core';
import { TranslatePipe, TranslateService } from "@ngx-translate/core";
import { MailOverlayComponent } from '../../mail-overlay/mail-overlay.component';


@Component({
  selector: 'app-contact-form',
  imports: [TranslatePipe, RouterModule, FormsModule, CommonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatCardModule, ReactiveFormsModule, MailOverlayComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})

export class ContactFormComponent {
  showMailOverlay = false;
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  }

  post = {
    endPoint: 'https://github.com//JessicaManczak//Portfolio//blob//main//src//app//sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: object 
  ) {
    this.translate.addLangs(['en', 'de']);
    this.translate.setDefaultLang('en');

    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('language') || 'en';
      this.translate.use(savedLang);
    }
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            console.log("Formular erfolgreich gesendet:", response);
            ngForm.resetForm();
            this.showMailOverlay = true;
            setTimeout(() => {
              this.showMailOverlay = false;
            }, 5000);
          },
          error: (error) => {
            console.error("Fehler beim Absenden:", error);
          },
          complete: () => console.info("Senden abgeschlossen"),
      });
    }
  }

  togglePrivacy() {
    this.contactData.privacy = !this.contactData.privacy;
  }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    let body = document.body;

    if (section) {
      body.classList.remove("no-scroll");
      section.scrollIntoView({behavior: 'smooth' });     
    }
  };

}
