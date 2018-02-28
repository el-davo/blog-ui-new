import { Component, OnInit } from '@angular/core';
import { EditArticleActions } from './edit-article.actions';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../root.reducer';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  constructor(private store: Store<AppState>, private actions: EditArticleActions, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(({articleId}) => this.fetchArticle(articleId));
  }

  fetchArticle(articleId: string) {
    this.store.dispatch(this.actions.fetch(articleId));
  }

}
