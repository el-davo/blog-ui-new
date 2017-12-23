import {Injectable} from '@angular/core';

@Injectable()
export class AlgorithmsActions {

  static START = 'algorithms/START';
  static STOP = 'algorithms/STOP';

  // Bubble
  static BUBBLE_TICK = 'algorithms/BUBBLE_TICK';

  start = () => ({type: AlgorithmsActions.START});

  stop = () => ({type: AlgorithmsActions.STOP});

  bubbleTick = (problem: number[]) => ({type: AlgorithmsActions.BUBBLE_TICK, problem});
}
