import { IMovie } from '../../models';

export class SetMovies {
  static readonly type = '[Movies] Set Movies';
  constructor(public payload: IMovie[]) {}
}

export class SetSearchResults {
  static readonly type = '[Movies] Set Search Results';
  constructor(public payload: IMovie[]) {}
}
