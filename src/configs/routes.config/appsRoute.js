import React from 'react';
import {APP_PREFIX_PATH} from 'constants/route.constant';
import {ADMIN, USER} from 'constants/roles.constant';

const appsRoute = [
  {
    key: 'appsCrm.customerList',
    path: `${APP_PREFIX_PATH}/crm/customers`,
    component: React.lazy(() => import('views/crm/CustomerList')),
    authority: [ADMIN, USER],
  },
  {
    key: 'appsCrm.customerNew',
    path: `${APP_PREFIX_PATH}/crm/customers/new`,
    component: React.lazy(() => import('views/crm/CustomerNew')),
    authority: [ADMIN, USER],
    meta: {
      header: 'Add New Customer',
    },
  },
  {
    key: 'appsCrm.customerEdit',
    path: `${APP_PREFIX_PATH}/crm/customers/:id`,
    component: React.lazy(() => import('views/crm/CustomerEdit')),
    authority: [ADMIN, USER],
    meta: {
      header: 'Edit Customer',
    },
  },
];

export default appsRoute;
