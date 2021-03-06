import {Component, OnInit} from '@angular/core';
import {Article} from '../../landing/landing.state';
import {Store} from '@ngrx/store';
import {ModuleState} from '../edit-article.reducer';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-edit-article-preview',
  templateUrl: './edit-article-preview.component.html',
  styleUrls: ['./edit-article-preview.component.css']
})
export class EditArticlePreviewComponent implements OnInit {

  article$: Observable<Article>;

  constructor(private store: Store<ModuleState>) {
    this.article$ = store.select('editArticle', 'article');
  }

  ngOnInit() {
  }

}
