import {Injectable} from '@angular/core';
import {ArticlesService} from '../articles/articles.service';
import {Router} from '@angular/router';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';
import {ModuleState} from './add-article.reducer';
import {withLatestFrom, mergeMap, catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import * as actions from './add-article.actions';

@Injectable()
export class AddArticleEpics {

    @Effect() addArticle$ = this.actions$.pipe(
        ofType<actions.Add>(actions.ADD),
        withLatestFrom(this.store$),
        select(([_, storeState]) => storeState),
        mergeMap((store) =>
            this.articlesService.addArticle(store.user.user, {
                ...store.addArticle.article,
                userId: store.user.user.userId
            }).pipe(
                mergeMap((newArticle) => {
                    this.router.navigate(['article', 'edit', newArticle.id]);
                    return of(new actions.AddSuccess());
                }),
                catchError(() => of(new actions.AddFail()))
            )
        ));

    constructor(private actions$: Actions,
                private store$: Store<ModuleState>,
                private articlesService: ArticlesService,
                private router: Router) {
    }
}
