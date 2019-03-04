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
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {editArticleReducer} from './edit-article.reducer';
import {EditArticleEpics} from './edit-article.epics';

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
        RouterModule.forChild(routes),
        StoreModule.forFeature('editArticle', editArticleReducer),
        EffectsModule.forFeature([EditArticleEpics])
    ],
    declarations: [
        EditArticleComponent,
        EditArticleFormComponent,
        EditArticlePreviewComponent
    ],
    providers: [
        EditArticleEpics
    ]
})
export class EditArticleModule {
}
