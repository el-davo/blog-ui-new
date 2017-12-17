import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewArticleComponent} from './view-article.component';
import {ViewArticleEpics} from './view-article.epics';
import {ViewArticleActions} from './view-article.actions';
import {ArticleRenderComponent} from './article-render/article-render.component';
import {CoreModule} from '../core/core.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
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
