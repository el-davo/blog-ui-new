export const algorithmState: AlgorithmsState = {
  isStarted: false,
  problemSize: 15,
  sleepTime: 100,
  problem: [],
  bubbleNext: [],
  quickSortNext: []
};

export interface AlgorithmsState {
  isStarted: boolean;
  sleepTime: number;
  problemSize: number;
  problem: Problem[];
  bubbleNext: Problem[];
  quickSortNext: Problem[];
}

export interface Problem {
  id: string;
  name: number;
  value: number;
}
