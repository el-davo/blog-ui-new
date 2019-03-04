import {User} from './user.state';
import {Action} from '@ngrx/store';

export const LOGIN = 'user/LOGIN';
export const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS';
export const LOGIN_FAIL = 'user/LOGIN_FAIL';

export const UPDATE_LOGIN_USERNAME = 'user/UPDATE_LOGIN_USERNAME';
export const UPDATE_LOGIN_PASSWORD = 'user/UPDATE_LOGIN_PASSWORD';

export class Login implements Action {
    readonly type = LOGIN;
}

export class LoginSuccess implements Action {
    readonly type = LOGIN_SUCCESS;

    constructor(public user: User) {
    }
}

export class LoginFail implements Action {
    readonly type = LOGIN_FAIL;
}

export class UpdateLoginUsername implements Action {
    readonly type = UPDATE_LOGIN_USERNAME;

    constructor(public username: string) {
    }
}

export class UpdateLoginPassword implements Action {
    readonly type = UPDATE_LOGIN_PASSWORD;

    constructor(public password: string) {
    }
}
