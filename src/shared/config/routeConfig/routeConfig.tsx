import { ReactNode } from 'react';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage/ui/NotFoundPage';
import ProfilePage from '@/pages/ProfilePage/ui/ProfilePage';
import { BooksPage } from '@/pages/BooksPage';
import { BookDetailsPage } from '@/pages/BookDetailsPage';

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
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.PROFILE]: '/profile/', // + id
  [AppRoutes.BOOK_DETAILS]: '/books/', // + id

  // should be last, special routes
  [AppRoutes.NOT_FOUND]: '/*',
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <BooksPage />,
  },
  [AppRoutes.PROFILE]: {
    path: `${RoutePath.profile}:id`,
    element: <ProfilePage />,
  },
  [AppRoutes.BOOK_DETAILS]: {
    path: `${RoutePath.book_details}:id`,
    element: <BookDetailsPage />,
  },

  // should be last, special routes
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
