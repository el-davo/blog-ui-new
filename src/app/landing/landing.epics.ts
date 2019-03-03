import {Injectable} from '@angular/core';
import * as actions from './landing.actions';
import {ArticlesService} from '../articles/articles.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class LandingEpics {

    @Effect() login$ = this.actions$.pipe(
        ofType(actions.FETCH_ARTICLES),
        mergeMap(() =>
            this.articlesService.fetchArticles().pipe(
                map(articles => new actions.FetchArticlesSuccess(articles)),
                catchError(() => of(new actions.FetchArticlesFail())))
        )
    );

    constructor(private actions$: Actions,
                private articlesService: ArticlesService) {
    }

}
