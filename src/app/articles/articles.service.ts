import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {makeStateKey, Meta, Title, TransferState} from '@angular/platform-browser';
import {of} from 'rxjs';
import {Article} from '../landing/landing.state';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {User} from '../user/user.state';

@Injectable()
export class ArticlesService {

    constructor(private http: HttpClient, private state: TransferState, private title: Title, private meta: Meta) {
    }

    fetchAllArticles() {
        const articlesKey = makeStateKey('allArticles');
        const articlesState = this.state.get<Article[]>(articlesKey, null);

        if (articlesState) {
            return of(articlesState);
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

        return this.http.get<Article[]>(`${environment.blogApi}/articles?filter=${JSON.stringify(filter)}`).pipe(
            map(articles => {
                this.state.set(articlesKey, articles);
                return articles;
            })
        );
    }

    fetchArticles() {
        const articlesKey = makeStateKey('articles');
        const articlesState = this.state.get<Article[]>(articlesKey, null);

        if (articlesState) {
            this.title.setTitle('el-davos blog');
            return of(articlesState);
        }

        const filter = {
            where: {
                public: true
            },
            fields: {
                content: false,
                parsedContent: false
            },
            limit: 10
        };

        return this.http.get<Article[]>(`${environment.blogApi}/articles?filter=${JSON.stringify(filter)}`).pipe(
            map(articles => {
                this.state.set(articlesKey, articles);
                this.title.setTitle('el-davos blog');
                this.meta.addTag({property: 'description', content: 'el-davos blog'});
                this.meta.addTag({property: 'og:title', content: 'el-davos blog'});
                this.meta.addTag({property: 'og:site_name', content: 'el-davos blog'});
                this.meta.addTag({property: 'og:type', content: 'blog'});

                return articles;
            })
        );
    }

    fetchArticle(articleId: string) {
        const articleStateKey = makeStateKey(`article-${articleId}`);
        const articleState = this.state.get<Article>(articleStateKey, null);

        console.log('Fetching article now');

        if (articleState) {
            console.log('Already in the state like');
            this.title.setTitle(articleState.name);
            return of(articleState);
        }

        return this.http.get<Article>(`${environment.blogApi}/articles/${articleId}`).pipe(
            map(article => {
                console.log('Got the article');

                this.state.set(articleStateKey, article);
                this.title.setTitle(article.name);
                this.meta.addTag({property: 'description', content: article.summary});
                this.meta.addTag({property: 'og:title', content: article.name});
                this.meta.addTag({property: 'og:site_name', content: 'el-davos blog'});
                this.meta.addTag({property: 'og:type', content: 'blog'});

                return article;
            })
        );
    }

    addArticle(user: User, article: Article) {
        return this.http.post<Article>(`${environment.blogApi}/articles`, article, {
            headers: new HttpHeaders().set('authorization', user.id)
        });
    }

    editArticle(user: User, article: Article) {
        return this.http.put<Article>(`${environment.blogApi}/articles/${article.id}`, article, {
            headers: new HttpHeaders().set('authorization', user.id)
        });
    }
}
