import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { PhotosComponent } from './photos/photos.component';
import { MoviesComponent } from './movies/movies.component';
import { AnimalComponent } from './animal/animal.component';
import { ZooAnimalComponent } from './zoo-animal/zoo-animal.component';
import { UsersComponent } from './users/users.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PhotosComponent,
    MoviesComponent,
    AnimalComponent,
    ZooAnimalComponent,
    UsersComponent,
    SignInComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
