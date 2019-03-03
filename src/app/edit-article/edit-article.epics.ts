import {Injectable} from '@angular/core';
import {ArticlesService} from '../articles/articles.service';
import * as actions from './edit-article.actions';
import {Article} from '../landing/landing.state';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';
import {ModuleState} from './edit-article.reducer';
import {catchError, mergeMap, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class EditArticleEpics {

    @Effect() fetchArticle$ = this.actions$.pipe(
        ofType(actions.FETCH),
        mergeMap((action: any) =>
            this.articlesService.fetchArticle(action.articleId).pipe(
                mergeMap((article: Article) => of(new actions.FetchSuccess(article))),
                catchError(() => of(new actions.FetchFail()))
            )
        ));

    @Effect() editArticle$ = this.actions$.pipe(
        ofType(actions.UPDATE),
        withLatestFrom(this.store$),
        select(([_, storeState]) => storeState),
        mergeMap((store) =>
            this.articlesService.editArticle(store.user.user, store.editArticle.article).pipe(
                mergeMap(() => of(new actions.UpdateSuccess())),
                catchError(() => of(new actions.UpdateFail()))
            )
        ));

    constructor(private actions$: Actions,
                private store$: Store<ModuleState>,
                private articlesService: ArticlesService) {
    }

}
