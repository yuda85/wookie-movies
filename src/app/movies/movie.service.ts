import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from '../models/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() {}

  public getMovie(id: string): Observable<IMovie> {}
}
