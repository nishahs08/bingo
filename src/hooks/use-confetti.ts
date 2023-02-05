import { useEffect, useState } from 'react';
import { TBingoCardIndex } from '../types';

export const useConfetti = (setsWonSoFar: TBingoCardIndex[]) => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    let showTO: any;
    let clearTO: any;
    if (setsWonSoFar.length) {
      showTO = setTimeout(() => setShow(true));
      clearTO = setTimeout(() => setShow(false), 5000);
    }

    return () => {
      if (showTO) {
        clearTimeout(showTO);
      }
      if (clearTO) {
        clearTimeout(clearTO);
      }
    };
  }, [setsWonSoFar]);

  return show;
};
