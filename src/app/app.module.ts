import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgReduxModule, NgRedux} from '@angular-redux/store';
import {createLogger} from 'redux-logger';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {rootReducer} from './root.reducer';
import {FormsModule} from '@angular/forms';
import {NgReduxRouterModule, NgReduxRouter} from '@angular-redux/router';
import {createEpicMiddleware, combineEpics} from 'redux-observable';
import * as reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import * as persistState from 'redux-localstorage'
import {NgReduxFormModule} from '@angular-redux/form';
import {environment} from '../environments/environment';
import {AppComponent} from './app.component';
import {routes} from './routes';
import {NavModule} from './nav/nav.module';
import {NavEpics} from './nav/nav.epics';
import {UserEpics} from './user/user.epics';
import {HttpClientModule} from '@angular/common/http';
import {LandingModule} from './landing/landing.module';
import {LandingEpics} from './landing/landing.epics';
import {ArticlesModule} from './articles/articles.module';
import {ViewArticleEpics} from './view-article/view-article.epics';
import {ViewArticleModule} from './view-article/view-article.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule.withServerTransition({appId: 'retro'}),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgReduxModule,
    NgReduxRouterModule,
    NgReduxFormModule,
    NavModule,
    LandingModule,
    ArticlesModule,
    ViewArticleModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

  constructor(private ngRedux: NgRedux<any>,
              ngReduxRouter: NgReduxRouter,
              private navEpics: NavEpics,
              private userEpics: UserEpics,
              private landingEpics: LandingEpics,
              private viewArticleEpics: ViewArticleEpics) {

    const epics = combineEpics(
      this.navEpics.showLoginModal,
      this.navEpics.hideAllModals,
      this.userEpics.login,
      this.userEpics.signup,
      this.landingEpics.fetchArticles,
      this.viewArticleEpics.fetchArticle
    );

    const middleware = [
      createEpicMiddleware(epics),
      createLogger(),
      reduxImmutableStateInvariant.default()
    ];

    const enhancers = [];

    if (environment.hmr) {
      enhancers.push(persistState());
    }

    ngRedux.configureStore(rootReducer, {}, middleware, enhancers);
    ngReduxRouter.initialize();
  }

}
