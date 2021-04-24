import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesContainerComponent } from './movies-container/movies-container.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [MoviesContainerComponent, MovieComponent],
  imports: [CommonModule, MoviesRoutingModule],
  exports: [MoviesContainerComponent],
})
export class MoviesModule {}
