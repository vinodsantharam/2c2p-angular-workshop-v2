import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchVideoResult } from './video.model';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private readonly searchUrl = 'https://api.tvmaze.com/search/shows?q=';

  private httpClient = inject(HttpClient);

  public searchVideos(searchTerm: string): Observable<SearchVideoResult[]> {
    const url = `${this.searchUrl}${searchTerm}`;
    return this.httpClient.get<SearchVideoResult[]>(url);
  }
}