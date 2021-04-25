import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenrePageComponent } from './components/genre-page/genre-page.component';

import { SearchResultsComponent } from './components/search-results/search-results.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {
    path: 'movie/:id',
    component: MovieComponent,
  },
  {
    path: 'genre/:id',
    component: GenrePageComponent,
  },

  {
    path: 'search',
    component: SearchResultsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
