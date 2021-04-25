import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';
import { IMovie } from '../../models';
import { MoviesFacadeService } from '../movies-facade.service';

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
    private moviesFacade: MoviesFacadeService
  ) {}

  ngOnInit(): void {
    this.movieId = history.state['id'];

    if (this.movieId) {
      this.movie$ = this.moviesFacade.getMovieById(this.movieId);
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

  private getMovieBySlug(): Observable<IMovie> {
    return this.moviesFacade.getMovieBySlug(this.movieSlug);
  }
}
