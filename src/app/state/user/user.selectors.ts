import { Selector } from '@ngxs/store';
import { User } from './../../models/user.interface';
import { AuthStateModel } from './user.model';
import { UserState } from './user.state';

export class AuthStateSelectors {
  @Selector([UserState])
  static user(state: AuthStateModel): User {
    return state.user;
  }
}
