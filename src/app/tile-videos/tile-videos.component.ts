import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TileVideoViewModel } from './tile-video.viewmodel';
import { LucideAngularModule, PlusCircle } from 'lucide-angular';

@Component({
  selector: 'app-tile-videos',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  template: `
    <div class="py-6">
      <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Search Results</h3>
      <div *ngIf="!videos || videos.length === 0" class="text-center text-gray-500 dark:text-gray-400">
        No videos to display.
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div *ngFor="let video of videos" 
           class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col justify-between"
        >
          <a [routerLink]="['/video', video.id]" 
             class="block hover:opacity-80 transition-opacity duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 rounded-t-lg"
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
                <span class="text-yellow-400 dark:text-yellow-300 mr-1">★</span>
                <span class="text-sm text-gray-600 dark:text-gray-400">{{ video.rating }}/10</span>
              </div>
            </div>
          </a>
          <div class="p-4 border-t border-gray-200 dark:border-gray-700 mt-auto">
            <button 
              (click)="onAddToList(video); $event.stopPropagation();" 
              class="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800 disabled:opacity-50"
              attr.aria-label="Add {{ video.name }} to my list"
            >
              <i-lucide [img]="PlusCircleIcon" [size]="18" class="mr-2"></i-lucide>
              Add to my list
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    // Component-specific styles can go here if needed
  ]
})
export class TileVideosComponent {
  @Input() videos: TileVideoViewModel[] = [];
  @Output() addToList = new EventEmitter<TileVideoViewModel>();

  readonly PlusCircleIcon = PlusCircle;

  onAddToList(video: TileVideoViewModel) {
    this.addToList.emit(video);
    console.log('Adding to list:', video);
    // Add any visual feedback or disable logic here if needed
  }
}
