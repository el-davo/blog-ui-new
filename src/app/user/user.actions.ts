import {Injectable} from '@angular/core';
import {User} from './user.state';

@Injectable()
export class UserActions {

  static LOGIN = 'user/LOGIN';
  static LOGIN_SUCCESS = 'user/LOGIN_SUCCESS';
  static LOGIN_FAIL = 'user/LOGIN_FAIL';

  static UPDATE_LOGIN_USERNAME = 'user/UPDATE_LOGIN_USERNAME';
  static UPDATE_LOGIN_PASSWORD = 'user/UPDATE_LOGIN_PASSWORD';

  login = () => ({type: UserActions.LOGIN});

  loginSuccess = (user: User) => ({type: UserActions.LOGIN_SUCCESS, user});

  loginFail = () => ({type: UserActions.LOGIN_FAIL});

  updateLoginUsername = (username: string) => ({type: UserActions.UPDATE_LOGIN_USERNAME, username});

  updateLoginPassword = (password: string) => ({type: UserActions.UPDATE_LOGIN_PASSWORD, password});
}
