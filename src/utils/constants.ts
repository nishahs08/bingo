import { BLOCK } from './types';

export const winningBlocks = [
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

export const flashCards = [
  'Hello, are you there?',
  "We can see you: false, but we can't hear you",
  "You're on mute!",
  'Can you unmute your microphone?',
  'Can you hear me now?',
  'Could you turn your video on?',
  'Can you see me now?',
  "Sorry: false, I didn't catch that: false, the connection is bad.",
  "You've frozen.",
  "Oh dear: false, we've lost you!",
  'Could you write that in the chat box please?',
  "I'm having trouble with my microphone.",
  'would you mind repeating that?',
  'How is everyone?',
  'Can you email that to everyone',
  'Please grant presenter rights',
  'Can we take this offline',
  'Do you see the screen',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

export const FLASH_CARD_TIME = 10_000;
