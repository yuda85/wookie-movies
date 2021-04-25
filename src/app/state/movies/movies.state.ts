import { Injectable } from '@angular/core';
import { State, StateContext, Action } from '@ngxs/store';
import { MoviesByGenres } from 'src/app/models';
import { SetMovies, SetSearchResults } from './movies.actions';
import { MoviesStateModel } from './movies.model';
@Injectable({
  providedIn: 'root',
})
@State<MoviesStateModel>({
  name: 'movies',
  defaults: {
    movies: [],
    moviesByGenre: {},
    searchResults: [],
  },
})
export class MoviesState {
  @Action(SetMovies)
  setMovies(ctx: StateContext<MoviesStateModel>, action: SetMovies) {
    ctx.patchState({ movies: action.payload });
    let moviesByGenre: MoviesByGenres = {};
    action.payload.forEach((movie) => {
      movie.genres.forEach((genre) => {
        if (moviesByGenre[genre] && moviesByGenre[genre].length) {
          moviesByGenre[genre].push(movie);
        } else {
          moviesByGenre[genre] = [movie];
        }
      });
    });
    ctx.patchState({ moviesByGenre: moviesByGenre });
  }

  @Action(SetSearchResults)
  setSearchResults(
    ctx: StateContext<MoviesStateModel>,
    action: SetSearchResults
  ) {
    ctx.patchState({ searchResults: action.payload });
  }
}
