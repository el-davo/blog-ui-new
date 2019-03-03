import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {AddArticleState} from '../add-article.state';
import * as actions from '../add-article.actions';
import {Store} from '@ngrx/store';
import {ModuleState} from '../add-article.reducer';

@Component({
    selector: 'app-add-article-form',
    templateUrl: './add-article-form.component.html',
    styleUrls: ['./add-article-form.component.css']
})
export class AddArticleFormComponent {

    addArticle$: Observable<AddArticleState>;

    constructor(private store: Store<ModuleState>) {
        this.addArticle$ = this.store.select('addArticle');
    }

    addArticle() {
        this.store.dispatch(new actions.Add());
    }

    updateName(name: string) {
        this.store.dispatch(new actions.UpdateName(name));
    }

    updateSummary(summary: string) {
        this.store.dispatch(new actions.UpdateSummary(summary));
    }

    updateImgUrl(imgUrl: string) {
        this.store.dispatch(new actions.UpdateImgUrl(imgUrl));
    }

    updatePublic(isPublic: boolean) {
        this.store.dispatch(new actions.UpdatePublic(isPublic));
    }

    updateContent(content: string) {
        this.store.dispatch(new actions.UpdateContent(content));
    }
}
