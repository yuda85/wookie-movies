import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';
import { IMovie } from '../../../models/movie.interface';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-genre-page',
  templateUrl: './genre-page.component.html',
  styleUrls: ['./genre-page.component.scss'],
})
export class GenrePageComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  public genre: string;

  public movies$: Observable<IMovie[]>;

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.genre = this.activatedRoute.snapshot.params.id;
    this.movies$ = this.movieService.getMoviesbyGenre(this.genre).pipe(
      tap((data) => {
        if (!data) {
          this.fetchMovies();
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private fetchMovies(): void {
    this.subscription.add(
      this.movieService
        .fetchMovies()
        .pipe(
          filter((data) => !!data),
          take(1)
        )
        .subscribe()
    );
  }
}
