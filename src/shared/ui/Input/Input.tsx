import {
  memo, useEffect, InputHTMLAttributes, useRef, MutableRefObject, CSSProperties,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps {
  className?: string,
  value?: string | number,
  type?: string,
  placeholder?: string,
  autofocus?: boolean,
  readonly?: boolean,
  onChange?: (value: string) => void,
  width?: string | number,
  height?: string | number,
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    autoFocus,
    placeholder,
    readonly,
    width,
    height,
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const ref = useRef() as MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    if (autoFocus) {
      ref?.current?.focus();
    }
  }, [autoFocus]);

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  const styles: CSSProperties = {
    width,
    height,
  };

  return (
    <input
      ref={ref}
      className={classNames(cls.InputWrapper, mods, [className])}
      onChange={onChangeHandler}
      placeholder={placeholder}
      readOnly={readonly}
      value={value}
      type={type}
      style={styles}
      {...otherProps}
    />
  );
});
