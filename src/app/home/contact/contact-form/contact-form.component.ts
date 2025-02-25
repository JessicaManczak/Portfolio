import { inject } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  togglePrivacy() {
    this.contactData.privacy = !this.contactData.privacy;
  }

 /*  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  } */

  onSubmit(ngForm: NgForm) {
    if (!ngForm.form.valid) return; // Falls Formular ungültig ist, sofort abbrechen
  
    if (this.mailTest) {
      console.log("Mail-Test aktiv, kein Request gesendet.");
      ngForm.resetForm();
      this.showMailOverlay = true;
      setTimeout(() => {
        this.showMailOverlay = false;
      }, 6000);
      return;
    }
  
/*     this.http.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {
          console.log("Formular erfolgreich gesendet:", response);
          ngForm.resetForm();
          this.showMailOverlay = true;
          setTimeout(() => {
            this.showMailOverlay = false;
          }, 6000);
        },
        error: (error) => {
          console.error("Fehler beim Absenden:", error);
        },
        complete: () => console.info("Senden abgeschlossen"),
      }); */
  }

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: object // Injectiert die aktuelle Plattform (Browser oder Server)
  ) {
    this.translate.addLangs(['en', 'de']);
    this.translate.setDefaultLang('en');

    // Prüfen, ob die App im Browser läuft (nicht auf dem Server)
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('language') || 'en';
      this.translate.use(savedLang);
    }
  }






/* onSubmit(ngForm: NgForm) {
  if(ngForm.valid && ngForm.submitted) {
    console.log(this.contactData);
  }
} */



 /*  http: any;
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]{2,50}$/)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      privacy: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      alert('Message sent successfully!');
    }
  } */
  
/*   contactForm = new FormGroup({
    'name': new FormControl(null),
    'email': new FormControl(null),
    'message': new FormControl(''),
    'privacy': new FormControl('')
  });
 */
  /* mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response: any) => {

            ngForm.resetForm();
          },
          error: (error: any) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }
  contactData(contactData: any): any {
    throw new Error('Method not implemented.');
  } */

  //ANY TYPE ETC ÜBERARBEITEN 

}
