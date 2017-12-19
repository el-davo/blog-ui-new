import {NavState, navState} from './nav.state';
import {NavActions} from './nav.actions';

export const navReducer = (state: NavState = navState, action): NavState => {
  switch (action.type) {
    case NavActions.SHOW_LOGIN_MODAL:
      return {...state, showLoginModal: true};
    case NavActions.HIDE_LOGIN_MODAL:
      return {...state, showLoginModal: false};
    default:
      return state;
  }
};
