import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MoviesByGenres } from './../../models';
import { MovieService } from '../movie.service';
import { MoviesFacadeService } from '../movies-facade.service';

@Component({
  selector: 'app-movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.scss'],
})
export class MoviesContainerComponent implements OnInit {
  public moviesByGenre$: Observable<MoviesByGenres>;

  constructor(private moviesService: MoviesFacadeService) {}

  ngOnInit(): void {
    this.moviesByGenre$ = this.moviesService
      .getMovies()
      .pipe(switchMap(() => this.moviesService.getGroupdMoviesbygenre()));
  }
}
