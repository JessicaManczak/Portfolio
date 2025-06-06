import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter} from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';  
import { provideClientHydration } from '@angular/platform-browser';  
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';

export const provideTranslation = () => ({
  defaultLanguage: 'en',
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
});

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideHttpClient(withFetch()),
    provideAnimations(),
    importProvidersFrom(MatToolbarModule),  
    provideClientHydration(),
    importProvidersFrom(TranslateModule.forRoot(provideTranslation())), 
  ],
};
