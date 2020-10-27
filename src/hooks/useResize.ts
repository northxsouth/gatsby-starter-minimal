import * as React from 'react';

const useResize = (handleResize: () => void) => {
  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return true;
};

export { useResize };
