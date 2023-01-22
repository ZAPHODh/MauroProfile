import { useState, useEffect } from 'react';

const useScreenWidth = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
      const handleResize = () => {
        setWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return width;
};

export default useScreenWidth;
