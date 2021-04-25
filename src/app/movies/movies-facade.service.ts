import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IMovie, MoviesByGenres } from '../models';
import { SearchMovies } from '../state/movies/movies.actions';
import { MoviesStateSelectors } from '../state/movies/movies.selectors';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root',
})
export class MoviesFacadeService {
  constructor(private store: Store) {}

  public getMovieBySlug(slug: string): Observable<IMovie> {
    return this.store.select(MoviesStateSelectors.movies).pipe(
      map((movies) => {
        const movie = movies.find((movie) => {
          return movie.slug === slug;
        });
        return movie;
      })
    );
  }

  public getMovieById(movieId: string): Observable<IMovie> {
    return this.store.select(MoviesStateSelectors.movies).pipe(
      map((movies) => {
        const movie = movies.find((movie) => {
          return movie.id === movieId;
        });
        return movie;
      })
    );
  }

  public getMoviesbyGenre(genre: string): Observable<IMovie[]> {
    return this.store.select(MoviesStateSelectors.moviesByGenre).pipe(
      map((data) => {
        return data[genre];
      })
    );
  }

  public getSerchResults(): Observable<IMovie[]> {
    return this.store.select(MoviesStateSelectors.searchResults);
  }

  public getGroupdMoviesbygenre(): Observable<MoviesByGenres> {
    return this.store.select(MoviesStateSelectors.moviesByGenre);
  }

  public searchMovie(text: string): void {
    this.store.dispatch(new SearchMovies(text));
  }
}
