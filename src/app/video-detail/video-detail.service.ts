import { inject, Injectable } from "@angular/core";
import { VideoService } from "../../services/video.service";
import { map, Observable } from "rxjs";
import { VideoDetailViewModel } from "./video-detail.viewmodel";

@Injectable({
  providedIn: 'root'
})
export class VideoDetailService {
  private videoService = inject(VideoService);


  public getVideoDetails(id: string): Observable<VideoDetailViewModel> {
    return this.videoService.getVideoDetails(id).pipe(
        map((video) => {
            return {
                id: video.externals.imdb,
                name: video.name,
                image: video.image.medium,
                rating: Math.round(video.rating.average),
                summary: video.summary,
                genres: video.genres,
                language: video.language,
                status: video.status,
                ended: video.ended,
                premiered: video.premiered
            }
        })
    )
  }
}