import 'rxjs/add/operator/catch';
import {of} from 'rxjs/observable/of';
import {Injectable} from '@angular/core';
import {LandingActions} from './landing.actions';
import {ArticlesService} from '../articles/articles.service';
import {Epic} from 'redux-observable';

@Injectable()
export class LandingEpics {

  epics: Epic<any, any>[];

  constructor(private articlesService: ArticlesService, private landingActions: LandingActions) {
    this.epics = [this.fetchArticles];
  }

  fetchArticles = action$ => {
    return action$.ofType(LandingActions.FETCH_ARTICLES)
      .mergeMap(() => this.articlesService.fetchArticles()
        .map(articles => this.landingActions.fetchArticlesSuccess(articles))
        .catch(() => of(this.landingActions.fetchArticlesFail())));
  };

}
