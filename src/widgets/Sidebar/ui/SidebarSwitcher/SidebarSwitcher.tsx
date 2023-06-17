import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SidebarSwitcher.module.scss';
import { useSidebar } from '../../providers/ui/lib/useSidebar';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import MenuIcon from '@/shared/assets/icons/menu.svg';

interface SidebarSwitcherProps {
  className?: string,
}

export const SidebarSwitcher = memo((props: SidebarSwitcherProps) => {
  const { className } = props;
  const { onToggle } = useSidebar();

  return (
    <Button
      className={classNames(cls.SidebarSwitcher, {}, [className])}
      onClick={onToggle}
      theme={ButtonTheme.CLEAR}
    >
      <Icon
        Svg={MenuIcon}
        inverted
        width={30}
        height={30}
      />
    </Button>
  );
});
