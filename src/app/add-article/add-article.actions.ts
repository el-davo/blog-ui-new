import {Action} from '@ngrx/store';

export const ADD = 'add-article/ADD';
export const ADD_SUCCESS = 'add-article/ADD_SUCCESS';
export const ADD_FAIL = 'add-article/ADD_FAIL';

export const UPDATE_NAME = 'add-article/UPDATE_NAME';
export const UPDATE_SUMMARY = 'add-article/UPDATE_SUMMARY';
export const UPDATE_CONTENT = 'add-article/UPDATE_CONTENT';
export const UPDATE_IMG_URL = 'add-article/UPDATE_IMG_URL';
export const UPDATE_PUBLIC = 'add-article/UPDATE_PUBLIC';

export class Add implements Action {
    readonly type = ADD;
}

export class AddSuccess implements Action {
    readonly type = ADD_SUCCESS;
}

export class AddFail implements Action {
    readonly type = ADD_FAIL;
}

export class UpdateName implements Action {
    readonly type = UPDATE_NAME;

    constructor(public name: string) {
    }
}

export class UpdateSummary implements Action {
    readonly type = UPDATE_SUMMARY;

    constructor(public summary: string) {
    }
}

export class UpdateContent implements Action {
    readonly type = UPDATE_CONTENT;

    constructor(public content: string) {
    }
}

export class UpdateImgUrl implements Action {
    readonly type = UPDATE_IMG_URL;

    constructor(public imgUrl: string) {
    }
}

export class UpdatePublic implements Action {
    readonly type = UPDATE_PUBLIC;

    constructor(public isPublic: boolean) {
    }
}

export type AddArticleActions =
    | Add
    | AddSuccess
    | AddFail
    | UpdateName
    | UpdateSummary
    | UpdateContent
    | UpdateImgUrl
    | UpdatePublic;
