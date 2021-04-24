import { createSelector, Selector } from '@ngxs/store';
import { IMovie } from 'src/app/models/movie.interface';
import { MoviesStateModel } from './movies.model';
import { MoviesState } from './movies.state';

export class MoviesStateSelectors {
  @Selector([MoviesState])
  static movies(state: MoviesStateModel): IMovie[] {
    return state.movies;
  }

  @Selector([MoviesState])
  static moviesByGenre(state: MoviesStateModel): { [key: string]: IMovie[] } {
    return state.moviesByGenre;
  }

  @Selector([MoviesState])
  static searchResults(state: MoviesStateModel): IMovie[] {
    return state.searchResults;
  }
}
