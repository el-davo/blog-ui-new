import {NgModule} from '@angular/core';
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatInputModule,
  MatCardModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatFormFieldModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  exports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatFormFieldModule
  ]
})
export class MaterialModule {
}
