import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../landing.state';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  @Input() article: Article;

  constructor() {
  }

  ngOnInit() {
  }

}
