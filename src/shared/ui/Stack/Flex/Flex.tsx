import { ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '32' | '64';

const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  end: cls.justifyEnd,
  center: cls.justifyCenter,
  between: cls.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  end: cls.alignEnd,
  center: cls.alignCenter,
};

const directionClasses: Record<FlexDirection, string> = {
  column: cls.directionColumn,
  row: cls.directionRow,
};

const gapClasses: Record<FlexGap, string> = {
  4: cls.gap_4,
  8: cls.gap_8,
  16: cls.gap_16,
  32: cls.gap_32,
  64: cls.gap_64,
};

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
  className?: string,
  children?: ReactNode,
  justify?: FlexJustify,
  align?: FlexAlign,
  direction?: FlexDirection,
  gap?: FlexGap,
  max?: boolean,
  maxH?: boolean,
  maxW?: boolean,
}

export const Flex = (props: FlexProps) => {
  const {
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap,
    max,
    maxH,
    maxW,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.max]: max,
    [cls.maxH]: maxH,
    [cls.maxW]: maxW,
  };

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];

  return (
    <div className={classNames(cls.Flex, mods, classes)} {...otherProps}>
      {children}
    </div>
  );
};
