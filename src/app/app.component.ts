import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./header/header.component";

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
  ngOnInit(): void {    
  }
}
