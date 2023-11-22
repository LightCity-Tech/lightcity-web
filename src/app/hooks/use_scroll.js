import { useEffect, useState } from 'react';

export default function useScroll() {
  const [hasBackground, setHasBackground] = useState(false);
  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset === 0) {
        setHasBackground(false);
      } else {
        if (!hasBackground) {
          setHasBackground(true);
        }
      }
    };
    return () => (window.onscroll = null);
  }, [hasBackground]);
  return { hasBackground };
}
