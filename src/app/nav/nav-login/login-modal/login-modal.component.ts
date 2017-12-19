import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {dispatch, select} from '@angular-redux/store';
import {NavActions} from '../../nav.actions';
import {UserActions} from '../../../user/user.actions';
import {Observable} from 'rxjs/Observable';
import {UserState} from '../../../user/user.state';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {

  @select('user') user$: Observable<UserState>;

  constructor(private userActions: UserActions,
              private navActions: NavActions,
              public dialogRef: MatDialogRef<LoginModalComponent>) {
  }

  @dispatch()
  closeModal() {
    this.dialogRef.close();
    return this.navActions.hideLoginModal();
  }

  @dispatch()
  login() {
    return this.userActions.login();
  }

  @dispatch()
  updateLoginUsername(username: string) {
    return this.userActions.updateLoginUsername(username);
  }

  @dispatch()
  updateLoginPassword(password: string) {
    return this.userActions.updateLoginPassword(password);
  }
}
