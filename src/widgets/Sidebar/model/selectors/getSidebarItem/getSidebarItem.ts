import { createSelector } from '@reduxjs/toolkit';
import { SidebarItemType } from '../../types/types';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import HomeIcon from '@/shared/assets/icons/home.svg';

export const getSidebarItems = createSelector(
  () => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: RoutePath.main,
        Icon: HomeIcon,
        text: 'Main',
      },
    ];

    // if (userData) if user authorized push to array new routes for authorized users
    return sidebarItemsList;
  },
);
