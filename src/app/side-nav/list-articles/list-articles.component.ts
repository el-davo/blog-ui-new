import {Component, OnInit} from '@angular/core';
import * as actions from '../side-nav.actions';
import {Observable} from 'rxjs';
import {Article} from '../../landing/landing.state';
import {Store} from '@ngrx/store';
import {AppState} from '../../root.reducer';


@Component({
    selector: 'app-list-articles',
    templateUrl: './list-articles.component.html',
    styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {

    articles$: Observable<Article[]>;

    constructor(private store: Store<AppState>) {
        this.articles$ = this.store.select('sideNav', 'articles');
    }

    ngOnInit() {
        this.store.dispatch(new actions.FetchAllArticles());
    }

    hideSideNav() {
        this.store.dispatch(new actions.Hide());
    }

}
