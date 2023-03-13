import React, {useCallback, useEffect} from 'react';
import {DoubleSidedImage, Loading} from 'components/shared';
import {Notification, toast} from 'components/ui';
import {useDispatch, useSelector} from 'react-redux';
import reducer from './store';
import {injectReducer} from 'store/index';
import {useNavigate, useParams} from 'react-router-dom';
import {deleteCustomer, getCustomer, updateCustomer} from './store/dataSlice';
import CustomerForm from 'views/crm/CustomerForm';
import isEmpty from 'lodash/isEmpty';

injectReducer('customerEdit', reducer);

const CustomerEdit = () => {
  const dispatch = useDispatch();

  const params = useParams();
  const navigate = useNavigate();

  const customerData = useSelector(
    (state) => state.customerEdit.data.customerData
  );
  const loading = useSelector((state) => state.customerEdit.data.loading);

  const fetchData = useCallback(
    (id) => {
      dispatch(getCustomer(id));
    },
    [dispatch]
  );

  const handleFormSubmit = async (values, setSubmitting) => {
    setSubmitting(true);
    const success = await updateCustomer(values);
    setSubmitting(false);
    if (success) {
      popNotification('updated');
    }
  };

  const handleDiscard = () => {
    navigate('/app/crm/customers');
  };

  const handleDelete = async (setDialogOpen) => {
    setDialogOpen(false);
    const success = await deleteCustomer({id: customerData.id});
    if (success) {
      popNotification('deleted');
    }
  };

  const popNotification = (keyword) => {
    toast.push(
      <Notification
        title={`Successfully ${keyword}`}
        type="success"
        duration={2500}
      >
        Customer successfully {keyword}
      </Notification>,
      {
        placement: 'top-center',
      }
    );
    navigate('/app/crm/customers');
  };

  useEffect(() => {
    fetchData(params.id);
  }, [fetchData, params.id]);

  return (
    <>
      <Loading loading={loading}>
        {!isEmpty(customerData) && (
          <>
            <CustomerForm
              type="edit"
              initialData={customerData}
              onFormSubmit={handleFormSubmit}
              onDiscard={handleDiscard}
              onDelete={handleDelete}
            />
          </>
        )}
      </Loading>
      {!loading && isEmpty(customerData) && (
        <div className="h-full flex flex-col items-center justify-center">
          <DoubleSidedImage
            src="/img/others/img-2.png"
            darkModeSrc="/img/others/img-2-dark.png"
            alt="No customer found!"
          />
          <h3 className="mt-8">No customer found!</h3>
        </div>
      )}
    </>
  );
};

export default CustomerEdit;
