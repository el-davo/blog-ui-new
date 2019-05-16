import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '@ngx-share/core';
import { ViewArticleComponent } from './view-article.component';
import { ViewArticleEpics } from './view-article.epics';
import { ArticleRenderComponent } from './article-render/article-render.component';
import { ShareComponent } from './share/share.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { viewArticleReducer } from './view-article.reducer';
import { CoreModule } from '../core/core.module';
import { ShareButtonsModule } from '@ngx-share/buttons';

const routes: Routes = [
    {
        path: '',
        component: ViewArticleComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        MatCardModule,
        RouterModule.forChild(routes),
        ShareModule,
        ShareButtonsModule,
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
        ViewArticleEpics
    ]
})
export class ViewArticleModule {
}
