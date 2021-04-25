import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { State, StateContext, Action } from '@ngxs/store';
import { filter, map, take } from 'rxjs/operators';
import { IMovie, MoviesByGenres } from 'src/app/models';
import { MovieService } from 'src/app/movies/movie.service';
import { SearchMovies, SetMovies, SetSearchResults } from './movies.actions';
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
  constructor(private movieService: MovieService, private router: Router) {}

  ngxsOnInit(ctx: StateContext<MoviesStateModel>) {
    this.movieService.fetchMovies().subscribe((data) => {
      this.handleAddedMovies(ctx, data);
    });
  }

  @Action(SetMovies)
  setMovies(ctx: StateContext<MoviesStateModel>, action: SetMovies) {
    this.handleAddedMovies(ctx, action.payload);
  }

  @Action(SetSearchResults)
  setSearchResults(
    ctx: StateContext<MoviesStateModel>,
    action: SetSearchResults
  ) {
    ctx.patchState({ searchResults: action.payload });
  }

  @Action(SearchMovies)
  searchMovies(ctx: StateContext<MoviesStateModel>, action: SearchMovies) {
    const searchTerm = action.payload;
    const term = action.payload.toLowerCase();
    const movies = ctx.getState().movies;

    const foundMovies = movies.filter((movie) => {
      const name = movie.title.toLocaleLowerCase();
      return name.includes(term);
    });

    if (!foundMovies.length) {
      this.movieService
        .searchMovieOnServer(searchTerm)
        .pipe(
          filter((data) => !!data),
          take(1),
          map((data) => {
            if (data['movies']) {
              return data['movies'];
            } else {
              return data;
            }
          })
        )
        .subscribe((data) => {
          ctx.patchState({ searchResults: data });
          this.handleRoutingAfterSerch(data, term);
        });
    } else {
      ctx.patchState({ searchResults: foundMovies });
      this.handleRoutingAfterSerch(foundMovies, term);
    }
  }

  private mapMoviesToGenres(
    movies: IMovie[],
    ctx: StateContext<MoviesStateModel>
  ): void {
    let moviesByGenre: MoviesByGenres = {};
    movies.forEach((movie) => {
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

  private handleRoutingAfterSerch(movies: IMovie[], searchTerm: string): void {
    this.router.navigate(['search'], { queryParams: { term: searchTerm } });
  }

  private handleAddedMovies(
    ctx: StateContext<MoviesStateModel>,
    movies: IMovie[]
  ): void {
    ctx.patchState({ movies: movies });
    this.mapMoviesToGenres(movies, ctx);
  }
}
