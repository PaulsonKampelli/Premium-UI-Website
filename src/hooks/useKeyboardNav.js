import { useEffect } from 'react';

export const useKeyboardNav = (onNext, onPrev) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
          onNext();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          onPrev();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrev]);
};
