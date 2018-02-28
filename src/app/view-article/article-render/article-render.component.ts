import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Article } from '../../landing/landing.state';
import { AppState } from '../../root.reducer';
import { Store } from '@ngrx/store';
import {ModuleState} from '../view-article.reducer';

@Component({
  selector: 'app-article-render',
  templateUrl: './article-render.component.html',
  styleUrls: ['./article-render.component.css']
})
export class ArticleRenderComponent {

  article$: Observable<Article>;

  constructor(private store: Store<ModuleState>) {
    this.article$ = store.select('viewArticle', 'article');
  }

}
