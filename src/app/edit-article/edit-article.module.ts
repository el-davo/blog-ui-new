import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditArticleComponent} from './edit-article.component';
import {EditArticleFormComponent} from './edit-article-form/edit-article-form.component';
import {EditArticlePreviewComponent} from './edit-article-preview/edit-article-preview.component';
import {SharedModule} from '../shared/shared.module';
import {EditArticleActions} from './edit-article.actions';
import {EditArticleEpics} from './edit-article.epics';
import {CoreModule} from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ],
  declarations: [
    EditArticleComponent,
    EditArticleFormComponent,
    EditArticlePreviewComponent
  ],
  providers: [
    EditArticleActions,
    EditArticleEpics
  ]
})
export class EditArticleModule {
}
