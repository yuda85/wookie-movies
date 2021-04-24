import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMovie } from 'src/app/models/movie.interface';

@Component({
  selector: 'app-movie-slider',
  templateUrl: './movie-slider.component.html',
  styleUrls: ['./movie-slider.component.scss'],
})
export class MovieSliderComponent implements OnInit {
  @Input() movies: IMovie[];

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
