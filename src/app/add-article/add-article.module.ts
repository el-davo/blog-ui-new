import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddArticleComponent} from './add-article.component';
import {AddArticleActions} from './add-article.actions';
import {AddArticleEpics} from './add-article.epics';
import {AddArticleFormComponent} from './add-article-form/add-article-form.component';
import {AddArticlePreviewComponent} from './add-article-preview/add-article-preview.component';
import {RouterModule, Routes} from '@angular/router';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,
  MatSlideToggleModule
} from '@angular/material';
import {MarkdownModule} from 'ngx-markdown';

const routes: Routes = [
  {
    path: '',
    component: AddArticleComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatInputModule,
    MarkdownModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  declarations: [
    AddArticleComponent,
    AddArticleFormComponent,
    AddArticlePreviewComponent
  ],
  providers: [
  ]
})
export class AddArticleModule {
}
