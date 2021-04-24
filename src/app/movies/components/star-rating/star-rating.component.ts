import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent {
  @Input() set review(review: number) {
    const scaledReview: number = review / 2;
    const num = ~~scaledReview;
    const decimal = scaledReview % 1;
    this.starsArr = new Array(num).fill('full');
    if (decimal !== 0) {
      this.starsArr.push('half');
    }
    if (this.starsArr.length < 5) {
      this.starsArr.push('empty');
    }
  }

  public starsArr: Array<string>;
}
