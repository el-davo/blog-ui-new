import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AddArticleActions} from './add-article.actions';
import {ArticlesService} from '../articles/articles.service';

@Injectable()
export class AddArticleEpics {
  constructor(private addArticleActions: AddArticleActions, private articlesService: ArticlesService) {
  }

  addArticle = (action$, store) => {
    return action$.ofType(AddArticleActions.ADD)
      .mergeMap(() => {
        const {user} = store.getState().user;
        const {article} = store.getState().addArticle;

        return this.articlesService.addArticle(user, article)
          .mergeMap(() => Observable.of(this.addArticleActions.addSuccess()))
          .catch(() => Observable.of(this.addArticleActions.addFail()));
      });
  };

}
