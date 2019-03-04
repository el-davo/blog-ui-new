import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Observable} from 'rxjs';
import {UserState} from '../../../user/user.state';
import {Store} from '@ngrx/store';
import {AppState} from '../../../root.reducer';
import * as actions from '../../nav.actions';
import * as userActions from '../../../user/user.actions';

@Component({
    selector: 'app-login-modal',
    templateUrl: './login-modal.component.html',
    styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {

    user$: Observable<UserState>;

    constructor(private store: Store<AppState>,
                public dialogRef: MatDialogRef<LoginModalComponent>) {
        this.user$ = this.store.select('user');
    }

    closeModal() {
        this.dialogRef.close();

        this.store.dispatch(new actions.HideLoginModal());
    }

    login() {
        this.store.dispatch(new userActions.Login());
    }

    updateLoginUsername(username: string) {
        this.store.dispatch(new userActions.UpdateLoginUsername(username));
    }

    updateLoginPassword(password: string) {
        this.store.dispatch(new userActions.UpdateLoginPassword(password));
    }
}
