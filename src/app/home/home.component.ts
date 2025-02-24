/* import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from "./footer/footer.component";
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MailOverlayComponent } from './mail-overlay/mail-overlay.component';
import { SkillBubbleComponent } from './skill-bubble/skill-bubble.component';

@Component({
  selector: 'app-home',
  imports: [MatToolbarModule, RouterModule, HeaderComponent, FrontPageComponent, AboutMeComponent, SkillsComponent, ProjectsComponent, ContactComponent, FooterComponent, LegalNoticeComponent, PrivacyPolicyComponent, MailOverlayComponent, SkillBubbleComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent {} */
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from "./footer/footer.component";
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MailOverlayComponent } from './mail-overlay/mail-overlay.component';
import { SkillBubbleComponent } from './skill-bubble/skill-bubble.component';

@Component({
  selector: 'app-home',
  imports: [
    MatToolbarModule, 
    RouterModule, 
    HeaderComponent, 
    FrontPageComponent, 
    AboutMeComponent, 
    SkillsComponent, 
    ProjectsComponent, 
    ContactComponent, 
    FooterComponent, 
    LegalNoticeComponent, 
    PrivacyPolicyComponent, 
    MailOverlayComponent, 
    SkillBubbleComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
