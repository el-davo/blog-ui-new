import {Injectable} from '@angular/core';
import {NavActions} from './nav.actions';
import {MatDialog} from '@angular/material';
import {LoginModalComponent} from './nav-login/login-modal/login-modal.component';
import {Epic} from 'redux-observable';

@Injectable()
export class NavEpics {

  epics: Epic<any, any>[];

  constructor(public dialog: MatDialog) {
    this.epics = [this.showLoginModal, this.hideAllModals];
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
