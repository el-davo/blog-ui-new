import 'rxjs/add/operator/catch';
import {of} from 'rxjs/observable/of';
import {Injectable} from '@angular/core';
import {LandingActions} from './landing.actions';
import {ArticlesService} from '../articles/articles.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {mergeMap} from 'rxjs/operators';

@Injectable()
export class LandingEpics {

  @Effect() login$ = this.actions$.pipe(
    ofType(LandingActions.FETCH_ARTICLES),
    mergeMap(() =>
      this.articlesService.fetchArticles()
        .map(articles => this.landingActions.fetchArticlesSuccess(articles))
        .catch(() => of(this.landingActions.fetchArticlesFail())))
  );

  constructor(private actions$: Actions,
              private articlesService: ArticlesService,
              private landingActions: LandingActions) {
  }

}
