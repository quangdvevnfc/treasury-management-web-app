import React, {forwardRef, useState} from 'react';
import {Button, FormContainer, hooks} from 'components/ui';
import {ConfirmDialog, StickyFooter} from 'components/shared';
import {Form, Formik} from 'formik';
import cloneDeep from 'lodash/cloneDeep';
import {HiOutlineTrash} from 'react-icons/hi';
import {AiOutlineSave} from 'react-icons/ai';
import * as Yup from 'yup';
import BasicInformationFields from './BasicInformationFields';
import ClassificationFields from './ClassificationFields';

const {useUniqueId} = hooks;

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Customer Name Required'),
  price: Yup.number().required('Price Required'),
  stock: Yup.number().required('SKU Required'),
  category: Yup.string().required('Category Required'),
});

const DeleteCustomerButton = ({onDelete}) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const onConfirmDialogOpen = () => {
    setDialogOpen(true);
  };

  const onConfirmDialogClose = () => {
    setDialogOpen(false);
  };

  const handleConfirm = () => {
    onDelete?.(setDialogOpen);
  };

  return (
    <>
      <Button
        className="text-red-600"
        variant="plain"
        size="sm"
        icon={<HiOutlineTrash />}
        type="button"
        onClick={onConfirmDialogOpen}
      >
        Delete
      </Button>
      <ConfirmDialog
        isOpen={dialogOpen}
        onClose={onConfirmDialogClose}
        onRequestClose={onConfirmDialogClose}
        type="danger"
        title="Delete customer"
        onCancel={onConfirmDialogClose}
        onConfirm={handleConfirm}
        confirmButtonColor="red-600"
      >
        <p>
          Are you sure you want to delete this customer? All record related to
          this customer will be deleted as well. This action cannot be undone.
        </p>
      </ConfirmDialog>
    </>
  );
};

const CustomerForm = forwardRef((props, ref) => {
  const {type, initialData, onFormSubmit, onDiscard, onDelete} = props;

  const newId = useUniqueId('customer-');

  return (
    <>
      <Formik
        innerRef={ref}
        initialValues={{
          ...initialData,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, {setSubmitting}) => {
          const formData = cloneDeep(values);
          formData.tags = formData.tags.map((tag) => tag.value);
          if (type === 'new') {
            formData.id = newId;
            if (formData.imgList.length > 0) {
              formData.img = formData.imgList[0].img;
            }
          }
          onFormSubmit?.(formData, setSubmitting);
        }}
      >
        {({values, touched, errors, isSubmitting}) => (
          <Form>
            <FormContainer>
              <BasicInformationFields
                touched={touched}
                errors={errors}
                values={values}
              />
              <ClassificationFields
                touched={touched}
                errors={errors}
                values={values}
              />
              <StickyFooter
                className="-mx-8 px-8 flex items-center justify-between py-4"
                stickyClass="border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              >
                <div>
                  {type === 'edit' && (
                    <DeleteCustomerButton onDelete={onDelete} />
                  )}
                </div>
                <div className="md:flex items-center">
                  <Button
                    size="sm"
                    className="ltr:mr-3 rtl:ml-3"
                    onClick={() => onDiscard?.()}
                    type="button"
                  >
                    Discard
                  </Button>
                  <Button
                    size="sm"
                    variant="solid"
                    loading={isSubmitting}
                    icon={<AiOutlineSave />}
                    type="submit"
                  >
                    Save
                  </Button>
                </div>
              </StickyFooter>
            </FormContainer>
          </Form>
        )}
      </Formik>
    </>
  );
});

CustomerForm.defaultProps = {
  type: 'edit',
  initialData: {
    id: '',
    code: '',
    // Basic Information
    name: '',
    abbreviatedName: '',
    avatar: '',
    address: {
      address: '',
      ward: '',
      district: '',
      city: '',
      country: '',
    },
    type: '',
    foundedDate: '',
    documentType: '',
    documentNumber: '',
    issuedDate: '',
    issuedPlace: '',
    companyTaxCode: '',
    phoneNumber: '',
    representative: {
      fullName: '',
      citizenIdentification: '',
      position: '',
    },
    authorizedCapital: '',
    currency: '',
    // Classify
    sector: '',
    group: '',
    businessType: '',
    level1BusinessGroup: '',
    level4BusinessGroup: '',
    institutionalUnitLevel3: '',
    // Profile Information
    profileType: '',
    status: '',
    createdDate: '',
  },
};

export default CustomerForm;
