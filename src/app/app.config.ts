import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LucideAngularModule, Moon, Sun, ThermometerSun, Video } from 'lucide-angular';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),  
    provideHttpClient(),
    importProvidersFrom(LucideAngularModule.pick({Sun, Moon, ThermometerSun, Video}))
  ]
};
