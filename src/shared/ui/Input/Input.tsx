import { classNames } from 'shared/lib/classNames/classNames';
import {
  InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string,
  value?: string,
  type?: string,
  autofocus?: boolean,
  onChange?: (value: string) => void,
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    autoFocus,
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const ref = useRef<HTMLInputElement>();

  useEffect(() => {
    if (autoFocus) {
      ref?.current.focus();
    }
  }, [autoFocus]);

  return (
    <div className={classNames(cls.InputWrapper)}>
      <input
        ref={ref}
        className={classNames(cls.input, {}, [className])}
        type={type}
        value={value}
        onChange={onChangeHandler}
        {...otherProps}
      />
    </div>
  );
});
