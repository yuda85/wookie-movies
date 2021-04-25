import { Component, HostListener, Input, OnInit } from '@angular/core';
import { IMovie } from '../../../models';

@Component({
  selector: 'app-movie-slider',
  templateUrl: './movie-slider.component.html',
  styleUrls: ['./movie-slider.component.scss'],
})
export class MovieSliderComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth > 991) {
      this.slidesPerView = 4.5;
    } else {
      this.slidesPerView = 1;
    }
  }
  public slidesPerView: number = 4.5;

  @Input() movies: IMovie[];

  constructor() {}

  ngOnInit(): void {
    this.handleMobile();
  }

  private handleMobile(): void {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // true for mobile device
      this.slidesPerView = 1;
    } else {
      // false for not mobile device
      this.slidesPerView = 4.5;
    }
  }
}
