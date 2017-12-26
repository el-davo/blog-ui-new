import {AlgorithmsState, algorithmState} from './algorithms.state';
import {AlgorithmsActions} from './algorithms.actions';
import {unionBy} from 'lodash';

export const algorithmsReducer = (state: AlgorithmsState = algorithmState, action): AlgorithmsState => {
  switch (action.type) {
    case AlgorithmsActions.START:
      const problem = Array.from({length: 15}, () => Math.floor(Math.random() * 1000))
        .map((number) => ({id: Math.random().toString(36).substring(7), name: number, value: number}));

      return {...state, problem, quickSortNext: problem};
    case AlgorithmsActions.BUBBLE_TICK:
      return {...state, bubbleNext: action.problem};
    case AlgorithmsActions.QUICK_SORT_TICK_LEFT:
      return {...state, quickSortNext: unionBy([...action.problem], [...state.quickSortNext], 'id')};
    case AlgorithmsActions.QUICK_SORT_TICK_RIGHT:
      return {...state, quickSortNext: unionBy([...state.quickSortNext], [...action.problem], 'id')};
    default:
      return state;
  }
};
