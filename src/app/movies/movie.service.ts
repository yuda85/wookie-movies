import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IMovie } from '../models/movie.interface';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { MoviesStateSelectors } from '../state/movies/movies.selectors';
import { filter, map, take, tap } from 'rxjs/operators';
import { SetMovies } from '../state/movies/movies.actions';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private _movies: IMovie[];
  private mainUrl: string = 'https://wookie.codesubmit.io/movies';
  private searchUrl: string = 'https://wookie.codesubmit.io/movies?q=';

  private searchSubject$: Subject<IMovie[]> = new Subject();

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

  public fetchMovies(): Observable<any> {
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

  public getMovieBySlug(slug: string): Observable<IMovie> {
    // return this.store.select(MoviesStateSelectors.movieBySlug(slug));
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

  public getSerchResults(): Observable<IMovie[]> {
    return this.searchSubject$.asObservable();
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
          this.searchSubject$.next(data);
          this.handleRoutingAfterSerch(data);
        });
    } else {
      this.searchSubject$.next(movies);
      this.handleRoutingAfterSerch(movies);
    }
  }

  private searchMovieOnServer(serchterm: string): Observable<IMovie[]> {
    const headers = { Authorization: 'Bearer Wookie2019' };
    return this.httpService.get(`${this.searchUrl}serchterm`, { headers }).pipe(
      filter((data) => !!data),
      map((data) => {
        return data['movies'];
      })
    );
  }

  private handleRoutingAfterSerch(movies: IMovie[]) {
    if (!movies.length) {
      this.router.navigate(['no-results']);
    } else if (movies.length > 1) {
      this.router.navigate(['results']);
    } else {
      this.router.navigate(['movie', movies[0].slug]);
    }
  }
}
