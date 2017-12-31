import {LandingComponent} from './landing/landing.component';
import {ViewArticleComponent} from './view-article/view-article.component';
import {AddArticleComponent} from './add-article/add-article.component';
import {IsLoggedInGuard} from './router/is-logged-in.guard';

export const routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'article/add',
    component: AddArticleComponent,
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'article/:articleId',
    component: ViewArticleComponent
  }
];
