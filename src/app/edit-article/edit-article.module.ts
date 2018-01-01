import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditArticleComponent} from './edit-article.component';
import {EditArticleFormComponent} from './edit-article-form/edit-article-form.component';
import {EditArticlePreviewComponent} from './edit-article-preview/edit-article-preview.component';
import {RouterModule, Routes} from '@angular/router';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,
  MatSlideToggleModule
} from '@angular/material';
import {MarkdownModule} from 'ngx-markdown';

const routes: Routes = [
  {
    path: '',
    component: EditArticleComponent
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
    EditArticleComponent,
    EditArticleFormComponent,
    EditArticlePreviewComponent
  ],
  providers: []
})
export class EditArticleModule {
}
