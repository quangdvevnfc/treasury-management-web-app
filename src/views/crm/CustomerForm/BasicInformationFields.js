import React from 'react';
import {AdaptableCard} from 'components/shared';
import {DatePicker, FormItem, Input, Select} from 'components/ui';
import {Field} from 'formik';
import {useTranslation} from 'react-i18next';

export const countries = [
  {label: 'Vietnam', value: 'Vietnam'},
  {label: 'United States', value: 'United States'},
];

export const cities = [
  {label: 'Ha Noi', value: 'Ha Noi'},
  {label: 'Bac Giang', value: 'Bac Giang'},
];

export const districts = [
  {label: 'Lang Giang', value: 'Lang Giang'},
  {label: 'Yen Dung', value: 'Yen Dung'},
];

export const wards = [
  {label: 'Tan Thanh', value: 'Tan Thanh'},
  {label: 'My Thai', value: 'My Thai'},
];

export const groups = [
  {label: 'Customer group 1', value: 'Customer group 1'},
  {label: 'Customer group 2', value: 'Customer group 2'},
];

export const types = [
  {label: 'Customer type 1', value: 'Customer type 1'},
  {label: 'Customer type 2', value: 'Customer type 2'},
];

export const documentTypes = [
  {label: 'Document type 1', value: 'Document type 1'},
  {label: 'Document type 2', value: 'Document type 2'},
];

export const currencies = [
  {label: 'VND', value: 'VND'},
  {label: 'USD', value: 'USD'},
];

