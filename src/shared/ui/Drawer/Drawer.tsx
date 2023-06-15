import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ReactNode, memo } from 'react';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';

interface DrawerProps {
  className?: string,
  isOpen?: boolean,
  onClose: () => void,
  children: ReactNode,
  lazy?: boolean,
}

export const Drawer = memo((props: DrawerProps) => {
  const {
    className,
    isOpen,
    onClose,
    children,
    lazy,
  } = props;
  const { close, isClosing, isMounted } = useModal({
    animationDelay: 300,
    isOpen,
    onClose,
  });

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, [className])}>
        <Overlay onClick={close} />
        <div className={cls.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
});
