import {of} from 'rxjs/observable/of';
import {Injectable} from '@angular/core';
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
        .catch(() => of(this.viewArticleActions.fetchArticleFail())));
  };

}
