import { ReactNode, useMemo, useState } from 'react';
import { SidebarContext } from './lib/SidebarContext';

interface SidebarProviderProps {
  children: ReactNode,
}

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [collapsed, setCollapsed] = useState(true);

  const defaultValue = useMemo(() => ({
    collapsed,
    setCollapsed,
  }), [collapsed]);

  return (
    <SidebarContext.Provider value={defaultValue}>
      {children}
    </SidebarContext.Provider>
  );
};
