import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MarkdownModule} from 'ngx-markdown';
import {LoadingComponent} from './loading/loading.component';

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
}
