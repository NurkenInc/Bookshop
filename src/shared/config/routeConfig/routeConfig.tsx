import { ReactNode } from 'react';
import { NotFoundPage } from '@/pages/NotFoundPage/ui/NotFoundPage';
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
  BOOK_DETAILS = 'book_details',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.BOOK_DETAILS]: '/books/', // + id

  // should be last, special routes
  [AppRoutes.NOT_FOUND]: '/*',
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <BooksPage />,
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
