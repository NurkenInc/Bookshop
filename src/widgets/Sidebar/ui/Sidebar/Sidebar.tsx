import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { VStack } from '@/shared/ui/Stack';
import { useSidebar } from '../../providers/ui/lib/useSidebar';
import { SidebarHeader } from '../SidebarHeader/SidebarHeader';
import { SidebarItemsList } from '../SidebarItemsList/SidebarItemsList';

interface SidebarProps {
  className?: string,
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props;
  const { collapsed, onToggle } = useSidebar();

  return (
    <aside className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <VStack>
        <SidebarHeader />
        <SidebarItemsList />
      </VStack>
    </aside>
  );
});
