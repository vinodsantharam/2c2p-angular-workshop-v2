import { Injectable } from "@angular/core";
import { AccountService } from "../../services/account.service";
import { UserVideoViewModel } from "./video.model";
import { TileVideoViewModel } from "../tile-videos/tile-video.viewmodel";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserVideoService {
  
  constructor(private accountService: AccountService) {}

  public getVideos(): UserVideoViewModel[] {
    return this.accountService.getVideos().map((video) => {
      return {
        id: video.externals.imdb,
        name: video.name,
        language: video.language,
        genres: video.genres,
        rating: video.rating.average,
        status: video.status,
        ended: video.ended,
        image: video.image.original
      }
    });
  }

  public getVideoById(imdbId: string): UserVideoViewModel | undefined {
    const video = this.accountService.getVideoById(imdbId);
    if (video) {
      return {
        id: video.externals.imdb,
        name: video.name,
        language: video.language,
        genres: video.genres,
        rating: video.rating.average,
        status: video.status,
        ended: video.ended,
        image: video.image.original
      }
    }
    return undefined;
  }

  public deleteVideo(videoToDelete: UserVideoViewModel) {
    this.accountService.removeVideo(videoToDelete.id);
  }

  public addVideo(video: TileVideoViewModel): Observable<boolean> {
    return this.accountService.saveVideo(video.id);
  }
}