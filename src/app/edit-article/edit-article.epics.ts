import {of} from 'rxjs/observable/of';
import {Injectable} from '@angular/core';
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
          .mergeMap((article: Article) => of(this.editArticleActions.fetchSuccess(article)))
          .catch(() => of(this.editArticleActions.fetchFail()));
      });
  };

  editArticle = (action$, store) => {
    return action$.ofType(EditArticleActions.UPDATE)
      .mergeMap(() => {
        const {user}: { user: User } = store.getState().user;
        const {article}: { article: Article } = store.getState().editArticle;

        return this.articlesService.editArticle(user, article)
          .mergeMap(() => of(this.editArticleActions.updateSuccess()))
          .catch(() => of(this.editArticleActions.updateFail()));
      });
  };

}
