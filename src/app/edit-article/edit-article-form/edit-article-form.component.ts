import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {EditArticleState} from '../edit-article.state';
import {EditArticleActions} from '../edit-article.actions';
import {Store} from '@ngrx/store';
import {ModuleState} from '../edit-article.reducer';

@Component({
  selector: 'app-edit-article-form',
  templateUrl: './edit-article-form.component.html',
  styleUrls: ['./edit-article-form.component.css']
})
export class EditArticleFormComponent {

  editArticle$: Observable<EditArticleState>;

  constructor(private store: Store<ModuleState>, private actions: EditArticleActions) {
    this.editArticle$ = this.store.select('editArticle');
  }

  editArticle() {
    this.store.dispatch(this.actions.update());
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
