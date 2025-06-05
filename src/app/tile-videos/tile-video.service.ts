import { inject, Injectable } from "@angular/core";
import { VideoService } from "../../services/video.service";
import { map, Observable } from "rxjs";
import { TileVideoViewModel } from "./tile-video.viewmodel";

@Injectable({
  providedIn: 'root'
})
export class TileVideoService {
  private httpClient = inject(VideoService);

  public getTileVideoViewModels(searchTerm: string): Observable<TileVideoViewModel[]> {
    return this.httpClient.searchVideos(searchTerm).pipe(
        map((videos) => {
            return videos.map((video) => {
                return {
                    id: video.show.externals.imdb,
                    name: video.show.name,
                    image: video.show.image.medium,
                    rating: Math.round(video.score * 10)
                }
            })
        })
    );
  }
}