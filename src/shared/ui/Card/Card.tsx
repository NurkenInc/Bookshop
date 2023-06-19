import { memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export enum CardTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
  OUTLINE = 'outline',
}

interface CardProps {
  className?: string,
  children?: ReactNode,
  max?: boolean,
  theme?: CardTheme,
}

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    max,
    theme = CardTheme.PRIMARY,
  } = props;

  const mods: Mods = {
    [cls.max]: max,
  };

  return (
    <div className={classNames(cls.Card, mods, [className, cls[theme]])}>
      {children}
    </div>
  );
});
