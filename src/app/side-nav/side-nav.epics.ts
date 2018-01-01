import {of} from 'rxjs/observable/of';
import {Injectable} from '@angular/core';
import {ArticlesService} from '../articles/articles.service';
import {Article} from '../landing/landing.state';
import {SideNavActions} from './side-nav.actions';
import {Epic} from 'redux-observable';

@Injectable()
export class SideNavEpics {

  epics: Epic<any, any>[];

  constructor(private sideNavActions: SideNavActions, private articlesService: ArticlesService) {
    this.epics = [this.fetchAllArticles];
  }

  fetchAllArticles = action$ => {
    return action$.ofType(SideNavActions.FETCH_ALL_ARTICLES)
      .mergeMap(() => this.articlesService.fetchAllArticles()
        .map((articles: Article[]) => this.sideNavActions.fetchAllArticlesSuccess(articles))
        .catch(() => of(this.sideNavActions.fetchAllArticlesFail())));
  };

}
