import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { routes } from './routes';
import { NavModule } from './nav/nav.module';
import { HttpClientModule } from '@angular/common/http';
import { IsLoggedInGuard } from './router/is-logged-in.guard';
import { LandingModule } from './landing/landing.module';
import { SideNavModule } from './side-nav/side-nav.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MatSidenavModule } from '@angular/material';
import { ActionReducer, StoreModule } from '@ngrx/store';
import { AppState, getRootReducer } from './root.reducer';
import { storeLogger } from 'ngrx-store-logger';
import { EffectsModule } from '@ngrx/effects';
import { NavEpics } from './nav/nav.epics';
import { UserEpics } from './user/user.epics';
import { LandingEpics } from './landing/landing.epics';
import { SideNavEpics } from './side-nav/side-nav.epics';
import { environment } from '../environments/environment';
import * as logRocket from 'logrocket';
import { isPlatformBrowser } from '@angular/common';

export function logger(reducer: ActionReducer<AppState>): any {
  return storeLogger()(reducer);
}

export const metaReducers = environment.production ? [] : [logger];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule.withServerTransition({appId: 'blog'}),
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserTransferStateModule,
    StoreModule.forRoot(getRootReducer(), {metaReducers}),
    EffectsModule.forRoot([NavEpics, UserEpics, LandingEpics, SideNavEpics]),
    MatSidenavModule,
    CoreModule,
    SharedModule,

    // Feature Modules
    NavModule,
    LandingModule,
    SideNavModule
  ],
  exports: [
    CoreModule
  ],
  providers: [
    IsLoggedInGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

  constructor(@Inject(PLATFORM_ID) platformId: string) {
    if (environment.production && isPlatformBrowser(platformId)) {
      logRocket.init('zlni7s/blog');
    }
  }

}
