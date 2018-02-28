import {Component} from '@angular/core';
import {NavActions} from '../nav.actions';
import {AppState} from '../../root.reducer';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-nav-login',
  templateUrl: './nav-login.component.html',
  styleUrls: ['./nav-login.component.css']
})
export class NavLoginComponent {

  constructor(private store: Store<AppState>, private navActions: NavActions) {
  }

  showLoginModal() {
    this.store.dispatch(this.navActions.showLoginModal())
  }

}
