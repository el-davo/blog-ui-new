import {Component} from '@angular/core';
import {SideNavActions} from '../side-nav.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../root.reducer';

@Component({
  selector: 'app-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.css']
})
export class HomeButtonComponent {

  constructor(private store: Store<AppState>, private actions: SideNavActions) {
  }

  closeSideNav() {
    this.store.dispatch(this.actions.hide());
  }
}
