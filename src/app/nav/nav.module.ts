import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './nav.component';
import {NavLoginComponent} from './nav-login/nav-login.component';
import {LoginModalComponent} from './nav-login/login-modal/login-modal.component';
import {NavEpics} from './nav.epics';
import {FormsModule} from '@angular/forms';
import {UserModule} from '../user/user.module';
import {CoreModule} from '../core/core.module';
import {AdminOptionsComponent} from './admin-options/admin-options.component';
import {SideNavComponent} from './side-nav/side-nav.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatMenuModule,
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
    NavEpics
  ],
  entryComponents: [
    LoginModalComponent
  ]
})
export class NavModule {
}
