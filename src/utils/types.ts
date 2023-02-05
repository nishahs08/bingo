export type BLOCK = {
  index: number;
  text: string;
  status: number;
};

export type GameState = 'initial' | 'starting' | 'started' | 'finished';
