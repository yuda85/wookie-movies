import { IMovie } from '../../models';

export class SetMovies {
  static readonly type = '[Movies] Set Movies';
  constructor(public payload: IMovie[]) {}
}

export class SearchMovies {
  static readonly type = '[Movies] Search Movies';
  constructor(public payload: string) {}
}
export class SetSearchResults {
  static readonly type = '[Movies] Set Search Results';
  constructor(public payload: IMovie[]) {}
}
