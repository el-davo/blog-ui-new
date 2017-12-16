import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: []
})
export class SharedModule {
}
