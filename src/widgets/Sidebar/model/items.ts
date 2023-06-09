import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/home.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticlesIcon from 'shared/assets/icons/articles.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  fill?: string;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: MainIcon,
    text: 'Main',
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: 'About',
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: 'Profile',
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    Icon: ArticlesIcon,
    text: 'Articles',
    authOnly: true,
  },
];
