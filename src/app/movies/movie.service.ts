import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { MoviesStateSelectors } from '../state/movies/movies.selectors';
import { filter, map, take, tap } from 'rxjs/operators';
import { SetMovies, SetSearchResults } from '../state/movies/movies.actions';
import { Router } from '@angular/router';
import { IMovie } from '../models';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private _movies: IMovie[];
  private mainUrl: string = 'https://wookie.codesubmit.io/movies';
  private searchUrl: string = 'https://wookie.codesubmit.io/movies?q=';

  constructor(
    private httpService: HttpClient,
    private store: Store,
    private router: Router
  ) {}

  public getMovie(id: string): Observable<IMovie> {
    return null;
  }

  public getMovies(): Observable<IMovie[]> {
    this._movies = this.store.selectSnapshot(MoviesStateSelectors.movies);

    if (!this._movies.length) {
      return this.fetchMovies() as Observable<IMovie[]>;
    } else {
      return this.store.select(MoviesStateSelectors.movies);
    }
  }

  public searchMovie(text: string): void {
    const movies = this.store
      .selectSnapshot(MoviesStateSelectors.movies)
      .filter((movie) => {
        const serchTerm = text.toLowerCase();
        const name = movie.title.toLocaleLowerCase();
        return name.includes(serchTerm);
      });
    if (!movies.length) {
      this.searchMovieOnServer(text)
        .pipe(
          filter((data) => !!data),
          take(1)
        )
        .subscribe((data) => {
          this.handleRoutingAfterSerch(data);
          this.store.dispatch(new SetSearchResults(data));
        });
    } else {
      this.handleRoutingAfterSerch(movies);
      this.store.dispatch(new SetSearchResults(movies));
    }
  }

  private fetchMovies(): Observable<IMovie[]> {
    const headers = { Authorization: 'Bearer Wookie2019' };
    return this.httpService.get(this.mainUrl, { headers }).pipe(
      filter((data) => !!data),
      map((data) => {
        return data['movies'];
      }),
      tap((data) => {
        this.store.dispatch(new SetMovies(data));
      })
    );
  }

  private searchMovieOnServer(serchterm: string): Observable<IMovie[]> {
    const headers = { Authorization: 'Bearer Wookie2019' };
    return this.httpService
      .get(`${this.searchUrl}${serchterm}`, { headers })
      .pipe(
        filter((data) => !!data),
        map((data) => {
          if (!data['movies']) {
          }
          return data['movies'];
        })
      );
  }

  private handleRoutingAfterSerch(movies: IMovie[]): void {
    if (!movies.length) {
      this.router.navigate(['no-results']);
    } else {
      this.router.navigate(['results']);
    }
  }
}
