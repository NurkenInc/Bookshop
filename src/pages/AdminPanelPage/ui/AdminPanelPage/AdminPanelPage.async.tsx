import { lazy, FC } from 'react';
import { AdminPanelPageProps } from './AdminPanelPage';

export const AdminPanelPageAsync = lazy<FC<AdminPanelPageProps>>(() => import('./AdminPanelPage'));
