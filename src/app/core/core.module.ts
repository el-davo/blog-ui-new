import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {LoadingComponent} from './loading/loading.component';
import {environment} from '../../environments/environment';
import * as logRocket from 'logrocket';
import {isBrowser} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    RouterModule,
    LoadingComponent
  ],
  declarations: [
    LoadingComponent
  ],
  providers: []
})
export class CoreModule {

  constructor() {
    if (environment.production && isBrowser()) {
      logRocket.init('zlni7s/blog');
    }
  }
}
