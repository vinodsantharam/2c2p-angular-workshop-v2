import { Component, inject, OnInit } from "@angular/core";
import { SearchComponent } from "./search/search.component";
import { TileVideosComponent } from "./tile-videos/tile-videos.component";
import { TileVideoService } from "./tile-videos/tile-video.service";
import { TileVideoViewModel } from "./tile-videos/tile-video.viewmodel";
import { UserVideosComponent } from "./user-videos/user-videos.component";
import { UserVideoService } from "./user-videos/user-video.service";
import { UserVideoViewModel } from "./user-videos/video.model";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [SearchComponent, TileVideosComponent, UserVideosComponent],
  template: `
    <app-search (searchSubmitted)="onSearchPerformed($event)"></app-search>
    <app-tile-videos [videos]="searchResultTileVideosViewModels"></app-tile-videos>
    <app-user-videos [videos]="userVideos"></app-user-videos>
  `,
})
export class HomeComponent implements OnInit {
  private videoService = inject(TileVideoService);
  private userVideoService = inject(UserVideoService);

  searchResultTileVideosViewModels: TileVideoViewModel[] = [];
  userVideos: UserVideoViewModel[] = [];

  ngOnInit(): void {
    this.userVideos = this.userVideoService.getVideos();
  }

  onSearchPerformed(searchTerm: string) {
    this.searchVideos(searchTerm);
  }

  handleViewVideoDetails(video: UserVideoViewModel) {
    console.log("Viewing details for video in AppComponent:", video);
  }

  handleDeleteVideo(videoToDelete: UserVideoViewModel) {
    console.log("Deleting video in AppComponent:", videoToDelete);
    // this.sampleVideos = this.sampleVideos.filter(video => video.id !== videoToDelete.id);
  }

  private searchVideos(searchTerm: string) {
    this.videoService.getTileVideoViewModels(searchTerm).subscribe((videos) => {
      this.searchResultTileVideosViewModels = videos;
    });
  }
}
