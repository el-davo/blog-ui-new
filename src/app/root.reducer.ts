import {routerReducer as router} from '@angular-redux/router';
import {combineReducers} from 'redux';
import {navReducer as nav} from './nav/nav.reducer';
import {userReducer as user} from './user/user.reducer';
import {landingReducer as landing} from './landing/landing.reducer';
import {viewArticleReducer as viewArticle} from './view-article/view-article.reducer';

export const rootReducer = combineReducers({
  router,
  nav,
  user,
  landing,
  viewArticle
});
