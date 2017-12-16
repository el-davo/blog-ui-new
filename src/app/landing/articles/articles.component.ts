import {Component, OnInit} from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {LandingActions} from '../landing.actions';
import {Observable} from 'rxjs/Observable';
import {LandingState} from '../landing.state';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  @select('landing') landing$: Observable<LandingState>;

  constructor(private actions: LandingActions) {
  }

  @dispatch()
  ngOnInit() {
    return this.actions.fetchArticles()
  }

}
