import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchVideoResult } from './models/search-video.model';
import { VideoLookupResult } from './models/video-lookup.model';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private readonly searchUrl = 'https://api.tvmaze.com/search/shows?q=';
  private readonly searchByIdUrl = 'https://api.tvmaze.com/lookup/shows?imdb=';

  private httpClient = inject(HttpClient);

  public searchVideos(searchTerm: string): Observable<SearchVideoResult[]> {
    const url = `${this.searchUrl}${searchTerm}`;
    return this.httpClient.get<SearchVideoResult[]>(url);
  }

  public getVideoDetails(id: string): Observable<VideoLookupResult> {
    const url = `${this.searchByIdUrl}${id}`;
    return this.httpClient.get<VideoLookupResult>(url);
  }
}