const BasicInformationFields = (props) => {
  const {values, touched, errors} = props;

  const {t} = useTranslation();

  return (
    <AdaptableCard className="mb-4" divider>
      <h5 className="mb-6">Basic Information</h5>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1">
          <FormItem
            label={t('views.appsCrm.customerForm.form.name')}
            invalid={errors.name && touched.name}
            errorMessage={errors.name}
          >
            <Field
              type="text"
              autoComplete="off"
              name="name"
              placeholder={t('views.appsCrm.customerForm.form.name')}
              component={Input}
            />
          </FormItem>
        </div>
        <div className="col-span-1">
          <FormItem
            label={t('views.appsCrm.customerForm.form.abbreviatedName')}
            invalid={errors.abbreviatedName && touched.abbreviatedName}
            errorMessage={errors.abbreviatedName}
          >
            <Field
              type="text"
              autoComplete="off"
              name="abbreviatedName"
              placeholder={t('views.appsCrm.customerForm.form.abbreviatedName')}
              component={Input}
            />
          </FormItem>
        </div>
        <div className="col-span-1">
          <FormItem
            label={t('views.appsCrm.customerForm.form.address.country')}
            invalid={errors.address?.country && touched.address?.country}
            errorMessage={errors.address?.country}
          >
            <Field name="address.country">
              {({field, form}) => (
                <Select
                  field={field}
                  form={form}
                  options={countries}
                  value={countries.filter(
                    (country) => country.value === values.address?.country
                  )}
                  onChange={(option) =>
                    form.setFieldValue(field.name, option.value)
                  }
                />
              )}
            </Field>
          </FormItem>
        </div>
        <div className="col-span-1">
          <FormItem
            label={t('views.appsCrm.customerForm.form.address.city')}
            invalid={errors.address?.city && touched.address?.city}
            errorMessage={errors.address?.city}
          >
            <Field name="address.city">
              {({field, form}) => (
                <Select
                  field={field}
                  form={form}
                  options={cities}
                  value={cities.filter(
                    (city) => city.value === values.address?.city
                  )}
                  onChange={(option) =>
                    form.setFieldValue(field.name, option.value)
                  }
                />
              )}
            </Field>
          </FormItem>
        </div>
        <div className="col-span-1">
          <FormItem
            label={t('views.appsCrm.customerForm.form.address.district')}
            invalid={errors.address?.district && touched.address?.district}
            errorMessage={errors.address?.district}
          >
            <Field name="address.district">
              {({field, form}) => (
                <Select
                  field={field}
                  form={form}
                  options={districts}
                  value={districts.filter(
                    (district) => district.value === values.address?.district
                  )}
                  onChange={(option) =>
                    form.setFieldValue(field.name, option.value)
                  }
                />
              )}
            </Field>
          </FormItem>
        </div>
        <div className="col-span-1">
          <FormItem
            label={t('views.appsCrm.customerForm.form.address.ward')}
            invalid={errors.address?.ward && touched.address?.ward}
            errorMessage={errors.address?.ward}
          >
            <Field name="address.ward">
              {({field, form}) => (
                <Select
                  field={field}
                  form={form}
                  options={wards}
                  value={wards.filter(
                    (ward) => ward.value === values.address?.ward
                  )}
                  onChange={(option) =>
                    form.setFieldValue(field.name, option.value)
                  }
                />
              )}
            </Field>
          </FormItem>
        </div>
        <div className="col-span-1">
          <FormItem
            label={t('views.appsCrm.customerForm.form.address.address')}
            invalid={errors.address?.address && touched.address?.address}
            errorMessage={errors.address?.address}
          >
            <Field
              type="text"
              autoComplete="off"
              name="address.address"
              placeholder={t('views.appsCrm.customerForm.form.address.address')}
              component={Input}
            />
          </FormItem>
        </div>

        <div className="col-span-1">
          <FormItem
            label={t('views.appsCrm.customerForm.form.type')}
            invalid={errors.type && touched.type}
            errorMessage={errors.type}
          >
            <Field name="type">
              {({field, form}) => (
                <Select
                  field={field}
                  form={form}
                  options={types}
                  value={types.filter((type) => type.value === values.type)}
                  onChange={(option) =>
                    form.setFieldValue(field.name, option.value)
                  }
                />
              )}
            </Field>
          </FormItem>
        </div>
        <div className="col-span-1">
          <FormItem
            asterisk
            label={t('views.appsCrm.customerForm.form.foundedDate')}
            invalid={errors.foundedDate && touched.foundedDate}
            errorMessage={errors.foundedDate}
          >
            <Field name="foundedDate">
              {({field, form}) => (
                <DatePicker
                  placeholder={t('views.appsCrm.customerForm.form.foundedDate')}
                  field={field}
                  form={form}
                  value={field.value}
                  onChange={(date) => {
                    form.setFieldValue(field.foundedDate, date);
                  }}
                />
              )}
            </Field>
          </FormItem>
        </div>
        <div className="col-span-1">
          <FormItem
            label={t('views.appsCrm.customerForm.form.documentType')}
            invalid={errors.documentType && touched.documentType}
            errorMessage={errors.documentType}
          >
            <Field name="documentType">
              {({field, form}) => (
                <Select
                  field={field}
                  form={form}
                  options={documentTypes}
                  value={documentTypes.filter(
                    (documentType) => documentType.value === values.documentType
                  )}
                  onChange={(option) =>
                    form.setFieldValue(field.name, option.value)
                  }
                />
              )}
            </Field>
          </FormItem>
        </div>
        <div className="col-span-1">
          <FormItem
            label={t('views.appsCrm.customerForm.form.documentNumber')}
            invalid={errors.documentNumber && touched.documentNumber}
            errorMessage={errors.documentNumber}
          >
            <Field
              type="text"
              autoComplete="off"
              name="documentNumber"
              placeholder={t('views.appsCrm.customerForm.form.documentNumber')}
              component={Input}
            />
          </FormItem>
        </div>
        <div className="col-span-1">
          <FormItem
            asterisk
            label={t('views.appsCrm.customerForm.form.issuedDate')}
            invalid={errors.issuedDate && touched.issuedDate}
            errorMessage={errors.issuedDate}
          >
            <Field name="issuedDate">
              {({field, form}) => (
                <DatePicker
                  placeholder={t('views.appsCrm.customerForm.form.issuedDate')}
                  field={field}
                  form={form}
                  value={field.value}
                  onChange={(date) => {
                    form.setFieldValue(field.issuedDate, date);
                  }}
                />
              )}
            </Field>
          </FormItem>
        </div>
        <div className="col-span-1">
          <FormItem
            label={t('views.appsCrm.customerForm.form.issuedPlace')}
            invalid={errors.issuedPlace && touched.issuedPlace}
            errorMessage={errors.issuedPlace}
          >
            <Field
              type="text"
              autoComplete="off"
              name="issuedPlace"
              placeholder={t('views.appsCrm.customerForm.form.issuedPlace')}
              component={Input}
            />
          </FormItem>
        </div>
        <div className="col-span-1">
          <FormItem
            label={t('views.appsCrm.customerForm.form.companyTaxCode')}
            invalid={errors.companyTaxCode && touched.companyTaxCode}
            errorMessage={errors.companyTaxCode}
          >
            <Field
              type="text"
              autoComplete="off"
              name="companyTaxCode"
              placeholder={t('views.appsCrm.customerForm.form.companyTaxCode')}
              component={Input}
            />
          </FormItem>
        </div>
        <div className="col-span-1">
          <FormItem
            label={t('views.appsCrm.customerForm.form.phoneNumber')}
            invalid={errors.phoneNumber && touched.phoneNumber}
            errorMessage={errors.phoneNumber}
          >
            <Field
              type="text"
              autoComplete="off"
              name="phoneNumber"
              placeholder={t('views.appsCrm.customerForm.form.phoneNumber')}
              component={Input}
            />
          </FormItem>
        </div>
        <div className="col-span-1">
          <FormItem
            label={t('views.appsCrm.customerForm.form.representative.fullName')}
            invalid={
              errors.representative?.fullName &&
              touched.representative?.fullName
            }
            errorMessage={errors.representative?.fullName}
          >
            <Field
              type="text"
              autoComplete="off"
              name="representative.fullName"
              placeholder={t(
                'views.appsCrm.customerForm.form.representative.fullName'
              )}
              component={Input}
            />
          </FormItem>
        </div>
        <div className="col-span-1">
          <FormItem
            label={t(
              'views.appsCrm.customerForm.form.representative.citizenIdentification'
            )}
            invalid={
              errors.representative?.citizenIdentification &&
              touched.representative?.citizenIdentification
            }
            errorMessage={errors.representative?.citizenIdentification}
          >
            <Field
              type="text"
              autoComplete="off"
              name="representative.citizenIdentification"
              placeholder={t(
                'views.appsCrm.customerForm.form.representative.citizenIdentification'
              )}
              component={Input}
            />
          </FormItem>
        </div>
        <div className="col-span-1">
          <FormItem
            label={t('views.appsCrm.customerForm.form.representative.position')}
            invalid={
              errors.representative?.position &&
              touched.representative?.position
            }
            errorMessage={errors.representative?.position}
          >
            <Field
              type="text"
              autoComplete="off"
              name="representative.position"
              placeholder={t(
                'views.appsCrm.customerForm.form.representative.position'
              )}
              component={Input}
            />
          </FormItem>
        </div>
        <div className="col-span-1">
          <FormItem
            label={t('views.appsCrm.customerForm.form.authorizedCapital')}
            invalid={errors.authorizedCapital && touched.authorizedCapital}
            errorMessage={errors.authorizedCapital}
          >
            <Field
              type="text"
              autoComplete="off"
              name="authorizedCapital"
              placeholder={t(
                'views.appsCrm.customerForm.form.authorizedCapital'
              )}
              component={Input}
            />
          </FormItem>
        </div>
        <div className="col-span-1">
          <FormItem
            label={t('views.appsCrm.customerForm.form.currency')}
            invalid={errors.currency && touched.currency}
            errorMessage={errors.currency}
          >
            <Field name="currency">
              {({field, form}) => (
                <Select
                  field={field}
                  form={form}
                  options={currencies}
                  value={currencies.filter(
                    (currency) => currency.value === values.currency
                  )}
                  onChange={(option) =>
                    form.setFieldValue(field.name, option.value)
                  }
                />
              )}
            </Field>
          </FormItem>
        </div>
      </div>
    </AdaptableCard>
  );
};

export default BasicInformationFields;
