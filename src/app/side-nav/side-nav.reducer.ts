import {sideNavState, SideNavState} from './side-nav.state';
import {SideNavActions} from './side-nav.actions';
import * as actions from './side-nav.actions';

export function sideNavReducer(state: SideNavState = sideNavState, action: SideNavActions): SideNavState {
    switch (action.type) {
        case actions.SHOW:
            return {...state, showSideNav: true};
        case actions.HIDE:
            return {...state, showSideNav: false};
        case actions.FETCH_ALL_ARTICLES:
            return {...state, isFetchingArticles: true};
        case actions.FETCH_ALL_ARTICLES_SUCCESS:
            return {...state, isFetchingArticles: false, articles: action.articles};
        case actions.FETCH_ALL_ARTICLES_FAIL:
            return {...state, isFetchingArticles: false};
        default:
            return state;
    }
}
