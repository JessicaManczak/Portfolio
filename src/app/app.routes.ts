import { Routes, RouterModule  } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrivacyPolicyComponent } from './home/privacy-policy/privacy-policy.component';
import { LegalNoticeComponent } from './home/legal-notice/legal-notice.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'legal-notice', component: LegalNoticeComponent }, 
    { path: '**', redirectTo: '' },
  ];

  export const appRouter = RouterModule.forRoot(routes);

