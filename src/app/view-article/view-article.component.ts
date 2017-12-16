import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {dispatch} from '@angular-redux/store';
import {ViewArticleActions} from './view-article.actions';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent {

  constructor(private route: ActivatedRoute, private actions: ViewArticleActions) {
    this.route.params.subscribe(({articleId}) => this.fetchArticle(articleId));
  }

  @dispatch()
  fetchArticle(articleId: string) {
    return this.actions.fetchArticle(articleId);
  }

}
