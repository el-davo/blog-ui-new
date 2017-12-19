import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat';
import {Injectable} from '@angular/core';
import {UserActions} from './user.actions';
import {UserService} from './user.service';
import {Observable} from 'rxjs/Observable';
import {User} from './user.state';
import {NavActions} from '../nav/nav.actions';

@Injectable()
export class UserEpics {
  constructor(private userActions: UserActions,
              private navActions: NavActions,
              private userService: UserService) {
  }

  login = (action$, store) => {
    return action$.ofType(UserActions.LOGIN)
      .mergeMap(() => {
        const {loginForm} = store.getState().user;

        return this.userService.login(loginForm)
          .mergeMap((user: User) => Observable.concat(
            Observable.of(this.userActions.loginSuccess(user)),
            Observable.of(this.navActions.hideAllModals())
          ))
          .catch(() => Observable.of(this.userActions.loginFail()));
      });
  };

}
