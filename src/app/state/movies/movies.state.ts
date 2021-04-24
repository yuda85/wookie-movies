import { Injectable } from '@angular/core';
import { State, StateContext, Action } from '@ngxs/store';
import {
  SetMovies,
  SetMoviesByGenre,
  SetSearchResults,
} from './movies.actions';
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
  }

  @Action(SetMoviesByGenre)
  setMoviesByGenre(
    ctx: StateContext<MoviesStateModel>,
    action: SetMoviesByGenre
  ) {
    ctx.patchState({ moviesByGenre: action.payload });
  }

  @Action(SetSearchResults)
  setSearchResults(
    ctx: StateContext<MoviesStateModel>,
    action: SetSearchResults
  ) {
    ctx.patchState({ searchResults: action.payload });
  }
}
