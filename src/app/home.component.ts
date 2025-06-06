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

@Component({
  selector: "app-home",
  standalone: true,
  imports: [SearchComponent, TileVideosComponent, UserVideosComponent],
  template: `
    <app-search (searchSubmitted)="onSearchPerformed($event)"></app-search>
    <app-tile-videos [videos]="searchResultTileVideosViewModels" (addToList)="onAddToList($event)"></app-tile-videos>
    <app-user-videos [videos]="userVideos" (viewDetails)="onViewVideoDetails($event)" (deleteVideo)="onDeleteVideo($event)"></app-user-videos>
  `,
})
export class HomeComponent implements OnInit {

  private videoService = inject(TileVideoService);
  private userVideoService = inject(UserVideoService);

  searchResultTileVideosViewModels: TileVideoViewModel[] = [];
  userVideos: UserVideoViewModel[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userVideos = this.getUserVideos();
  }

  onSearchPerformed(searchTerm: string) {
    this.searchVideos(searchTerm);
  }

  onAddToList($event: TileVideoViewModel) {
    this.userVideoService.addVideo($event).pipe(filter((result) => result), tap(() => this.userVideos = this.getUserVideos())).subscribe();
  }

  onViewVideoDetails(video: UserVideoViewModel) {
    this.router.navigate(['/video', video.id]);
  }

  onDeleteVideo(videoToDelete: UserVideoViewModel) {
    this.userVideoService.deleteVideo(videoToDelete);
    this.userVideos = this.getUserVideos();
  }

  private searchVideos(searchTerm: string) {
    this.videoService.getTileVideoViewModels(searchTerm).subscribe((videos) => {
      this.searchResultTileVideosViewModels = videos;
    });
  }

  private getUserVideos(): UserVideoViewModel[] {
    return this.userVideoService.getVideos();
  }
}
