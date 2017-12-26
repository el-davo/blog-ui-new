import {Injectable} from '@angular/core';
import {Problem} from './algorithms.state';

@Injectable()
export class AlgorithmsActions {

  static START = 'algorithms/START';
  static STOP = 'algorithms/STOP';

  // Bubble
  static BUBBLE_TICK = 'algorithms/BUBBLE_TICK';

  // Quick Sort
  static QUICK_SORT_TICK_LEFT = 'algorithms/QUICK_SORT_TICK_LEFT';
  static QUICK_SORT_TICK_RIGHT = 'algorithms/QUICK_SORT_TICK_RIGHT';

  start = () => ({type: AlgorithmsActions.START});

  stop = () => ({type: AlgorithmsActions.STOP});

  bubbleTick = (problem: Problem[]) => ({type: AlgorithmsActions.BUBBLE_TICK, problem});

  quickSortTickLeft = (problem: Problem[]) => ({type: AlgorithmsActions.QUICK_SORT_TICK_LEFT, problem});

  quickSortTickRight = (problem: Problem[]) => ({type: AlgorithmsActions.QUICK_SORT_TICK_RIGHT, problem});
}
