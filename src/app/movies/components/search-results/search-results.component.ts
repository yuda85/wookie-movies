import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  public searchTerm: string;
  public movies$: Observable<IMovie[]>;

  constructor(
    private moviesFacade: MoviesFacadeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.activatedRoute.queryParams.subscribe((data) => {
        this.searchTerm = data.term;
        this.moviesFacade.searchMovie(this.searchTerm);
      })
    );

    this.movies$ = this.moviesFacade.getSerchResults();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
