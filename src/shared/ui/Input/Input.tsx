import {
  memo, useEffect, useCallback, InputHTMLAttributes, useRef, MutableRefObject, CSSProperties, ReactNode,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

export interface InputProps extends HTMLInputProps {
  className?: string,
  value?: string | number,
  type?: string,
  placeholder?: string,
  autofocus?: boolean,
  readonly?: boolean,
  onChange?: (value: string) => void,
  width?: string | number,
  height?: string | number,
  icon?: ReactNode,
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
    icon,
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

  const handleIconClick = useCallback(() => {
    ref.current.focus();
  }, []);

  return (
    <div className={cls.container}>
      <div className={cls.icon} onClick={handleIconClick}>
        {icon}
      </div>
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
    </div>
  );
});
