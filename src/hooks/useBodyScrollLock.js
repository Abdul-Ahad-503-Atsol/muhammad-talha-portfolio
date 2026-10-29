import { useEffect } from 'react';

let lockCount = 0;

export default function useBodyScrollLock(locked = true) {
  useEffect(() => {
    if (!locked) return;
    lockCount += 1;
    document.body.style.overflow = 'hidden';
    return () => {
      lockCount = Math.max(0, lockCount - 1);
      if (lockCount === 0) document.body.style.overflow = '';
    };
  }, [locked]);
}
