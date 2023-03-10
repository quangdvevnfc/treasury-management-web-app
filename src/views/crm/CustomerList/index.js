import React from 'react';
import reducer from './store';
import {injectReducer} from 'store/index';
import {AdaptableCard} from 'components/shared';
import CustomerTable from './components/CustomerTable';
import CustomerTableTools from './components/CustomerTableTools';

injectReducer('customerList', reducer);

const CustomerList = () => {
  return (
    <AdaptableCard className="h-full" bodyClass="h-full">
      <div className="lg:flex items-center justify-between mb-4">
        <h3 className="mb-4 lg:mb-0">Customers</h3>
        <CustomerTableTools />
      </div>
      <CustomerTable />
    </AdaptableCard>
  );
};

export default CustomerList;
