import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AddArticleState} from '../add-article.state';
import {AddArticleActions} from '../add-article.actions';
import {Store} from '@ngrx/store';
import {ModuleState} from '../add-article.reducer';

@Component({
  selector: 'app-add-article-form',
  templateUrl: './add-article-form.component.html',
  styleUrls: ['./add-article-form.component.css']
})
export class AddArticleFormComponent {

  addArticle$: Observable<AddArticleState>;

  constructor(private store: Store<ModuleState>, private actions: AddArticleActions) {
    this.addArticle$ = this.store.select('addArticle');
  }

  addArticle() {
    this.store.dispatch(this.actions.add());
  }

  updateName(name: string) {
    this.store.dispatch(this.actions.updateName(name));
  }

  updateSummary(summary: string) {
    this.store.dispatch(this.actions.updateSummary(summary));
  }

  updateImgUrl(imgUrl: string) {
    this.store.dispatch(this.actions.updateImgUrl(imgUrl));
  }

  updatePublic(isPublic: boolean) {
    this.store.dispatch(this.actions.updatePublic(isPublic));
  }

  updateContent(content: string) {
    this.store.dispatch(this.actions.updateContent(content));
  }
}
