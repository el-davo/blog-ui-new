import {LandingState, landingState} from './landing.state';
import {LandingActions} from './landing.actions';

export const landingReducer = (state: LandingState = landingState, action): LandingState => {
  switch (action.type) {
    case LandingActions.FETCH_ARTICLES:
      return {...state, isFetchingArticles: true};
    case LandingActions.FETCH_ARTICLES_SUCCESS:
      return {...state, isFetchingArticles: false, articles: action.articles};
    case LandingActions.FETCH_ARTICLES_FAIL:
      return {...state, isFetchingArticles: false};
    default:
      return state;
  }
};
