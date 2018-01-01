import {of} from 'rxjs/observable/of';
import {concat} from 'rxjs/observable/concat';
import {Injectable} from '@angular/core';
import {UserActions} from './user.actions';
import {UserService} from './user.service';
import {User} from './user.state';
import {NavActions} from '../nav/nav.actions';
import {Epic} from 'redux-observable';

@Injectable()
export class UserEpics {

  epics: Epic<any, any>[];

  constructor(private userActions: UserActions,
              private navActions: NavActions,
              private userService: UserService) {
    this.epics = [this.login];
  }

  login = (action$, store) => {
    return action$.ofType(UserActions.LOGIN)
      .mergeMap(() => {
        const {loginForm} = store.getState().user;

        return this.userService.login(loginForm)
          .mergeMap((user: User) => concat(
            of(this.userActions.loginSuccess(user)),
            of(this.navActions.hideAllModals())
          ))
          .catch(() => of(this.userActions.loginFail()));
      });
  };

}
