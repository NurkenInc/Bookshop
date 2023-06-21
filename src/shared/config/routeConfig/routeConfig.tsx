import { ReactNode } from 'react';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage/ui/NotFoundPage';
import ProfilePage from '@/pages/ProfilePage/ui/ProfilePage';
import { BooksPage } from '@/pages/BooksPage';
import { BookDetailsPage } from '@/pages/BookDetailsPage';
import { CounterPage } from '@/pages/TestPage/ui/CounterPage/CounterPage';

export interface AppRouteProps {
  path: string,
  element: ReactNode,
  authOnly?: boolean,
}

export enum AppRoutes {
  MAIN = 'main',
  NOT_FOUND = 'not_found',
  PROFILE = 'profile',
  BOOK_DETAILS = 'book_details',
  COUNTER = 'counter',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.PROFILE]: '/profile/', // + id
  [AppRoutes.BOOK_DETAILS]: '/books/', // + id
  [AppRoutes.COUNTER]: '/counter',

  // should be last, special routes
  [AppRoutes.NOT_FOUND]: '/*',
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <CounterPage />,
  },
  [AppRoutes.PROFILE]: {
    path: `${RoutePath.profile}:id`,
    element: <ProfilePage />,
  },
  [AppRoutes.BOOK_DETAILS]: {
    path: `${RoutePath.book_details}:id`,
    element: <BookDetailsPage />,
  },
  [AppRoutes.COUNTER]: {
    path: `${RoutePath.counter}`,
    element: <CounterPage />,
  },

  // should be last, special routes
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
