import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {dispatch, select} from '@angular-redux/store';
import {EditArticleState} from '../edit-article.state';
import {EditArticleActions} from '../edit-article.actions';

@Component({
  selector: 'app-edit-article-form',
  templateUrl: './edit-article-form.component.html',
  styleUrls: ['./edit-article-form.component.css']
})
export class EditArticleFormComponent {

  @select('editArticle') editArticle$: Observable<EditArticleState>;

  constructor(private actions: EditArticleActions) {
  }

  @dispatch()
  editArticle() {
    return this.actions.update();
  }

  @dispatch()
  updateName(name: string) {
    return this.actions.updateName(name);
  }

  @dispatch()
  updateSummary(summary: string) {
    return this.actions.updateSummary(summary);
  }

  @dispatch()
  updateImgUrl(imgUrl: string) {
    return this.actions.updateImgUrl(imgUrl);
  }

  @dispatch()
  updatePublic(isPublic: boolean) {
    return this.actions.updatePublic(isPublic);
  }

  @dispatch()
  updateContent(content: string) {
    return this.actions.updateContent(content);
  }

}
