import {Observer} from 'rxjs/Observer';
import {AlgorithmsActions} from '../algorithms.actions';
import {Problem} from '../algorithms.state';
import {cloneDeep} from 'lodash';

export async function bubbleSort(problem: Problem[], observer: Observer<any>, sleepTime: number) {

  for (let i = 0; i < problem.length - 1; i++) {

    observer.next({type: AlgorithmsActions.BUBBLE_TICK, problem: cloneDeep(problem)});

    await sleep(sleepTime);

    if (problem[i].value > problem[i + 1].value) {
      const temp = problem[i].value;
      problem[i].value = problem[i + 1].value;
      problem[i + 1].value = temp;

      bubbleSort(problem, observer, sleepTime);
    }
  }

  return problem;
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
