import {UserState, userState} from './user.state';
import * as actions from './user.actions';

export function userReducer(state: UserState = userState, action): UserState {
    switch (action.type) {
        case actions.LOGIN:
            return {...state, isLoggingIn: true};
        case actions.LOGIN_SUCCESS:
            return {...state, isLoggingIn: false, isLoggedIn: true, user: action.user};
        case actions.LOGIN_FAIL:
            return {...state, isLoggingIn: false};
        case actions.UPDATE_LOGIN_USERNAME:
            return {...state, loginForm: {...state.loginForm, username: action.username}};
        case actions.UPDATE_LOGIN_PASSWORD:
            return {...state, loginForm: {...state.loginForm, password: action.password}};
        default:
            return state;
    }
}
