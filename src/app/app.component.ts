import { Component } from '@angular/core';
import { Location } from './location-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'GMaps Integration';
  location: Location = {
    latitude: 17.686815,
    longitude: 83.218483,
    zoom: 10,
    isFullScreen: true,
    markers: [
      {
        lat: 17.686815,
        lng: 83.218483,
      },
    ],
  };
}
