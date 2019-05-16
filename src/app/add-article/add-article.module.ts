import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddArticleComponent} from './add-article.component';
import {AddArticleFormComponent} from './add-article-form/add-article-form.component';
import {AddArticlePreviewComponent} from './add-article-preview/add-article-preview.component';
import {RouterModule, Routes} from '@angular/router';
import {
    MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,
    MatSlideToggleModule
} from '@angular/material';
import {AddArticleEpics} from './add-article.epics';
import {StoreModule} from '@ngrx/store';
import {addArticleReducer} from './add-article.reducer';
import {EffectsModule} from '@ngrx/effects';

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
        RouterModule.forChild(routes),
        StoreModule.forFeature('addArticle', addArticleReducer),
        EffectsModule.forFeature([AddArticleEpics])
    ],
    declarations: [
        AddArticleComponent,
        AddArticleFormComponent,
        AddArticlePreviewComponent
    ],
    providers: [
        AddArticleEpics
    ]
})
export class AddArticleModule {
}
