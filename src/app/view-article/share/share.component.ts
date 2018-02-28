import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {Article} from '../../landing/landing.state';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {ModuleState} from '../view-article.reducer';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent {

  article$: Observable<Article>;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: string, private store: Store<ModuleState>) {
    this.article$ = store.select('viewArticle', 'article');
    this.isBrowser = isPlatformBrowser(platformId);
  }
}
