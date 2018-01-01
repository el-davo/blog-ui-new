import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MarkdownModule} from 'ngx-markdown';
import * as reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import {LoadingComponent} from './loading/loading.component';
import {EditArticleEpics} from '../edit-article/edit-article.epics';
import {SideNavEpics} from '../side-nav/side-nav.epics';
import {AddArticleEpics} from '../add-article/add-article.epics';
import {ViewArticleEpics} from '../view-article/view-article.epics';
import {UserEpics} from '../user/user.epics';
import {NgRedux} from '@angular-redux/store';
import {LandingEpics} from '../landing/landing.epics';
import {NavEpics} from '../nav/nav.epics';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {environment} from '../../environments/environment';
import {rootReducer} from '../root.reducer';

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule.forRoot()
  ],
  exports: [
    RouterModule,
    MarkdownModule,
    LoadingComponent
  ],
  declarations: [
    LoadingComponent
  ]
})
export class CoreModule {

  constructor(private ngRedux: NgRedux<any>,
              private navEpics: NavEpics,
              private userEpics: UserEpics,
              private landingEpics: LandingEpics,
              private viewArticleEpics: ViewArticleEpics,
              private addArticleEpics: AddArticleEpics,
              private editArticleEpics: EditArticleEpics,
              private sideNavEpics: SideNavEpics) {

    const epics = combineEpics(
      ...this.navEpics.epics,
      ...this.userEpics.epics,
      ...this.landingEpics.epics,
      ...this.viewArticleEpics.epics,
      ...this.addArticleEpics.epics,
      ...this.editArticleEpics.epics,
      ...this.sideNavEpics.epics
    );

    const middleware = [
      createEpicMiddleware(epics)
    ];

    if (!environment.production) {
      middleware.push(reduxImmutableStateInvariant.default());
    }

    const enhancers = [];

    ngRedux.configureStore(rootReducer, {}, middleware, enhancers);
  }
}
