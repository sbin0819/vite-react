import React from 'react';

function useSafeDispatch(dispatch: any) {
  const mounted = React.useRef(false);

  React.useLayoutEffect((): any => {
    mounted.current = true;
    return () => (mounted.current = false);
  }, []);

  return React.useCallback(
    (...args: any) => (mounted.current ? dispatch(...args) : void 0),
    [dispatch],
  );
}

export default useSafeDispatch;
