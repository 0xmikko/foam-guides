/*
 *  FoamGuides - Best Local Guides service
 *  https://github.com/MikaelLazarev/foam-guides
 *
 *  Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';

import {Formik} from 'formik/dist/index';
import * as yup from 'yup';
import formikRenderHOC from './FormRenderHOC';

const FormikForm = ({
  fieldList,
  initialValues,
  onSubmit,
  submitLabel,
  submitDisabled,
}) => {
  const schemaPrep = {};
  const inputFieldsList = fieldList.filter(x => !x.readOnly);
  inputFieldsList.map(x => (schemaPrep[x.field] = x.validation));

  const schema = yup.object({...schemaPrep});
  return (
    <Formik
      validationSchema={schema}
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={formikRenderHOC(inputFieldsList, submitLabel, submitDisabled)}
    />
  );
};

export default FormikForm;
