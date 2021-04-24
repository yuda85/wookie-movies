import { Injectable } from '@angular/core';
import { State, StateContext, Action } from '@ngxs/store';
import { SetUser } from './user.actions';
import { AuthStateModel } from './user.model';
@Injectable({
  providedIn: 'root',
})
@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    user: null,
  },
})
export class UserState {
  @Action(SetUser)
  setUser(ctx: StateContext<AuthStateModel>, action: SetUser) {
    ctx.patchState({ user: action.payload });
  }
}
