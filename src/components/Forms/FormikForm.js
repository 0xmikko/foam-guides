/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router'

import { Formik } from 'formik/dist/index'
import * as yup from 'yup'
import formikRenderHOC from './FormRenderHOC'
import * as statuses from '../../store/utils/status'

const FormikForm = ({ fieldList, initialValues, onSubmit, submitLabel, submitDisabled }) => {
  const schemaPrep = {}
  const inputFieldsList = fieldList.filter(x => !x.readOnly)
  inputFieldsList.map(x => (schemaPrep[x.field] = x.validation))

  const schema = yup.object({ ...schemaPrep })
  return (
    <Formik
      validationSchema={schema}
      onSubmit={onSubmit}
      initialValues={initialValues }
      render={formikRenderHOC(inputFieldsList, submitLabel, submitDisabled)}
    />
  )
}


export default FormikForm
