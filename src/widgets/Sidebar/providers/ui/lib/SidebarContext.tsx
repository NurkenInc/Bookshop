import { createContext } from 'react';

export interface SidebarContextProps {
  collapsed?: boolean,
  setCollapsed?: (value: boolean) => void,
}

export const SidebarContext = createContext<SidebarContextProps>({});
