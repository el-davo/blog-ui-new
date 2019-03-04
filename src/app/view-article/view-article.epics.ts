import {of} from 'rxjs';
import {Injectable} from '@angular/core';
import {ArticlesService} from '../articles/articles.service';
import * as actions from './view-article.actions';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';

@Injectable()
export class ViewArticleEpics {

    @Effect() fetchArticle$ = this.actions$.pipe(
        ofType(actions.FETCH_ARTICLE),
        mergeMap((action: any) =>
            this.articlesService.fetchArticle(action.articleId).pipe(
                map(article => new actions.FetchArticleSuccess(article)),
                catchError(() => of(new actions.FetchArticleFail())))
        )
    );

    constructor(private actions$: Actions,
                private articlesService: ArticlesService) {
    }

}
