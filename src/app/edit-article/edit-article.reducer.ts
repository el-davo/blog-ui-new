import {editArticleState, EditArticleState} from './edit-article.state';
import * as actions from './edit-article.actions';
import {AppState} from '../root.reducer';
import {EditArticleActions} from './edit-article.actions';

export interface ModuleState extends AppState {
    editArticle: EditArticleState;
}

export function editArticleReducer(state: EditArticleState = editArticleState, action: EditArticleActions): EditArticleState {
    switch (action.type) {
        case actions.FETCH:
            return {...state, isFetchingArticle: true};
        case actions.FETCH_SUCCESS:
            return {...state, isFetchingArticle: false, article: action.article};
        case actions.FETCH_FAIL:
            return {...state, isFetchingArticle: false};
        case actions.UPDATE:
            return {...state, isUpdatingArticle: true};
        case actions.UPDATE_SUCCESS:
            return {...state, isUpdatingArticle: false};
        case actions.UPDATE_FAIL:
            return {...state, isUpdatingArticle: false};
        case actions.UPDATE_NAME:
            return {...state, article: {...state.article, name: action.name}};
        case actions.UPDATE_SUMMARY:
            return {...state, article: {...state.article, summary: action.summary}};
        case actions.UPDATE_CONTENT:
            return {...state, article: {...state.article, content: action.content}};
        case actions.UPDATE_IMG_URL:
            return {...state, article: {...state.article, imgUrl: action.imgUrl}};
        case actions.UPDATE_PUBLIC:
            return {...state, article: {...state.article, public: action.isPublic}};
        default:
            return state;
    }
}
