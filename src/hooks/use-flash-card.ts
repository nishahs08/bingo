import { useEffect, useMemo, useState } from 'react';
import { TBingoCardText } from '../types';
import { getRandom } from '../utils/helper';

export const useFlashCard = (bingoCardTexts: TBingoCardText[]) => {
  const [flashedCards, setFlashedCards] = useState<TBingoCardText[]>([
    bingoCardTexts[0],
  ]);
  const availableFlashCards = useMemo(
    () => bingoCardTexts.filter((cardText) => !flashedCards.includes(cardText)),
    [bingoCardTexts, flashedCards]
  );

  useEffect(() => {
    if (!availableFlashCards.length) {
      return;
    }
    const timeout = setTimeout(() => {
      const randomIdx = getRandom(availableFlashCards.length);
      const randomFlashCard = availableFlashCards[randomIdx];
      setFlashedCards([...flashedCards, randomFlashCard]);
    }, 8_000);

    return () => {
      clearTimeout(timeout);
    };
  }, [flashedCards, availableFlashCards]);

  return {
    flashCard: flashedCards[flashedCards.length - 1],
    flashedCards,
  };
};
