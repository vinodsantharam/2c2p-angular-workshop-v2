import { Component, inject, OnInit } from "@angular/core";
import { SearchComponent } from "./search/search.component";
import { TileVideosComponent } from "./tile-videos/tile-videos.component";
import { TileVideoService } from "./tile-videos/tile-video.service";
import { TileVideoViewModel } from "./tile-videos/tile-video.viewmodel";
import { UserVideosComponent } from "./user-videos/user-videos.component";
import { UserVideoService } from "./user-videos/user-video.service";
import { UserVideoViewModel } from "./user-videos/video.model";
import { Router } from "@angular/router";
import { tap } from "rxjs";
import { filter } from "rxjs";
import { VideoCounterService } from "../services/video-counter.service";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [SearchComponent, TileVideosComponent, UserVideosComponent],
  template: `
    <app-search (searchSubmitted)="onSearchPerformed($event)"></app-search>
    <app-tile-videos></app-tile-videos>
    <app-user-videos></app-user-videos>
  `,
})
export class HomeComponent implements OnInit {

  private videoService = inject(TileVideoService);
  private userVideoService = inject(UserVideoService);
  private videoCounterService = inject(VideoCounterService);

  searchResultTileVideosViewModels: TileVideoViewModel[] = [];
  userVideos: UserVideoViewModel[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userVideos = this.getUserVideos();
    this.updateVideoCount(this.userVideos.length)
  }

  onSearchPerformed(searchTerm: string) {
    this.searchVideos(searchTerm);
  }

  onAddToList($event: TileVideoViewModel) {
    this.userVideoService.addVideo($event).pipe(
      filter((result) => result), 
      tap(() => this.userVideos = this.getUserVideos()),
    ).subscribe();
  }

  onViewVideoDetails(video: UserVideoViewModel) {
    // COMPLEXITY: MEDIUM 🆗🆗🆗
    // We want to navigate to the video detail page.
    // The route should be dynamic and should take the id from the url.
    // Hint: Use the router to navigate to the video detail page.
  }

  onDeleteVideo(videoToDelete: UserVideoViewModel) {
    this.userVideoService.deleteVideo(videoToDelete);
    this.userVideos = this.getUserVideos();
  }

  private searchVideos(searchTerm: string) {
    // COMPLEXITY: LOW 🤏🏾🤏🏾🤏🏾
    // We want to search for videos based on the search term.
    // The search term should be passed to the service.
    // The list of videos should be displayed in the tile videos component.
    // Hint: Find the right service to use. Find the right component to use.
  }

  private getUserVideos(): UserVideoViewModel[] {
    return this.userVideoService.getVideos();
  }

  private updateVideoCount(numberOfVideos: number): void {
    this.videoCounterService.updateVideoCount(numberOfVideos);
  }
}
