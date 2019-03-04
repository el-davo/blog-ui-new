import {Article} from '../landing/landing.state';
import {Action} from '@ngrx/store';

export const FETCH = 'edit-article/FETCH';
export const FETCH_SUCCESS = 'edit-article/FETCH_SUCCESS';
export const FETCH_FAIL = 'edit-article/FETCH_FAIL';

export const UPDATE = 'edit-article/UPDATE';
export const UPDATE_SUCCESS = 'edit-article/UPDATE_SUCCESS';
export const UPDATE_FAIL = 'edit-article/UPDATE_FAIL';

export const UPDATE_NAME = 'edit-article/UPDATE_NAME';
export const UPDATE_SUMMARY = 'edit-article/UPDATE_SUMMARY';
export const UPDATE_CONTENT = 'edit-article/UPDATE_CONTENT';
export const UPDATE_IMG_URL = 'edit-article/UPDATE_IMG_URL';
export const UPDATE_PUBLIC = 'edit-article/UPDATE_PUBLIC';

export class Fetch implements Action {
    readonly type = FETCH;

    constructor(public articleId: string) {
    }
}

export class FetchSuccess implements Action {
    readonly type = FETCH_SUCCESS;

    constructor(public article: Article) {
    }
}

export class FetchFail implements Action {
    readonly type = FETCH_FAIL;
}

export class Update implements Action {
    readonly type = UPDATE;
}

export class UpdateSuccess implements Action {
    readonly type = UPDATE_SUCCESS;
}

export class UpdateFail implements Action {
    readonly type = UPDATE_FAIL;
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

export type EditArticleActions =
    | Fetch
    | FetchSuccess
    | FetchFail
    | Update
    | UpdateSuccess
    | UpdateFail
    | UpdateName
    | UpdateSummary
    | UpdateContent
    | UpdateImgUrl
    | UpdatePublic;
