import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SidebarHeader.module.scss';

interface SidebarHeaderProps {
  className?: string,
}

export const SidebarHeader = memo((props: SidebarHeaderProps) => {
  const { className } = props;

  return (
  // eslint-disable-next-line
    <div className={classNames(cls.SidebarHeader, {}, [className])}>
      BookStore
    </div>
  );
});
