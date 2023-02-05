import { useEffect, useState } from 'react';

import { flashCards, FLASH_CARD_TIME } from './constants';
import { getRandom } from './helper';
import { GameState } from './types';

export function useBingoFlashCard({
  gameState,
  setGameState,
}: {
  gameState: GameState;
  setGameState: (state: GameState) => void;
}) {
  const [gameStartTimer, setGameStartTimer] = useState<number>(10);
  const [usedFlashCards, setUsedFlashCards] = useState<string[]>([]);
  const [availableFlashCards, setAvailableFlashCards] =
    useState<string[]>(flashCards);
  const [currentFlashCard, setCurrentFlashCard] = useState<string>('');

  useEffect(() => {
    let timeout: any = null;
    if (gameState === 'starting' || gameState === 'started') {
      timeout = setTimeout(() => {
        const idx = getRandom(availableFlashCards.length);
        const randomFlashCard = availableFlashCards[idx];

        if (currentFlashCard !== '') {
          setUsedFlashCards([...usedFlashCards, currentFlashCard]);
        }
        setCurrentFlashCard(randomFlashCard);
        setAvailableFlashCards(
          availableFlashCards.filter((card) => card !== randomFlashCard)
        );
      }, FLASH_CARD_TIME);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [availableFlashCards, usedFlashCards, currentFlashCard, gameState]);

  useEffect(() => {
    if (gameState === 'starting') {
      if (gameStartTimer !== 0) {
        setTimeout(() => {
          setGameStartTimer(gameStartTimer - 1);
        }, 1000);
      } else {
        setGameState('started');
      }
    }
  }, [gameState, gameStartTimer, setGameState]);

  return {
    usedFlashCards,
    availableFlashCards,
    currentFlashCard,
    gameStartTimer,
  };
}
