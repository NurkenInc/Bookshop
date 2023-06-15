import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ReactNode, memo } from 'react';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';

interface DrawerProps {
  className?: string,
  isOpen?: boolean,
  onClose: () => void,
  children: ReactNode,
}

export const Drawer = memo((props: DrawerProps) => {
  const {
    className,
    isOpen,
    onClose,
    children,
  } = props;

  const mods: Mods = {
    [cls.opened]: isOpen,
  };

  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, [className])}>
        <Overlay onClick={onClose} />
        <div className={cls.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
});
