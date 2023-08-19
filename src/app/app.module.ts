import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { MapViewerComponent } from './map-viewer/map-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileListComponent,
    MapViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
