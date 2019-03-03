import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../root.reducer';
import * as actions from '../side-nav.actions';

@Component({
    selector: 'app-home-button',
    templateUrl: './home-button.component.html',
    styleUrls: ['./home-button.component.css']
})
export class HomeButtonComponent {

    constructor(private store: Store<AppState>) {
    }

    closeSideNav() {
        this.store.dispatch(new actions.Hide());
    }
}
