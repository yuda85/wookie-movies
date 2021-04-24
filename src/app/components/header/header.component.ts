import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isUserLoggedIn: Observable<boolean> = this.authService.isUserLoggedIn();
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  public login(): void {
    this.authService.GoogleAuth();
  }

  public logout(): void {
    this.authService.signOut();
  }
}
