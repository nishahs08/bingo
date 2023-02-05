import { useCallback, useState } from 'react';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';
import { TBingoCardIndex, TBingoCardText } from '../../types';
import { useWinningLogic } from '../../hooks/use-winning-logic';
import { useFlashCard } from '../../hooks/use-flash-card';
import BingoBoard from './BingoBoard';
import styles from './Game.module.scss';
import { useConfetti } from '../../hooks/use-confetti';

interface GameProps {
  bingoCardTexts: TBingoCardText[];
}

export default function Game({ bingoCardTexts }: GameProps) {
  const { width, height } = useWindowSize();
  const { flashCard, flashedCards } = useFlashCard(bingoCardTexts);

  const [selectedCards, setSelectedCards] = useState<TBingoCardIndex[]>([]);
  const { setsWonSoFar } = useWinningLogic(selectedCards);
  const showConfetti = useConfetti(setsWonSoFar);
  const onCardSelected = useCallback(
    (cardIdx: number) => () => {
      const totalSelectedCards = Array.from(
        new Set([...selectedCards, cardIdx])
      );
      setSelectedCards(totalSelectedCards);
    },
    [selectedCards]
  );

  return (
    <div className={styles.game}>
      {showConfetti && <Confetti width={width} height={height}></Confetti>}
      <div className={styles.flashCardContainer}>
        <p className={styles.flashCard}>{flashCard}</p>
      </div>
      <div className={styles.bingoContainer}>
        <BingoBoard
          flashedCards={flashedCards}
          bingoCardTexts={bingoCardTexts}
          selectedCards={selectedCards}
          onCardSelected={onCardSelected}
        />
      </div>
      <div className={styles.gameProgressContainer}>
        <p>Bingos so far: {setsWonSoFar.length}</p>
      </div>
    </div>
  );
}
