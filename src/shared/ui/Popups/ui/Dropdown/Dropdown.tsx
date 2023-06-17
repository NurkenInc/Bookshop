import { ReactNode, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Dropdown.module.scss';
import { DropdownDirection, Size } from '../../../../types/ui';
import popupCls from '../../styles/popup.module.scss';
import { mapDirectionClass, mapSizeClass } from '../../styles/const';
import { Text, TextAlign } from '@/shared/ui/Text/Text';

interface DropdownItem {
  disabled?: boolean,
  content?: ReactNode,
  onClick?: () => void,
  href?: string,
}

interface DropdownProps {
  className?: string,
  items: DropdownItem[],
  trigger: ReactNode,
  direction?: DropdownDirection,
  size?: Size,
}

export const Dropdown = (props: DropdownProps) => {
  const {
    className,
    items,
    trigger,
    direction = 'bottom right',
    size = 'SM',
  } = props;

  const menuClasses = [
    mapDirectionClass[direction],
  ];

  const itemClasses = [
    mapSizeClass[size],
  ];

  return (
    <Menu as="div" className={classNames(cls.DropDown, {}, [className, popupCls.popup])}>
      <Menu.Button as="div" className={popupCls.trigger}>
        {trigger}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter={cls.enter}
        enterFrom={cls.enterFrom}
        enterTo={cls.enterTo}
        leave={cls.leave}
        leaveFrom={cls.leaveFrom}
        leaveTo={cls.leaveTo}
      >
        <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
          {
            items.map((item, index) => {
              const content = ({ active }: { active: boolean }) => (
                <button
                  type="button"
                  className={classNames(cls.item, { [popupCls.active]: active }, itemClasses)}
                  disabled={item.disabled}
                  onClick={item.onClick}
                >
                  {item.content}
                </button>
              );

              if (item.href) {
                return (
                  <Menu.Item
                    key={`dropdown-key-${index}`}
                    disabled={item.disabled}
                    as={AppLink}
                    to={item.href}
                  >
                    {item.content}
                  </Menu.Item>
                );
              }

              return (
                <Menu.Item
                  key={`dropdown-key-${index}`}
                  as={Fragment}
                  disabled={item.disabled}
                >
                  {content}
                </Menu.Item>
              );
            })
          }
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
