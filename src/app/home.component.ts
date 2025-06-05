import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { UserVideosComponent } from "./user-videos/user-videos.component";
import { SearchComponent } from "./search/search.component";
import { TileVideosComponent } from "./tile-videos/tile-videos.component";
import { sampleVideosData } from "./app.component";
import { Video } from "../services/video.model";
import { VideoService } from "../services/video.service";
import { TileVideoService } from "./tile-videos/tile-video.service";
import { TileVideoViewModel } from "./tile-videos/tile-video.viewmodel";


@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    UserVideosComponent,
    SearchComponent,
    TileVideosComponent
],
  template: `
    <app-search (searchSubmitted)="onSearchPerformed($event)"></app-search>
    <app-tile-videos [videos]="sampleVideos"></app-tile-videos>
    <!-- <app-user-videos [videos]="sampleVideos"></app-user-videos> -->
    `,
})
export class HomeComponent {
    private videoService = inject(TileVideoService);
  
    sampleVideos: TileVideoViewModel[] = []; 


  onSearchPerformed(searchTerm: string) {
    this.searchVideos(searchTerm);
  }

  handleViewVideoDetails(video: Video) {
    console.log("Viewing details for video in AppComponent:", video);
  }

  handleDeleteVideo(videoToDelete: Video) {
    console.log("Deleting video in AppComponent:", videoToDelete);
   // this.sampleVideos = this.sampleVideos.filter(video => video.id !== videoToDelete.id);
  }

//   getVideoById(id: string): Video | undefined {
//     return this.sampleVideos.find(video => video.id === id);
//   }

  private searchVideos(searchTerm: string) {
    this.videoService.getTileVideoViewModels(searchTerm).subscribe((videos) => {
      this.sampleVideos = videos;
    });
  }
}
