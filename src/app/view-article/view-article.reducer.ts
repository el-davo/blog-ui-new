import {ViewArticleState, viewArticleState} from './view-article.state';
import {ViewArticleActions} from './view-article.actions';

export interface ModuleState {
  viewArticle: ViewArticleState;
}

export function viewArticleReducer(state: ViewArticleState = viewArticleState, action): ViewArticleState {
  switch (action.type) {
    case ViewArticleActions.FETCH_ARTICLE:
      return {...state, isFetchingArticle: true};
    case ViewArticleActions.FETCH_ARTICLE_SUCCESS:
      return {...state, isFetchingArticle: false, article: action.article};
    case ViewArticleActions.FETCH_ARTICLE_FAIL:
      return {...state, isFetchingArticle: false};
    default:
      return state;
  }
}
