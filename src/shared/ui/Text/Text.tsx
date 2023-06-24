import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextSize {
  S = 'size_s',
  SM = 'size_sm',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

export enum TextTheme {
  PRIMARY = 'font_primary',
  INVERTED = 'font_inverted',
  BACKGROUND = 'font_background',
  ERROR = 'font_error',
  WARNING = 'font_warning',
  GRAY = 'font_gray',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

interface TextProps {
  className?: string,
  size?: TextSize,
  theme?: TextTheme,
  align?: TextAlign,
  title?: string | number,
  text?: string | number,
}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

const mapSizeHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h5',
  [TextSize.SM]: 'h4',
  [TextSize.M]: 'h3',
  [TextSize.L]: 'h2',
  [TextSize.XL]: 'h1',
};

export const Text = memo((props: TextProps) => {
  const {
    className,
    size = TextSize.M,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    title,
    text,
  } = props;

  const classes = [
    className,
    cls[size],
    cls[theme],
    cls[align],
  ];

  const HeaderTag = mapSizeHeaderTag[size];

  return (
    <div className={classNames(cls.Text, {}, classes)}>
      {title && (
        <HeaderTag className={cls.title}>
          {title}
        </HeaderTag>
      )}
      {text && (
        <p className={cls.text}>
          {text}
        </p>
      )}
    </div>
  );
});
