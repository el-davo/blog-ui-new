import {Injectable} from '@angular/core';
import {NavActions} from './nav.actions';
import {MatDialog} from '@angular/material';
import {LoginModalComponent} from './nav-login/login-modal/login-modal.component';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map} from 'rxjs/operators/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class NavEpics {

  @Effect() showLoginModal$: Observable<Action> = this.actions$.pipe(
    ofType(NavActions.SHOW_LOGIN_MODAL),
    map(() => {
      this.dialog.open(LoginModalComponent, {
        width: '600px'
      }).afterClosed();

      return {type: 'UNKNOWN'};
    }));

  @Effect() hideAllModals$: Observable<Action> = this.actions$.pipe(
    ofType(NavActions.HIDE_ALL_MODALS),
    map(() => {
      this.dialog.closeAll();

      return {type: 'UNKNOWN'};
    }));

  constructor(private actions$: Actions, public dialog: MatDialog) {
  }
}
