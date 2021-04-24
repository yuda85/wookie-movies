import { IMovie } from 'src/app/models/movie.interface';

export class SetMovies {
  static readonly type = '[Movies] Set Movies';
  constructor(public payload: IMovie[]) {}
}

export class SetMoviesByGenre {
  static readonly type = '[Movies] Set Movies';
  constructor(public payload: { [key: string]: IMovie[] }) {}
}
