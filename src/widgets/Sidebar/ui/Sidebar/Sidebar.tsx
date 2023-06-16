import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { getSidebarItems } from '../../model/selectors/getSidebarItem/getSidebarItem';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { VStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button/Button';
import { useSidebar } from '../../providers/ui/lib/useSidebar';

interface SidebarProps {
  className?: string,
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props;
  const { collapsed, onToggle } = useSidebar();
  const sidebarItemsList = useSelector(getSidebarItems);

  const itemsList = useMemo(() => {
    return sidebarItemsList.map((item) => (
      <SidebarItem
        item={item}
        key={item.path}
        collapsed={collapsed}
      />
    ));
  }, [collapsed, sidebarItemsList]);

  return (
    <aside className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <VStack>
        {itemsList}
      </VStack>
    </aside>
  );
});
