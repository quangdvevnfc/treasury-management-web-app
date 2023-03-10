import React from 'react';
import {toast, Notification} from 'components/ui';
import {ConfirmDialog} from 'components/shared';
import {useSelector, useDispatch} from 'react-redux';
import {toggleDeleteConfirmation} from '../store/stateSlice';
import {deleteCustomer, getCustomers} from '../store/dataSlice';

const CustomerDeleteConfirmation = () => {
  const dispatch = useDispatch();
  const dialogOpen = useSelector(
    (state) => state.customerList.state.deleteConfirmation
  );
  const selectedCustomer = useSelector(
    (state) => state.customerList.state.selectedCustomer
  );
  const tableData = useSelector((state) => state.customerList.data.tableData);

  const onDialogClose = () => {
    dispatch(toggleDeleteConfirmation(false));
  };

  const onDelete = async () => {
    dispatch(toggleDeleteConfirmation(false));
    const success = await deleteCustomer({id: selectedCustomer});

    if (success) {
      dispatch(getCustomers(tableData));
      toast.push(
        <Notification
          title={'Successfuly Deleted'}
          type="success"
          duration={2500}
        >
          Customer successfuly deleted
        </Notification>,
        {
          placement: 'top-center',
        }
      );
    }
  };

  return (
    <ConfirmDialog
      isOpen={dialogOpen}
      onClose={onDialogClose}
      onRequestClose={onDialogClose}
      type="danger"
      title="Delete customer"
      onCancel={onDialogClose}
      onConfirm={onDelete}
      confirmButtonColor="red-600"
    >
      <p>
        Are you sure you want to delete this customer? All record related to
        this customer will be deleted as well. This action cannot be undone.
      </p>
    </ConfirmDialog>
  );
};

export default CustomerDeleteConfirmation;
