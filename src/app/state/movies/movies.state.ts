import { Injectable } from '@angular/core';
import { State, StateContext, Action } from '@ngxs/store';
import { SetMovies } from './movies.actions';
import { MoviesStateModel } from './movies.model';
@Injectable({
  providedIn: 'root',
})
@State<MoviesStateModel>({
  name: 'movies',
  defaults: {
    movies: [],
  },
})
export class MoviesState {
  @Action(SetMovies)
  setUser(ctx: StateContext<MoviesStateModel>, action: SetMovies) {
    ctx.patchState({ movies: action.payload });
  }
}
