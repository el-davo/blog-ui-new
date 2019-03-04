import {Article} from '../landing/landing.state';
import {Action} from '@ngrx/store';

export const SHOW = 'side-nav/SHOW';
export const HIDE = 'side-nav/HIDE';

export const FETCH_ALL_ARTICLES = 'side-nav/FETCH_ALL_ARTICLES';
export const FETCH_ALL_ARTICLES_SUCCESS = 'side-nav/FETCH_ALL_ARTICLES_SUCCESS';
export const FETCH_ALL_ARTICLES_FAIL = 'side-nav/FETCH_ALL_ARTICLES_FAIL';

export class Show implements Action {
    readonly type = SHOW;
}

export class Hide implements Action {
    readonly type = HIDE;
}

export class FetchAllArticles implements Action {
    readonly type = FETCH_ALL_ARTICLES;
}

export class FetchAllArticlesSuccess implements Action {
    readonly type = FETCH_ALL_ARTICLES_SUCCESS;

    constructor(public articles: Article[]) {
    }
}

export class FetchAllArticlesFail implements Action {
    readonly type = FETCH_ALL_ARTICLES_FAIL;
}

export type SideNavActions = | Show | Hide | FetchAllArticles | FetchAllArticlesSuccess | FetchAllArticlesFail;
