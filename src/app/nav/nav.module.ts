import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './nav.component';
import {MaterialModule} from '../material/material.module';
import {NavActions} from './nav.actions';
import {NavLoginComponent} from './nav-login/nav-login.component';
import {LoginModalComponent} from './nav-login/login-modal/login-modal.component';
import {NavEpics} from './nav.epics';
import {NgReduxFormModule} from '@angular-redux/form';
import {FormsModule} from '@angular/forms';
import {UserModule} from '../user/user.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    NgReduxFormModule,
    UserModule
  ],
  declarations: [
    NavComponent,
    NavLoginComponent,
    LoginModalComponent
  ],
  exports: [
    NavComponent
  ],
  providers: [
    NavActions,
    NavEpics
  ],
  entryComponents: [
    LoginModalComponent
  ]
})
export class NavModule {
}
