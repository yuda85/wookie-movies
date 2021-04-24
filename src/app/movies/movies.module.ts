import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesContainerComponent } from './movies-container/movies-container.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieComponent } from './movie/movie.component';
import { MovieSliderComponent } from './components/movie-slider/movie-slider.component';
import { SwiperModule } from 'swiper/angular';
import { MaterialModule } from '../material/material.module';
import { NoResultsComponent } from './components/no-results/no-results.component';
import { GenrePageComponent } from './components/genre-page/genre-page.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';

@NgModule({
  declarations: [
    MoviesContainerComponent,
    MovieComponent,
    MovieSliderComponent,
    NoResultsComponent,
    GenrePageComponent,
    SearchResultsComponent,
    StarRatingComponent,
  ],
  imports: [CommonModule, MoviesRoutingModule, SwiperModule, MaterialModule],
  exports: [MoviesContainerComponent],
})
export class MoviesModule {}
