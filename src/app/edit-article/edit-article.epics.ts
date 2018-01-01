import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ArticlesService} from '../articles/articles.service';
import {EditArticleActions} from './edit-article.actions';
import {Article} from '../landing/landing.state';
import {User} from '../user/user.state';
import {Epic} from 'redux-observable';

@Injectable()
export class EditArticleEpics {

  epics: Epic<any, any>[];

  constructor(private editArticleActions: EditArticleActions, private articlesService: ArticlesService) {
    this.epics = [this.fetchArticle, this.editArticle];
  }

  fetchArticle = action$ => {
    return action$.ofType(EditArticleActions.FETCH)
      .mergeMap(({articleId}) => {
        return this.articlesService.fetchArticle(articleId)
          .mergeMap((article: Article) => Observable.of(this.editArticleActions.fetchSuccess(article)))
          .catch(() => Observable.of(this.editArticleActions.fetchFail()));
      });
  };

  editArticle = (action$, store) => {
    return action$.ofType(EditArticleActions.UPDATE)
      .mergeMap(() => {
        const {user}: { user: User } = store.getState().user;
        const {article}: { article: Article } = store.getState().editArticle;

        return this.articlesService.editArticle(user, article)
          .mergeMap(() => Observable.of(this.editArticleActions.updateSuccess()))
          .catch(() => Observable.of(this.editArticleActions.updateFail()));
      });
  };

}
