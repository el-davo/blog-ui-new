import {Inject, NgModule, PLATFORM_ID} from '@angular/core';
import {CommonModule, isPlatformBrowser} from '@angular/common';
import {RouterModule} from '@angular/router';
import {LoadingComponent} from './loading/loading.component';
import {environment} from '../../environments/environment';
import * as logRocket from 'logrocket';

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

  constructor(@Inject(PLATFORM_ID) platformId: string) {
    if (environment.production && isPlatformBrowser(platformId)) {
      logRocket.init('zlni7s/blog');
    }
  }
}
