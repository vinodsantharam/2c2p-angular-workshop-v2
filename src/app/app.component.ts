import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { UserVideosComponent, Video } from "./user-videos/user-videos.component";
import { SearchComponent } from "./search/search.component";
import { TileVideosComponent } from "./tile-videos/tile-videos.component";

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
    HeaderComponent, 
    UserVideosComponent, 
    SearchComponent, 
    TileVideosComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = "workshop";
  sampleVideos: Video[] = sampleVideosData; // Use the exported constant

  // Handler for the search event (optional, for now just logs)
  onSearchPerformed(searchTerm: string) {
    console.log("Search performed in AppComponent:", searchTerm);
    // Placeholder for search filtering logic
  }

  handleViewVideoDetails(video: Video) {
    console.log("Viewing details for video in AppComponent:", video);
    // Placeholder for view details logic (e.g., open modal, navigate)
  }

  handleDeleteVideo(videoToDelete: Video) {
    console.log("Deleting video in AppComponent:", videoToDelete);
    this.sampleVideos = this.sampleVideos.filter(video => video.id !== videoToDelete.id);
  }

  // Method to get video by ID, to be used by VideoDetailComponent (conceptually)
  getVideoById(id: string): Video | undefined {
    return this.sampleVideos.find(video => video.id === id);
  }
}
