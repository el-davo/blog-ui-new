import {of} from 'rxjs/observable/of';
import {Injectable} from '@angular/core';
import {ArticlesService} from '../articles/articles.service';
import {ViewArticleActions} from './view-article.actions';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError} from 'rxjs/operators/catchError';
import {map} from 'rxjs/operators/map';
import {mergeMap} from 'rxjs/operators/mergeMap';

@Injectable()
export class ViewArticleEpics {

  @Effect() fetchArticle$ = this.actions$.pipe(
    ofType(ViewArticleActions.FETCH_ARTICLE),
    mergeMap((action: any) =>
      this.articlesService.fetchArticle(action.articleId).pipe(
        map(article => this.viewArticleActions.fetchArticleSuccess(article)),
        catchError(() => of(this.viewArticleActions.fetchArticleFail())))
    )
  );

  constructor(private actions$: Actions,
              private articlesService: ArticlesService,
              private viewArticleActions: ViewArticleActions) {
  }

}
