import { useCallback, useMemo, useState } from 'react';

interface UseHoverBind {
  onMouseEnter: () => void,
  onMouseLeave: () => void,
}

type useHoverResult = [boolean, UseHoverBind];

export function useHover() {
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = useCallback(() => {
    setIsHover(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHover(false);
  }, []);

  return useMemo(
    () => [
      isHover,
      { onMouseEnter, onMouseLeave },
    ],
    [isHover, onMouseEnter, onMouseLeave],
  );
}
