import { classNames } from 'shared/lib/classNames/classNames';
import {
  ReactNode, memo, useCallback, useEffect,
} from 'react';
import { useAnimationLibs } from 'shared/lib/components';
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

const height = window.innerHeight - 100;

export const DrawerContent = memo((props: DrawerProps) => {
  const { Spring, Gesture } = useAnimationLibs();
  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));
  const {
    className,
    isOpen,
    onClose,
    children,
    lazy,
  } = props;

  const openDrawer = useCallback(() => {
    api.start({ immediate: false, y: 0 });
  }, [api]);

  useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [openDrawer, isOpen]);

  const close = (velocity: number = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose,
    });
  };

  const bind = Gesture.useDrag(
    ({
      last, velocity: [, vy], direction: [, dy], movement: [, my], cancel,
    }) => {
      if (my < -70) cancel();

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close();
        } else {
          openDrawer();
        }
      } else {
        api.start({ y: my, immediate: true });
      }
    },
    {
      from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true,
    },
  );

  if (!isOpen) {
    return null;
  }

  const display = y.to((py) => (py < height ? 'block' : 'none'));

  return (
    <Portal>
      <div className={classNames(cls.Drawer, {}, [className])}>
        <Overlay onClick={close} />
        <Spring.a.div
          className={cls.sheet}
          style={{
            display,
            bottom: `calc(-100vh + ${height - 100}px)`,
            y,
          }}
          {...bind()}
        >
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  );
});

export const Drawer = memo((props: DrawerProps) => {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) {
    return null;
  }

  return <DrawerContent {...props} />;
});
