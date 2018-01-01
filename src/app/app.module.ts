import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgReduxModule} from '@angular-redux/store';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {routes} from './routes';
import {NavModule} from './nav/nav.module';
import {HttpClientModule} from '@angular/common/http';
import {LandingModule} from './landing/landing.module';
import {ArticlesModule} from './articles/articles.module';
import {ViewArticleModule} from './view-article/view-article.module';
import {AddArticleModule} from './add-article/add-article.module';
import {IsLoggedInGuard} from './router/is-logged-in.guard';
import {EditArticleModule} from './edit-article/edit-article.module';
import {SideNavModule} from './side-nav/side-nav.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule.withServerTransition({appId: 'blog'}),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserTransferStateModule,
    NgReduxModule,
    NavModule,
    LandingModule,
    ArticlesModule,
    ViewArticleModule,
    AddArticleModule,
    EditArticleModule,
    SideNavModule,
    SharedModule
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
