import {of} from 'rxjs/observable/of';
import {Injectable} from '@angular/core';
import {AddArticleActions} from './add-article.actions';
import {ArticlesService} from '../articles/articles.service';
import {Router} from '@angular/router';
import {Article} from '../landing/landing.state';
import {User} from '../user/user.state';
import {Epic} from 'redux-observable';

@Injectable()
export class AddArticleEpics {

  epics: Epic<any, any>[];

  constructor(private addArticleActions: AddArticleActions,
              private articlesService: ArticlesService,
              private router: Router) {
    this.epics = [this.addArticle];
  }

  addArticle = (action$, store) => {
    return action$.ofType(AddArticleActions.ADD)
      .mergeMap(() => {
        const {user}: { user: User } = store.getState().user;
        const {article}: { article: Article } = store.getState().addArticle;

        return this.articlesService.addArticle(user, {...article, userId: user.userId})
          .mergeMap((newArticle: Article) => {
            this.router.navigate(['article', 'edit', newArticle.id]);
            return of(this.addArticleActions.addSuccess())
          })
          .catch(() => of(this.addArticleActions.addFail()));
      });
  };

}
