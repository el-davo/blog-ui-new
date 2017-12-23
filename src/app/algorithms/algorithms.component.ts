import {Component} from '@angular/core';
import {AlgorithmsActions} from './algorithms.actions';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {AlgorithmsState} from './algorithms.state';

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.css']
})
export class AlgorithmsComponent {

  @select('algorithms') algorithms$: Observable<AlgorithmsState>;

  constructor(private actions: AlgorithmsActions) {
  }

  @dispatch()
  start() {
    return this.actions.start();
  }
}
