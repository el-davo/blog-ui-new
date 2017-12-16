import {LandingComponent} from './landing/landing.component';
import {ViewArticleComponent} from './view-article/view-article.component';

export const routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: LandingComponent
  },
  {
    path: 'article/:articleId',
    component: ViewArticleComponent
  }
];
