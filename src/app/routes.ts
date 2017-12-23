import {LandingComponent} from './landing/landing.component';
import {ViewArticleComponent} from './view-article/view-article.component';
import {AlgorithmsComponent} from './algorithms/algorithms.component';

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
    path: 'article/:articleId',
    component: ViewArticleComponent
  },
  {
    path: 'algorithms',
    component: AlgorithmsComponent
  }
];
