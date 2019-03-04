import {Component} from '@angular/core';
import * as sideNavActions from '../../side-nav/side-nav.actions';
import {Observable} from 'rxjs';
import {AppState} from '../../root.reducer';
import {Store} from '@ngrx/store';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

    showSideNav$: Observable<boolean>;

    constructor(private store: Store<AppState>) {
        this.showSideNav$ = this.store.select('sideNav', 'showSideNav');
    }

    showSideNav() {
        this.store.dispatch(new sideNavActions.Show());
    }

    hideSideNav() {
        this.store.dispatch(new sideNavActions.Hide());
    }
}
