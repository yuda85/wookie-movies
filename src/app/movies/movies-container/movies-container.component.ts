import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IMovie } from 'src/app/models/movie.interface';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.scss'],
})
export class MoviesContainerComponent implements OnInit {
  // public moviesByGenre: { [key: string]: IMovie[] } = {};
  public moviesByGenre$: Observable<{ [key: string]: IMovie[] }>;

  constructor(private moviesService: MovieService) {}

  ngOnInit(): void {
    this.moviesByGenre$ = this.moviesService
      .getMovies()
      .pipe(switchMap(() => this.moviesService.getGroupdMoviesbygenre()));
  }
}
