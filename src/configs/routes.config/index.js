import React from 'react';
import authRoute from './authRoute';
import appsRoute from './appsRoute';

export const publicRoutes = [...authRoute];

export const protectedRoutes = [
  {
    key: 'home',
    path: '/home',
    component: React.lazy(() => import('views/Home')),
    authority: [],
  },
  ...appsRoute,
];
