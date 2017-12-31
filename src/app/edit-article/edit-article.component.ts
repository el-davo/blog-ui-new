import {Component, OnInit} from '@angular/core';
import {dispatch} from '@angular-redux/store';
import {EditArticleActions} from './edit-article.actions';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  constructor(private actions: EditArticleActions, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(({articleId}) => this.fetchArticle(articleId));
  }

  @dispatch()
  fetchArticle(articleId: string) {
    return this.actions.fetch(articleId);
  }

}
