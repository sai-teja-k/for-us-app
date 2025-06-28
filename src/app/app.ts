import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
//import { LoveDisplay } from "./love-display/love-display";
//import { PhotoGallery } from "./photo-gallery/photo-gallery";
import { Navbar } from "./shared/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'for-us-app';
}
