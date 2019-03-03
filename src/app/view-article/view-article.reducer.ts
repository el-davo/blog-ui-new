import {ViewArticleState, viewArticleState} from './view-article.state';
import {ViewArticleActions} from './view-article.actions';
import {AppState} from '../root.reducer';
import * as actions from './view-article.actions';

export interface ModuleState extends AppState {
    viewArticle: ViewArticleState;
}

export function viewArticleReducer(state: ViewArticleState = viewArticleState, action: ViewArticleActions): ViewArticleState {
    switch (action.type) {
        case actions.FETCH_ARTICLE:
            return {...state, isFetchingArticle: true};
        case actions.FETCH_ARTICLE_SUCCESS:
            return {...state, isFetchingArticle: false, article: action.article};
        case actions.FETCH_ARTICLE_FAIL:
            return {...state, isFetchingArticle: false};
        default:
            return state;
    }
}
