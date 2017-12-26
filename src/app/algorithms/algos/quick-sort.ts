import {Problem} from '../algorithms.state';
import {Observer} from 'rxjs/Observer';
import {AlgorithmsActions} from '../algorithms.actions';
import {cloneDeep} from 'lodash';

const actions = new AlgorithmsActions();

export async function quickSort(problem: Problem[], observer: Observer<any>, sleepTime: number) {

  if (!problem || problem.length === 0) {
    return [];
  }

  const left = [];
  const right = [];
  const pivot = problem[0];

  for (let i = 1; i < problem.length; i++) {
    problem[i].value < pivot.value ? left.push(problem[i]) : right.push(problem[i]);

    observer.next(problem[i].value < pivot.value ?
      actions.quickSortTickLeft([...left]) : actions.quickSortTickRight([...right]));

    await sleep(sleepTime);
  }

  return [... await quickSort(left, observer, sleepTime), pivot, ... await quickSort(right, observer, sleepTime)];
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
