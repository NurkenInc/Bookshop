import {
  MutableRefObject, ReactNode, memo, useRef, UIEvent,
} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import { getScrollPositionByPath, UIActions } from '@/features/UI';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

interface PageProps {
  className?: string,
  children: ReactNode,
  onScrollEnd?: () => void,
}

export const PAGE_ID = 'PAGE_ID';

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) => getScrollPositionByPath(state, pathname));

  useInfiniteScroll({
    callback: onScrollEnd,
    triggerRef,
    wrapperRef,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(UIActions.setScrollPosition({
      position: e.currentTarget.scrollTop,
      path: pathname,
    }));
  }, 500);

  return (
    <main
      onScroll={onScroll}
      ref={wrapperRef}
      className={classNames(cls.Page, {}, [className])}
      id={PAGE_ID}
    >
      {children}
      {onScrollEnd ? <div ref={triggerRef} className={cls.trigger} /> : null}
    </main>
  );
});
