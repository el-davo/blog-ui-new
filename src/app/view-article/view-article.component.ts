import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as actions from './view-article.actions';
import {AppState} from '../root.reducer';
import {Store} from '@ngrx/store';

@Component({
    selector: 'app-view-article',
    templateUrl: './view-article.component.html',
    styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent {

    constructor(private store: Store<AppState>, private route: ActivatedRoute) {
        this.route.params.subscribe(({articleId}) => this.fetchArticle(articleId));
    }

    fetchArticle(articleId: string) {
        this.store.dispatch(new actions.FetchArticle(articleId));
    }

}
