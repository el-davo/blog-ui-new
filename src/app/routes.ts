import { LandingComponent } from './landing/landing.component';
import { IsLoggedInGuard } from './router/is-logged-in.guard';

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
    loadChildren: './add-article/add-article.module#AddArticleModule',
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'article/edit/:articleId',
    loadChildren: './edit-article/edit-article.module#EditArticleModule',
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'article/:articleId',
    loadChildren: './view-article/view-article.module#ViewArticleModule'
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
