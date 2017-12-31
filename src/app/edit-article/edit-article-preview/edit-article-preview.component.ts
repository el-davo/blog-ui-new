import {Component, OnInit} from '@angular/core';
import {Article} from '../../landing/landing.state';
import {Observable} from 'rxjs/Observable';
import {select} from '@angular-redux/store';

@Component({
  selector: 'app-edit-article-preview',
  templateUrl: './edit-article-preview.component.html',
  styleUrls: ['./edit-article-preview.component.css']
})
export class EditArticlePreviewComponent implements OnInit {

  @select(['editArticle', 'article']) article$: Observable<Article>;

  constructor() {
  }

  ngOnInit() {
  }

}
