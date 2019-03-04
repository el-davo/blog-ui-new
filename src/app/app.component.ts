import {Component, HostBinding} from '@angular/core';
import {Observable} from 'rxjs';
import * as sideNavActions from './side-nav/side-nav.actions';
import {AppState} from './root.reducer';
import {Store} from '@ngrx/store';
import {environment} from '../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    showSideNav$: Observable<boolean>;

    @HostBinding('@.disabled') disabled = !environment.animations;

    constructor(private store: Store<AppState>) {
        this.showSideNav$ = this.store.select('sideNav', 'showSideNav');
    }

    closeSideNav() {
        this.store.dispatch(new sideNavActions.Hide());
    }
}
