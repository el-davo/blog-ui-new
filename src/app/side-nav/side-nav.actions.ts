import {Injectable} from '@angular/core';
import {Article} from '../landing/landing.state';

@Injectable()
export class SideNavActions {

  static SHOW = 'side-nav/SHOW';
  static HIDE = 'side-nav/HIDE';

  static FETCH_ALL_ARTICLES = 'side-nav/FETCH_ALL_ARTICLES';
  static FETCH_ALL_ARTICLES_SUCCESS = 'side-nav/FETCH_ALL_ARTICLES_SUCCESS';
  static FETCH_ALL_ARTICLES_FAIL = 'side-nav/FETCH_ALL_ARTICLES_FAIL';

  show = () => ({type: SideNavActions.SHOW});

  hide = () => ({type: SideNavActions.HIDE});

  fetchAllArticles = () => ({type: SideNavActions.FETCH_ALL_ARTICLES});

  fetchAllArticlesSuccess = (articles: Article[]) => ({type: SideNavActions.FETCH_ALL_ARTICLES_SUCCESS, articles});

  fetchAllArticlesFail = () => ({type: SideNavActions.FETCH_ALL_ARTICLES_FAIL});
}
