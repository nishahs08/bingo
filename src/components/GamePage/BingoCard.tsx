import styles from './BingoCard.module.scss';
import { useCallback } from 'react';
import classNames from 'classnames';

interface BingoCardProps {
  /** Wether this card can even be selected or not */
  selectable: boolean;

  /** Wether this card is selected or not */
  selected: boolean;

  /** Wether this card is disabled or not */
  disabled: boolean;

  /** Text to render in this card */
  children: string;

  /** What should happen when this card is selected */
  onCardSelected: () => void;
}

const BingoCard = ({
  selectable,
  selected,
  disabled,
  children,
  onCardSelected,
}: BingoCardProps) => {
  const onBoxClick = useCallback(() => {
    if (!disabled && !selected && selectable) {
      onCardSelected();
    }
  }, [disabled, selected, onCardSelected]);

  return (
    <div
      onClick={onBoxClick}
      className={classNames(styles.bingoCard, {
        [styles.selected]: selected,
        [styles.disabled]: disabled,
        [styles.notSelectable]: !selectable,
      })}>
      <p className={styles.cardText}>{children}</p>
    </div>
  );
};

export default BingoCard;
