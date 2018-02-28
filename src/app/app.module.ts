import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
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
import {ActionReducer, StoreModule} from '@ngrx/store';
import {AppState, getRootReducer} from './root.reducer';
import {storeLogger} from 'ngrx-store-logger';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {NavEpics} from './nav/nav.epics';
import {UserEpics} from './user/user.epics';
import {LandingEpics} from './landing/landing.epics';
import {ViewArticleEpics} from './view-article/view-article.epics';
import {AddArticleEpics} from './add-article/add-article.epics';
import {EditArticleEpics} from './edit-article/edit-article.epics';
import {SideNavEpics} from './side-nav/side-nav.epics';
import {ViewArticleActions} from './view-article/view-article.actions';
import {AddArticleActions} from './add-article/add-article.actions';
import {EditArticleActions} from './edit-article/edit-article.actions';

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
    EffectsModule.forRoot([NavEpics, UserEpics, LandingEpics, ViewArticleEpics, AddArticleEpics, EditArticleEpics, SideNavEpics]),
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
    IsLoggedInGuard,

    // Needed for effects
    ViewArticleActions,
    AddArticleEpics,
    AddArticleActions,
    EditArticleEpics,
    EditArticleActions,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}
