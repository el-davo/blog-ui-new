import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {NavActions} from '../../nav.actions';
import {UserActions} from '../../../user/user.actions';
import {Observable} from 'rxjs/Observable';
import {UserState} from '../../../user/user.state';
import {Store} from '@ngrx/store';
import {AppState} from '../../../root.reducer';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {

  user$: Observable<UserState>;

  constructor(private store: Store<AppState>,
              private userActions: UserActions,
              private navActions: NavActions,
              public dialogRef: MatDialogRef<LoginModalComponent>) {
    this.user$ = this.store.select('user');
  }

  closeModal() {
    this.dialogRef.close();

    this.store.dispatch(this.navActions.hideLoginModal());
  }

  login() {
    this.store.dispatch(this.userActions.login());
  }

  updateLoginUsername(username: string) {
    this.store.dispatch(this.userActions.updateLoginUsername(username));
  }

  updateLoginPassword(password: string) {
    this.store.dispatch(this.userActions.updateLoginPassword(password));
  }
}
