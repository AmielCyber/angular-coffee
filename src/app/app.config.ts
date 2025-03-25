import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './routes/app.routes';
import {APP_SETTINGS, appSettings} from './app.settings';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    { provide: APP_SETTINGS, useValue: appSettings },
  ],
};
