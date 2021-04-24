import { User } from '../../models/user.interface';

export class SetUser {
  static readonly type = '[User] Set User';
  constructor(public payload: User) {}
}
