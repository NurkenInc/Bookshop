import { ReactNode } from 'react';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage/ui/NotFoundPage';

export interface AppRouteProps {
  path: string,
  element: ReactNode,
  authOnly?: boolean,
}

export enum AppRoutes {
  MAIN = 'main',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',

  // should be last, special routes
  [AppRoutes.NOT_FOUND]: '/*',
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },

  // should be last, special routes
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
