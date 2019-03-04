import {Component} from '@angular/core';
import {EditArticleState} from '../edit-article.state';
import * as actions from '../edit-article.actions';
import {Store} from '@ngrx/store';
import {ModuleState} from '../edit-article.reducer';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-edit-article-form',
    templateUrl: './edit-article-form.component.html',
    styleUrls: ['./edit-article-form.component.css']
})
export class EditArticleFormComponent {

    editArticle$: Observable<EditArticleState>;

    constructor(private store: Store<ModuleState>) {
        this.editArticle$ = this.store.select('editArticle');
    }

    editArticle() {
        this.store.dispatch(new actions.Update());
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
