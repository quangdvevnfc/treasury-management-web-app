import {APP_PREFIX_PATH} from 'constants/route.constant';
import {
  NAV_ITEM_TYPE_ITEM,
  NAV_ITEM_TYPE_TITLE,
} from 'constants/navigation.constant';
import {ADMIN, USER} from 'constants/roles.constant';

const appsNavigationConfig = [
  {
    key: 'apps',
    path: '',
    title: 'APPS',
    translateKey: 'nav.apps',
    icon: 'apps',
    type: NAV_ITEM_TYPE_TITLE,
    authority: [ADMIN, USER],
    subMenu: [
      {
        key: 'appsCrm.customers',
        path: `${APP_PREFIX_PATH}/crm/customers`,
        title: 'Customers',
        translateKey: 'nav.appsCrm.customers',
        icon: 'crm',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [ADMIN, USER],
        subMenu: [],
      },
    ],
  },
];

export default appsNavigationConfig;
