import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShareModule} from '@ngx-share/core';
import {ViewArticleComponent} from './view-article.component';
import {ViewArticleEpics} from './view-article.epics';
import {ViewArticleActions} from './view-article.actions';
import {ArticleRenderComponent} from './article-render/article-render.component';
import {CoreModule} from '../core/core.module';
import {SharedModule} from '../shared/shared.module';
import {ShareButtonModule} from '@ngx-share/button';
import {ShareComponent} from './share/share.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    ShareModule.forRoot(),
    ShareButtonModule.forRoot()
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
