import { Fragment, ReactNode, useState } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import cls from './ListBox.module.scss';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack';
import { mapDirectionClass } from '../../styles/const';
import popupCls from '../../styles/popup.module.scss';

export interface ListBoxItem {
  value: string,
  content: ReactNode,
  disabled?: boolean,
}

export interface ListBoxProps {
  items?: ListBoxItem[],
  className?: string,
  value?: string,
  defaultValue?: string,
  onChange: <T extends string>(value: T) => void,
  readonly?: boolean,
  direction?: DropdownDirection,
  label?: string,
}

export function ListBox(props: ListBoxProps) {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = 'bottom left',
    label,
  } = props;

  const optionsClasses = [
    mapDirectionClass[direction],
  ];

  return (
    <HStack gap="4">
      {label && <span className={cls.label}>{label}</span>}
      <HListBox
        as="div"
        value={value}
        onChange={onChange}
        disabled={readonly}
        className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
      >
        <HListBox.Button disabled={readonly} className={cls.trigger}>
          <Button disabled={readonly}>
            {value || defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(cls.item, { [popupCls.active]: active, [popupCls.disabled]: item.disabled }, [])}
                >
                  {selected && '!!!'}
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
}
