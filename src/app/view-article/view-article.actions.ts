import {Article} from '../landing/landing.state';
import {Action} from '@ngrx/store';

export const FETCH_ARTICLE = 'viewArticle/FETCH_ARTICLE';
export const FETCH_ARTICLE_SUCCESS = 'viewArticle/FETCH_ARTICLE_SUCCESS';
export const FETCH_ARTICLE_FAIL = 'viewArticle/FETCH_ARTICLE_FAIL';

export class FetchArticle implements Action {
    readonly type = FETCH_ARTICLE;

    constructor(public articleId: string) {
    }
}

export class FetchArticleSuccess implements Action {
    readonly type = FETCH_ARTICLE_SUCCESS;

    constructor(public article: Article) {
    }
}

export class FetchArticleFail implements Action {
    readonly type = FETCH_ARTICLE_FAIL;
}

export type ViewArticleActions = | FetchArticle | FetchArticleSuccess | FetchArticleFail;
