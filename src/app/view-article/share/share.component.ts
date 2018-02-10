import {Component} from '@angular/core';
import {Article} from '../../landing/landing.state';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {isBrowser} from '@angular/flex-layout';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent {

  @select(['viewArticle', 'article']) article$: Observable<Article>;

  constructor() {
  }

  isBrowser() {
    return isBrowser();
  }
}
