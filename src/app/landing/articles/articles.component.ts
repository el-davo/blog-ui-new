import { Component, OnInit } from '@angular/core';
import { LandingActions } from '../landing.actions';
import { Observable } from 'rxjs/Observable';
import { LandingState } from '../landing.state';
import { Store } from '@ngrx/store';
import { AppState } from '../../root.reducer';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  landing$: Observable<LandingState>;
  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store<AppState>, private actions: LandingActions) {
    this.landing$ = this.store.select('landing');
    this.isLoggedIn$ = this.store.select('user', 'isLoggedIn');
  }

  ngOnInit() {
    this.store.dispatch(this.actions.fetchArticles());
  }

}
