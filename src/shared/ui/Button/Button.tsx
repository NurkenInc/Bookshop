import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND_OUTLINE = 'backgroundOutline',
  BACKGROUND_OUTLINE_INVERTED = 'backgroundOutlineInverted',
  ERROR = 'error',
  WARNING = 'warning',
}

export enum ButtonSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  size?: ButtonSize,
  theme?: ButtonTheme,
  square?: boolean,
  disabled?: boolean,
  max?: boolean,
  children?: ReactNode,
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    size = ButtonSize.M,
    theme = ButtonTheme.BACKGROUND,
    square,
    disabled,
    max,
    children,
    ...otherProps
  } = props;

  const additional = [
    className,
    cls[theme],
    cls[size],
  ];

  const mods: Mods = {
    [cls.square]: square,
    [cls.max]: max,
    [cls.disabled]: disabled,
  };

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, additional)}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
