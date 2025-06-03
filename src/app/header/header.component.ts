import { Component, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
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
export class HeaderComponent {
  isDarkMode = false;

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformId: Object) {
    this.checkInitialMode();
  }

  ngOnInit() {
    // ngOnInit can be used for other initialization logic if needed
    // Initial dark mode check is handled by constructor calling checkInitialMode
  }

  checkInitialMode() {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        this.isDarkMode = savedTheme === 'dark';
      } else {
        this.isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      this.updateRenderMode();
    }
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
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
