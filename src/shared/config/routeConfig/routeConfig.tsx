import { ReactNode } from 'react';
import { MainPage } from '@/pages/MainPage';

export interface AppRouteProps {
  path: string,
  element: ReactNode,
  authOnly?: boolean,
}

export enum AppRoutes {
  MAIN = 'main',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
};
