import { useEffect, useState } from 'react';
import { TBingoCardIndex } from '../types';

/** Typed set of card indexes (TBingoCardIndex) that corresponds to a winning position */
export const winnableSets: TBingoCardIndex[][] = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24],
  [0, 5, 10, 15, 20],
  [1, 6, 11, 16, 21],
  [2, 7, 17, 22],
  [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24],
  [0, 6, 18, 24],
  [4, 8, 16, 20],
];

/** Index of a winnable set represented by winnableSets above */
type WinnableSetIndex = number;

export const useWinningLogic = (selectedCards: TBingoCardIndex[]) => {
  const [setsWonInCurrentPlay, setSetsWonInCurrentPlay] = useState<
    WinnableSetIndex[]
  >([]);
  const [setsWonSoFar, setSetsWonSoFar] = useState<WinnableSetIndex[]>([]);
  useEffect(() => {
    const setIndexesWon = winnableSets.reduce<WinnableSetIndex[]>(
      (wonSetIndexes, set, setIndex) => {
        // Don't look into sets that user has already won
        if (setsWonSoFar.includes(setIndex)) {
          return wonSetIndexes;
        }

        const userSelectedAllCardsInCurrentSet = set.every((cardIndex) =>
          selectedCards.includes(cardIndex)
        );
        if (!userSelectedAllCardsInCurrentSet) {
          return wonSetIndexes;
        }

        return [...wonSetIndexes, setIndex];
      },
      []
    );

    // If user did not win any set index then don't look any further
    if (!setIndexesWon.length) {
      return;
    }

    setSetsWonInCurrentPlay(setIndexesWon);
    setSetsWonSoFar([...setsWonSoFar, ...setIndexesWon]);
  }, [selectedCards, setsWonSoFar]);

  return {
    setsWonInCurrentPlay,
    setsWonSoFar,
  };
};
