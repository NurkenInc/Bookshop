import { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  SECONDARY = 'secondary',
  RED = 'red',
}

export enum AppLinkSize {
  S = 'size_s',
  M = 'size_m',
  SM = 'size_sm',
  L = 'size_l',
  XL = 'size_xl',
  NONE = 'size_none',
}

interface AppLinkProps extends LinkProps {
  className?: string,
  theme?: AppLinkTheme,
  children?: ReactNode,
  size?: AppLinkSize
  max?: boolean,
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    className,
    to,
    theme = AppLinkTheme.PRIMARY,
    size = AppLinkSize.NONE,
    children,
    max,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.max]: max,
  };

  return (
    <Link
      className={classNames(cls.AppLink, mods, [className, cls[size]])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
