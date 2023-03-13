import React from 'react';
import {AdaptableCard} from 'components/shared';
import {FormItem, Select} from 'components/ui';
import {Field} from 'formik';
import {currencies} from './BasicInformationFields';
import {useTranslation} from 'react-i18next';

export const sectors = [
  {label: 'Sector 1', value: 'Sector 1'},
  {label: 'Sector 2', value: 'Sector 2'},
];

export const businessTypes = [
  {label: 'Business type 1', value: 'Business type 1'},
  {label: 'Business type 2', value: 'Business type 2'},
];

export const level1BusinessGroups = [
  {label: 'Level_1 BG 1', value: 'Level_1 BG 1'},
  {label: 'Level_1 BG 2', value: 'Level_1 BG 2'},
];

export const level4BusinessGroups = [
  {label: 'Level_4 BG 1', value: 'Level_4 BG 1'},
  {label: 'Level_4 BG 2', value: 'Level_4 BG 2'},
];

export const institutionalUnitLevel3s = [
  {label: 'IU Level_3 1', value: 'IU Level_3 1'},
  {label: 'IU Level_3 2', value: 'IU Level_3 2'},
];

const ClassificationFields = (props) => {
  const {values, touched, errors} = props;

  const {t} = useTranslation();

  return (
    <AdaptableCard className="mb-4" divider isLastChild>
      <h5 className="mb-6">Classification</h5>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

export default ClassificationFields;
