import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Checkbox.module.scss';

interface CheckboxProps {
  className?: string,
  label?: string,
  checked?: boolean,
  onChange?: () => void,
}

export const Checkbox = memo((props: CheckboxProps) => {
  const {
    className,
    label,
    checked,
    onChange,
  } = props;
  const checkboxId = `checkbox${Date.now()}`;

  return (
    <div className={classNames(cls.CheckboxWrapper, {}, [className])}>
      <input
        type="checkbox"
        id={checkboxId}
        checked={checked}
        className={cls.checkbox}
        onChange={onChange}
      />
      <label className={cls.label} htmlFor={checkboxId}>
        {label}
      </label>
    </div>
  );
});
