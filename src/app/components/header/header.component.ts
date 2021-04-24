import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { MovieService } from 'src/app/movies/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isUserLoggedIn: Observable<boolean> = this.authService.isUserLoggedIn();

  constructor(
    private authService: AuthService,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {}

  public login(): void {
    this.authService.GoogleAuth();
  }

  public logout(): void {
    this.authService.signOut();
  }

  public onSearch(serchTerm: string) {
    this.movieService.searchMovie(serchTerm);
  }
}
