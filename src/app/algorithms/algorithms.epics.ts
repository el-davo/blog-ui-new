import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import {Injectable} from '@angular/core';
import {AlgorithmsActions} from './algorithms.actions';
import {Observable} from 'rxjs/Observable';
import {bubbleSort} from './algos/bubble-sort';
import {cloneDeep} from 'lodash';
import {quickSort} from './algos/quick-sort';

@Injectable()
export class AlgorithmsEpics {
  constructor(private algorithmsActions: AlgorithmsActions) {
  }

  startBubbleSort = (action$, store) => {
    return action$.ofType(AlgorithmsActions.START)
      .mergeMap(() => {

        const {problem} = store.getState().algorithms;

        return new Observable(observer => {
          bubbleSort(cloneDeep(problem), observer, 500);
        });
      });
  };

  startQuickSort = (action$, store) => {
    return action$.ofType(AlgorithmsActions.START)
      .mergeMap(() => {

        const {problem} = store.getState().algorithms;

        return new Observable(observer => {
          quickSort(cloneDeep(problem), observer, 100);
        });
      });
  };

}
