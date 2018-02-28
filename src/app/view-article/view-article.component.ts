import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewArticleActions } from './view-article.actions';
import { AppState } from '../root.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent {

  constructor(private store: Store<AppState>, private route: ActivatedRoute, private actions: ViewArticleActions) {
    this.route.params.subscribe(({articleId}) => this.fetchArticle(articleId));
  }

  fetchArticle(articleId: string) {
    this.store.dispatch(this.actions.fetchArticle(articleId));
  }

}
