import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgReduxModule} from '@angular-redux/store';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {routes} from './routes';
import {NavModule} from './nav/nav.module';
import {HttpClientModule} from '@angular/common/http';
import {IsLoggedInGuard} from './router/is-logged-in.guard';
import {LandingModule} from './landing/landing.module';
import {SideNavModule} from './side-nav/side-nav.module';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {MatSidenavModule} from '@angular/material';

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
    NgReduxModule,
    MatSidenavModule,
    CoreModule,
    SharedModule,
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

}
