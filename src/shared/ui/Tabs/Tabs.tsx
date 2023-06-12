import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ReactNode, memo, useCallback } from 'react';
import cls from './Tabs.module.scss';
import { Card, CardTheme } from '../Card/Card';

export interface TabItem<T> {
  value: T,
  content: ReactNode,
}

interface TabsProps<T> {
  className?: string,
  tabs: TabItem<T>[],
  value: string,
  onTabClick: (tab: TabItem<T>) => void,
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
  const {
    className, tabs, onTabClick, value,
  } = props;
  const { t } = useTranslation();

  const clickHandle = useCallback((tab: TabItem<T>) => () => {
    onTabClick(tab);
  }, [onTabClick]);

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          className={cls.tab}
          key={tab.value}
          onClick={clickHandle(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};