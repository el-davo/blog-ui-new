import {Component, OnInit} from '@angular/core';
import * as actions from '../landing.actions';
import {LandingState} from '../landing.state';
import {Store} from '@ngrx/store';
import {AppState} from '../../root.reducer';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

    landing$: Observable<LandingState>;
    isLoggedIn$: Observable<boolean>;

    constructor(private store: Store<AppState>) {
        this.landing$ = this.store.select('landing');
        this.isLoggedIn$ = this.store.select('user', 'isLoggedIn');
    }

    ngOnInit() {
        this.store.dispatch(new actions.FetchArticles());
    }

}
