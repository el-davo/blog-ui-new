import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Article} from '../../landing/landing.state';
import {Store} from '@ngrx/store';
import {ModuleState} from '../add-article.reducer';

@Component({
  selector: 'app-add-article-preview',
  templateUrl: './add-article-preview.component.html',
  styleUrls: ['./add-article-preview.component.css']
})
export class AddArticlePreviewComponent implements OnInit {

  article$: Observable<Article>;

  constructor(private store: Store<ModuleState>) {
    this.article$ = store.select('addArticle', 'article');
  }

  ngOnInit() {
  }

}
