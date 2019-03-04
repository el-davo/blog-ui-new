import {Article} from './landing.state';
import {Action} from '@ngrx/store';

export const FETCH_ARTICLES = 'landing/FETCH_ARTICLES';
export const FETCH_ARTICLES_SUCCESS = 'landing/FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAIL = 'landing/FETCH_ARTICLES_FAIL';

export class FetchArticles implements Action {
    readonly type = FETCH_ARTICLES;
}

export class FetchArticlesSuccess implements Action {
    readonly type = FETCH_ARTICLES_SUCCESS;

    constructor(public articles: Article[]) {
    }
}

export class FetchArticlesFail implements Action {
    readonly type = FETCH_ARTICLES_FAIL;
}

export type LandingActions = | FetchArticles | FetchArticlesSuccess | FetchArticlesFail;
