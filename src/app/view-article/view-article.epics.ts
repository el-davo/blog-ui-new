import 'rxjs/add/operator/map';
import {of} from 'rxjs/observable/of';
import {Injectable} from '@angular/core';
import {ArticlesService} from '../articles/articles.service';
import {ViewArticleActions} from './view-article.actions';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {mergeMap} from 'rxjs/operators';

@Injectable()
export class ViewArticleEpics {

  @Effect() fetchArticle$ = this.actions$.pipe(
    ofType(ViewArticleActions.FETCH_ARTICLE),
    mergeMap((action: any) =>
      this.articlesService.fetchArticle(action.articleId)
        .map(article => this.viewArticleActions.fetchArticleSuccess(article))
        .catch(() => of(this.viewArticleActions.fetchArticleFail())))
  );

  constructor(private actions$: Actions,
              private articlesService: ArticlesService,
              private viewArticleActions: ViewArticleActions) {
  }

}
