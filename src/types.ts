/** Pages for our navigation */
export type Page = 'select-theme' | 'game';

/** Possible game themese */
export type GameTheme = 'conference' | 'football-players' | 'marvel-movies';

/** Our bingo board */
export type TBingoBoard = TBingoCard[][];

/** Index of a card in rendered matrix that gets rendered on the board */
export type TBingoCardIndex = number;

/** Card text that gets rendered on the board */
export type TBingoCardText = string;

/** A card that is provided to a board */
export interface TBingoCard {
  idx: TBingoCardIndex;
  text: TBingoCardText;
}

/** List of cards that gets rendered on the board */
export type TBingoCards = TBingoCard[];

/** Card that gets flashed on the screen in every play */
export type TFlashCard = TBingoCardText;

/** List of cards that has been flashed on the screen so far */
export type TFlashCards = TFlashCard[];
