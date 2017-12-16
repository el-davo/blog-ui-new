import {Injectable} from '@angular/core';
import {Article} from '../landing/landing.state';

@Injectable()
export class ViewArticleActions {

  static FETCH_ARTICLE = 'viewArticle/FETCH_ARTICLE';
  static FETCH_ARTICLE_SUCCESS = 'viewArticle/FETCH_ARTICLE_SUCCESS';
  static FETCH_ARTICLE_FAIL = 'viewArticle/FETCH_ARTICLE_FAIL';

  fetchArticle(articleId: string) {
    return {type: ViewArticleActions.FETCH_ARTICLE, articleId};
  }

  fetchArticleSuccess(article: Article) {
    return {type: ViewArticleActions.FETCH_ARTICLE_SUCCESS, article};
  }

  fetchArticleFail() {
    return {type: ViewArticleActions.FETCH_ARTICLE_FAIL};
  }
}
