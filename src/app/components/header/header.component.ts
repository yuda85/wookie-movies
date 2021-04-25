import { Component, OnInit } from '@angular/core';
import { MoviesFacadeService } from 'src/app/movies/movies-facade.service';
import { MovieService } from '../../movies/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private movieService: MoviesFacadeService) {}

  ngOnInit(): void {}

  public onSearch(serchTerm: string) {
    this.movieService.searchMovie(serchTerm);
  }
}
