import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { UserVideosComponent } from "./user-videos/user-videos.component";
import { SearchComponent } from "./search/search.component";
import { TileVideosComponent } from "./tile-videos/tile-videos.component";
import { sampleVideosData } from "./app.component";
import { Video } from "./user-videos/user-videos.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    UserVideosComponent,
    SearchComponent,
    TileVideosComponent,
  ],
  template: ` 
    <app-search></app-search>
    <app-tile-videos [videos]="sampleVideos"></app-tile-videos>
    <app-user-videos [videos]="sampleVideos"></app-user-videos>`,
})
export class HomeComponent {
  sampleVideos: Video[] = sampleVideosData; // Use the exported constant
}
