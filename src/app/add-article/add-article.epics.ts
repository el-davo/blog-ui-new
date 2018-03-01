import {of} from 'rxjs/observable/of';
import {Injectable} from '@angular/core';
import {AddArticleActions} from './add-article.actions';
import {ArticlesService} from '../articles/articles.service';
import {Router} from '@angular/router';
import {Article} from '../landing/landing.state';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';
import {catchError} from 'rxjs/operators/catchError';
import {mergeMap} from 'rxjs/operators/mergeMap';
import {withLatestFrom} from 'rxjs/operators/withLatestFrom';
import {ModuleState} from './add-article.reducer';

@Injectable()
export class AddArticleEpics {

  @Effect() addArticle$ = this.actions$.pipe(
    ofType(AddArticleActions.ADD),
    withLatestFrom(this.store$),
    select(([action, storeState]) => storeState),
    mergeMap((store) =>
      this.articlesService.addArticle(store.user.user, {...store.addArticle.article, userId: store.user.user.userId})
        .pipe(
          mergeMap((newArticle: Article) => {
            this.router.navigate(['article', 'edit', newArticle.id]);
            return of(this.addArticleActions.addSuccess())
          }),
          catchError(() => of(this.addArticleActions.addFail()))
        )
    ));

  constructor(private actions$: Actions,
              private store$: Store<ModuleState>,
              private addArticleActions: AddArticleActions,
              private articlesService: ArticlesService,
              private router: Router) {
  }
}
