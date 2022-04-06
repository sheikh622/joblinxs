import React from 'react';

export const authorizedRouteConfigs = [
 
  {
    path: '/dashboard',
    component: React.lazy(() => import('../pages/dashboard')),
    permittedRole: "Dashboard"
  },
 
  // {
  //   path: '/chatManagement',
  //   component: React.lazy(() => import('../pages/chatManagement')),
  // },
  
  // {
  //   path: '/battles',
  //   component: React.lazy(() => import('../pages/battles')),
  // },
  // {
  //   path: '/players',
  //   component: React.lazy(() => import('../pages/users')),
  // },
  {
    path: '/my-account',
    component: React.lazy(() => import('../pages/Account')),
    permittedRole: "Dashboard"
  },
];
