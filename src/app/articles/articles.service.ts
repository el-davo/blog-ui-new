import {Injectable} from '@angular/core';
import {TransferState, makeStateKey} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {Article} from '../landing/landing.state';

@Injectable()
export class ArticlesService {

  constructor(private http: HttpClient, private state: TransferState) {
  }

  fetchArticles(): Observable<Article[]> {
    const articlesKey = makeStateKey('articles');
    const articlesState = this.state.get(articlesKey, null as Article[]);

    if (articlesState) {
      return Observable.of(articlesState);
    }

    const filter = {
      where: {
        public: true
      },
      fields: {
        content: false,
        parsedContent: false
      }
    };

    return this.http.get<Article[]>(`${environment.blogApi}/articles?filter=${JSON.stringify(filter)}`)
      .map(articles => {
        this.state.set(articlesKey, articles);

        return articles;
      });
  }

  fetchArticle(articleId: string): Observable<Article> {
    const articleStateKey = makeStateKey(`article-${articleId}`);
    const articleState = this.state.get(articleStateKey, null as Article);

    if (articleState) {
      return Observable.of(articleState);
    }

    return this.http.get<Article>(`${environment.blogApi}/articles/${articleId}`)
      .map(article => {
        this.state.set(articleStateKey, article);

        return article;
      });
  }
}
