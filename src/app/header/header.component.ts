import { Component, Renderer2, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { HeaderInformationComponent } from "./header-information.component";
import { HeaderInformationService } from './header-information.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, HeaderInformationComponent],
  template: `
    <header class="bg-gray-100 dark:bg-gray-800 shadow-md">
      <nav class="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" class="text-xl font-bold text-[rgb(1,78,91)] dark:text-white">
          <svg data-v-0754d764="" data-v-2814275f="" height="32px" viewBox="0 0 78 23" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title data-v-0754d764="">/assets/logo</title><defs data-v-0754d764=""><polygon id="path-1" points="0 0 78 0 78 23 0 23" data-v-0754d764=""></polygon></defs><g id="homepage" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" data-v-0754d764=""><g id="Artboard" transform="translate(-29.000000, -24.000000)" data-v-0754d764=""><g id="logo" transform="translate(29.000000, 24.000000)" data-v-0754d764=""><mask id="mask-2" fill="white" data-v-0754d764=""><use xlink:href="#path-1" data-v-0754d764=""></use></mask><g id="Clip-2" data-v-0754d764=""></g><path id="Fill-1" d="M46.9608934,14.4272095 L50.6352345,12.9634711 C54.2397621,11.5350292 57.5290546,9.7226033 57.5290546,5.92447741 C57.5290546,2.19534029 54.5544601,0 50.075115,0 C44.7214894,0 41.2920327,3.13658242 40.5219355,7.7363685 L45.3159786,7.7363685 C45.8062846,5.47096984 47.5559197,4.04252796 49.9005811,4.04252796 C51.8951007,4.04252796 52.9449891,4.84418816 52.9449891,6.23786825 C52.9449891,7.77113028 51.4751453,8.43320855 48.465644,9.79212686 L39.6122112,13.799893 L38.8775578,17.7728974 L55.9544904,17.7728974 L56.654237,13.7651313 L52.0352648,13.7651313 L46.9608934,14.8454205 L46.9608934,14.4272095 Z M19.9811765,9.75736508 C19.9811765,14.8106587 23.9004021,18.1210501 28.5891878,18.1210501 C32.893462,18.1210501 37.1279227,15.3331551 38.0725538,11.0815216 L33.383768,11.0815216 C32.6136708,12.7543656 30.6191512,13.8694166 28.729352,13.8694166 C26.3846906,13.8694166 24.5652419,12.1623457 24.5652419,9.61831795 C24.5652419,6.79566117 26.8744595,4.25163346 29.8141472,4.25163346 C31.9488309,4.25163346 33.6635593,5.61055177 33.8735369,7.7363685 L38.5623227,7.7363685 C38.4576024,2.75313321 34.2580485,0 29.9543114,0 C24.6001487,0 19.9811765,4.46073895 19.9811765,9.75736508 L19.9811765,9.75736508 Z M8.08333563,14.4272095 L11.7576767,12.9634711 C15.3616673,11.5350292 18.6514968,9.7226033 18.6514968,5.92447741 C18.6514968,2.19534029 15.6769023,0 11.1975572,0 C5.84393159,0 2.41447495,3.13658242 1.64437774,7.7363685 L6.43842086,7.7363685 C6.92872683,5.47096984 8.67836193,4.04252796 11.0230233,4.04252796 C13.0175429,4.04252796 14.0674314,4.84418816 14.0674314,6.23786825 C14.0674314,7.77113028 12.5975875,8.43320855 9.58808625,9.79212686 L0.734653411,13.799893 L0,17.7728974 L17.0763956,17.7728974 L17.7766792,13.7651313 L13.15717,13.7651313 L8.08333563,14.8454205 L8.08333563,14.4272095 Z M62.9530308,15.1941079 C64.1425463,17.1102844 66.2074165,18.1210501 68.6218914,18.1210501 C73.4508413,18.1210501 78,13.8694166 78,8.01499756 C78,3.06652405 74.8857784,0.034761783 71.1765305,0.034761783 C68.377007,0.034761783 66.1725097,1.63808217 64.6677591,4.21687167 L64.1779901,4.21687167 L65.4373193,1.15034762 L65.5774834,0.383449206 L61.0981383,0.383449206 L57.0741924,23 L61.5879072,23 L62.9530308,15.1941079 Z M63.9680124,9.54879438 C63.9680124,6.65607924 66.3470436,4.18210989 69.2169177,4.18210989 C71.5964859,4.18210989 73.4159346,5.95923919 73.4159346,8.50326691 C73.4159346,11.4649708 71.0712732,13.8694166 68.3066564,13.8694166 C65.8921814,13.8694166 63.9680124,12.1623457 63.9680124,9.54879438 L63.9680124,9.54879438 Z" fill="currentColor" mask="url(#mask-2)" data-v-0754d764=""></path></g></g></g></svg>
        </a>
        <app-header-information [weatherTemperature]="weatherTemperature" [videoCount]="videoCount"></app-header-information>
        <button (click)="toggleDarkMode()" class="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white">
          <lucide-icon [name]="isDarkMode ? 'sun' : 'moon'"></lucide-icon>
        </button>
      </nav>
    </header>
  `,
  styles: [`
    /* You can add component-specific styles here if needed */
  `]
})
export class HeaderComponent implements OnInit {
  isDarkMode = true; // Default to dark, will be updated by system check on init
  weatherTemperature: string = '';
  videoCount: number = 0;
  
  constructor(
    private headerInformationService: HeaderInformationService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  
  ngOnInit() {
    this.setInitialThemeBasedOnSystem();
    this.headerInformationService.getHeaderInformation().subscribe((headerInformation) => {
      this.weatherTemperature = headerInformation.weatherTemperature;
      this.videoCount = headerInformation.videoCount;
  });
  }

  setInitialThemeBasedOnSystem() {
    // Check for SSR/browser environment first
    if (typeof window !== 'undefined' && window.matchMedia) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      const prefersLight = window.matchMedia('(prefers-color-scheme: light)');

      if (prefersDark.matches) {
        this.isDarkMode = true;
      } else if (prefersLight.matches) {
        this.isDarkMode = false;
      } else {
        // Default to dark if no explicit system preference is matched
        this.isDarkMode = true; 
      }
    } else {
      // Fallback for environments without window.matchMedia (e.g., SSR or very old browsers)
      // isDarkMode is already true by default as initialized
      this.isDarkMode = true; 
    }
    this.updateRenderMode();
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.updateRenderMode();
  }

  updateRenderMode() {
    if (this.isDarkMode) {
      this.renderer.addClass(this.document.documentElement, 'dark');
    } else {
      this.renderer.removeClass(this.document.documentElement, 'dark');
    }
  }
}

