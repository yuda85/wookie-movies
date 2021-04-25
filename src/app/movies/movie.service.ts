import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { IMovie } from '../models';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private mainUrl: string = 'https://wookie.codesubmit.io/movies';
  private searchUrl: string = 'https://wookie.codesubmit.io/movies?q=';

  constructor(private httpService: HttpClient) {}

  public fetchMovies(): Observable<IMovie[]> {
    const headers = { Authorization: 'Bearer Wookie2019' };
    return this.httpService.get(this.mainUrl, { headers }).pipe(
      filter((data) => !!data),
      map((data) => {
        return data['movies'];
      })
    );
  }

  public searchMovieOnServer(searchTerm: string): Observable<IMovie[]> {
    const headers = { Authorization: 'Bearer Wookie2019' };
    return this.httpService
      .get(`${this.searchUrl}${searchTerm}`, { headers })
      .pipe(
        filter((data) => !!data),
        map((data) => {
          return data['movies'];
        })
      );
  }
}
