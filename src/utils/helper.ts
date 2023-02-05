import { TBingoCardText } from '../types';

export const getRandom = (max: number) => {
  return Math.floor(Math.random() * max);
};

export const generateCardShuffler = (cards: TBingoCardText[]) => {
  let availableCards = [...cards];
  return () => {
    if (!availableCards.length) {
      throw new Error('Nothing more to draw');
    }
    const idx = getRandom(availableCards.length);
    const randomText = availableCards[idx];
    availableCards.splice(idx, 1);
    return randomText;
  };
};
