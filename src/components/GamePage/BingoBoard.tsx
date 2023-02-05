import { useCallback, useMemo } from 'react';
import { TBingoBoard, TBingoCardText, TBingoCardIndex } from '../../types';
import BingoCard from './BingoCard';
import styles from './BingoBoard.module.scss';
import { generateCardShuffler } from '../../utils/helper';

const matrix5x5 = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24],
];

const bingoCardTextsToBoard = (
  bingoCardTexts: TBingoCardText[]
): TBingoBoard => {
  const drawCard = generateCardShuffler(bingoCardTexts);
  return matrix5x5.map((row) =>
    row.map((cardIndex) => ({
      idx: cardIndex,
      text: drawCard(),
    }))
  );
};

interface BingoBoardProps {
  bingoCardTexts: TBingoCardText[];
  selectedCards: TBingoCardIndex[];
  flashedCards: TBingoCardText[];
  onCardSelected: (cardIdx: TBingoCardIndex) => () => void;
}

const BingoBoard = ({
  bingoCardTexts,
  selectedCards,
  flashedCards,
  onCardSelected,
}: BingoBoardProps) => {
  const board = useMemo(
    () => bingoCardTextsToBoard(bingoCardTexts),
    [bingoCardTexts]
  );

  const isCardDisabled = useCallback(
    (cardIdx: TBingoCardIndex) => cardIdx === 12,
    []
  );

  return (
    <div className={styles.bingoBoard}>
      {board.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className={styles.bingoRow}>
            {row.map((card) => {
              return (
                <BingoCard
                  key={card.idx}
                  selectable={flashedCards.includes(card.text)}
                  selected={selectedCards.includes(card.idx)}
                  disabled={isCardDisabled(card.idx)}
                  onCardSelected={onCardSelected(card.idx)}>
                  {isCardDisabled(card.idx) ? '' : card.text}
                </BingoCard>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default BingoBoard;
