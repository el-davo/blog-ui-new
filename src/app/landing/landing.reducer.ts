import {LandingState, landingState} from './landing.state';
import * as actions from './landing.actions';
import {LandingActions} from './landing.actions';

export function landingReducer(state: LandingState = landingState, action: LandingActions): LandingState {
    switch (action.type) {
        case actions.FETCH_ARTICLES:
            return {...state, isFetchingArticles: true};
        case actions.FETCH_ARTICLES_SUCCESS:
            return {...state, isFetchingArticles: false, articles: action.articles};
        case actions.FETCH_ARTICLES_FAIL:
            return {...state, isFetchingArticles: false};
        default:
            return state;
    }
}
