import { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string,
  theme?: AppLinkTheme,
  children?: ReactNode,
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    className,
    to,
    theme = AppLinkTheme.PRIMARY,
    children,
    ...otherProps
  } = props;

  return (
    <Link
      className={classNames(cls.AppLink, {}, [className])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
