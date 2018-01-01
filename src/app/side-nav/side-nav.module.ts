import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideNavComponent} from './side-nav.component';
import {CoreModule} from '../core/core.module';
import {SharedModule} from '../shared/shared.module';
import {SideNavActions} from './side-nav.actions';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { HomeButtonComponent } from './home-button/home-button.component';
import {SideNavEpics} from './side-nav.epics';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ],
  declarations: [
    SideNavComponent,
    ListArticlesComponent,
    HomeButtonComponent
  ],
  exports: [
    SideNavComponent
  ],
  providers: [
    SideNavActions,
    SideNavEpics
  ]
})
export class SideNavModule {
}
