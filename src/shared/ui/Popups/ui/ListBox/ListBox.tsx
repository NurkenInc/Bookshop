import { Fragment } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { DropdownDirection } from '@/shared/types/ui';
import { HStack } from '@/shared/ui/Stack';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ListBox.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { Icon } from '../../../Icon/Icon';
import CheckIcon from '../../../../assets/icons/check.svg';
import { mapDirectionClass } from '../../styles/const';

export interface ListBoxItem<T> {
  value: T,
  content: T,
  disabled?: boolean,
}

export enum ListBoxSize {
  S = 'size_s',
  M = 'size_m',
  SM = 'size_sm',
  L = 'size_l',
  XL = 'size_xl',
}

export interface ListBoxProps<T> {
  className?: string,
  items?: ListBoxItem<T>[],
  value?: T,
  defaultValue?: T,
  onChange?: (value: T) => void,
  readonly?: boolean,
  direction?: DropdownDirection,
  label?: string,
  size?: ListBoxSize,
  max?: boolean,
  triggerInvisible?: boolean,
}

export function ListBox <T extends string>(props: ListBoxProps<T>) {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = 'bottom left',
    label,
    max,
    triggerInvisible,
    size = ListBoxSize.S,
  } = props;

  const optionsClasses = [
    mapDirectionClass[direction],
    cls[size],
  ];

  const content = (
    <HListbox.Options className={classNames(cls.options, { [cls.max]: max }, optionsClasses)}>
      {items?.map((item) => (
        <HListbox.Option
          key={item?.value}
          value={item?.value}
          disabled={item.disabled}
          as={Fragment}
        >
          {({ active, selected }) => (
            <li
              className={
                classNames(cls.item, { [popupCls.active]: active, [popupCls.disabled]: item.disabled }, [cls[size]])
              }
            >
              {selected && <Icon Svg={CheckIcon} width={20} height={20} />}
              {item.content}
            </li>
          )}
        </HListbox.Option>
      ))}
    </HListbox.Options>
  );

  return (
    <HStack max={max} gap="4">
      {label && <span className={cls.label}>{label}</span>}
      <HListbox
        disabled={readonly}
        as="div"
        value={value}
        onChange={onChange}
        className={classNames(cls.ListBox, { [cls.max]: max }, [className, popupCls.popup])}
      >
        <HListbox.Button as="div" className={classNames(cls.trigger, { [cls.triggerInvisible]: triggerInvisible }, [])}>
          <Button disabled={readonly} theme={ButtonTheme.BACKGROUND_INVERTED} className={cls.triggerBtn}>
            {value || defaultValue}
          </Button>
        </HListbox.Button>
        {content}
      </HListbox>
    </HStack>
  );
}
