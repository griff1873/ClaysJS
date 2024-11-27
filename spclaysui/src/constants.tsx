import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/home',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Admin',
    path: '/admin',
    icon: <Icon icon="ri:admin-line" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Presentations', path: '/admin/presentation' },
      { title: 'Shooters', path: '/admin' },
    ],
  },
  {
    title: 'Shooter',
    path: '/stations',
    icon: <Icon icon="game-icons:shotgun-rounds" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'New Reound', path: '/stations' },
      { title: 'Join Squad', path: '/stations' },
    ],
  },
  {
    title: 'Statistics',
    path: '/home',
    icon: <Icon icon="wpf:statistics" width="24" height="24" />,
  },
  {
    title: 'Profile',
    path: '/profile/form',
    icon: <Icon icon="lucide:user-round-pen" width="24" height="24" />,
  },
  
  {
    title: 'Help',
    path: '/help',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];