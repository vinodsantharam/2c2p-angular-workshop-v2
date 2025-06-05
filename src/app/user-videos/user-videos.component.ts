import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // For ngFor, ngIf, etc.
import { LucideAngularModule, Eye, Trash2 } from 'lucide-angular'; // Import LucideAngularModule, Eye icon, and Trash2 icon
import { Video } from '../../services/search-video.model';

@Component({
  selector: 'app-user-videos',
  standalone: true,
  imports: [CommonModule, LucideAngularModule], // Add LucideAngularModule
  template: `
    <div class="container mx-auto p-4">
      <h2 class="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">My Videos</h2>
      <div class="overflow-x-auto shadow-md sm:rounded-lg">
        <table class="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">Image</th>
              <th scope="col" class="px-6 py-3">Name</th>
              <th scope="col" class="px-6 py-3">Language</th>
              <th scope="col" class="px-6 py-3">Genres</th>
              <th scope="col" class="px-6 py-3">Rating</th>
              <th scope="col" class="px-6 py-3">Status</th>
              <th scope="col" class="px-6 py-3">Ended</th>
              <th scope="col" class="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="!videos || videos.length === 0" class="bg-white dark:bg-gray-800">
              <td colspan="8" class="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                No videos available.
              </td>
            </tr>
            <tr *ngFor="let video of videos" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="px-6 py-4">
                <img [src]="video.image" alt="{{ video.name }}" class="w-16 h-16 object-cover rounded">
              </td>
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {{ video.name }}
              </th>
              <td class="px-6 py-4">{{ video.language }}</td>
              <td class="px-6 py-4">{{ video.genres.join(', ') }}</td>
              <td class="px-6 py-4">{{ video.rating }}/10</td>
              <td class="px-6 py-4">
                <span 
                  [ngClass]="{
                    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300': video.status === 'Available',
                    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300': video.status === 'Upcoming',
                    'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300': video.status === 'Ended'
                  }"
                  class="text-xs font-medium me-2 px-2.5 py-0.5 rounded"
                >
                  {{ video.status }}
                </span>
              </td>
              <td class="px-6 py-4">{{ video.ended }}</td>
              <td class="px-6 py-4 text-center">
                <button 
                  (click)="onViewDetails(video)" 
                  class="p-1 text-blue-600 dark:text-blue-500 hover:text-blue-800 dark:hover:text-blue-300 focus:outline-none mr-2"
                  aria-label="View Details"
                >
                  <i-lucide [img]="EyeIcon" [size]="20" class="inline-block"></i-lucide>
                </button>
                <button 
                  (click)="onDeleteVideo(video)" 
                  class="p-1 text-red-600 dark:text-red-500 hover:text-red-800 dark:hover:text-red-300 focus:outline-none"
                  aria-label="Delete Video"
                >
                  <i-lucide [img]="Trash2Icon" [size]="20" class="inline-block"></i-lucide>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [
    // Component-specific styles can go here if needed
    // Tailwind utility classes are primarily used in the template
  ]
})
export class UserVideosComponent {
  @Input() videos: Video[] = [];
  @Output() viewDetails = new EventEmitter<Video>();
  @Output() deleteVideo = new EventEmitter<Video>();

  readonly EyeIcon = Eye;
  readonly Trash2Icon = Trash2;

  onViewDetails(video: Video) {
    this.viewDetails.emit(video);
    console.log('View details for:', video);
  }

  onDeleteVideo(video: Video) {
    this.deleteVideo.emit(video);
    console.log('Delete video:', video);
  }
}
