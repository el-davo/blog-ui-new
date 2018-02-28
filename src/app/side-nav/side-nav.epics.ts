import {of} from 'rxjs/observable/of';
import {Injectable} from '@angular/core';
import {ArticlesService} from '../articles/articles.service';
import {Article} from '../landing/landing.state';
import {SideNavActions} from './side-nav.actions';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';

@Injectable()
export class SideNavEpics {

  @Effect() fetchAllArticles$ = this.actions$.pipe(
    ofType(SideNavActions.FETCH_ALL_ARTICLES),
    mergeMap(() =>
      this.articlesService.fetchAllArticles().pipe(
        map((articles: Article[]) => this.sideNavActions.fetchAllArticlesSuccess(articles)),
        catchError(() => of(this.sideNavActions.fetchAllArticlesFail())))
    )
  );

  constructor(private actions$: Actions,
              private sideNavActions: SideNavActions,
              private articlesService: ArticlesService) {
  }

}
