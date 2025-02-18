import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideAnimations } from '@angular/platform-browser/animations';
/* import { routes } from './app.routes';
import { provideServerRoutesConfig } from '@angular/ssr'; */

const serverConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideServerRendering(),
    provideAnimations(),
    // oops wird das noch gebraucht?
/*     provideServerRoutesConfig(routes) */
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
