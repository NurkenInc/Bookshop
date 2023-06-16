import { useContext } from 'react';
import { SidebarContext } from './SidebarContext';

interface UseSidebarResult {
  collapsed: boolean,
  onToggle: () => void,
}

export function useSidebar(): UseSidebarResult {
  const { collapsed, setCollapsed } = useContext(SidebarContext);

  const onToggle = () => {
    setCollapsed?.(!collapsed);
  };

  return {
    collapsed: collapsed || false,
    onToggle,
  };
}
