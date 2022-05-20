import React from 'react';

export const authorizedRouteConfigs = [

  {
    path: '/dashboard',
    component: React.lazy(() => import('../pages/dashboard')),
    permittedRole: ["user", "admin"],
    // isAuthenticated: true
  },
  {
    path: '/Users',
    component: React.lazy(() => import('../pages/Users')),
    permittedRole: ["user", "admin"],
  },

  {
    path: '/Users/userDetails',
    component: React.lazy(() => import('../pages/Users/userDetails/Index')),
    permittedRole: ["user", "admin"],
  },
  {path: '/Categories',
  component: React.lazy(() => import('../pages/Categories')),
  // permittedRole: ["user", "admin"],
  },  
  {    path: '/JobManagement',
  component: React.lazy(() => import('../pages/JobManagement')),
  // permittedRole: ["user", "admin"],
},
  {
    path: '/Invoice',
    component: React.lazy(() => import('../pages/Invoice')),
    // permittedRole: ["user", "admin"],
  },
  {
    path: '/my-account',
    component: React.lazy(() => import('../pages/Account')),
    permittedRole: "test"
  },
];
