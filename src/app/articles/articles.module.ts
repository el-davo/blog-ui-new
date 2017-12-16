import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticlesService} from './articles.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ArticlesService
  ]
})
export class ArticlesModule {
}
