import {Component, OnInit} from '@angular/core';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {Article} from '../../landing/landing.state';

@Component({
  selector: 'app-add-article-preview',
  templateUrl: './add-article-preview.component.html',
  styleUrls: ['./add-article-preview.component.css']
})
export class AddArticlePreviewComponent implements OnInit {

  @select(['addArticle', 'article']) article$: Observable<Article>;

  constructor() {
  }

  ngOnInit() {
  }

}
