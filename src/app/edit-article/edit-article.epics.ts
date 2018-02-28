import {of} from 'rxjs/observable/of';
import {Injectable} from '@angular/core';
import {ArticlesService} from '../articles/articles.service';
import {EditArticleActions} from './edit-article.actions';
import {Article} from '../landing/landing.state';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, mergeMap, withLatestFrom} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {ModuleState} from './edit-article.reducer';

@Injectable()
export class EditArticleEpics {

  @Effect() fetchArticle$ = this.actions$.pipe(
    ofType(EditArticleActions.FETCH),
    mergeMap((action: any) =>
      this.articlesService.fetchArticle(action.articleId).pipe(
        mergeMap((article: Article) => of(this.editArticleActions.fetchSuccess(article))),
        catchError(() => of(this.editArticleActions.fetchFail()))
      )
    ));

  @Effect() editArticle$ = this.actions$.pipe(
    ofType(EditArticleActions.UPDATE),
    withLatestFrom(this.store$),
    select(([action, storeState]) => storeState),
    mergeMap((store) =>
      this.articlesService.editArticle(store.user.user, store.editArticle.article).pipe(
        mergeMap(() => of(this.editArticleActions.updateSuccess())),
        catchError(() => of(this.editArticleActions.updateFail()))
      )
    ));

  constructor(private actions$: Actions,
              private store$: Store<ModuleState>,
              private editArticleActions: EditArticleActions,
              private articlesService: ArticlesService) {
  }

}
