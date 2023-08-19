// map-viewer.component.ts
import { Component, Input, AfterViewInit } from '@angular/core';
import { google } from 'googlemaps';


@Component({
  selector: 'app-map-viewer',
  template: '<div id="map"></div>',
  styleUrls: ['./map-viewer.component.css']
})
export class MapViewerComponent implements AfterViewInit {
  @Input()
  address!: string;

  ngAfterViewInit() {
    this.initMap();
  }

  private initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 0, lng: 0 },
      zoom: 10
    });

    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: this.address }, (results: { geometry: { location: any; }; }[], status: string) => {
      if (status === 'OK') {
        new google.maps.Marker({
          position: results[0].geometry.location,
          map: map
        });
        map.setCenter(results[0].geometry.location);
      }
    });
  }
}
