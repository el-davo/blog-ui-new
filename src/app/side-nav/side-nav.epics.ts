import {of} from 'rxjs';
import {Injectable} from '@angular/core';
import {ArticlesService} from '../articles/articles.service';
import {Article} from '../landing/landing.state';
import * as actions from './side-nav.actions';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';

@Injectable()
export class SideNavEpics {

    @Effect() fetchAllArticles$ = this.actions$.pipe(
        ofType(actions.FETCH_ALL_ARTICLES),
        mergeMap(() =>
            this.articlesService.fetchAllArticles().pipe(
                map((articles: Article[]) => new actions.FetchAllArticlesSuccess(articles)),
                catchError(() => of(new actions.FetchAllArticlesFail())))
        )
    );

    constructor(private actions$: Actions,
                private articlesService: ArticlesService) {
    }

}
