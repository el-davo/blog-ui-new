import { Component } from '@angular/core';
import { Article } from '../../landing/landing.state';
import { Observable } from 'rxjs/Observable';
import { isBrowser } from '@angular/flex-layout';
import { AppState } from '../../root.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent {

  article$: Observable<Article>;

  constructor(private store: Store<AppState>) {
    this.article$ = store.select(['viewArticle', 'article']);
  }

  isBrowser() {
    return isBrowser();
  }
}
