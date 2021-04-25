import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IMovie } from '../../../models';
import { MoviesFacadeService } from '../../movies-facade.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();

  public movies$: Observable<IMovie[]>;

  constructor(
    private moviesFacade: MoviesFacadeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.movies$ = this.moviesFacade.getSerchResults().pipe(
      tap((data) => {
        if (!data.length) {
          this.router.navigate(['no-results']);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
