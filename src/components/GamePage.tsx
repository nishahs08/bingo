import { useMemo } from 'react';
import { TBingoCardText } from '../types';
import { GameTheme } from '../types';
import { Cards } from './GamePage/theme-cards';
import Game from './GamePage/Game';

interface GamePageProps {
  theme: GameTheme;
}

const themeToBingoCardTexts = (theme: GameTheme) => Cards[theme];

const GamePage = ({ theme }: GamePageProps) => {
  const bingoCardTexts: TBingoCardText[] = useMemo(
    () => themeToBingoCardTexts(theme),
    [theme]
  );
  return <Game bingoCardTexts={bingoCardTexts} />;
};

export default GamePage;
