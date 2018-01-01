import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ArticlesService} from '../articles/articles.service';
import {ViewArticleActions} from './view-article.actions';
import {Epic} from 'redux-observable';

@Injectable()
export class ViewArticleEpics {

  epics: Epic<any, any>[];

  constructor(private articlesService: ArticlesService, private viewArticleActions: ViewArticleActions) {
    this.epics = [this.fetchArticle];
  }

  fetchArticle = action$ => {
    return action$.ofType(ViewArticleActions.FETCH_ARTICLE)
      .mergeMap(({articleId}: { articleId: string }) => this.articlesService.fetchArticle(articleId)
        .map(article => this.viewArticleActions.fetchArticleSuccess(article))
        .catch(() => Observable.of(this.viewArticleActions.fetchArticleFail())));
  };

}
