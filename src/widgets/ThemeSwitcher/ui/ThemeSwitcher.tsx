import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import MoonIcon from '@/shared/assets/icons/moon.svg';
import SunIcon from '@/shared/assets/icons/sun.svg';

interface ThemeSwitcherProps {
  className?: string,
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={cls.ThemeSwitcher}
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
      square
    >
      <Icon
        Svg={MoonIcon}
        className={classNames(cls.dark, { [cls.showDark]: theme === Theme.DARK }, [])}
        height={30}
        width={30}
        inverted
      />
      <Icon
        className={classNames(cls.light, { [cls.showLight]: theme === Theme.LIGHT }, [])}
        Svg={SunIcon}
        height={30}
        width={30}
        inverted
      />
    </Button>
  );
});
