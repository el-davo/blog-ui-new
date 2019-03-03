import {NavState, navState} from './nav.state';
import * as actions from './nav.actions';
import {NavActions} from './nav.actions';

export function navReducer(state: NavState = navState, action: NavActions): NavState {
    switch (action.type) {
        case actions.SHOW_LOGIN_MODAL:
            return {...state, showLoginModal: true};
        case actions.HIDE_LOGIN_MODAL:
            return {...state, showLoginModal: false};
        default:
            return state;
    }
}
