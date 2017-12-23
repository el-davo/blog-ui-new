export const algorithmState: AlgorithmsState = {
  isStarted: false,
  problemSize: 15,
  sleepTime: 100,
  problem: [],
  bubbleNext: []
};

export interface AlgorithmsState {
  isStarted: boolean;
  sleepTime: number;
  problemSize: number;
  problem: Problem[];
  bubbleNext: Problem[];
}

export interface Problem {
  name: number;
  value: number;
}
