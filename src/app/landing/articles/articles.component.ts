import { Component, OnInit } from '@angular/core';
import { LandingActions } from '../landing.actions';
import { Observable } from 'rxjs/Observable';
import { LandingState } from '../landing.state';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  landing$: Observable<LandingState>;

  constructor(private store: Store<AppState>, private actions: LandingActions) {
    this.landing$ = this.store.select('landing');
  }

  ngOnInit() {
    this.store.dispatch(this.actions.fetchArticles());
  }

}
