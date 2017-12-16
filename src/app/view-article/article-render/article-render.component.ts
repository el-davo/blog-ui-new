import {Component, OnInit} from '@angular/core';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {Article} from '../../landing/landing.state';

@Component({
  selector: 'app-article-render',
  templateUrl: './article-render.component.html',
  styleUrls: ['./article-render.component.css']
})
export class ArticleRenderComponent {

  @select(['viewArticle', 'article']) article$: Observable<Article>;

  constructor() {
  }

}
