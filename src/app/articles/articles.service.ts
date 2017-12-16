import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {Article} from '../landing/landing.state';

@Injectable()
export class ArticlesService {

  constructor(private http: HttpClient) {
  }

  fetchArticles(): Observable<Article[]> {
    const filter = {
      where: {
        public: true
      },
      fields: {
        content: false,
        parsedContent: false
      }
    };

    return this.http.get<Article[]>(`${environment.blogApi}/articles?filter=${JSON.stringify(filter)}`);
  }
}
