import {AlgorithmsState, algorithmState} from './algorithms.state';
import {AlgorithmsActions} from './algorithms.actions';

export const algorithmsReducer = (state: AlgorithmsState = algorithmState, action): AlgorithmsState => {
  switch (action.type) {
    case AlgorithmsActions.START:
      return {
        ...state, problem: Array.from({length: 15}, () => Math.floor(Math.random() * 1000))
          .map((number) => ({name: number, value: number}))
      };
    case AlgorithmsActions.BUBBLE_TICK:
      return {...state, bubbleNext: action.problem};
    default:
      return state;
  }
};
