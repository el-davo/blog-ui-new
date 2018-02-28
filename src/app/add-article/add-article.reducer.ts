import {addArticleState, AddArticleState} from './add-article.state';
import {AddArticleActions} from './add-article.actions';

export function addArticleReducer(state: AddArticleState = addArticleState, action): AddArticleState {
  switch (action.type) {
    case AddArticleActions.ADD:
      return {...state, isAddingArticle: true};
    case AddArticleActions.ADD_SUCCESS:
      return {...state, isAddingArticle: false};
    case AddArticleActions.ADD_FAIL:
      return {...state, isAddingArticle: false};
    case AddArticleActions.UPDATE_NAME:
      return {...state, article: {...state.article, name: action.name}};
    case AddArticleActions.UPDATE_SUMMARY:
      return {...state, article: {...state.article, summary: action.summary}};
    case AddArticleActions.UPDATE_CONTENT:
      return {...state, article: {...state.article, content: action.content}};
    case AddArticleActions.UPDATE_IMG_URL:
      return {...state, article: {...state.article, imgUrl: action.imgUrl}};
    case AddArticleActions.UPDATE_PUBLIC:
      return {...state, article: {...state.article, public: action.isPublic}};
    default:
      return state;
  }
}
