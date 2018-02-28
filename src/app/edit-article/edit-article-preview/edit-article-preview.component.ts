import {Component, OnInit} from '@angular/core';
import {Article} from '../../landing/landing.state';
import {Observable} from 'rxjs/Observable';
import {AppState} from '../../root.reducer';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-edit-article-preview',
  templateUrl: './edit-article-preview.component.html',
  styleUrls: ['./edit-article-preview.component.css']
})
export class EditArticlePreviewComponent implements OnInit {

  article$: Observable<Article>;

  constructor(private store: Store<AppState>) {
    this.article$ = store.select('editArticle', 'article');
  }

  ngOnInit() {
  }

}
