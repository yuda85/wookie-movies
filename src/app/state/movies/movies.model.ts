import { IMovie } from 'src/app/models/movie.interface';

export interface MoviesStateModel {
  movies: IMovie[];
  moviesByGenre: { [key: string]: IMovie[] };
  searchResults: IMovie[];
}
