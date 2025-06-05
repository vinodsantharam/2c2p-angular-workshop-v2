import { Injectable } from '@angular/core';
import { LocalStorageRepositoryService } from './local-storage-repository.service';
import { VideoService } from './video.service';
import { VideoLookupResult } from './video-lookup.model';
import { map, Observable, tap } from 'rxjs';
  
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private localStorageRepository: LocalStorageRepositoryService, private videoService: VideoService) { }

  public getVideos(): VideoLookupResult[] {
    return this.localStorageRepository.getVideos();
  }

  public getVideoById(imdbId: string): VideoLookupResult | undefined {
    return this.localStorageRepository.getVideoById(imdbId);
  }

  public saveVideo(imdbId: string): Observable<boolean> {
    return this.videoService.getVideoDetails(imdbId).pipe(
      map((video) => {
        return this.localStorageRepository.saveVideo(video);
      })
    );
  }

  public removeVideo(imdbId: string): boolean {
    return this.localStorageRepository.removeVideo(imdbId);
  }

  public clearAllVideos(): void {
    this.localStorageRepository.clearAllVideos();
  }
}
