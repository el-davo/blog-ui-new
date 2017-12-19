import {UserState, userState} from './user.state';
import {UserActions} from './user.actions';

export const userReducer = (state: UserState = userState, action): UserState => {
  switch (action.type) {
    case UserActions.LOGIN:
      return {...state, isLoggingIn: true};
    case UserActions.LOGIN_SUCCESS:
      return {...state, isLoggingIn: false, isLoggedIn: true, user: action.user};
    case UserActions.LOGIN_FAIL:
      return {...state, isLoggingIn: false};
    case UserActions.UPDATE_LOGIN_USERNAME:
      return {...state, loginForm: {...state.loginForm, username: action.username}};
    case UserActions.UPDATE_LOGIN_PASSWORD:
      return {...state, loginForm: {...state.loginForm, password: action.password}};
    default:
      return state;
  }
};
