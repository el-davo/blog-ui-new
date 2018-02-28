import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShareModule} from '@ngx-share/core';
import {ViewArticleComponent} from './view-article.component';
import {ViewArticleEpics} from './view-article.epics';
import {ViewArticleActions} from './view-article.actions';
import {ArticleRenderComponent} from './article-render/article-render.component';
import {ShareButtonModule} from '@ngx-share/button';
import {ShareComponent} from './share/share.component';
import {RouterModule, Routes} from '@angular/router';
import {MarkdownModule} from 'ngx-markdown';
import {MatCardModule} from '@angular/material';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {viewArticleReducer} from './view-article.reducer';

const routes: Routes = [
  {
    path: '',
    component: ViewArticleComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MarkdownModule.forRoot(),
    RouterModule.forChild(routes),
    ShareModule.forRoot(),
    ShareButtonModule.forRoot(),
    StoreModule.forFeature('viewArticle', viewArticleReducer),
    EffectsModule.forFeature([ViewArticleEpics])
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    ViewArticleComponent,
    ArticleRenderComponent,
    ShareComponent
  ],
  providers: [
    ViewArticleActions,
    ViewArticleEpics
  ]
})
export class ViewArticleModule {
}
