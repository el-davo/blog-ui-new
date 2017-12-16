import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewArticleComponent} from './view-article.component';
import {ViewArticleEpics} from './view-article.epics';
import {ViewArticleActions} from './view-article.actions';
import {ArticleRenderComponent} from './article-render/article-render.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ViewArticleComponent,
    ArticleRenderComponent
  ],
  providers: [
    ViewArticleActions,
    ViewArticleEpics
  ]
})
export class ViewArticleModule {
}
