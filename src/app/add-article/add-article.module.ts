import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddArticleComponent} from './add-article.component';
import {AddArticleActions} from './add-article.actions';
import {AddArticleEpics} from './add-article.epics';
import {AddArticleFormComponent} from './add-article-form/add-article-form.component';
import {AddArticlePreviewComponent} from './add-article-preview/add-article-preview.component';
import {SharedModule} from '../shared/shared.module';
import {CoreModule} from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ],
  declarations: [
    AddArticleComponent,
    AddArticleFormComponent,
    AddArticlePreviewComponent
  ],
  providers: [
    AddArticleActions,
    AddArticleEpics
  ]
})
export class AddArticleModule {
}
