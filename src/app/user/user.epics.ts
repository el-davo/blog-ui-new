import {of} from 'rxjs';
import {Injectable} from '@angular/core';
import {UserService} from './user.service';
import {User} from './user.state';
import * as navActions from '../nav/nav.actions';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';
import {catchError, mergeMap, withLatestFrom} from 'rxjs/operators';
import {AppState} from '../root.reducer';
import {concat} from 'rxjs';
import * as actions from './user.actions';

@Injectable()
export class UserEpics {

    @Effect() login$ = this.actions$.pipe(
        ofType(actions.LOGIN),
        withLatestFrom(this.store$),
        select(([action, storeState]) => storeState.user.loginForm),
        mergeMap((loginForm) =>
            this.userService.login(loginForm).pipe(
                mergeMap((user: User) => concat(
                    of(new actions.LoginSuccess(user)),
                    of(new navActions.HideAllModals())
                )),
                catchError(() => of(new actions.LoginFail()))
            )
        ));

    constructor(private actions$: Actions,
                private store$: Store<AppState>,
                private userService: UserService) {
    }

}
