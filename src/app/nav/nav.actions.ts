import {Injectable} from '@angular/core';

@Injectable()
export class NavActions {

  static HIDE_ALL_MODALS = 'nav/HIDE_ALL_MODALS';

  static SHOW_LOGIN_MODAL = 'nav/SHOW_LOGIN_MODAL';
  static HIDE_LOGIN_MODAL = 'nav/HIDE_LOGIN_MODAL';

  hideAllModals() {
    return {type: NavActions.HIDE_ALL_MODALS};
  }

  showLoginModal() {
    return {type: NavActions.SHOW_LOGIN_MODAL};
  }

  hideLoginModal() {
    return {type: NavActions.HIDE_LOGIN_MODAL};
  }
}
