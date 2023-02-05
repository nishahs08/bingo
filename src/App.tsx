import { useCallback, useState } from 'react';
import styles from './App.module.scss';
import { GameTheme, Page } from './types';
import GamePage from './components/GamePage';
import SelectThemePage from './components/SelectThemePage';

export default function App() {
  const [gameTheme, setGameTheme] = useState<GameTheme | 'none'>('none');
  const [page, setPage] = useState<Page>('select-theme');

  const onThemeSelected = useCallback((theme: GameTheme) => {
    setGameTheme(theme);
  }, []);

  const onStartGameClicked = useCallback(() => {
    if (gameTheme !== 'none') {
      setPage('game');
    }
  }, [gameTheme]);

  return (
    <div className={styles.app}>
      {page === 'select-theme' ? (
        <SelectThemePage
          gameTheme={gameTheme}
          onThemeSelected={onThemeSelected}
          onStartGameClicked={onStartGameClicked}
        />
      ) : page === 'game' && gameTheme !== 'none' ? (
        <GamePage theme={gameTheme} />
      ) : (
        <div>What are you doing here?</div>
      )}
    </div>
  );
}
