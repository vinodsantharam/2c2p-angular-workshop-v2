import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { UserVideosComponent, Video } from "./user-videos/user-videos.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserVideosComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = "workshop";

  // Fake video data
  sampleVideos: Video[] = [
    {
      name: "Introduction to Angular",
      language: "English",
      genres: ["Education", "Programming"],
      rating: 9,
      status: "Available",
      ended: "2023-01-15",
      image: "https://via.placeholder.com/150/0000FF/808080?Text=AngularIntro"
    },
    {
      name: "Tailwind CSS for Beginners",
      language: "English",
      genres: ["Styling", "Web Development"],
      rating: 8,
      status: "Available",
      ended: "2023-02-20",
      image: "https://via.placeholder.com/150/33FF99/000000?Text=TailwindCSS"
    },
    {
      name: "Advanced TypeScript Techniques",
      language: "English",
      genres: ["Programming", "TypeScript"],
      rating: 7,
      status: "Upcoming",
      ended: "2024-07-30",
      image: "https://via.placeholder.com/150/FF33CC/FFFFFF?Text=TypeScriptAdv"
    },
    {
      name: "The Future of Web Development",
      language: "Spanish",
      genres: ["Technology", "Future"],
      rating: 6,
      status: "Ended",
      ended: "2022-12-01",
      image: "https://via.placeholder.com/150/FFFF33/000000?Text=WebFuture"
    }
  ];
}
