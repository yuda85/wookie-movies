import { Selector } from '@ngxs/store';
import { MoviesByGenres, IMovie } from '../../models';
import { MoviesStateModel } from './movies.model';
import { MoviesState } from './movies.state';

export class MoviesStateSelectors {
  @Selector([MoviesState])
  static movies(state: MoviesStateModel): IMovie[] {
    return state.movies;
  }

  @Selector([MoviesState])
  static moviesByGenre(state: MoviesStateModel): MoviesByGenres {
    return state.moviesByGenre;
  }

  @Selector([MoviesState])
  static searchResults(state: MoviesStateModel): IMovie[] {
    return state.searchResults;
  }
}
