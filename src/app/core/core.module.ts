import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    RouterModule,
    LoadingComponent
  ],
  declarations: [
    LoadingComponent
  ],
  providers: []
})
export class CoreModule {

}
