import React from 'react';
import CustomerForm from 'views/crm/CustomerForm';
import {toast, Notification} from 'components/ui';
import {useNavigate} from 'react-router-dom';
import {apiCreateSalesCustomer} from 'services/SalesService';

const CustomerNew = () => {
  const navigate = useNavigate();

  const addCustomer = async (data) => {
    const response = await apiCreateSalesCustomer(data);
    return response.data;
  };

  const handleFormSubmit = async (values, setSubmitting) => {
    setSubmitting(true);
    const success = await addCustomer(values);
    setSubmitting(false);
    if (success) {
      toast.push(
        <Notification
          title={'Successfuly added'}
          type="success"
          duration={2500}
        >
          Customer successfuly added
        </Notification>,
        {
          placement: 'top-center',
        }
      );
      navigate('/app/crm/customer-list');
    }
  };

  const handleDiscard = () => {
    navigate('/app/crm/customer-list');
  };

  return (
    <>
      <CustomerForm
        type="new"
        onFormSubmit={handleFormSubmit}
        onDiscard={handleDiscard}
      />
    </>
  );
};

export default CustomerNew;
