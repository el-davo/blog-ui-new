import {Component, OnInit} from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {SideNavActions} from '../side-nav.actions';
import {Observable} from 'rxjs/Observable';
import {Article} from '../../landing/landing.state';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {

  @select(['sideNav', 'articles']) articles$: Observable<Article[]>;

  constructor(private actions: SideNavActions) {
  }

  @dispatch()
  ngOnInit() {
    return this.actions.fetchAllArticles();
  }

  @dispatch()
  hideSideNav() {
    return this.actions.hide();
  }

}
