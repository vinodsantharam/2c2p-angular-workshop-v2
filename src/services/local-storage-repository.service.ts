import { Injectable } from '@angular/core';
import { VideoLookupResult } from './video-lookup.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageRepositoryService {
  private readonly STORAGE_KEY = 'myVideosList';

  constructor() { }

  private getVideosFromStorage(): VideoLookupResult[] {
    if (typeof localStorage !== 'undefined') {
      const videosJson = localStorage.getItem(this.STORAGE_KEY);
      return videosJson ? JSON.parse(videosJson) : [];
    }
    return []; // Return empty array if localStorage is not available (e.g., SSR)
  }

  private saveVideosToStorage(videos: VideoLookupResult[]): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(videos));
    }
  }

  getVideos(): VideoLookupResult[] {
    return this.getVideosFromStorage();
  }

  getVideoById(imdbId: string): VideoLookupResult | undefined {
    const videos = this.getVideosFromStorage();
    return videos.find(video => video.externals.imdb === imdbId);
  }

  saveVideo(video: VideoLookupResult): boolean {
    if (!video || !video.id) {
      console.error('Cannot save video without an ID');
      return false;
    }
    const videos = this.getVideosFromStorage();
    const existingIndex = videos.findIndex(v => v.id === video.id);

    if (existingIndex > -1) {
      // VideoLookupResult already exists, update it (optional, or choose to do nothing)
      // For now, let's just prevent duplicates by not re-adding if ID exists.
      // To update: videos[existingIndex] = video;
      console.warn(`VideoLookupResult with ID ${video.id} already exists. Not re-adding.`);
      return false; // Indicate video was not newly added
    } else {
      videos.push(video);
      this.saveVideosToStorage(videos);
      return true; // Indicate video was successfully added
    }
  }

  removeVideo(imdbId: string): boolean {
    let videos = this.getVideosFromStorage();
    const initialLength = videos.length;
    videos = videos.filter(video => video.externals.imdb !== imdbId);
    if (videos.length < initialLength) {
      this.saveVideosToStorage(videos);
      return true; // Indicate video was successfully removed
    }
    return false; // Indicate video was not found or not removed
  }

  // Optional: Clear all videos
  clearAllVideos(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(this.STORAGE_KEY);
    }
  }
}
