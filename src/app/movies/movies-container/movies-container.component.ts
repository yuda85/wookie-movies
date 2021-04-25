import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MoviesByGenres } from './../../models';
import { MoviesFacadeService } from '../movies-facade.service';

@Component({
  selector: 'app-movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.scss'],
})
export class MoviesContainerComponent implements OnInit {
  public moviesByGenre$: Observable<MoviesByGenres>;

  constructor(private moviesFacade: MoviesFacadeService) {}

  ngOnInit(): void {
    this.moviesByGenre$ = this.moviesFacade
      .getMovies()
      .pipe(switchMap(() => this.moviesFacade.getGroupdMoviesbygenre()));
  }
}
