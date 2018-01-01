import {sideNavState, SideNavState} from './side-nav.state';
import {SideNavActions} from './side-nav.actions';

export const sideNavReducer = (state: SideNavState = sideNavState, action): SideNavState => {
  switch (action.type) {
    case SideNavActions.SHOW:
      return {...state, showSideNav: true};
    case SideNavActions.HIDE:
      return {...state, showSideNav: false};
    case SideNavActions.FETCH_ALL_ARTICLES:
      return {...state, isFetchingArticles: true};
    case SideNavActions.FETCH_ALL_ARTICLES_SUCCESS:
      return {...state, isFetchingArticles: false, articles: action.articles};
    case SideNavActions.FETCH_ALL_ARTICLES_FAIL:
      return {...state, isFetchingArticles: false};
    default:
      return state;
  }
};
