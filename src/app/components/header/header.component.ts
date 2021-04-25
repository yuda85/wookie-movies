import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesFacadeService } from 'src/app/movies/movies-facade.service';
import { MovieService } from '../../movies/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public onSearch(searchTerm: string) {
    this.router.navigate(['search'], { queryParams: { term: searchTerm } });
  }
}
