import { Injectable } from '@angular/core';
import { State, StateContext, Action } from '@ngxs/store';
import { SetUser } from './user.actions';
import { UserStateModel } from './user.model';
@Injectable({
  providedIn: 'root',
})
@State<UserStateModel>({
  name: 'user',
  defaults: {
    user: null,
  },
})
export class UserState {
  @Action(SetUser)
  setUser(ctx: StateContext<UserStateModel>, action: SetUser) {
    ctx.patchState({ user: action.payload });
  }
}
