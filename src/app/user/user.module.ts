import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserService} from './user.service';
import {UserEpics} from './user.epics';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    UserService,
    UserEpics
  ]
})
export class UserModule {
}
