import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './nav.component';
import {NavActions} from './nav.actions';
import {NavLoginComponent} from './nav-login/nav-login.component';
import {LoginModalComponent} from './nav-login/login-modal/login-modal.component';
import {NavEpics} from './nav.epics';
import {FormsModule} from '@angular/forms';
import {UserModule} from '../user/user.module';
import {SharedModule} from '../shared/shared.module';
import {CoreModule} from '../core/core.module';
import {AdminOptionsComponent} from './admin-options/admin-options.component';
import {SideNavComponent} from './side-nav/side-nav.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    FormsModule,
    UserModule
  ],
  declarations: [
    NavComponent,
    NavLoginComponent,
    LoginModalComponent,
    AdminOptionsComponent,
    SideNavComponent
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
