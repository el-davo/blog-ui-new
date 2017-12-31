import {editArticleState, EditArticleState} from './edit-article.state';
import {EditArticleActions} from './edit-article.actions';

export const editArticleReducer = (state: EditArticleState = editArticleState, action): EditArticleState => {
  switch (action.type) {
    case EditArticleActions.FETCH:
      return {...state, isFetchingArticle: true};
    case EditArticleActions.FETCH_SUCCESS:
      return {...state, isFetchingArticle: false, article: action.article};
    case EditArticleActions.FETCH_FAIL:
      return {...state, isFetchingArticle: false};
    case EditArticleActions.UPDATE:
      return {...state, isUpdatingArticle: true};
    case EditArticleActions.UPDATE_SUCCESS:
      return {...state, isUpdatingArticle: false};
    case EditArticleActions.UPDATE_FAIL:
      return {...state, isUpdatingArticle: false};
    case EditArticleActions.UPDATE_NAME:
      return {...state, article: {...state.article, name: action.name}};
    case EditArticleActions.UPDATE_SUMMARY:
      return {...state, article: {...state.article, summary: action.summary}};
    case EditArticleActions.UPDATE_CONTENT:
      return {...state, article: {...state.article, content: action.content}};
    case EditArticleActions.UPDATE_IMG_URL:
      return {...state, article: {...state.article, imgUrl: action.imgUrl}};
    case EditArticleActions.UPDATE_PUBLIC:
      return {...state, article: {...state.article, public: action.isPublic}};
    default:
      return state;
  }
};
