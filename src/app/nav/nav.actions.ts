import {Action} from '@ngrx/store';

export const HIDE_ALL_MODALS = 'nav/HIDE_ALL_MODALS';

export const SHOW_LOGIN_MODAL = 'nav/SHOW_LOGIN_MODAL';
export const HIDE_LOGIN_MODAL = 'nav/HIDE_LOGIN_MODAL';

export class HideAllModals implements Action {
    readonly type = HIDE_ALL_MODALS;
}

export class ShowLoginModal implements Action {
    readonly type = SHOW_LOGIN_MODAL;
}

export class HideLoginModal implements Action {
    readonly type = HIDE_LOGIN_MODAL;
}

export type NavActions = | HideAllModals | ShowLoginModal | HideLoginModal;