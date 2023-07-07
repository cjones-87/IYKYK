import { useEffect, useState } from 'react';
import debounce from '../utils/debounce';

const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize =
      dimensions.width < 768
        ? debounce(
            () =>
              setDimensions({
                height: window.innerHeight,
                width: window.innerWidth,
              }),
            100
          )
        : debounce(
            () =>
              setDimensions({
                height: window.innerHeight,
                width: window.innerWidth,
              }),
            0
          );

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [dimensions.height, dimensions.width]);

  return dimensions;
};

export default useWindowDimensions;
