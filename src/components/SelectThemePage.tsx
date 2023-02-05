import { useCallback } from 'react';
import { GameTheme } from '../types';
import styles from './SelectThemePage.module.scss';

interface SelectThemePageProps {
  gameTheme: GameTheme | 'none';
  onStartGameClicked: () => void;
  onThemeSelected: (theme: GameTheme) => void;
}

const SelectThemePage = ({
  gameTheme,
  onThemeSelected,
  onStartGameClicked,
}: SelectThemePageProps) => {
  const onSelectChanged = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      onThemeSelected(event.target.value as GameTheme);
    },
    [onThemeSelected]
  );

  return (
    <div className={styles.selectTheme}>
      <div className={styles.greetings}>
        <h1 className={styles.big}>Hola Bingo'er!</h1>
        <p>Let's get you started with a theme first.</p>
      </div>
      <div className={styles.themeSelection}>
        <select value={gameTheme} onChange={onSelectChanged}>
          <option value='none'>Select a theme</option>
          <option value='conference'>Conference hiccups</option>
          <option value='football-players'>Football nerds</option>
          <option value='marvel-movies'>Marvel mania</option>
        </select>
      </div>
      <div className={styles.actions}>
        <button disabled={gameTheme === 'none'} onClick={onStartGameClicked}>
          Start Game
        </button>
      </div>
    </div>
  );
};

export default SelectThemePage;
