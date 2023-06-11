import { MutableRefObject, useEffect, useRef } from 'react';

export interface UseInfiniteScrollProps {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>,
  wrapperRef: MutableRefObject<HTMLElement>,
}

export function useInfiniteScroll({ callback, triggerRef, wrapperRef }: UseInfiniteScrollProps) {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (callback) {
      const options = {
        root: wrapperRef.current,
        rootMargin: '0px',
        threshold: 1.0,
      };
      // fix error
      observer.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);
      observer.current.observe(triggerRef.current);
    }
    return () => {
      if (observer.current && triggerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.current.unobserve(triggerRef.current);
      }
    };
  }, [triggerRef, wrapperRef, callback]);
}
