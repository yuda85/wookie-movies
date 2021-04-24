import { Selector } from '@ngxs/store';
import { User } from './../../models/user.interface';
import { UserStateModel } from './user.model';
import { UserState } from './user.state';

export class UserStateSelectors {
  @Selector([UserState])
  static user(state: UserStateModel): User {
    return state.user;
  }
}
