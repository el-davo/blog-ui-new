import {NgModule} from '@angular/core';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {CommonModule} from '@angular/common';
import {AlgorithmsComponent} from './algorithms.component';
import {AlgorithmsActions} from './algorithms.actions';
import {AlgorithmsEpics} from './algorithms.epics';
import {ChartComponent} from './chart/chart.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    SharedModule
  ],
  declarations: [
    AlgorithmsComponent,
    ChartComponent
  ],
  providers: [
    AlgorithmsActions,
    AlgorithmsEpics
  ]
})
export class AlgorithmsModule {
}
