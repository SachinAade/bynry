// map-viewer.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-map-viewer',
  template: '<div id="map"></div>',
  styleUrls: ['./map-viewer.component.scss']
})
export class ProfileListComponent {

  @Input()
  address!: string;
  profile!: {
    name: string;
    photo: string;
    description: string;

  };

  ngAfterViewInit() {
    // Initialize the map and add marker for the provided address
    const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: { lat: 0, lng: 0 },
      zoom: 10
    });

    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: this.address }, (results, status) => {
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

