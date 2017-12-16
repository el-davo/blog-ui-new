import {Injectable} from '@angular/core';
import {Article} from './landing.state';

@Injectable()
export class LandingActions {

  static FETCH_ARTICLES = 'landing/FETCH_ARTICLES';
  static FETCH_ARTICLES_SUCCESS = 'landing/FETCH_ARTICLES_SUCCESS';
  static FETCH_ARTICLES_FAIL = 'landing/FETCH_ARTICLES_FAIL';

  fetchArticles() {
    return {type: LandingActions.FETCH_ARTICLES};
  }

  fetchArticlesSuccess(articles: Article[]) {
    return {type: LandingActions.FETCH_ARTICLES_SUCCESS, articles};
  }

  fetchArticlesFail() {
    return {type: LandingActions.FETCH_ARTICLES_FAIL};
  }

}
