import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';
import { IMovie } from '../../models';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  private subscription: Subscription = new Subscription();
  private movieId: string;
  private movieSlug = this.activatedRoute.snapshot.params.id;

  public movie$: Observable<IMovie>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private moviewService: MovieService
  ) {}

  ngOnInit(): void {
    this.movieId = history.state['id'];

    if (this.movieId) {
      this.movie$ = this.moviewService.getMovieById(this.movieId).pipe(
        tap((data) => {
          if (!data) {
            this.moviewService.fetchMovies();
          }
        })
      );
    } else {
      this.movie$ = this.getMovieBySlug();
    }

    this.subscription.add(
      this.router.events
        .pipe(
          filter((event) => {
            return event instanceof ActivationEnd;
          })
        )
        .subscribe((data: ActivationEnd) => {
          this.movieSlug = data.snapshot.params.id;
          this.movie$ = this.getMovieBySlug();
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private fetchMovies(): void {
    this.subscription.add(
      this.moviewService
        .fetchMovies()
        .pipe(
          filter((data) => !!data),
          take(1)
        )
        .subscribe()
    );
  }

  private getMovieBySlug(): Observable<IMovie> {
    return this.moviewService.getMovieBySlug(this.movieSlug).pipe(
      tap((data) => {
        if (!data) {
          this.fetchMovies();
        }
      })
    );
  }
}
