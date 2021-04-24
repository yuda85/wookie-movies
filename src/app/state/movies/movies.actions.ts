import { IMovie } from 'src/app/models/movie.interface';

export class SetMovies {
  static readonly type = '[Movies] Set Movies';
  constructor(public payload: IMovie[]) {}
}
