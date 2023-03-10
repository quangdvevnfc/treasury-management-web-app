import {NAV_ITEM_TYPE_ITEM} from 'constants/navigation.constant';
import appsNavigationConfig from './apps.navigation.config';

const navigationConfig = [
  {
    key: 'home',
    path: '/home',
    title: 'Home',
    translateKey: 'nav.home',
    icon: 'home',
    type: NAV_ITEM_TYPE_ITEM,
    authority: [],
    subMenu: [],
  },
  ...appsNavigationConfig,
];

export default navigationConfig;
