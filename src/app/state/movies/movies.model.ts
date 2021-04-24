import { MoviesByGenres, IMovie } from '../../models';

export interface MoviesStateModel {
  movies: IMovie[];
  moviesByGenre: MoviesByGenres;
  searchResults: IMovie[];
}
