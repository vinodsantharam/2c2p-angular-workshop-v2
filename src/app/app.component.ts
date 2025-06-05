import { Component, inject, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { UserVideosComponent } from "./user-videos/user-videos.component";
import { SearchComponent } from "./search/search.component";
import { TileVideosComponent } from "./tile-videos/tile-videos.component";
import { Video } from "../services/video.model";
import { VideoService } from "../services/video.service";

// Exporting sampleVideos for VideoDetailComponent to use directly (temporary for demo)
export const sampleVideosData: Video[] = [
  {
    id: "v1",
    name: "Introduction to Angular",
    language: "English",
    genres: ["Education", "Programming"],
    rating: 9,
    status: "Available",
    ended: "2023-01-15",
    image: "https://via.placeholder.com/300x200/0000FF/808080?Text=AngularIntro"
  },
  {
    id: "v2",
    name: "Tailwind CSS for Beginners",
    language: "English",
    genres: ["Styling", "Web Development"],
    rating: 8,
    status: "Available",
    ended: "2023-02-20",
    image: "https://via.placeholder.com/300x200/33FF99/000000?Text=TailwindCSS"
  },
  {
    id: "v3",
    name: "Advanced TypeScript Techniques",
    language: "English",
    genres: ["Programming", "TypeScript"],
    rating: 7,
    status: "Upcoming",
    ended: "2024-07-30",
    image: "https://via.placeholder.com/300x200/FF33CC/FFFFFF?Text=TypeScriptAdv"
  },
  {
    id: "v4",
    name: "The Future of Web Development",
    language: "Spanish",
    genres: ["Technology", "Future"],
    rating: 6,
    status: "Ended",
    ended: "2022-12-01",
    image: "https://via.placeholder.com/300x200/FFFF33/000000?Text=WebFuture"
  },
  {
    id: "v5",
    name: "Exploring Microfrontends",
    language: "English",
    genres: ["Architecture", "Web Development"],
    rating: 8.5,
    status: "Available",
    ended: "2023-05-10",
    image: "https://via.placeholder.com/300x200/F0A0F0/000000?Text=Microfrontends"
  },
  {
    id: "v6",
    name: "Cybersecurity Basics",
    language: "English",
    genres: ["Security", "Networking"],
    rating: 7.8,
    status: "Upcoming",
    ended: "2024-08-15",
    image: "https://via.placeholder.com/300x200/A0F0F0/000000?Text=Cybersecurity"
  }
];

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent
],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = "workshop";
  sampleVideos: Video[] = sampleVideosData; // Use the exported constant


  ngOnInit(): void {
    
  }
}
