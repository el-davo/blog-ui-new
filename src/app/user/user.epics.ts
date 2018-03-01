import {of} from 'rxjs/observable/of';
import {concat} from 'rxjs/observable/concat';
import {Injectable} from '@angular/core';
import {UserActions} from './user.actions';
import {UserService} from './user.service';
import {User} from './user.state';
import {NavActions} from '../nav/nav.actions';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';
import {withLatestFrom} from 'rxjs/operators/withLatestFrom';
import {catchError} from 'rxjs/operators/catchError';
import {mergeMap} from 'rxjs/operators/mergeMap';
import {AppState} from '../root.reducer';

@Injectable()
export class UserEpics {

  @Effect() login$ = this.actions$.pipe(
    ofType(UserActions.LOGIN),
    withLatestFrom(this.store$),
    select(([action, storeState]) => storeState.user.loginForm),
    mergeMap((loginForm) =>
      this.userService.login(loginForm).pipe(
        mergeMap((user: User) => concat(
          of(this.userActions.loginSuccess(user)),
          of(this.navActions.hideAllModals())
        )),
        catchError(() => of(this.userActions.loginFail()))
      )
    ));

  constructor(private actions$: Actions,
              private store$: Store<AppState>,
              private userActions: UserActions,
              private navActions: NavActions,
              private userService: UserService) {
  }

}
