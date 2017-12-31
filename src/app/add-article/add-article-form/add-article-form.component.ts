import {Component} from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {AddArticleState} from '../add-article.state';
import {AddArticleActions} from '../add-article.actions';

@Component({
  selector: 'app-add-article-form',
  templateUrl: './add-article-form.component.html',
  styleUrls: ['./add-article-form.component.css']
})
export class AddArticleFormComponent {

  @select('addArticle') addArticle$: Observable<AddArticleState>;

  constructor(private actions: AddArticleActions) {
  }

  @dispatch()
  addArticle() {
    return this.actions.add();
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
