import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMovie } from 'src/app/models/movie.interface';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.scss'],
})
export class MoviesContainerComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();

  public moviesByGenre: { [key: string]: IMovie[] } = {};

  constructor(private moviesService: MovieService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.moviesService.getMovies().subscribe((data) => {
        data.forEach((movie) => {
          movie.genres.forEach((genre) => {
            if (this.moviesByGenre[genre] && this.moviesByGenre[genre].length) {
              this.moviesByGenre[genre].push(movie);
            } else {
              this.moviesByGenre[genre] = [movie];
            }
          });
        });
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
