import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { PhotosComponent } from './photos/photos.component';
import { MoviesComponent } from './movies/movies.component';
import { AnimalComponent } from './animal/animal.component';
import { ZooAnimalComponent } from './zoo-animal/zoo-animal.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PhotosComponent,
    MoviesComponent,
    AnimalComponent,
    ZooAnimalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
