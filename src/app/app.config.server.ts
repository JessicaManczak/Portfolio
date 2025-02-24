import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter} from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { provideServerRendering } from '@angular/platform-server';
import { mergeApplicationConfig } from '@angular/core';
import { appConfig } from './app.config';

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

export const serverConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideServerRendering(), 
    provideHttpClient(),
    provideAnimations(),
    importProvidersFrom(TranslateModule.forRoot(provideTranslation())),  
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
