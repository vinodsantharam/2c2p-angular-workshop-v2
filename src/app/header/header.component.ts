import { Component, Renderer2, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="bg-gray-100 dark:bg-gray-800 shadow-md">
      <nav class="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" class="text-xl font-bold text-gray-800 dark:text-white">Logo</a>
        <button (click)="toggleDarkMode()" class="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white">
          {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
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

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.setInitialThemeBasedOnSystem();
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
    // No localStorage interaction, no listening to system changes after this point
  }

  updateRenderMode() {
    if (this.isDarkMode) {
      this.renderer.addClass(this.document.documentElement, 'dark');
    } else {
      this.renderer.removeClass(this.document.documentElement, 'dark');
    }
  }
  
  // ngOnDestroy is not needed anymore as there are no persistent listeners
}

