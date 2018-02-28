import { Component, OnInit } from '@angular/core';
import { SideNavActions } from '../side-nav.actions';
import { Observable } from 'rxjs/Observable';
import { Article } from '../../landing/landing.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {

  articles$: Observable<Article[]>;

  constructor(private store: Store<AppState>, private actions: SideNavActions) {
    this.articles$ = this.store.select(['sideNav', 'articles']);
  }

  ngOnInit() {
    this.store.dispatch(this.actions.fetchAllArticles());
  }

  hideSideNav() {
    this.store.dispatch(this.actions.hide());
  }

}
