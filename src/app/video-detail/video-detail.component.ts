import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router'; // Import RouterModule for routerLink
import { sampleVideosData } from '../app.component'; // Correctly import sampleVideosData
import { Video } from '../../services/video.model';

@Component({
  selector: 'app-video-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mx-auto p-4 dark:text-gray-100">
      <div *ngIf="video; else notFound" class="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img 
              [src]="video.image || 'https://via.placeholder.com/400x300?text=No+Image'" 
              alt="{{ video.name }}" 
              class="h-64 w-full object-cover md:w-64"
            >
          </div>
          <div class="p-8 flex-grow">
            <div class="uppercase tracking-wide text-sm text-indigo-500 dark:text-indigo-400 font-semibold">Video ID: {{ video.id }}</div>
            <h1 class="block mt-1 text-3xl leading-tight font-bold text-black dark:text-white">{{ video.name }}</h1>
            <p class="mt-2 text-gray-600 dark:text-gray-400">Language: {{ video.language }}</p>
            <div class="mt-4">
              <span class="text-gray-700 dark:text-gray-300 font-semibold">Genres:</span>
              <span *ngFor="let genre of video.genres" class="ml-2 inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200">
                {{ genre }}
              </span>
            </div>
            <p class="mt-4 text-gray-600 dark:text-gray-400">Rating: <span class="text-yellow-500 dark:text-yellow-400 font-bold">{{ video.rating }}</span> / 10</p>
            <p class="mt-2 text-gray-600 dark:text-gray-400">Status: 
              <span 
                [ngClass]="{
                  'text-green-600 dark:text-green-400': video.status === 'Available',
                  'text-yellow-600 dark:text-yellow-400': video.status === 'Upcoming',
                  'text-red-600 dark:text-red-400': video.status === 'Ended'
                }"
                class="font-semibold"
              >
                {{ video.status }}
              </span>
            </p>
            <p class="mt-2 text-gray-600 dark:text-gray-400">Ended: {{ video.ended }}</p>
            
            <!-- Add to My Videos Button -->
            <div class="mt-6">
              <button 
                (click)="addToMyVideos()" 
                class="px-6 py-3 text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-md text-sm dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800"
              >
                Add to My Videos
              </button>
            </div>

          </div>
        </div>
      </div>
      <ng-template #notFound>
        <div class="text-center py-10">
          <h2 class="text-2xl font-semibold">Video not found</h2>
          <p class="text-gray-500 dark:text-gray-400">The video you are looking for does not exist.</p>
        </div>
      </ng-template>
      <div class="mt-8">
        <a routerLink="/" class="text-blue-600 dark:text-blue-400 hover:underline">&larr; Back to videos (Home)</a>
      </div>
    </div>
  `,
  styles: []
})
export class VideoDetailComponent implements OnInit {
  video: Video | undefined;
  @Output() addVideoToUserList = new EventEmitter<Video>();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.video = sampleVideosData.find((v: Video) => v.id === id); // Added type for v
    }
  }

  addToMyVideos(): void {
    if (this.video) {
      this.addVideoToUserList.emit(this.video);
      console.log('Emitting addVideoToUserList for:', this.video);
      // Potentially disable button or show feedback, or navigate
    }
  }
}
