import {addArticleState, AddArticleState} from './add-article.state';
import {AppState} from '../root.reducer';
import * as actions from './add-article.actions';
import {AddArticleActions} from './add-article.actions';

export interface ModuleState extends AppState {
    addArticle: AddArticleState;
}

export function addArticleReducer(state: AddArticleState = addArticleState, action: AddArticleActions): AddArticleState {
    switch (action.type) {
        case actions.ADD:
            return {...state, isAddingArticle: true};
        case actions.ADD_SUCCESS:
            return {...state, isAddingArticle: false};
        case actions.ADD_FAIL:
            return {...state, isAddingArticle: false};
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
