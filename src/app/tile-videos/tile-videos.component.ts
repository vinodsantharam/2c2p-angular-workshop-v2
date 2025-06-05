import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TileVideoViewModel } from './tile-video.viewmodel';

@Component({
  selector: 'app-tile-videos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="py-6">
      <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Search Results</h3>
      <div *ngIf="!videos || videos.length === 0" class="text-center text-gray-500 dark:text-gray-400">
        No videos to display.
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <a *ngFor="let video of videos" 
           [routerLink]="['/video', video.id]" 
           class="block bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
           attr.aria-label="View details for {{ video.name }}"
        >
          <img 
            [src]="video.image || 'https://via.placeholder.com/300x200?text=No+Image'" 
            alt="{{ video.name }}" 
            class="w-full h-48 object-cover"
          >
          <div class="p-4">
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-1 truncate" title="{{ video.name }}">{{ video.name }}</h4>
            <div class="flex items-center">
              <!-- Simple star rating display (can be enhanced with icons) -->
              <span class="text-yellow-400 dark:text-yellow-300 mr-1">★</span>
              <span class="text-sm text-gray-600 dark:text-gray-400">{{ video.rating }}/10</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  `,
  styles: [
    // Component-specific styles can go here if needed
  ]
})
export class TileVideosComponent {
  @Input() videos: TileVideoViewModel[] = [];
}
