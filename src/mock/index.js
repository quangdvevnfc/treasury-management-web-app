import {createServer} from 'miragejs';
import appConfig from 'configs/app.config';

import {signInUserData} from './data/authData';
import {userDetailData, usersData} from './data/usersData';
import {crmDashboardData, eventsData, mailData} from './data/crmData';

import {authFakeApi, crmFakeApi} from './fakeApi';

const {apiPrefix} = appConfig;

export default function mockServer({environment = 'test'}) {
  return createServer({
    environment,
    seeds(server) {
      server.db.loadData({
        signInUserData,
        usersData,
        userDetailData,
        eventsData,
        mailData,
        crmDashboardData,
      });
    },
    routes() {
      this.urlPrefix = '';
      this.namespace = '';
      this.passthrough((request) => {
        let isExternal = request.url.startsWith('http');
        return isExternal;
      });
      this.passthrough();

      authFakeApi(this, apiPrefix);
      crmFakeApi(this, apiPrefix);
    },
  });
}
