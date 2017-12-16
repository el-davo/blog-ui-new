import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LandingActions} from './landing.actions';
import {ArticlesService} from '../articles/articles.service';

@Injectable()
export class LandingEpics {
  constructor(private articlesService: ArticlesService, private landingActions: LandingActions) {
  }

  fetchArticles = action$ => {
    return action$.ofType(LandingActions.FETCH_ARTICLES)
      .mergeMap(() => this.articlesService.fetchArticles()
        .map(articles => this.landingActions.fetchArticlesSuccess(articles))
        .catch(() => Observable.of(this.landingActions.fetchArticlesFail())));
  };

}
