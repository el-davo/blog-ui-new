import {combineReducers} from 'redux';
import {navReducer as nav} from './nav/nav.reducer';
import {userReducer as user} from './user/user.reducer';
import {landingReducer as landing} from './landing/landing.reducer';
import {viewArticleReducer as viewArticle} from './view-article/view-article.reducer';
import {addArticleReducer as addArticle} from './add-article/add-article.reducer';
import {editArticleReducer as editArticle} from './edit-article/edit-article.reducer';

export const rootReducer = combineReducers({
  nav,
  user,
  landing,
  viewArticle,
  addArticle,
  editArticle
});
