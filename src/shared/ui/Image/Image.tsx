import { memo, CSSProperties } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Image.module.scss';

interface ImageProps {
  className?: string,
  src?: string,
  alt?: string,
  rounded?: boolean,
  maxH?: boolean,
  maxW?: boolean,
  height?: string | number,
  width?: string | number,
  border?: string,
}

export const Image = memo((props: ImageProps) => {
  const {
    className,
    src,
    alt,
    rounded,
    maxH,
    maxW,
    height,
    width,
    border,
  } = props;

  const mods: Mods = {
    [cls.rounded]: rounded,
    [cls.maxW]: maxW,
    [cls.maxH]: maxH,
  };

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <img
      className={classNames(cls.Image, mods, [className])}
      style={styles}
      src={src}
      alt={alt}
    />
  );
});
