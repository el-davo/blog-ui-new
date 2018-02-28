import { navReducer as nav } from './nav/nav.reducer';
import { userReducer as user } from './user/user.reducer';
import { landingReducer as landing } from './landing/landing.reducer';
import { viewArticleReducer as viewArticle } from './view-article/view-article.reducer';
import { addArticleReducer as addArticle } from './add-article/add-article.reducer';
import { editArticleReducer as editArticle } from './edit-article/edit-article.reducer';
import { sideNavReducer as sideNav } from './side-nav/side-nav.reducer';
import { NavState } from './nav/nav.state';
import { UserState } from './user/user.state';
import { LandingState } from './landing/landing.state';
import { ViewArticleState } from './view-article/view-article.state';
import { AddArticleState } from './add-article/add-article.state';
import { EditArticleState } from './edit-article/edit-article.state';

export interface AppState {
  nav: NavState,
  user: UserState,
  landing: LandingState,
  viewArticle: ViewArticleState,
  addArticle: AddArticleState,
  editArticle: EditArticleState
}

export function getRootReducer() {
  return {
    nav,
    user,
    landing,
    viewArticle,
    addArticle,
    editArticle,
    sideNav
  }
}
