import {Component} from '@angular/core';
import {SideNavActions} from '../../side-nav/side-nav.actions';
import {Observable} from 'rxjs/Observable';
import {AppState} from '../../root.reducer';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  showSideNav$: Observable<boolean>;

  constructor(private store: Store<AppState>, private actions: SideNavActions) {
    this.showSideNav$ = this.store.select('sideNav', 'showSideNav');
  }

  showSideNav() {
    this.store.dispatch(this.actions.show());
  }

  hideSideNav() {
    this.store.dispatch(this.actions.hide());
  }
}
