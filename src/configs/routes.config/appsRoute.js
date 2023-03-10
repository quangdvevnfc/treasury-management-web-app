import React from 'react';
import {APP_PREFIX_PATH} from 'constants/route.constant';
import {ADMIN, USER} from 'constants/roles.constant';

const appsRoute = [
  {
    key: 'appsCrm.customers',
    path: `${APP_PREFIX_PATH}/crm/customers`,
    component: React.lazy(() => import('views/crm/CustomerList')),
    authority: [ADMIN, USER],
  },
];

export default appsRoute;
