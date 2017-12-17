import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MarkdownModule} from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule.forRoot()
  ],
  exports: [
    RouterModule,
    MarkdownModule
  ],
  declarations: []
})
export class CoreModule {
}
