import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import {Injectable} from '@angular/core';
import {NavActions} from './nav.actions';
import {MatDialog} from '@angular/material';
import {LoginModalComponent} from './nav-login/login-modal/login-modal.component';

@Injectable()
export class NavEpics {
  constructor(public dialog: MatDialog) {
  }

  showLoginModal = action$ => {
    return action$.ofType(NavActions.SHOW_LOGIN_MODAL)
      .map(() => {
        this.dialog.open(LoginModalComponent, {
          width: '600px'
        }).afterClosed();

        return {type: 'UNKNOWN'};
      });
  };

  hideAllModals = action$ => {
    return action$.ofType(NavActions.HIDE_ALL_MODALS)
      .map(() => {
        this.dialog.closeAll();

        return {type: 'UNKNOWN'};
      });
  };

}
