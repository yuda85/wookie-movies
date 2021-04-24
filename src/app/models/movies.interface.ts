import { IMovie } from './movie.interface';

export interface MoviesByGenres {
  [key: string]: IMovie[];
}
